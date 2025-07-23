"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer";
import type React from "react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-100">
        <Navbar />
        <main>{children}</main>
        </body>
        <Footer />
        </html>
    )
}