/** Run async tasks in fixed-size batches to avoid upstream connect timeouts under burst load. */
export async function runInBatches(
  tasks: ReadonlyArray<() => Promise<unknown>>,
  batchSize: number,
): Promise<unknown[]> {
  if (batchSize < 1) {
    throw new Error('batchSize must be at least 1');
  }

  const results: unknown[] = [];

  for (let index = 0; index < tasks.length; index += batchSize) {
    const batch = tasks.slice(index, index + batchSize);
    const batchResults = await Promise.all(batch.map((task) => task()));
    results.push(...batchResults);
  }

  return results;
}

export function getStrapiFetchConcurrency(): number {
  const raw = process.env.STRAPI_FETCH_CONCURRENCY?.trim();
  if (raw) {
    const parsed = Number.parseInt(raw, 10);
    if (Number.isFinite(parsed) && parsed >= 1) return parsed;
  }
  return process.env.NODE_ENV === 'development' ? 3 : 6;
}
