"use client"

import { motion } from "framer-motion"

export default function DefencePage() {
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
                    Defence
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
                        <p className="text-lg">
                            Indian Nav Pvt. Ltd. is the first and only to design and deliver Optical Wireless Communication (OWC) Systems using LiFi (Light Fidelity) and FSO (Free Space Optics). These technologies provide RF-free, high-speed, and secure communications, built specifically for deployment in high-threat, Electronic Warfare (EW) environments across all branches of the Armed Forces.
                        </p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Indian Army</h2>
                        <ul className="list-disc pl-5 text-lg">
                            <li>Forward Bases Communication: Deploy FSO links in border zones and high-speed networks on RF-jammed systems.</li>
                            <li>Command Centers: LiFi for jam-free communications in vehicles, and tactical posts for communications immune to jamming.</li>
                            <li>Field Deployable Optical Kits: Rapid deployment for temporary posts or EW-prone areas where traditional radio-based systems fail.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Indian Navy</h2>
                        <ul className="list-disc pl-5 text-lg">
                            <li>Shipboard Connectivity: Enable internal optical communications with zero electromagnetic interference and enhanced safety operations.</li>
                            <li>Submarines: Optical communications for stealth operations.</li>
                            <li>Fleet Operations: FSO-based ship-to-ship communication for coordinated maneuvers.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Indian Air Force</h2>
                        <ul className="list-disc pl-5 text-lg">
                            <li>Airbases: FSO links for control towers, radar, and hangars, eliminating vulnerabilities associated with wireless RF networks.</li>
                            <li>UAV ISR Support: Deploy drone-to-ground and satellite communication in zones where RF signals are disrupted or targeted.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}