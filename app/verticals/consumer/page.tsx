"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function ConsumerPage() {
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
                        <Image src="/images/consumer_bg.png" alt="Consumer Background" fill className="object-cover" priority />
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
                                CONSUMER
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
                            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">CONSUMER</h2>
                            <p className="text-lg lg:text-xl text-black max-w-4xl mx-auto leading-relaxed">
                                Our Solutions for End Customers
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
                            {/* Enterprises & Offices */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Enterprises & Offices</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>LiFi networks for secure data zones.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>FSO links between buildings without fiber optic data centers.</strong>
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Smart Homes */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Smart Homes</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>LiFi-enabled lighting for internet.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Secure internal communication without Wi-Fi congestion.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Integration with IoT devices and automation systems.</strong>
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Healthcare */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Healthcare</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>LiFi zones in ICUs.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Zero-RF environments for sensitive medical equipment.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Reliable, EW interference-free high-speed communication.</strong>
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Education */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Education</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Smart classrooms with high-speed, radiation-free internet.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>FSO to connect campuses.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Enhanced e-learning experiences without harmful waves.</strong>
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Industrial */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Industrial</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>LiFi communication in EMI-prone zones.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>FSO solutions for plant-wide connectivity.</strong>
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Smart Cities */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Smart Cities</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Wireless links for traffic CCTV, sensors.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>LiFi data transmission through street lighting.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>FSO for last-mile networks and edge connectivity.</strong>
                    </span>
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Green Technology */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <h3 className="text-3xl font-bold text-black mb-6">Green Technology</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>License-free.</strong>
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>EMI-free.</strong>
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
