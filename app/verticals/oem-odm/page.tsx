"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"

export default function OEMODMPage() {
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
                        <Image src="/images/oem_odm_bg.png" alt="OEM/ODM Background" fill className="object-cover" priority />
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
                                OEM/ODM
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
                            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">OEM/ODM</h2>
                            <p className="text-lg lg:text-xl text-black max-w-4xl mx-auto leading-relaxed mb-4">
                                <strong>Nav Wireless Technologies Pvt. Ltd. - Your Wireless Innovation Partner</strong>
                            </p>
                            <p className="text-lg lg:text-xl text-black max-w-4xl mx-auto leading-relaxed">
                                <strong>Accelerate Your Future With LiFi</strong>
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
                            {/* Future-Ready LiFi Transceivers */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="pb-8">
                                <h3 className="text-3xl font-bold text-black mb-6">Future-Ready LiFi Transceivers for Your Products</h3>
                                <div className="space-y-4 text-black">
                                    <p className="leading-relaxed">
                                        At Nav Wireless Technologies Pvt. Ltd., we enable companies across industries to integrate
                                        LiFi-based Optical Wireless Communication (OWC) modules into their existing or new product lines.
                                        Our compact, customizable transceivers deliver high-speed, interference-free connectivity where
                                        traditional RF-based communication is limited.
                                    </p>
                                </div>
                                <div className="w-full h-px bg-green-500 mt-8"></div>
                            </motion.div>

                            {/* Industries We Serve */}
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                                <h3 className="text-3xl font-bold text-black mb-6">Industries We Serve</h3>
                                <div className="space-y-3 text-black">
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Industrial Automation:</strong> Real-time data exchange for machines in RF-restricted
                      environments such as power plants, refineries, and assembly lines.
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Smart IoT Device Makers:</strong> Embed LiFi in smart lighting, smart homes, and IoT
                      gateways, offering data-over-light functionality with enhanced security and efficiency.
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Healthcare OEMs:</strong> Integrate radiation-free LiFi for data exchange in ICUs,
                      operation theatres, and diagnostics where Wi-Fi may interfere.
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Automotive & Innovators:</strong> Enable V2V (Vehicle-to-Vehicle) and in-cabin optical
                      communication data.
                    </span>
                                    </p>
                                    <p className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">•</span>
                                        <span>
                      <strong>Consumer Electronics Smart Devices:</strong> Equip devices with high-speed, short-range
                      data for indoor applications without RF bands.
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
