import getMarkDownData from '@/utils/GetMarkDownData'
import SoftwareWoWProjectsClient, { type SoftwareWoWProject } from './SoftwareWoWProjectsClient'

const INITIAL_VISIBLE_COUNT = 1

const SoftwareWoWProjects = () => {
  const caseStudies = getMarkDownData('data/management-consulting/project') as SoftwareWoWProject[]

  return (
    <SoftwareWoWProjectsClient caseStudies={caseStudies} initialVisibleCount={INITIAL_VISIBLE_COUNT} />
  )
}

export default SoftwareWoWProjects
