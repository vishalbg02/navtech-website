import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="font-sans">
        <body className="min-h-screen bg-gray-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    )
}
