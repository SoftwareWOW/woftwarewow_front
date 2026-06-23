import type enUS from '@/messages/en-US.json'

export type Dictionary = typeof enUS

export type NavigationItem = Dictionary['navigation']['items'][number]

export type FooterSection = Dictionary['footer']['sections'][number]

export type LocaleOption = Dictionary['languageSwitcher']['options'][number]
