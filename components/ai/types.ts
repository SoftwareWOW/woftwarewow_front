export type ChatRole = 'user' | 'assistant'

export type ChatMessage = {
  id: string
  role: ChatRole
  content: string
  via?: 'text' | 'voice'
}

export type ChatStatus = 'idle' | 'loading' | 'streaming' | 'error'

export type SendMessageOptions = {
  historyOverride?: ChatMessage[]
  mode?: 'text' | 'voice'
  signal?: AbortSignal
  onDelta?: (delta: string) => void
}
