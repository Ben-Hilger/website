import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './hilger.css'

import Navigation from './components/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'Ben Hilger',
       description: 'Portfolio Website',
}

export default function RootLayout({
        children,
        }: {
children: React.ReactNode
}) {
    return (
            <html lang="en">
                <body className={inter.className}>
                    <Navigation />
                    <div className="wrapper">{children}</div>
                </body>
            </html>
           )
}
