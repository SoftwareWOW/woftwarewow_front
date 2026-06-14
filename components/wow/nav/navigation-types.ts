import type { Dictionary } from '@/i18n/types'

export type NavigationData = Dictionary['navigation']
export type NavigationMenuItem = NavigationData['items'][number]
export type NavigationDetailPanel = NavigationData['detailPanels']['default']
export type NavigationColumn = NavigationMenuItem['desktop']['columns'][number]
export type NavigationColumnItem = NavigationColumn['items'][number]
export type NavigationMobilePage = NavigationMenuItem['mobile']['pages'][number]
export type NavigationMobileItem = NavigationMobilePage['items'][number]
