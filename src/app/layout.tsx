import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: "400", subsets: ['devanagari'] })

export const metadata: Metadata = {
  title: 'ExploreApp',
  description: 'explorando a natureza com o exploreapp',
  manifest: '/manifest.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
