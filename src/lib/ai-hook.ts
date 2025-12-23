import {
  fetchServerSentEvents,
  useChat,
  createChatClientOptions,
} from '@tanstack/ai-react'
import type { InferChatMessages } from '@tanstack/ai-react'
import { clientTools } from '@tanstack/ai-client'

import { recommendGuitarToolDef, recommendGuitarsToolDef, compareGuitarsToolDef } from '@/lib/guitar-tools'

const recommendGuitarToolClient = recommendGuitarToolDef.client((args: any) => {
  const { id } = args as { id: string | number }
  return { id: +id }
})

const recommendGuitarsToolClient = recommendGuitarsToolDef.client((args: any) => {
  const { ids } = args as { ids: Array<string | number> }
  return { ids: ids.map(id => +id) }
})

const compareGuitarsToolClient = compareGuitarsToolDef.client((args: any) => {
  const { id1, id2 } = args as { id1: string | number; id2: string | number }
  return { id1: +id1, id2: +id2 }
})

const chatOptions = createChatClientOptions({
  connection: fetchServerSentEvents('/demo/api/guitarchat'),
  tools: clientTools(recommendGuitarToolClient, recommendGuitarsToolClient, compareGuitarsToolClient),
})

export type ChatMessages = InferChatMessages<typeof chatOptions>

export const useGuitarRecommendationChat = () => useChat(chatOptions)
