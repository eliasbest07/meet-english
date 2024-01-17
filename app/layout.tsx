import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meet English',
  description: 'Clases de Ingles todo los dias',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        
      <body  style={{ overflow: 'hidden', overflowY: 'hidden' }} className={inter.className}>{children}</body>
    </html>
  )
}
