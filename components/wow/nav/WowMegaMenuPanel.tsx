'use client'

import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'next-themes'
import type { NavigationData, NavigationMenuItem } from './navigation-types'
import { divisionIds, divisionProfilePictures } from './nav-brand-assets'
import WowDetailCard from './WowDetailCard'
import { WowDivisionItem, WowMenuItem } from './WowMenuItem'

type WowMegaMenuPanelProps = {
  item: NavigationMenuItem
  detailPanels: NavigationData['detailPanels']
  onNavigate?: () => void
}

export default function WowMegaMenuPanel({ item, detailPanels, onNavigate }: WowMegaMenuPanelProps) {
  const { desktop } = item
  const allItems = useMemo(() => desktop.columns.flatMap((column) => column.items), [desktop.columns])
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const [selectedId, setSelectedId] = useState(desktop.defaultSelection)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setSelectedId(desktop.defaultSelection)
  }, [item.id, desktop.defaultSelection])

  const selectedItem = allItems.find((entry) => entry.id === selectedId) ?? allItems[0]
  const detailPanel =
    (selectedId && detailPanels[selectedId as keyof typeof detailPanels]) ??
    detailPanels.default

  const isDark = mounted && resolvedTheme === 'dark'
  const profilePictures = isDark ? divisionProfilePictures.dark : divisionProfilePictures.light
  const detailImageSrc =
    selectedId && divisionIds.has(selectedId)
      ? profilePictures[selectedId as keyof typeof profilePictures]
      : undefined

  const selectItem = (id: string) => setSelectedId(id)

  return (
    <div
      role="region"
      aria-label={item.label}
      className="animate-mega-menu-in mx-auto mt-2 max-w-full overflow-x-auto rounded-[10px] bg-white 2xl:max-w-[1370px] dark:bg-dark-200"
      style={{
        padding: `${desktop.paddingY}px clamp(24px, 4vw, ${desktop.paddingX}px)`,
      }}>
      {/* Figma: 3 direct columns — link col 1, link col 2, detail card — with justify-between */}
      <div className="flex min-w-[946px] items-start justify-between gap-6 2xl:min-w-0 2xl:gap-0">
        {desktop.columns.map((column) => (
          <div key={column.id} className="flex w-[220px] shrink-0 flex-col gap-[7px] 2xl:w-[260px]">
            {column.title ? (
              <p className="pl-[10px] text-base font-light leading-none text-[#838383]">{column.title}</p>
            ) : (
              <div className="h-4" aria-hidden />
            )}

            <ul className="flex w-full flex-col gap-[3px]">
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
                        'multilineDescription' in entry ? Boolean(entry.multilineDescription) : false
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
            imageSrc={detailImageSrc}
            href={selectedItem?.href}
            onNavigate={onNavigate}
          />
        )}
      </div>
    </div>
  )
}
