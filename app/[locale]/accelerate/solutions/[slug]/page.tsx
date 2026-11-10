import { notFound } from 'next/navigation'

/** Dedicated static routes exist per solution slug; unknown slugs 404. */
export default function WowAccelerateSolutionFallback() {
  notFound()
}
