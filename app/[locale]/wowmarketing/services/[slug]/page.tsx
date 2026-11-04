import { notFound } from 'next/navigation'

/** Dedicated static routes exist per service slug; unknown slugs 404. */
export default function WowMarketingServiceFallback() {
  notFound()
}
