import BuiltToPerform from '@/app/[locale]/packages/website-growth-engine/_components/BuiltToPerform'
import { WEBSITES_BUILT_TO_PERFORM } from './websites-content'

/** Uses BuiltToPerform as-is with static websites copy (no changes to the package component). */
export default function WebsitesBuiltToPerformSection() {
  const content = WEBSITES_BUILT_TO_PERFORM

  return (
    <BuiltToPerform
      eyebrow={content.eyebrow}
      title={content.title}
      accentTitle={content.accentTitle}
      description={content.description}
      items={[...content.items]}
    />
  )
}
