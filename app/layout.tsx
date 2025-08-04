import type React from "react"
import type { Metadata } from "next"
import { Red_Hat_Text } from "next/font/google"
import "./globals.css"

const redHatText = Red_Hat_Text({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Product List with Cart",
  description: "A beautiful dessert shop with cart functionality",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={redHatText.className}>{children}</body>
    </html>
  )
}
