import type enCA from '@/messages/en-CA.json'

export type Dictionary = typeof enCA

export type NavigationItem = Dictionary['navigation']['items'][number]

export type FooterSection = Dictionary['footer']['sections'][number]

export type LocaleOption = Dictionary['languageSwitcher']['options'][number]
