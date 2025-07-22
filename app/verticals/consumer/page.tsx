"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function ConsumerPage() {
    // Refs for scroll-triggered animations
    const heroRef = useRef(null)
    const introRef = useRef(null)
    const enterpriseRef = useRef(null)
    const smartLivingRef = useRef(null)
    const healthcareRef = useRef(null)
    const educationRef = useRef(null)
    const industrialRef = useRef(null)
    const smartCitiesRef = useRef(null)
    const footerRef = useRef(null)

    // InView hooks
    const heroInView = useInView(heroRef, { once: true, margin: "-50px" })
    const introInView = useInView(introRef, { once: true, margin: "-100px" })
    const enterpriseInView = useInView(enterpriseRef, { once: true, margin: "-100px" })
    const smartLivingInView = useInView(smartLivingRef, { once: true, margin: "-100px" })
    const healthcareInView = useInView(healthcareRef, { once: true, margin: "-100px" })
    const educationInView = useInView(educationRef, { once: true, margin: "-100px" })
    const industrialInView = useInView(industrialRef, { once: true, margin: "-100px" })
    const smartCitiesInView = useInView(smartCitiesRef, { once: true, margin: "-100px" })
    const footerInView = useInView(footerRef, { once: true, margin: "-100px" })

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    }

    const fadeInLeft = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    }

    const fadeInRight = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    }

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" },
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

    return (
        <div className="min-h-screen bg-white text-black font-['Helvetica_Neue',sans-serif] overflow-x-hidden">
            <main>
                {/* Hero Section */}
                <section
                    ref={heroRef}
                    className="h-screen relative flex items-center pt-0"
                    style={{
                        backgroundImage: "url('/images/cons.jpg?height=1080&width=1920&text=Business+Meeting')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-75" />
                    <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[120px] w-full">
                        <motion.div
                            className="max-w-2xl"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={heroInView ? "visible" : "hidden"}
                        >
                            <motion.h1
                                className="text-6xl lg:text-8xl font-bold uppercase leading-tight text-white mb-4"
                                variants={fadeInUp}
                            >
                                Consumer
                            </motion.h1>
                            <motion.p className="text-xl lg:text-2xl font-light text-white" variants={fadeInUp}>
                                Integrate the Future: LiFi Optical Transceivers for Your Products
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Introduction Section */}
                <section ref={introRef} className="py-20 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={introInView ? "visible" : "hidden"}
                        >
                            <motion.h2
                                className="font-bold mb-6"
                                style={{
                                    fontSize: "36px",
                                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                                }}
                                variants={fadeInUp}
                            >
                                Our Solutions for End Customers
                            </motion.h2>
                            <motion.p
                                className="text-gray-600 leading-relaxed"
                                style={{
                                    fontSize: "18px",
                                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                                }}
                                variants={fadeInUp}
                            >
                                We bridge communication gaps in diverse environments through LiFi and FSO, offering reliable, high-speed
                                wireless solutions where traditional networks fall short.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Enterprise & Corporate Section */}
                <section ref={enterpriseRef} className="py-20">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <motion.div variants={staggerContainer} initial="hidden" animate={enterpriseInView ? "visible" : "hidden"}>
                            <motion.div className="mb-12" variants={fadeInUp}>
                                <h3
                                    className="font-bold mb-2"
                                    style={{ fontSize: "36px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                >
                                    Enterprise & Corporate
                                </h3>
                                <p className="text-gray-600" style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                    Ultra-secure, high-speed connectivity for mission-critical business environments
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                <motion.div className="text-center" variants={fadeInLeft}>
                                    <div className="relative h-[235px] rounded-lg overflow-hidden mb-5">
                                        <Image
                                            src="/images/cons1.jpg?height=235&width=380&text=Office+Building"
                                            alt="Office Building"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        High-speed LiFi networks for secure data zones
                                    </p>
                                </motion.div>

                                <motion.div className="text-center" variants={fadeInUp}>
                                    <div className="relative h-[235px] rounded-lg overflow-hidden mb-5">
                                        <Image
                                            src="/images/cons2.jpg?height=235&width=382&text=Data+Center"
                                            alt="Data Center"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        FSO backhaul links between buildings without fiber trenching
                                    </p>
                                </motion.div>

                                <motion.div className="text-center" variants={fadeInRight}>
                                    <div className="relative h-[235px] rounded-lg overflow-hidden mb-5">
                                        <Image
                                            src="/images/cons3.jpg?height=235&width=380&text=Business+Meeting"
                                            alt="Business Meeting"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Perfect for finance, legal, data centers, and R&D facilities
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Smart Living Spaces Section */}
                <section ref={smartLivingRef} className="py-20 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <motion.div variants={staggerContainer} initial="hidden" animate={smartLivingInView ? "visible" : "hidden"}>
                            <motion.div className="mb-12" variants={fadeInUp}>
                                <h3
                                    className="font-bold mb-2"
                                    style={{ fontSize: "36px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                >
                                    Smart Living Spaces
                                </h3>
                                <p className="text-gray-600" style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                    Intelligent lighting systems that deliver internet without electromagnetic interference
                                </p>
                            </motion.div>

                            <motion.div
                                className="relative h-[493px] rounded-lg overflow-hidden px-4 lg:px-12"
                                style={{
                                    backgroundImage: "url('/images/cons4.jpg?height=493&width=1200&text=Smart+Home+Tech')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                                variants={scaleIn}
                            >
                                <div className="absolute top-8 left-8 z-10 space-y-4 max-w-xs">
                                    <motion.div
                                        className="border border-white rounded-2xl p-3 text-white bg-transparent"
                                        variants={fadeInLeft}
                                    >
                                        <p style={{ fontSize: "16px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                            LiFi-enabled lighting for radiation-free internet access
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="border border-white rounded-2xl p-3 text-white bg-transparent"
                                        variants={fadeInLeft}
                                    >
                                        <p style={{ fontSize: "16px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                            Secure internal communication eliminating Wi-Fi congestion
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="border border-white rounded-2xl p-3 text-white bg-transparent"
                                        variants={fadeInLeft}
                                    >
                                        <p style={{ fontSize: "16px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                            Seamless IoT integration and home automation systems
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>


                {/* Healthcare Excellence Section */}
                <section
                    ref={healthcareRef}
                    className="relative pt-20"
                    style={{
                        minHeight: "600px", // Increased height
                        backgroundImage: "url('/images/cons5.jpg?height=631&width=1440&text=Medical+Facility')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
                        }}
                    />

                    <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <motion.div
                            className="grid lg:grid-cols-4 gap-20 items-start"
                            variants={staggerContainer}
                            initial="hidden"
                            animate={healthcareInView ? "visible" : "hidden"}
                        >
                            <motion.div variants={fadeInLeft}>
                                <h3
                                    className="font-bold mb-4"
                                    style={{ fontSize: "42px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                >
                                    Healthcare Excellence
                                </h3>
                                <p className="text-gray-600" style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                    Safe, interference-free communication for sensitive medical environments
                                </p>
                            </motion.div>

                            <motion.div className="relative" variants={fadeInUp}>
                                <div className="absolute left-0 top-0 w-3 h-48 bg-gradient-to-b from-[#95C149] to-transparent"></div>
                                <div className="pl-6">
                                    <div className="w-3 h-3 bg-[#95C149] rounded-full absolute left-0 top-0"></div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Dedicated LiFi zones for ICUs, operating theaters, and patient rooms
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="relative" variants={fadeInUp}>
                                <div className="absolute left-0 top-0 w-3 h-20 bg-gradient-to-b from-[#95C149] to-transparent"></div>
                                <div className="pl-6">
                                    <div className="w-3 h-3 bg-[#95C149] rounded-full absolute left-0 top-0"></div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Reliable high-speed communication without EMI interference
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div className="relative" variants={fadeInRight}>
                                <div className="absolute left-0 top-0 w-3 h-48 bg-gradient-to-b from-[#95C149] to-transparent"></div>
                                <div className="pl-6">
                                    <div className="w-3 h-3 bg-[#95C149] rounded-full absolute left-0 top-0"></div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Zero-RF environments protecting sensitive medical equipment
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Educational Innovation Section */}
                <section ref={educationRef} className="py-20 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                className="relative h-[344px] rounded-lg overflow-hidden"
                                variants={fadeInLeft}
                                initial="hidden"
                                animate={educationInView ? "visible" : "hidden"}
                            >
                                <Image
                                    src="/images/cons6.jpg?height=344&width=555&text=Digital+Classroom"
                                    alt="Digital Classroom"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            <motion.div variants={staggerContainer} initial="hidden" animate={educationInView ? "visible" : "hidden"}>
                                <motion.div className="mb-8" variants={fadeInUp}>
                                    <h3
                                        className="font-bold mb-2"
                                        style={{ fontSize: "36px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Educational Innovation
                                    </h3>
                                    <p className="text-gray-600" style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                        Next-generation digital classrooms with safe, high-performance connectivity
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.div
                                        className="bg-white p-4 rounded-lg shadow-md border-b-4 border-[#95C149]"
                                        variants={fadeInRight}
                                    >
                                        <p
                                            className="leading-relaxed"
                                            style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                        >
                                            Smart classrooms with high-speed, health-safe internet
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-4 rounded-lg shadow-md border-b-4 border-[#95C149] ml-6"
                                        variants={fadeInRight}
                                    >
                                        <p
                                            className="leading-relaxed"
                                            style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                        >
                                            Enhanced e-learning harmful radio wave exposure
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="bg-white p-4 rounded-lg shadow-md border-b-4 border-[#95C149] ml-12"
                                        variants={fadeInRight}
                                    >
                                        <p
                                            className="leading-relaxed"
                                            style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                        >
                                            FSO links connecting campus buildings and remote locations
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Industrial Power Section */}
                <section ref={industrialRef} className="py-20">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <motion.div variants={staggerContainer} initial="hidden" animate={industrialInView ? "visible" : "hidden"}>
                            <motion.div className="mb-12" variants={fadeInUp}>
                                <h3
                                    className="font-bold mb-2"
                                    style={{ fontSize: "36px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                >
                                    Industrial <span style={{ color: "#95C149" }}>Power</span>
                                </h3>
                                <p className="text-gray-600" style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                    Robust wireless solutions for electromagnetic interference-prone industrial environments
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                <motion.div className="text-center" variants={fadeInLeft}>
                                    <div className="relative h-[235px] rounded-lg overflow-hidden mb-5">
                                        <Image
                                            src="/images/cons7.jpg?height=235&width=380&text=Industrial+Automation"
                                            alt="Industrial Automation"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Machine-to-machine LiFi in EMI-sensitive industrial zones
                                    </p>
                                </motion.div>

                                <motion.div className="text-center" variants={fadeInUp}>
                                    <div className="relative h-[235px] rounded-lg overflow-hidden mb-5">
                                        <Image
                                            src="/images/cons8.jpg?height=235&width=382&text=Manufacturing+Plant"
                                            alt="Manufacturing Plant"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Plant-wide FSO connectivity without cable infrastructure
                                    </p>
                                </motion.div>

                                <motion.div className="text-center" variants={fadeInRight}>
                                    <div className="relative h-[235px] rounded-lg overflow-hidden mb-5">
                                        <Image
                                            src="/images/cons9.jpg?height=235&width=380&text=Power+Plant"
                                            alt="Power Plant"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p
                                        className="leading-relaxed"
                                        style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Optimized for automotive, oil & gas, power, and manufacturing
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Smart Cities Section */}
                <section ref={smartCitiesRef} className="py-20 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                className="relative"
                                variants={scaleIn}
                                initial="hidden"
                                animate={smartCitiesInView ? "visible" : "hidden"}
                            >
                                <div className="relative w-[400px] h-[400px] mx-auto">
                                    <div className="absolute inset-0 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/cons10.jpg?height=400&width=400&text=Smart+City+Skyline"
                                            alt="Smart City"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate={smartCitiesInView ? "visible" : "hidden"}
                            >
                                <motion.div className="mb-8" variants={fadeInUp}>
                                    <h3
                                        className="font-bold mb-2"
                                        style={{ fontSize: "36px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                    >
                                        Smart Cities
                                    </h3>
                                    <p className="text-gray-600" style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif" }}>
                                        Revolutionary urban infrastructure with optical wireless communication networks
                                    </p>
                                </motion.div>

                                <div className="space-y-6">
                                    <motion.div className="flex items-start" variants={fadeInRight}>
                                        <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p
                                            className="leading-relaxed"
                                            style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                        >
                                            Optical links for traffic systems, surveillance, and IoT sensors
                                        </p>
                                    </motion.div>

                                    <motion.div className="flex items-start" variants={fadeInRight}>
                                        <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p
                                            className="leading-relaxed"
                                            style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                        >
                                            LiFi streetlights providing data through lighting infrastructure
                                        </p>
                                    </motion.div>

                                    <motion.div className="flex items-start" variants={fadeInRight}>
                                        <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                                        <p
                                            className="leading-relaxed"
                                            style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                        >
                                            Cable-free FSO networks for last-mile connectivity
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Footer */}
                <motion.section
                    ref={footerRef}
                    className="bg-[#95C149] py-16"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={footerInView ? "visible" : "hidden"}
                >
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px] text-center">
                        <motion.h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight" variants={fadeInUp}>
                            Experience Ultra-Fast, Secure, And Wireless LiFi Built For The Future.
                        </motion.h2>
                        <motion.a
                            href="#contact"
                            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
                            variants={scaleIn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us
                        </motion.a>
                    </div>
                </motion.section>
            </main>
        </div>
    )
}
