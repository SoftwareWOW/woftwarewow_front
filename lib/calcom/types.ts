export type CalSlot = {
  start: string
  end?: string
}

export type CalSlotsByDate = Record<string, CalSlot[]>
