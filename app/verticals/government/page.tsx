"use client"

import { motion } from "framer-motion"

export default function GovernmentPage() {
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
                    Government
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
                        <h2 className="text-2xl font-semibold">Home Affairs and Services</h2>
                        <p className="text-lg">RF-free communication that is immune to jamming and interception.</p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Police Installations</h2>
                        <p className="text-lg">Ensure secure intra-unit urban and border government communication with LiFi and FSO.</p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Smart Governance</h2>
                        <ul className="list-disc pl-5 text-lg">
                            <li>Smart Cities: LiFi-enabled data links for traffic, cameras, and power systems.</li>
                            <li>E-Governance Centers: Deploy high-speed LiFi zones for real-time citizen services and communication.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Emergency Response</h2>
                        <p className="text-lg">Set up rapid optical links in disaster zones where traditional networks fail.</p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Rural and Remote Connectivity</h2>
                        <p className="text-lg">FSO bridges can eliminate the need for laying cables, connecting outposts in hilly regions.</p>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h2 className="text-2xl font-semibold">Health Institutions</h2>
                        <ul className="list-disc pl-5 text-lg">
                            <li>Digital Classrooms in Government Schools: LiFi for fast, radiation-free internet in classrooms.</li>
                            <li>Secure Telemedicine: Secure, interference-free wireless data for diagnostics.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}