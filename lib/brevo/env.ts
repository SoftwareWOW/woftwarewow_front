export function getRequiredEnv(name: string): string | null {
  const value = process.env[name]?.trim()
  return value || null
}

export function getOptionalEnv(name: string): string | null {
  const value = process.env[name]?.trim()
  return value || null
}

export function getRequiredIntEnv(name: string): number | null {
  const raw = getRequiredEnv(name)
  if (!raw) return null
  const parsed = Number.parseInt(raw, 10)
  return Number.isFinite(parsed) ? parsed : null
}
