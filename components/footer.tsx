"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export default function Footer() {
    const companyLinks = [
        { text: "Research", href: "/research" },
        { text: "Applications", href: "/applications" },
        { text: "Insights", href: "/insights" },
        { text: "Careers", href: "/career" },
        { text: "Contact Us", href: "/contact" },
    ]
    const productLinks = [
        { text: "NavOcular", href: "/products/navocular" },
        { text: "OpticSpectra", href: "/products/opticspectra" },
    ]
    const verticalLinks = [
        { text: "Government", href: "/verticals/government" },
        { text: "Defence", href: "/verticals/defence" },
        { text: "OEM/ODM", href: "/verticals/oem-odm" },
        { text: "Consumer", href: "/verticals/consumer" },
        { text: "Telecom", href: "/verticals/telecom" },
    ]

    return (
        <footer className="flex flex-col items-start w-full bg-[#4a4a4a] text-white font-[Segoe UI]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 py-[46px]">
                <div className="flex justify-between w-full flex-1 flex-wrap gap-10">
                    {/* Reach Us */}
                    <div className="flex flex-col gap-5 min-w-[300px]">
                        <h3 className="text-[#9acd32] text-[18px] font-semibold mb-2">Reach us</h3>
                        {/* Phone */}
                        <div className="flex items-start gap-3 mb-[15px]">
                            <svg className="w-5 h-5 fill-[#FFFFFF]" viewBox="0 0 24 24">
                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                            </svg>
                            <span className="text-white text-[16px] leading-[1.4]">+91 79484 21010</span>
                        </div>
                        {/* Email */}
                        <div className="flex items-start gap-3 mb-[15px]">
                            <svg className="w-5 h-5 fill-[#FFFFFF]" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            <span className="text-white text-[16px]">info@navtechno.in</span>
                        </div>
                        {/* Address */}
                        <div className="flex items-start gap-3 mb-[15px]">
                            <svg className="w-5 h-5 fill-[#FFFFFF]" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <span className="text-white text-[16px] leading-[1.4]">
                C5 The First Besides ITC Narmada,<br/>
                near Keshav Baug, Ahmedabad,<br/>
                Gujarat 380015,<br/>
                India
              </span>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[#9acd32] text-[18px] font-semibold mb-2">Company</h3>
                        <ul className="flex flex-col gap-3">
                            {companyLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.href} className="text-white text-[16px] hover:text-[#9acd32] transition-colors duration-300">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[#9acd32] text-[18px] font-semibold mb-2">Products</h3>
                        <ul className="flex flex-col gap-3">
                            {productLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.href} className="text-white text-[16px] hover:text-[#9acd32] transition-colors duration-300">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Verticals */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[#9acd32] text-[18px] font-semibold mb-2">Verticals</h3>
                        <ul className="flex flex-col gap-3">
                            {verticalLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.href} className="text-white text-[16px] hover:text-[#9acd32] transition-colors duration-300">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-[#5a5a5a] px-5 py-[4px] rounded-lg w-full max-w-[400px] overflow-hidden max-h-[200px]">
                        <h3 className="text-white text-[18px] mb-10 pt-2">
                            Join Our Newsletter
                        </h3>
                        <div className="flex w-full mb-1">
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="flex-1 px-4 py-2 rounded-l bg-[#6a6a6a] text-white text-sm placeholder-[#ccc] border-0 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-5 py-2 bg-[#9acd32] text-white rounded-r hover:bg-[#8bc34a] transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-sm text-[#ccc] leading-[1.4] pt-7">
                            * Will send you weekly updates on our products and applications.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="w-[90%] mx-auto border-t border-white">
                <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 py-6">
                    {/* Logos Section */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 order-2 lg:order-1">
                        <div className="bg-white px-3 sm:px-4 py-2 rounded-md">
                            <Image
                                src="/images/navtech-logo.png"
                                alt="NavTech Logo"
                                width={160}
                                height={40}
                                className="object-contain sm:w-[200px] sm:h-[50px]"
                            />
                        </div>
                        <div className="bg-white px-3 sm:px-4 py-2 rounded-md">
                            <Image
                                src="/images/LiFi.PNG"
                                alt="LiFi Logo"
                                width={80}
                                height={40}
                                className="object-contain h-[40px] sm:w-[100px] sm:h-[50px]"
                            />
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="text-[#ccc] text-xs sm:text-sm text-center order-1 lg:order-2">
                        © {new Date().getFullYear()} navtechno.in | All Rights Reserved
                    </div>

                    {/* Right section with social media icons above privacy/terms links */}
                    <div className="flex flex-col items-center lg:items-end gap-2 sm:gap-3 order-3">
                        {/* Social Media Icons */}
                        <div className="flex gap-3 sm:gap-4 items-center">
                            {/* X (Twitter) */}
                            <a
                                href="https://x.com/navwireless?s=21&t=GaxhmeT9odhWNwL_KLMe7A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#4a4a4a] border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-[#5a5a5a] transition p-1.5 sm:p-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    shapeRendering="geometricPrecision"
                                    textRendering="geometricPrecision"
                                    imageRendering="optimizeQuality"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    viewBox="0 0 512 462.799"
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="nonzero"
                                        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                                    />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/nav_wireless_techno?igsh=NTc4MTIwNjQ2YQ=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#4a4a4a] border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-[#5a5a5a] transition p-1.5 sm:p-2"
                            >
                                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/nav-wireless-technologies-pvt-ltd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 sm:w-9 sm:h-9 bg-[#4a4a4a] border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-[#5a5a5a] transition p-1.5 sm:p-2"
                            >
                                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </a>
                        </div>

                        {/* Privacy Policy and Terms links */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-[30px] text-xs sm:text-sm text-center">
                            <Link href="/privacy-policy" className="text-[#ccc] hover:text-[#9acd32] transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms-of-use" className="text-[#ccc] hover:text-[#9acd32] transition-colors duration-300">
                                Terms of Use
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
