"use client"

import Navbar from "@/components/navbar"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-100">
        <Navbar />
        <main>{children}</main>
        </body>
        </html>
    )
}