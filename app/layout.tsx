import './globals.css'
import type { Metadata } from 'next'
import { Martian_Mono } from 'next/font/google'


const martian = Martian_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Radsmth, Inc.',
  description: 'We make rad brands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={martian.className}>{children}</body>
    </html>
  )
}
