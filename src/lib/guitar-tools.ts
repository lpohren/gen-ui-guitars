import { toolDefinition } from '@tanstack/ai'
import { z } from 'zod'
import guitars from '@/data/example-guitars'

// Tool definition for getting guitars
export const getGuitarsToolDef = toolDefinition({
  name: 'getGuitars',
  description: 'Get all products from the database',
  inputSchema: z.object({}),
  outputSchema: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      image: z.string(),
      description: z.string(),
      shortDescription: z.string(),
      price: z.number(),
    }),
  ),
})

// Server implementation
export const getGuitars = getGuitarsToolDef.server(() => guitars)

// Tool definition for guitar recommendation
export const recommendGuitarToolDef = toolDefinition({
  name: 'recommendGuitar',
  description:
    'REQUIRED tool to display a guitar to the user. This tool MUST be used whenever the user asks to view, see, show, display, or recommend a guitar - do NOT describe guitars yourself. This displays the guitar in a special appealing format with a buy button. Use this tool for ANY request to view or see a specific guitar.',
  inputSchema: z.object({
    id: z
      .union([z.string(), z.number()])
      .describe(
        'The ID of the guitar to display (from the getGuitars results)',
      ),
  }),
  outputSchema: z.object({
    id: z.number(),
  }),
})

// Tool definition for recommending multiple guitars
export const recommendGuitarsToolDef = toolDefinition({
  name: 'recommendGuitars',
  description:
    'REQUIRED tool to display multiple guitars to the user. This tool MUST be used whenever the user asks to view, see, show, display, or recommend multiple guitars - do NOT describe guitars yourself. This displays the guitars in a special appealing format with buy buttons. Use this tool for ANY request to view or see multiple guitars.',
  inputSchema: z.object({
    ids: z
      .array(z.union([z.string(), z.number()]))
      .describe('An array of guitar IDs to display (from the getGuitars results). Can be any number of guitars.'),
  }),
  outputSchema: z.object({
    ids: z.array(z.number()),
  }),
})

// Tool definition for comparing two guitars
export const compareGuitarsToolDef = toolDefinition({
  name: 'compareGuitars',
  description:
    'REQUIRED tool to compare two guitars side by side. This tool MUST be used whenever the user asks to compare guitars - do NOT describe the comparison yourself. This displays the guitars in a special side-by-side comparison format with buy buttons. Use this tool for ANY request to compare two guitars.',
  inputSchema: z.object({
    id1: z
      .union([z.string(), z.number()])
      .describe('The ID of the first guitar to compare (from the getGuitars results)'),
    id2: z
      .union([z.string(), z.number()])
      .describe('The ID of the second guitar to compare (from the getGuitars results)'),
  }),
  outputSchema: z.object({
    id1: z.number(),
    id2: z.number(),
  }),
})
