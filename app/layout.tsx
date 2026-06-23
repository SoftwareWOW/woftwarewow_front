import { ReactNode } from 'react'
import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return children
}
