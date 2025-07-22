"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function ResearchPage() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)

    const researchAreas = [
        {
            id: "OWC - Optical Wireless Communications",
            title: "OWC - Optical Wireless Communications",
            subtitle: "LiFi | FSO with Integrated AI & Machine Learning",
            description:
                "Nav Wireless Technologies is advancing LiFi and Free Space Optics (FSO) by integrating Artificial Intelligence (AI) and Machine Learning (ML) to create smarter, adaptive optical communication systems. These AI-driven solutions dynamically optimize network performance, predict link disruptions, and enhance security through real-time data analysis.",
            secondaryDescription:
                "Ideal for defence, autonomous systems, smart infrastructure, and high-reliability environments, this next-gen approach ensures resilient, self-optimizing, and secure optical wireless connectivity—even in complex or rapidly changing conditions.",
            image: "/images/res2.jpg",
        },
        {
            id: "qkd",
            title: "QKD-Enabled Optical Wireless Systems",
            subtitle: "Quantum-Secured Communications",
            description:
                "QKD-Enabled Optical Wireless Systems combine the speed and flexibility of LiFi and FSO with the unbreakable security of Quantum Key Distribution (QKD). This revolutionary approach ensures that any attempt to intercept or eavesdrop on communications is immediately detected.",
            secondaryDescription:
                "Perfect for critical infrastructure, defence networks, financial systems, and strategic communications where absolute security is paramount. These systems provide quantum-level protection for the most sensitive data transmissions.",
            image: "/images/res3.jpg",
        },
        {
            id: "OWP - Optical Wireless Power",
            title: "OWP - Optical Wireless Power",
            subtitle: "Wireless Electricity Transmission",
            description:
                "Optical Wireless Power enables the wireless delivery of energy using focused beams of light, such as lasers or LEDs, to power electronic devices at a distance. This technology eliminates the need for physical cables and enables power transmission in challenging environments.",
            secondaryDescription:
                "Applications include powering IoT sensors, extending drone flight times, charging medical implants safely, and providing electricity to remote locations where traditional power infrastructure is impractical or impossible.",
            image: "/images/res4.jpg",
        },
        {
            id: "pof",
            title: "Power Over Fiber",
            subtitle: "Optical Power & Data Transmission",
            description:
                "Advanced research and development of Power over Fiber (PoF) systems—enabling the simultaneous transmission of optical power and data over optical fiber. This technology provides electrical isolation and immunity to electromagnetic interference.",
            secondaryDescription:
                "Ideal for hazardous environments, industrial applications, and situations requiring complete electrical isolation. PoF systems are explosion-proof and provide reliable power and data transmission in the most demanding conditions.",
            image: "/images/res5.jpg",
        },
        {
            id: "Space Communication",
            title: "Space Communication",
            subtitle: "Laser Communication for Space",
            description:
                "Advanced laser communication systems for space applications enable high-bandwidth, secure data transmission between satellites, ground stations, and space platforms. These systems provide significantly higher data rates than traditional radio frequency communications.",
            secondaryDescription:
                "Supporting satellite communications, deep space missions, ground-to-space links, and secure space communications. Our laser communication systems enable the next generation of space exploration and satellite networks.",
            image: "/images/res6.jpg",
        },
        {
            id: "Semiconductor",
            title: "Semiconductor Programmable Photonic Integrated Circuit",
            subtitle: "Next-Gen Chip-Level Optics",
            description:
                "Programmable Photonic Integrated Circuits (PPICs) leverage semiconductor materials to enable ultra-fast, low-power data transmission at the chip level. These circuits represent the future of high-speed computing and communications.",
            secondaryDescription:
                "Applications span data centers, IoT devices, 6G networks, and edge computing platforms. PPICs offer unprecedented speed and efficiency for next-generation digital infrastructure and distributed computing systems.",
            image: "/images/res7.jpg",
        },
        {
            id: "pat",
            title: "Pointing, Acquisition and Tracking (PAT) System",
            subtitle: "Precision Optical Alignment",
            description:
                "Advanced Pointing, Acquisition, and Tracking (PAT) systems ensure stable and accurate alignment in Free Space Optical (FSO) and laser communication links. These systems provide real-time feedback and intelligent control for optimal performance.",
            secondaryDescription:
                "Featuring microsecond response times, precision beam steering, AI-powered tracking, and motion compensation capabilities. PAT systems enable reliable optical communications even in challenging environmental conditions.",
            image: "/images/res8.jpg",
        },
    ]

    return (
        <div
            className="relative min-h-screen"
            style={{
                backgroundColor: "white",
            }}
        >
            <div className="relative z-10">
                {/* Hero Section - Full Page */}
                <section ref={heroRef} className="relative h-screen flex items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/research1.jpg"
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
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                                RESEARCH
                            </h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
                    </div>
                </section>

                {/* Optical Wireless Technologies Section */}
                <section className="py-16 px-8">
                    <div className="container mx-auto text-center">
                        <h2
                            className="font-bold text-black mb-8"
                            style={{
                                fontFamily: '"Helvetica Neue", sans-serif',
                                fontSize: "36px",
                            }}
                        >
                            OPTICAL WIRELESS TECHNOLOGIES
                        </h2>
                        <p
                            className="text-gray-700 max-w-4xl mx-auto leading-relaxed"
                            style={{
                                fontFamily: '"Helvetica Neue", sans-serif',
                                fontSize: "18px",
                            }}
                        >
                            Optical Wireless Technology (OWT) is an advanced method of wireless communication and power delivery that enables ultra-fast, interference-free, and license-free data connectivity while also supporting simultaneous wireless energy transmission.
                        </p>
                    </div>
                </section>


                {/* Research Areas - Uniform Background */}
                <section className="py-20">
                    <div className="container mx-auto px-8">
                        <div className="space-y-16">
                            {researchAreas.map((area, index) => (
                                <div key={area.id}>
                                    <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[500px]`}>
                                        {/* Content Side */}
                                        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                            {/* Small title */}
                                            <p
                                                className="text-gray-600 mb-4 font-medium"
                                                style={{ fontSize: "17px" }}
                                            >
                                                {area.id.toUpperCase()}
                                            </p>

                                            {/* Main title */}
                                            <h3
                                                className="text-black mb-6 leading-tight font-bold"
                                                style={{ fontSize: "36px" }}
                                            >
                                                {area.subtitle}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className="text-gray-700 leading-relaxed mb-6"
                                                style={{ fontSize: "18px" }}
                                            >
                                                {area.description}
                                            </p>

                                            {/* Secondary description */}
                                            <p
                                                className="text-gray-600 leading-relaxed"
                                                style={{ fontSize: "18px" }}
                                            >
                                                {area.secondaryDescription}
                                            </p>
                                        </div>

                                        {/* Image Side */}
                                        <div className="flex-1 relative min-h-[400px] lg:min-h-[500px]">
                                            <Image
                                                src={area.image}
                                                alt={area.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}