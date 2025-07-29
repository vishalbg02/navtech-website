"use client"

import Image from "next/image"
import Navbar from "@/components/navbar";
import type React from "react";
import {ChevronDown} from "lucide-react";
import Footer from "@/components/footer";
import CTASection from "@/components/CTASection"

export default function ApplicationsPage() {
    return (
        <div
            className="relative min-h-screen"
            style={{
                backgroundColor: "white",
            }}
        >
                <Navbar />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/app1.png"
                        alt="Hands typing on laptop"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Lightened overlay to make gradient more visible */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10">
                    <div className="max-w-4xl">
                        {/* Main title - positioned top left like in the image */}
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                            FUTURISTIC APPLICATION
                        </h1>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
                </div>
            </section>

            {/* Our Solutions Section */}
            <section className="py-[100px] px-[120px]">
                <div className="max-w-[807px] mx-auto text-center">
                    <h2 className="text-[36px] font-bold leading-[44px] text-black mb-6">Our Solutions for End Customers</h2>
                    <p className="text-[18px] font-light leading-[22px] text-[#565656]">
                        We bridge communication gaps in diverse environments through LiFi and FSO, offering reliable, high-speed
                        wireless solutions where traditional networks fall short.
                    </p>
                </div>
            </section>

            {/* Private Secure Mobile Payments */}
            <section className="px-[120px] mb-[50px]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="relative mb-6">
                        <h3 className="text-[36px] font-bold leading-[44px] text-black">
                            Private, <span className="bg-[#95C149] text-white px-2">Secure</span> Mobile Payments
                        </h3>
                    </div>
                    <p className="text-[18px] font-light leading-[22px] text-[#565656] max-w-[786px] mb-8">
                        LiFi enables line-of-sight, light-based communication between smartphones and payment terminals, creating a
                        secure channel that's resistant to wireless interception or eavesdropping.
                    </p>
                    <div className="w-full h-[364px] relative">
                        <Image
                            src="/images/app2.jpg"
                            alt="Mobile Payment with NFC Technology"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Mobile to Mobile File Sharing */}
            <section className="px-[120px] py-[50px]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex items-center gap-[89px]">
                        <div className="w-[575px] h-[450px] relative">
                            <Image
                                src="/images/app3.png"
                                alt="Mobile File Sharing"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[536px]">
                            <h3 className="text-[42px] font-bold leading-[51px] text-black mb-2">Mobile to Mobile File Sharing</h3>
                            <p className="text-[18px] font-light leading-[22px] text-[#565656]">
                                Smartphones equipped with LiFi can exchange files securely through light beams, without relying on Wi-Fi
                                or Bluetooth, ensuring fast and discreet data transfer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LiFi-Enabled In-Vehicle Connectivity */}
            <section className="px-[120px] py-[50px]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="relative w-full h-[433px] bg-black overflow-hidden" style={{ transform: "scaleX(-1)" }}>
                        <Image
                            src="/images/app5.jpg"
                            alt="Modern Car Interior"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute bottom-[39px] right-[60px] w-[422px]" style={{ transform: "scaleX(-1)" }}>
                            <h3 className="text-[42px] font-bold leading-[51px] text-white mb-2">
                                LiFi-Enabled In-Vehicle Connectivity
                            </h3>
                            <p className="text-[18px] font-light leading-[22px] text-white">
                                Cabin lights embedded with LiFi modules can deliver entertainment, updates, and connectivity to
                                passenger devices without adding RF interference to sensitive vehicle electronics.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* High-Bandwidth AR/VR Streaming */}
            <section className="px-[103px] py-[50px]">
                <div className="max-w-[1217px] mx-auto">
                    <div className="flex items-center gap-[34px]">
                        <div className="w-[747px] h-[598px] relative">
                            <Image
                                src="/images/app6.png"
                                alt="AR/VR Technology"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="w-[436px]">
                            <h3 className="text-[42px] font-bold leading-[51px] text-black mb-2">High-Bandwidth AR/VR Streaming</h3>
                            <p className="text-[18px] font-light leading-[22px] text-[#565656]">
                                LiFi supports immersive mobile AR/VR applications by delivering stable, ultra-fast optical connectivity
                                needed for rich visual content and low-latency interaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quantum-Safe Communication Layer */}
            <section className="w-full h-[394px] relative">
                <Image
                    src="/images/app7.jpg"
                    alt="Global Network Connection"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute left-[120px] top-[41px] w-[617px]">
                    <h3 className="text-[42px] font-bold leading-[51px] text-white mb-2">Quantum-Safe Communication Layer</h3>
                    <p className="text-[18px] font-light leading-[22px] text-white">
                        The highly directional and confined nature of LiFi makes it a strong candidate for future mobile encryption
                        systems, including physical-layer secured optical channels.
                    </p>
                </div>
            </section>

            {/* LiFi-Enabled V2V and V2X Communication */}
            <section className="px-[49px] py-[100px]">
                <div className="max-w-[1342px] mx-auto">
                    <div className="text-center mb-[50px]">
                        <h3 className="text-[42px] font-bold leading-[51px] text-black mb-2">
                            LiFi-Enabled V2V and V2X Communication
                        </h3>
                        <p className="text-[18px] font-light leading-[22px] text-[#565656] max-w-[702px] mx-auto">
                            LiFi enables ultra-fast, line-of-sight communication between vehicles (V2V) and with surrounding
                            infrastructure (V2X), supporting real-time data exchange for navigation, collision avoidance, and
                            situational awareness, without emitting RF signals that can interfere or be intercepted.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="flex justify-between items-center">
                            <div className="w-[632px] h-[239px] relative">
                                <Image
                                    src="/images/app8.png"
                                    alt="Blue SUV Car"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="w-[593px] h-[224px] relative">
                                <Image
                                    src="/images/app9.png"
                                    alt="Orange City Car"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-[207px] h-0 border-t-[1.5px] border-dashed border-[#95C149]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LiFi as Replacement for Wire Harnessing */}
            <section className="px-[120px] py-[50px]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="bg-[#95C149] p-[25px] flex items-center gap-[67px] min-h-[481px]">
                        <div className="w-[436px]">
                            <h3 className="text-[42px] font-bold leading-[51px] text-white mb-2">
                                LiFi as Replacement for Wire Harnessing
                            </h3>
                            <p className="text-[18px] font-light leading-[22px] text-white">
                                LiFi significantly reduces the need for bulky wiring by enabling high-speed, light-based data
                                transmission between components. Ideal for spacecraft and modern vehicles where space, weight, and EMI
                                resistance are critical, simplifying design while improving reliability.
                            </p>
                        </div>
                        <div className="w-[596px] h-[444px] relative">
                            <Image
                                src="/images/app10.jpg"
                                alt="View from Spaceship"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <CTASection />
            <Footer />
        </div>
    )
}
