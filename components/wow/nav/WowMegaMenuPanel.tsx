'use client'

import { useEffect, useRef, useState } from 'react'
import type { NavigationData, NavigationMenuItem } from './navigation-types'
import { getNavCardImage } from './nav-assets'
import WowDetailCard from './WowDetailCard'
import { WowDivisionItem, WowMenuItem } from './WowMenuItem'

type WowMegaMenuPanelProps = {
  item: NavigationMenuItem
  detailPanels: NavigationData['detailPanels']
  noOuterShell?: boolean
}

export default function WowMegaMenuPanel({
  item,
  detailPanels,
  noOuterShell = false,
}: WowMegaMenuPanelProps) {
  const { desktop } = item
  const scrollRef = useRef<HTMLDivElement>(null)

  const [selectedId, setSelectedId] = useState(desktop.defaultSelection)

  useEffect(() => {
    setSelectedId(desktop.defaultSelection)
  }, [item.id, desktop.defaultSelection])

  const detailPanel =
    (selectedId && detailPanels[selectedId as keyof typeof detailPanels]) ?? detailPanels.default

  const detailImageSrc = getNavCardImage(selectedId ?? '')

  const selectItem = (id: string) => setSelectedId(id)

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = scrollRef.current
    if (!container) return

    container.scrollTop += event.deltaY
  }

  return (
    <div
      ref={scrollRef}
      role="region"
      aria-label={item.label}
      onWheel={handleWheel}
      className={
        noOuterShell
          ? 'h-full max-h-[calc(100vh-120px)] max-w-full overflow-x-auto overflow-y-auto overscroll-contain'
          : 'animate-mega-menu-in mx-auto mt-2 max-h-[calc(100vh-120px)] max-w-full overflow-x-auto overflow-y-auto overscroll-contain rounded-radius-sm bg-white 2xl:max-w-[1370px] dark:bg-dark'
      }
      style={{
        padding: `${desktop.paddingY}px clamp(16px, 3vw, ${desktop.paddingX}px)`,
      }}
    >
      <div className="flex w-max min-w-full items-start justify-between gap-4 lg:gap-6 2xl:w-full 2xl:min-w-0 2xl:gap-0">
        {desktop.columns.map((column) => (
          <div
            key={column.id}
            className="flex w-[180px] shrink-0 flex-col gap-[7px] lg:w-[220px] 2xl:w-[260px]"
          >
            {column.title ? (
              <p className="pl-[10px] font-outfit text-base font-light leading-none text-black/50 dark:text-dark-100">
                {column.title}
              </p>
            ) : (
              <div className="h-4" aria-hidden />
            )}

            <ul className="flex w-full flex-col gap-[2px]">
              {column.items.map((entry) => (
                <li key={entry.id}>
                  {entry.type === 'division' ? (
                    <WowDivisionItem
                      divisionId={entry.id}
                      href={entry.href}
                      active={selectedId === entry.id}
                      onClick={() => selectItem(entry.id)}
                      onMouseEnter={() => selectItem(entry.id)}
                    />
                  ) : (
                    <WowMenuItem
                      iconId={entry.id}
                      label={entry.label}
                      description={'description' in entry ? entry.description : undefined}
                      href={entry.href}
                      active={selectedId === entry.id}
                      showChevron
                      multilineDescription={
                        'multilineDescription' in entry
                          ? Boolean(entry.multilineDescription)
                          : false
                      }
                      tall={entry.id === 'helpSupport'}
                      onClick={() => selectItem(entry.id)}
                      onMouseEnter={() => selectItem(entry.id)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {detailPanel && (
          <WowDetailCard
            {...detailPanel}
            contentKey={selectedId ?? 'default'}
            imageSrc={detailImageSrc}
          />
        )}
      </div>
    </div>
  )
}