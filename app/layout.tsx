import type { Metadata } from 'next'
import { inter } from '@/fonts'
import './globals.css'

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
      <body className={inter.className}>
        <div className="main-background-colour">{children}</div>
      </body>
    </html>
  )
}
