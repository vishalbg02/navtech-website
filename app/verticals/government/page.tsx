"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function GovernmentPage() {
    return (
        <div
            className="relative min-h-screen"
            style={{
                backgroundImage: "url('/images/nav-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-purple-900/5 to-black/15"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/3 to-transparent"></div>

                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* Hero Section - Full Page */}
                <section className="relative h-screen flex items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image src="/images/government_bg.png" alt="Government Background" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-white/20"></div>
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl">
                            <motion.h1
                                className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                GOVERNMENT
                            </motion.h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-black animate-bounce mx-auto" />
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 px-8">
                    <div className="container mx-auto max-w-6xl">
                        {/* Main Title */}
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">GOVERNMENT</h2>
                            <p className="text-lg lg:text-xl text-black max-w-4xl mx-auto">
                                Empowering Governance with Next-Gen Optical Wireless Communications (OWC)
                            </p>
                        </motion.div>

                        {/* Content Sections */}
                        <motion.div
                            className="space-y-12"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0.4,
                                    },
                                },
                            }}
                        >
                            {/* Secure Communication Networks */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Secure Communication Networks</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Home Affairs and Intelligence Services:</strong> Enable tamper-proof, RF-free
                      communication that is immune to jamming and interception.
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Police & Paramilitary Installations:</strong> Ensure secure intra-unit communications in
                      urban and border deployments using LiFi and FSO.
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Smart Governance and Digital Infrastructure */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Smart Governance and Digital Infrastructure</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Smart Cities:</strong> Power streetlights, traffic systems, surveillance cameras, and
                      environmental sensors with LiFi-enabled data links.
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>E-Governance Centers:</strong> Deploy high-speed indoor LiFi zones for real-time citizen
                      services and data processing.
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Disaster-Resilient Communication */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Disaster-Resilient Communication</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Emergency Response and Disaster Management:</strong> Set up rapid wireless optical links
                      in post-disaster zones where traditional networks fail.
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Rural and Remote Connectivity:</strong> FSO bridges can eliminate the need for laying
                      cables, connecting government outposts in hilly, forested, or flood-prone regions.
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Educational & Health Institutions */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <h3 className="text-3xl font-bold text-black mb-6">Educational & Health Institutions</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Digital Classrooms in Government Schools:</strong> Use LiFi to provide fast,
                      radiation-free internet in rural classrooms.
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Telemedicine & e-Hospitals:</strong> Secure, interference-free wireless data for medical
                      diagnostics, patient records, and real-time specialist consultations.
                    </span>
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    )
}
