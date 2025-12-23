import type { Provider } from './model-selection'

export interface VendorCapabilities {
  chat: boolean
  structured: boolean
  image: boolean
  tts: boolean
}

export const VENDOR_CAPABILITIES: Record<Provider, VendorCapabilities> = {
  openai: {
    chat: true,
    structured: true,
    image: true,
    tts: true,
  },
  anthropic: {
    chat: true,
    structured: true,
    image: false,
    tts: false,
  },
  gemini: {
    chat: true,
    structured: true,
    image: false,
    tts: false,
  },
  ollama: {
    chat: true,
    structured: true,
    image: false,
    tts: false,
  },
}

export function hasCapability(
  provider: Provider,
  capability: keyof VendorCapabilities,
): boolean {
  return VENDOR_CAPABILITIES[provider]?.[capability] ?? false
}

export function getProvidersWithCapability(
  capability: keyof VendorCapabilities,
): Provider[] {
  return (Object.keys(VENDOR_CAPABILITIES) as Provider[]).filter(
    (provider) => VENDOR_CAPABILITIES[provider][capability],
  )
}
