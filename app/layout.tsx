"use client";

import '@/lib/globals.css'
import type { Metadata } from 'next'
import { Martian_Mono } from 'next/font/google'

import HeaderNav from './components/header'


const martian = Martian_Mono({ subsets: ['latin'] })

const metadata: Metadata = {
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
      <body className={martian.className}>
        
        <HeaderNav />
        {children}
        
      </body>
    </html>
  )
}
