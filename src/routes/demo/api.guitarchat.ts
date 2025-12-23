import { createFileRoute } from '@tanstack/react-router'
import { chat, maxIterations, toStreamResponse } from '@tanstack/ai'
import { anthropicText } from '@tanstack/ai-anthropic'
import { openaiText } from '@tanstack/ai-openai'
import { geminiText } from '@tanstack/ai-gemini'
import { ollamaText } from '@tanstack/ai-ollama'

import { getGuitars, recommendGuitarToolDef, recommendGuitarsToolDef, compareGuitarsToolDef } from '@/lib/guitar-tools'
import type { Provider } from '@/lib/model-selection'

const SYSTEM_PROMPT = `You are a helpful assistant for a store that sells guitars.

CRITICAL INSTRUCTIONS - YOU MUST FOLLOW THIS EXACT WORKFLOW:

When a user asks to view, see, show, display, or recommend a guitar or guitars:
1. FIRST: Use the getGuitars tool (no parameters needed) to see available guitars
2. SECOND: Use the recommendGuitar tool (for one guitar) or recommendGuitars tool (for multiple guitars) with the ID(s) of the guitar(s) the user wants to view
3. NEVER describe or list guitars directly - ALWAYS use the recommendGuitar or recommendGuitars tools

When a user asks to compare two guitars:
1. FIRST: Use the getGuitars tool (no parameters needed) to see available guitars
2. SECOND: Use the compareGuitars tool with the IDs of the two guitars to compare
3. NEVER describe the comparison yourself - ALWAYS use the compareGuitars tool

IMPORTANT:
- The recommendGuitar and recommendGuitars tools display guitars in a special, appealing format
- The compareGuitars tool displays two guitars side by side for easy comparison
- You MUST use these tools for ANY request to view, see, show, display, recommend, or compare guitars
- Use recommendGuitar for single guitar requests (e.g., "show me guitar #1", "view the TanStack Ukulele")
- Use recommendGuitars for multiple guitar requests (e.g., "show me guitars", "view some guitars", "display a few options")
- Use compareGuitars for comparison requests (e.g., "compare guitar 1 and 2", "show me the difference between these guitars")
- ONLY show guitars from our inventory (use getGuitars first)
- These tools have buy buttons - this is how customers purchase
- Do NOT describe the guitars or comparisons yourself - let the tools display them
`

export const Route = createFileRoute('/demo/api/guitarchat')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Capture request signal before reading body (it may be aborted after body is consumed)
        const requestSignal = request.signal

        // If request is already aborted, return early
        if (requestSignal.aborted) {
          return new Response(null, { status: 499 }) // 499 = Client Closed Request
        }

        const abortController = new AbortController()

        try {
          const body = await request.json()
          const { messages } = body
          const data = body.data || {}
          const provider: Provider = data.provider || 'anthropic'
          const model: string = data.model || 'claude-haiku-4-5'

          // Adapter factory pattern for multi-vendor support
          const adapterConfig = {
            anthropic: () =>
              anthropicText((model || 'claude-haiku-4-5') as any),
            openai: () => openaiText((model || 'gpt-4o') as any),
            gemini: () => geminiText((model || 'gemini-2.0-flash-exp') as any),
            ollama: () => ollamaText((model || 'mistral:7b') as any),
          }

          const adapter = adapterConfig[provider]()

          const stream = chat({
            adapter,
            tools: [
              getGuitars, // Server tool
              recommendGuitarToolDef, // No server execute - client will handle
              recommendGuitarsToolDef, // No server execute - client will handle
              compareGuitarsToolDef, // No server execute - client will handle
            ],
            systemPrompts: [SYSTEM_PROMPT],
            agentLoopStrategy: maxIterations(5),
            messages,
            abortController,
          })

          return toStreamResponse(stream, { abortController })
        } catch (error: any) {
          // If request was aborted, return early (don't send error response)
          if (error.name === 'AbortError' || abortController.signal.aborted) {
            return new Response(null, { status: 499 }) // 499 = Client Closed Request
          }
          return new Response(
            JSON.stringify({ error: 'Failed to process chat request' }),
            {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            },
          )
        }
      },
    },
  },
})
