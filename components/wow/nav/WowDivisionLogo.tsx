'use client'

import Image from 'next/image'
import { navDivisionAssets } from './nav-assets'

type WowDivisionLogoProps = {
  divisionId: string
}

export function WowDivisionLogo({ divisionId }: WowDivisionLogoProps) {
  const layers = navDivisionAssets[divisionId]

  if (!layers?.length) {
    return null
  }

  if (divisionId === 'softwareWow') {
    return (
      <span className="flex h-[15px] items-center gap-[1px]" aria-hidden>
        <Image src={layers[0]} alt="" width={88} height={16} className="h-[15.79px] w-auto object-contain" />
        <span className="relative inline-grid shrink-0">
          <Image src={layers[1]} alt="" width={62} height={16} className="col-start-1 row-start-1 h-[15.58px] w-auto object-contain" />
          <Image src={layers[2]} alt="" width={62} height={16} className="col-start-1 row-start-1 h-[15.58px] w-auto object-contain" />
        </span>
      </span>
    )
  }

  const [wowA, wowB, label, extra] = layers

  return (
    <span className="flex h-[15px] items-center gap-[5px]" aria-hidden>
      <span className="relative inline-grid shrink-0">
        <Image src={wowA} alt="" width={55} height={15} className="col-start-1 row-start-1 h-[15px] w-auto object-contain" />
        {wowB && (
          <Image src={wowB} alt="" width={55} height={15} className="col-start-1 row-start-1 h-[15px] w-auto object-contain" />
        )}
      </span>
      {label && <Image src={label} alt="" width={100} height={15} className="h-[15px] w-auto object-contain" />}
      {extra && <Image src={extra} alt="" width={42} height={15} className="h-[15px] w-auto object-contain" />}
    </span>
  )
}
