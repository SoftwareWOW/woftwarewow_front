import ProcessV4 from '@/components/homepage-07/ProcessV4'

const steps = [
  {
    number: '01',
    title: 'Attract',
    description: 'Get discovered by the right audience.',
  },
  {
    number: '02',
    title: 'Engage',
    description: 'Give them a reason to explore and trust the business.',
  },
  {
    number: '03',
    title: 'Convert',
    description: 'Turn attention into enquiries, leads or purchases.',
  },
  {
    number: '04',
    title: 'Nurture',
    description: 'Keep promising opportunities moving.',
  },
  {
    number: '05',
    title: 'Close',
    description: 'Turn qualified opportunities into customers.',
  },
  {
    number: '06',
    title: 'Improve',
    description: 'Use what you learn to strengthen the next cycle.',
  },
]

/** Home-07 — ProcessV4 imported from origin. */
const ConnectedGrowth = () => {
  return (
    <ProcessV4
      badge="Connected Growth"
      title="From first click to closed customer."
      description="Growth works better when marketing, conversion and sales aren't treated as separate activities."
      steps={steps}
    />
  )
}

export default ConnectedGrowth
