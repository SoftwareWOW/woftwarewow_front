'use client'

import { useEffect, useState } from 'react'
import type { Dictionary } from '@/i18n/types'
import type { NavigationMenuItem } from './navigation-types'
import { WowDivisionItem, WowMenuItem } from './WowMenuItem'

type WowMobileMenuSheetProps = {
  item: NavigationMenuItem | null
  navbar: Dictionary['navbar']
  onClose: () => void
}

export default function WowMobileMenuSheet({ item, navbar, onClose }: WowMobileMenuSheetProps) {
  const [activePageId, setActivePageId] = useState<string | null>(null)

  useEffect(() => {
    if (!item) return
    setActivePageId(item.mobile.pages[0]?.id ?? null)
  }, [item])

  useEffect(() => {
    if (!item) return

    const previousOverflow = document.body.style.overflow
    const previousOverflowX = document.body.style.overflowX

    document.body.style.overflow = 'hidden'
    document.body.style.overflowX = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.overflowX = previousOverflowX
      document.removeEventListener('keydown', handleEscape)
    }
  }, [item, onClose])

  if (!item) return null

  const activePage = item.mobile.pages.find((page) => page.id === activePageId) ?? item.mobile.pages[0]
  const hasMultiplePages = item.mobile.pages.length > 1

  return (
    <div className="fixed inset-0 z-[1001] overflow-hidden md:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label={navbar.closeMenu}
        onClick={onClose}
      />

      <div className="absolute bottom-[calc(86px+env(safe-area-inset-bottom))] left-4 right-4 mx-auto w-auto max-w-[390px] animate-mobile-sheet-in overflow-hidden rounded-[5px] bg-white p-[10px] shadow-nav dark:bg-dark-200 dark:shadow-none">
        <div className="flex max-h-[min(461px,calc(100dvh-180px))] min-w-0 flex-col overflow-hidden">
          <div className="shrink-0 rounded-[3px] bg-secondary p-[10px] dark:bg-black">
            <div className="flex items-center justify-center px-5 py-[15px]">
              <p className="truncate text-base font-light leading-none text-white">
                {activePage?.title ?? item.label}
              </p>
            </div>
          </div>

          {hasMultiplePages && (
            <div className="mt-[10px] flex shrink-0 gap-[3px] overflow-x-auto overscroll-x-contain">
              {item.mobile.pages.map((page) => {
                const isActive = page.id === activePage?.id

                return (
                  <button
                    key={page.id}
                    type="button"
                    onClick={() => setActivePageId(page.id)}
                    className={`h-[46px] shrink-0 rounded-[3px] px-[10px] text-xs font-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                      isActive
                        ? 'bg-black/[0.06] text-black dark:bg-white/[0.08] dark:text-backgroundBody'
                        : 'bg-black/[0.02] text-black/60 hover:bg-black/[0.04] dark:bg-white/[0.04] dark:text-dark-100'
                    }`}
                  >
                    {page.title}
                  </button>
                )
              })}
            </div>
          )}

          <div className="mt-[10px] min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
            <ul className="flex min-w-0 flex-col gap-[3px]">
              {activePage?.items.map((entry) => (
                <li key={entry.id} className="min-w-0">
                  {'type' in entry && entry.type === 'division' ? (
                    <WowDivisionItem
                      divisionId={entry.id}
                      href={entry.href}
                      onClick={onClose}
                      variant="mobile"
                    />
                  ) : (
                    <WowMenuItem
                      iconId={entry.id}
                      label={entry.label}
                      description={'description' in entry ? entry.description : undefined}
                      href={entry.href}
                      onClick={onClose}
                      showChevron
                      multilineDescription={
                        'multilineDescription' in entry ? Boolean(entry.multilineDescription) : false
                      }
                      tall={entry.id === 'helpSupport'}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}



// 'use client'

// import { useEffect, useState } from 'react'
// import type { Dictionary } from '@/i18n/types'
// import type { NavigationMenuItem } from './navigation-types'
// import { mobileNavShellClass } from './mobile-nav-shell'
// import { WowDivisionItem, WowMenuItem } from './WowMenuItem'

// type WowMobileMenuSheetProps = {
//   item: NavigationMenuItem | null
//   navbar: Dictionary['navbar']
//   onClose: () => void
// }

// export default function WowMobileMenuSheet({ item, navbar, onClose }: WowMobileMenuSheetProps) {
//   const [activePageId, setActivePageId] = useState<string | null>(null)

//   useEffect(() => {
//     if (!item) return
//     setActivePageId(item.mobile.pages[0]?.id ?? null)
//   }, [item])

//   useEffect(() => {
//     if (!item) return

//     const previousOverflow = document.body.style.overflow
//     const previousOverflowX = document.body.style.overflowX
//     document.body.style.overflow = 'hidden'
//     document.body.style.overflowX = 'hidden'

//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') onClose()
//     }

//     document.addEventListener('keydown', handleEscape)
//     return () => {
//       document.body.style.overflow = previousOverflow
//       document.body.style.overflowX = previousOverflowX
//       document.removeEventListener('keydown', handleEscape)
//     }
//   }, [item, onClose])

//   if (!item) return null

//   const activePage = item.mobile.pages.find((page) => page.id === activePageId) ?? item.mobile.pages[0]
//   const hasMultiplePages = item.mobile.pages.length > 1

//   return (
//     <div className="fixed inset-0 z-[1001] overflow-hidden md:hidden">
//       <button
//         type="button"
//         className="absolute inset-0 bg-black/40"
//         aria-label={navbar.closeMenu}
//         onClick={onClose}
//       />

//       <div
//         className={`absolute bottom-[calc(86px+env(safe-area-inset-bottom))] flex animate-mobile-sheet-in flex-col overflow-hidden rounded-[5px] bg-white p-[10px] shadow-nav dark:bg-dark-200 dark:shadow-none ${mobileNavShellClass}`}>
//         <div className="flex max-h-[min(461px,calc(100dvh-180px))] flex-col overflow-hidden">
//           <div className="shrink-0 rounded-[3px] bg-secondary p-[10px] dark:bg-black">
//             <div className="flex items-center justify-center px-5 py-[15px]">
//               <p className="text-base font-light leading-none text-white">{activePage?.title ?? item.label}</p>
//             </div>
//           </div>

//           {hasMultiplePages && (
//             <div className="mt-[10px] flex shrink-0 gap-[3px] overflow-x-auto overscroll-x-contain">
//               {item.mobile.pages.map((page) => {
//                 const isActive = page.id === activePage?.id

//                 return (
//                   <button
//                     key={page.id}
//                     type="button"
//                     onClick={() => setActivePageId(page.id)}
//                     className={`h-[46px] shrink-0 rounded-[3px] px-[10px] text-xs font-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
//                       isActive
//                         ? 'bg-black/[0.06] text-black dark:bg-white/[0.08] dark:text-backgroundBody'
//                         : 'bg-black/[0.02] text-black/60 hover:bg-black/[0.04] dark:bg-white/[0.04] dark:text-dark-100'
//                     }`}>
//                     {page.title}
//                   </button>
//                 )
//               })}
//             </div>
//           )}

//           <div className="mt-[10px] min-w-0 flex-1 overflow-y-auto overflow-x-hidden overscroll-contain">
//             <ul className="flex flex-col gap-[3px]">
//               {activePage?.items.map((entry) => (
//                 <li key={entry.id} className="min-w-0">
//                   {'type' in entry && entry.type === 'division' ? (
//                     <WowDivisionItem
//                       divisionId={entry.id}
//                       href={entry.href}
//                       onClick={onClose}
//                       variant="mobile"
//                     />
//                   ) : (
//                     <WowMenuItem
//                       iconId={entry.id}
//                       label={entry.label}
//                       description={'description' in entry ? entry.description : undefined}
//                       href={entry.href}
//                       onClick={onClose}
//                       showChevron
//                       multilineDescription={'multilineDescription' in entry ? Boolean(entry.multilineDescription) : false}
//                       tall={entry.id === 'helpSupport'}
//                     />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
