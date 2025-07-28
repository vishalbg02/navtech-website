"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion, useInView } from "framer-motion"
import BlurText from "@/components/utils/BlurTextProps"

export default function ResearchPage() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const introRef = useRef(null)
    const researchAreasRef = useRef(null)
    // InView hooks
    const heroInView = useInView(heroRef, { once: true, margin: "-50px" })
    const introInView = useInView(introRef, { once: true, margin: "-100px" })

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
        },
    }
    const fadeInLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
        },
    }
    const fadeInRight = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
        },
    }
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

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
            className="relative min-h-screen overflow-x-hidden"
            style={{
                backgroundColor: "white",
            }}
        >
            <div className="relative z-10">
                <section ref={heroRef} className="relative h-screen flex items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/research1.jpg"
                            alt="Hands typing on laptop"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <motion.div
                            className="max-w-4xl"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                        >
                            <BlurText
                                text="RESEARCH"
                                delay={150}
                                animateBy="words"
                                direction="bottom"
                                className="text-6xl lg:text-8xl font-bold uppercase leading-tight text-white mb-4"
                            />
                        </motion.div>
                    </div>

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
                    </div>
                </section>

                <section ref={introRef} className="py-16 px-8">
                    <div className="container mx-auto text-center">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            animate={introInView ? "visible" : "hidden"}
                        >
                            <motion.h2
                                className="font-bold text-black mb-8"
                                style={{
                                    fontFamily: '"Helvetica Neue", sans-serif',
                                    fontSize: "36px",
                                }}
                                variants={fadeInUp}
                            >
                                OPTICAL WIRELESS TECHNOLOGIES
                            </motion.h2>
                            <motion.p
                                className="text-gray-700 max-w-4xl mx-auto leading-relaxed"
                                style={{
                                    fontFamily: '"Helvetica Neue", sans-serif',
                                    fontSize: "18px",
                                }}
                                variants={fadeInUp}
                            >
                                Optical Wireless Technology (OWT) is an advanced method of wireless communication and power delivery that enables ultra-fast, interference-free, and license-free data connectivity while also supporting simultaneous wireless energy transmission.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                <section ref={researchAreasRef} className="py-20">
                    <div className="container mx-auto px-8">
                        <div className="space-y-16">
                            {researchAreas.map((area, index) => {
                                const cardRef = useRef(null);
                                const cardInView = useInView(cardRef, { once: true, margin: "-100px" });
                                return (
                                    <motion.div
                                        key={area.id}
                                        ref={cardRef}
                                        variants={fadeInUp}
                                        initial="hidden"
                                        animate={cardInView ? "visible" : "hidden"}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                    >
                                        <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[500px]`}>
                                            <motion.div
                                                className="flex-1 p-8 lg:p-12 flex flex-col justify-center"
                                                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                                                initial="hidden"
                                                animate={cardInView ? "visible" : "hidden"}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            >
                                                <p
                                                    className="text-gray-600 mb-4 font-medium"
                                                    style={{ fontSize: "17px" }}
                                                >
                                                    {area.id.toUpperCase()}
                                                </p>

                                                <h3
                                                    className="text-black mb-6 leading-tight font-bold"
                                                    style={{ fontSize: "36px" }}
                                                >
                                                    {area.subtitle}
                                                </h3>

                                                <p
                                                    className="text-gray-700 leading-relaxed mb-6"
                                                    style={{ fontSize: "18px" }}
                                                >
                                                    {area.description}
                                                </p>

                                                <p
                                                    className="text-gray-600 leading-relaxed"
                                                    style={{ fontSize: "18px" }}
                                                >
                                                    {area.secondaryDescription}
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                className="flex-1 relative min-h-[400px] lg:min-h-[500px] group"
                                                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                                                initial="hidden"
                                                animate={cardInView ? "visible" : "hidden"}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            >
                                                <Image
                                                    src={area.image}
                                                    alt={area.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}