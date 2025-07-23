"use client"

import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="flex flex-col items-start w-full bg-[#4a4a4a] text-white font-[Segoe UI]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 py-[46px]">
                <div className="flex justify-between w-full flex-1 flex-wrap gap-10">
                    {/* Reach Us Section */}
                    <div className="flex flex-col gap-5 min-w-[300px]">
                        <h3 className="text-[#9acd32] text-[18px] font-semibold mb-2">Reach us</h3>
                        <div className="flex items-start gap-3 mb-[15px]">
                            <svg className="w-5 h-5 fill-[#9acd32]" viewBox="0 0 24 24">
                                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                            </svg>
                            <span className="text-white text-[16px] leading-[1.4]">+91 79484 21010</span>
                        </div>
                        <div className="flex items-start gap-3 mb-[15px]">
                            <svg className="w-5 h-5 fill-[#9acd32]" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <span className="text-white text-[16px]">info@navtechno.in</span>
                        </div>
                        <div className="flex items-start gap-3 mb-[15px]">
                            <svg className="w-5 h-5 fill-[#9acd32]" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span className="text-white text-[16px] leading-[1.4]">
                C5 The First Besides ITC Narmada,<br />
                near Keshav Baug, Ahmedabad,<br />
                Gujarat 380015
              </span>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[#9acd32] text-[18px] font-semibold mb-2">Company</h3>
                        <ul className="flex flex-col gap-3">
                            {["Research", "Applications", "Insights", "Careers", "Contact Us"].map((text) => (
                                <li key={text}>
                                    <Link href="#" className="text-white text-[16px] hover:text-[#9acd32] transition-colors duration-300">{text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[#9acd32] text-[18px] font-semibold mb-2">Products</h3>
                        <ul className="flex flex-col gap-3">
                            {["NavOcular", "OpticSpectra"].map((text) => (
                                <li key={text}>
                                    <Link href="#" className="text-white text-[16px] hover:text-[#9acd32] transition-colors duration-300">{text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Verticals */}
                    <div className="flex flex-col gap-5">
                        <h3 className="text-[#9acd32] text-[18px] font-semibold mb-2">Verticals</h3>
                        <ul className="flex flex-col gap-3">
                            {["Defence", "Government", "OEM/ODM", "Consumer"].map((text) => (
                                <li key={text}>
                                    <Link href="#" className="text-white text-[16px] hover:text-[#9acd32] transition-colors duration-300">{text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-[#5a5a5a] p-5 rounded-lg min-w-[300px]">
                        <h3 className="text-white text-[18px] mb-[15px]">Join Our Newsletter</h3>
                        <form className="flex w-full mb-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="flex-1 px-4 py-2 rounded-l bg-[#6a6a6a] text-white text-sm placeholder-[#ccc] border-0 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-5 py-2 bg-[#9acd32] text-[#333] font-semibold rounded-r hover:bg-[#8bc34a] transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-[#ccc] leading-[1.4]">* Will send you weekly updates on our products and applications.</p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="w-full border-t border-white">
            <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center px-4 sm:px-8 md:px-20 py-6"><div className="flex items-center bg-white px-4 py-2 rounded-md">
                    <img
                        src="/images/navtech-logo.png"
                        alt="NavTech Logo"
                        className="h-[50px] w-auto"
                    />
                </div>


                    <div className="text-[#ccc] text-sm">
                        Copyright © 2025 navtechno.in | All Rights Reserved
                    </div>

                    <div className="flex gap-[30px] text-sm">
                        <Link href="#" className="text-[#ccc] hover:text-[#9acd32] transition-colors duration-300">Privacy Policy</Link>
                        <Link href="#" className="text-[#ccc] hover:text-[#9acd32] transition-colors duration-300">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
