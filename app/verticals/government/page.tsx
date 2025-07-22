"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function GovernmentPage() {
    // Refs for scroll-triggered animations
    const heroRef = useRef(null)
    const introRef = useRef(null)
    const secureNetworksRef = useRef(null)
    const smartGovernanceRef = useRef(null)
    const referenceRef = useRef(null)
    const disasterResilientRef = useRef(null)
    const educationHealthRef = useRef(null)
    const footerRef = useRef(null)

    // InView hooks
    const heroInView = useInView(heroRef, { once: true, margin: "-50px" })
    const introInView = useInView(introRef, { once: true, margin: "-100px" })
    const secureNetworksInView = useInView(secureNetworksRef, { once: true, margin: "-100px" })
    const smartGovernanceInView = useInView(smartGovernanceRef, { once: true, margin: "-100px" })
    const referenceInView = useInView(referenceRef, { once: true, margin: "-100px" })
    const disasterResilientInView = useInView(disasterResilientRef, { once: true, margin: "-100px" })
    const educationHealthInView = useInView(educationHealthRef, { once: true, margin: "-100px" })
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
                        backgroundImage: "url('/images/gov1.jpg?height=1080&width=1920&text=Government+Building')",
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
                                Government
                            </motion.h1>
                            <motion.p className="text-xl lg:text-2xl font-light text-white" variants={fadeInUp}>
                                Empowering Governance with Next-Gen Optical Wireless Communications (OWC)
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
                                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
                                }}
                                variants={fadeInUp}
                            >
                                Enabling India's Critical Sectors with Optical{" "}
                                <span style={{ color: "#95C149" }}>Wireless</span> Innovation
                            </motion.h2>
                            <motion.p
                                className="text-gray-600 leading-relaxed"
                                style={{
                                    fontSize: "18px",
                                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
                                }}
                                variants={fadeInUp}
                            >
                                From defense to disaster zones, smart cities to schools—LiFi and FSO technologies deliver secure,
                                high-speed, and resilient communication for the nation's most vital operations.
                            </motion.p>
                        </motion.div>
                    </div>

                </section>

                {/* Secure Communication Networks */}
                <section ref={secureNetworksRef} className="py-20">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div variants={fadeInLeft} initial="hidden" animate={secureNetworksInView ? "visible" : "hidden"}>
                                <div className="mb-6 pl-2">
                                    <h3 className="font-bold relative z-10" style={{ fontSize: "36px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}>
                                        <span style={{ backgroundColor: "#95C149", color: "#fff", padding: "4px 10px", borderRadius: "4px", display: "inline-block" }}>Secure</span> Communication Networks
                                    </h3>
                                </div>
                                <p className="leading-relaxed mt-2" style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}>
                                    <strong>Home Affairs, and Intelligence Services:</strong><br />Enable tamper-proof, RF-free communication that is immune to jamming and interception.
                                </p>
                                <p className="mt-4 leading-relaxed" style={{ fontSize: "18px", fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}>
                                    <strong>Police & Paramilitary Installations:</strong><br />Ensure secure intra-unit communications in urban and border deployments using LiFi and FSO.
                                </p>
                            </motion.div>
                            <motion.div className="relative h-[400px] lg:h-[441px] rounded-lg overflow-hidden" variants={fadeInRight} initial="hidden" animate={secureNetworksInView ? "visible" : "hidden"}>
                                <Image src="/images/gov2.png?height=441&width=687&text=Security+Communication" alt="Secure Communication Networks" fill className="object-cover" />
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* Smart Governance & Digital Infrastructure */}
                <section ref={smartGovernanceRef} className="py-20 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <div className="grid lg:grid-cols-3 gap-8 items-stretch h-full">
                            {/* Left Column: Heading at the top */}
                            <motion.div
                                className="flex items-start"
                                variants={fadeInLeft}
                                initial="hidden"
                                animate={smartGovernanceInView ? "visible" : "hidden"}
                            >
                                <h3
                                    className="text-3xl lg:text-4xl font-bold"
                                    style={{ fontFamily: "Helvetica Neue, sans-serif", color: "#000" }}
                                >
                                    Smart Governance & Digital Infrastructure
                                </h3>
                            </motion.div>

                            {/* Center Column: Image in middle */}
                            <motion.div
                                className="relative h-[400px] lg:h-[451px] rounded-lg overflow-hidden flex items-center justify-center"
                                variants={fadeInUp}
                                initial="hidden"
                                animate={smartGovernanceInView ? "visible" : "hidden"}
                            >
                                <Image
                                    src="/images/gov3.jpg?height=451&width=418&text=Smart+City+Night"
                                    alt="Smart Governance"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Right Column: Text at the bottom */}
                            <motion.div
                                className="flex flex-col justify-end h-full"
                                variants={fadeInRight}
                                initial="hidden"
                                animate={smartGovernanceInView ? "visible" : "hidden"}
                            >
                                <p
                                    className="text-lg leading-relaxed text-gray-700 mb-4"
                                    style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                                >
                                    <strong>Smart Cities:</strong><br />
                                    Power streetlights, traffic systems, surveillance cameras, and environmental sensors with LiFi-enabled data links.
                                </p>
                                <p
                                    className="text-lg leading-relaxed text-gray-700"
                                    style={{ fontFamily: "Helvetica Neue, sans-serif" }}
                                >
                                    <strong>E-Governance Centres:</strong><br />
                                    Deploy high-speed indoor LiFi zones for real-time citizen services and data processing.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* Reference Image Section */}
                <motion.section
                    ref={referenceRef}
                    className="h-[400px] lg:h-[542px] relative"
                    variants={scaleIn}
                    initial="hidden"
                    animate={referenceInView ? "visible" : "hidden"}
                >
                    <Image
                        src="/images/gov4.png?height=542&width=1440&text=Government+Reference+Image"
                        alt="Government Reference"
                        fill
                        className="object-cover"
                    />
                </motion.section>

                {/* Disaster-Resilient Communication */}
                <section ref={disasterResilientRef} className="py-20">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        <div className="grid lg:grid-cols-3 gap-8 items-center">
                            {/* Left Image */}
                            <motion.div
                                className="relative h-[400px] lg:h-[461px] rounded-lg overflow-hidden"
                                variants={fadeInLeft}
                                initial="hidden"
                                animate={disasterResilientInView ? "visible" : "hidden"}
                            >
                                <Image
                                    src="/images/gov5.jpg?height=461&width=344&text=Disaster+Zone"
                                    alt="Disaster Zone"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Center Text */}
                            <motion.div
                                className="text-center"
                                variants={fadeInUp}
                                initial="hidden"
                                animate={disasterResilientInView ? "visible" : "hidden"}
                            >
                                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                                    Disaster-Resilient Communication
                                </h3>
                                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                                    <strong>Emergency Response and DRDO Deployments:</strong><br />
                                    Set up rapid, wireless optical links in post-disaster zones where traditional networks fail.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    <strong>Rural and Remote Connectivity:</strong><br />
                                    FSO bridges can eliminate the need for fiber laying, connecting government outposts in hilly, forested, or coastal regions.
                                </p>
                            </motion.div>

                            {/* Right Image */}
                            <motion.div
                                className="relative h-[400px] lg:h-[461px] rounded-lg overflow-hidden"
                                variants={fadeInRight}
                                initial="hidden"
                                animate={disasterResilientInView ? "visible" : "hidden"}
                            >
                                <Image
                                    src="/images/gov6.jpg?height=461&width=345&text=Rural+Landscape"
                                    alt="Rural Landscape"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>


                {/* Educational & Health Institutions */}
                <section ref={educationHealthRef} className="py-16 bg-white">
                    <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
                        {/* Images on Top */}
                        <div className="grid lg:grid-cols-2 gap-4 mb-8">
                            <motion.div
                                className="relative h-[240px] rounded-lg overflow-hidden"
                                variants={fadeInLeft}
                                initial="hidden"
                                animate={educationHealthInView ? "visible" : "hidden"}
                            >
                                <Image
                                    src="/images/gov8.jpg?height=240&width=600&text=Educational+Institution"
                                    alt="Educational Institution"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            <motion.div
                                className="relative h-[240px] rounded-lg overflow-hidden"
                                variants={fadeInRight}
                                initial="hidden"
                                animate={educationHealthInView ? "visible" : "hidden"}
                            >
                                <Image
                                    src="/images/gov7.jpg?height=240&width=600&text=Medical+Facility"
                                    alt="Medical Facility"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Text Content */}
                        <motion.div
                            className="text-center"
                            variants={fadeInUp}
                            initial="hidden"
                            animate={educationHealthInView ? "visible" : "hidden"}
                        >
                            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                                Educational & Health Institutions
                            </h3>
                            <div className="max-w-3xl mx-auto space-y-4 text-center">
                                <p className="text-lg leading-relaxed text-gray-700">
                                    <strong>Digital Classrooms in Government Schools:</strong><br />
                                    Use LiFi to provide fast, radiation-free internet in rural classrooms.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-700">
                                    <strong>Telemedicine & e-Hospitals:</strong><br />
                                    Secure, interference-free wireless data for medical diagnostics, patient records,
                                    and real-time specialist consultations.
                                </p>
                            </div>
                        </motion.div>
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
                            Experience ultra-fast, secure, and wireless LiFi built for the future.
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
