"use client"

import { motion } from "framer-motion"

export default function OEMODMPage() {
    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: "url(/images/nav-bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 container mx-auto px-6 py-12 text-white">
                <motion.h1
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    OEM/ODM
                </motion.h1>
                <motion.div
                    className="space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Future-Ready LiFi Transceivers for Your Products</h2>
                        <p className="text-lg">Nav Wireless Technologies Pvt. Ltd. - Your Wireless Innovation Partner<br />Accelerate Your Future With LiFi</p>
                        <p className="text-lg">At Nav Wireless Technologies Pvt. Ltd., we enable companies across industries to integrate LiFi-based Optical Wireless Communication (OWC) modules into their existing or new product lines. Our compact, customizable transceivers deliver high-speed, interference-free connectivity where traditional RF-based communication is limited.</p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Industries We Serve</h2>
                        <ul className="list-disc pl-5 text-lg">
                            <li>Industrial Automation: Real-time data exchange for machines in RF-restricted environments such as power plants, refineries, and assembly lines.</li>
                            <li>Smart IoT Device Makers: Embed LiFi in smart lighting, smart homes, and IoT gateways, offering data-over-light functionality with enhanced security and efficiency.</li>
                            <li>Healthcare OEMs: Integrate radiation-free LiFi for data exchange in ICUs, operation theatres, and diagnostics where Wi-Fi may interfere.</li>
                            <li>Automotive & Innovators: Enable V2V (Vehicle-to-Vehicle) and in-cabin optical communication data.</li>
                            <li>Consumer Electronics Smart Devices: Equip devices with high-speed, short-range data for indoor applications without RF bands.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}