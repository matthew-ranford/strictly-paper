import type { Metadata } from 'next'
import { inter } from '@/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Strictly Paper | Wallpapering Services',
  description:
    'Wallpapering services located in the Kapiti Region, working in the greater Wellington region',
  keywords: [
    'wallpaper',
    'wallpapering',
    'wall coverings',
    'murals',
    'feature walls',
    'interior design',
    'residential wallpaper',
    'commercial wallpaper',
    'wellington',
    'greater wellington region',
    'kapiti',
  ],
  openGraph: {
    title: 'Strictly Paper | Wallpapering Services',
    description:
      'Wallpapering services located in the Kapiti Region, working in the greater Wellington region',
    url: 'https://www.strictly-paper.nz',
    type: 'website',
    siteName: 'Strictly Paper',
    locale: 'en_NZ',
    images: [
      {
        url: 'https://www.strictly-paper.nz/images/gallery-9.png',
        width: 800,
        height: 500,
        alt: 'Strictly Paper Wallpapering Services',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="images/favicon.png"
        />
      </head>
      <body className={inter.className}>
        <div className="main-background-colour">{children}</div>
      </body>
    </html>
  )
}
