import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GoDaddy - Domain Names, Websites, Hosting & Online Marketing Tools",
  description:
    "Get your business online with GoDaddy. Find the perfect domain name, build your website, and get reliable web hosting. Start your online journey today!",
  keywords: "domain names, web hosting, website builder, SSL certificates, business email, online business",
  authors: [{ name: "GoDaddy" }],
  openGraph: {
    title: "GoDaddy - Your Online Journey Starts Here",
    description: "Find your perfect domain and bring your business online with ease",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
