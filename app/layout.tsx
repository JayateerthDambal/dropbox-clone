import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from "@clerk/nextjs";
const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "500", "700"] })

export const metadata: Metadata = {
  title: 'Dropbox Clone',
  description: 'Developed by Jayateerth Dambal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
