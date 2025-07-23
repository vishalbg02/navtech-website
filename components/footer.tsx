"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

// Reach Us Section
function ReachUsSection() {
    return (
        <div className="pr-18">
            <h3 className="text-base font-normal mb-8 text-[#95C149]">Reach us</h3>
            <div className="space-y-6">
                <div className="flex items-start space-x-3 text-sm text-white">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>+91 79484 21010</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-white">
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>info@navtechno.in</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-white leading-relaxed">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>
                        C5 The First Besides ITC Narmada,
                        <br />
                        near Keshav Baug, Ahmedabad,
                        <br />
                        Gujarat 380015
                    </span>
                </div>
            </div>
        </div>
    )
}

// Company Section
function CompanySection() {
    return (
        <div className="px-10">
            <h3 className="text-base font-normal mb-8 text-[#95C149]">Company</h3>
            <ul className="space-y-4">
                {["Research", "Applications", "Insights", "Careers", "Contact Us"].map((item, index) => (
                    <li key={index}>
                        <Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="text-white hover:text-[#95C149] transition-colors duration-300 text-sm">
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Products Section
function ProductsSection() {
    return (
        <div className="px-0">
            <h3 className="text-base font-normal mb-8 text-[#95C149]">Products</h3>
            <ul className="space-y-4">
                <li>
                    <Link href="/products/navocular" className="text-white hover:text-[#95C149] transition-colors duration-300 text-sm">
                        NavOcular
                    </Link>
                </li>
                <li>
                    <Link href="/products/opticspectra" className="text-white hover:text-[#95C149] transition-colors duration-300 text-sm">
                        OpticSpectra
                    </Link>
                </li>
            </ul>
        </div>
    )
}

// Verticals Section
function VerticalsSection() {
    return (
        <div className="px-0">
            <h3 className="text-base font-normal mb-8 text-[#95C149]">Verticals</h3>
            <ul className="space-y-4">
                {["Defence", "Government", "OEM/ODM", "Consumer"].map((item, index) => (
                    <li key={index}>
                        <Link href={`/verticals/${item.toLowerCase().replace("/", "").replace(/ /g, "-")}`} className="text-white hover:text-[#95C149] transition-colors duration-300 text-sm">
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// Newsletter Section
function NewsletterSection() {
    return (
        <div className="pl-8">
            <div className="bg-[#1f1f1e] p-6 w-[340px]">
                <h3 className="text-lg font-normal mb-4 text-white">Join Our Newsletter</h3>
                <div className="flex w-full">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 bg-[#3E3E3C] border-0 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#95C149]"
                    />
                    <button className="bg-[#95C149] hover:bg-[#7da73a] text-white px-5 py-3 text-sm font-medium transition-colors duration-300 whitespace-nowrap">
                        Subscribe
                    </button>
                </div>
                <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                    * Will send you weekly updates on our products and applications.
                </p>
            </div>
        </div>
    )
}

// Bottom Bar Section
function BottomBarSection() {
    return (
        <div className="max-w-[1440px] mx-auto px-[120px] py-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
                {/* Logo */}
                <div className="relative w-40 h-10">
                    <Image
                        src="/images/navtech-logo.png"
                        alt="Nav Wireless Technologies"
                        fill
                        className="object-contain brightness-0 invert"
                        priority
                    />
                </div>

                {/* Copyright */}
                <div className="text-sm text-gray-400">Copyright © 2025 navtechno.in | All Rights Reserved</div>

                {/* Legal Links */}
                <div className="flex space-x-8 text-sm">
                    <Link href="/privacy-policy" className="text-gray-400 hover:text-[#95C149] transition-colors duration-300">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-use" className="text-gray-400 hover:text-[#95C149] transition-colors duration-300">
                        Terms of Use
                    </Link>
                </div>
            </div>
        </div>
    )
}

// Main Footer Component
export default function Footer() {
    return (
        <footer
            className="relative bg-[#3E3E3C] text-white"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
            <div className="max-w-[1440px] mx-auto px-[80px] py-12">
                <div className="grid grid-cols-5 gap-0">
                    <ReachUsSection />
                    <CompanySection />
                    <ProductsSection />
                    <VerticalsSection />
                    <NewsletterSection />
                </div>
            </div>

            <div className="border-t border-gray-600"></div>
            <BottomBarSection />
        </footer>
    )
}
