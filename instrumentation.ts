export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const dns = await import('node:dns')
    dns.setDefaultResultOrder('ipv4first')

    const connectTimeoutMs = Number(process.env.STRAPI_CONNECT_TIMEOUT_MS ?? 30_000)
    const { Agent, setGlobalDispatcher } = await import('undici')
    setGlobalDispatcher(
      new Agent({
        connect: { timeout: connectTimeoutMs },
        connections: Number(process.env.STRAPI_MAX_CONNECTIONS ?? 8),
        pipelining: 1,
      }),
    )
  }
}
