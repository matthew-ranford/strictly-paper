import type { Metadata } from 'next'
import { Titan_One } from 'next/font/google'
import './globals.css'

const titan = Titan_One({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Strictly Paper | Wallpapering Services',
  description:
    'Wallpapering services located in the Kapiti Region, works Nationwide',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={titan.className}>{children}</body>
    </html>
  )
}
