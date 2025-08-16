import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "NavTech - Innovating with LiFi & Wireless Technology",
  description: "Transforming the future of connectivity with cutting-edge LiFi and wireless solutions"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Privacy Consent by TermsFeed */}
        <script
          type="text/javascript"
          src="https://cdn.termsfeedtag.com/plugins/pc/v1/55298c1ae6ab46629d01b0da3ee1164e/plugin.js"
          async
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
