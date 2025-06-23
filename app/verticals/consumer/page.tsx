"use client"

import { motion } from "framer-motion"

export default function ConsumerPage() {
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
                    Consumer
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
                        <h2 className="text-2xl font-semibold">Our Solutions for End Customers</h2>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h3 className="text-xl font-medium">Enterprises & Offices</h3>
                        <ul className="list-disc pl-5 text-lg">
                            <li>LiFi networks for secure data zones.</li>
                            <li>FSO links between buildings without fiber optic data centers.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h3 className="text-xl font-medium">Smart Homes</h3>
                        <ul className="list-disc pl-5 text-lg">
                            <li>LiFi-enabled lighting for internet.</li>
                            <li>Secure internal communication without Wi-Fi congestion.</li>
                            <li>Integration with IoT devices and automation systems.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h3 className="text-xl font-medium">Healthcare</h3>
                        <ul className="list-disc pl-5 text-lg">
                            <li>LiFi zones in ICUs.</li>
                            <li>Zero-RF environments for sensitive medical equipment.</li>
                            <li>Reliable, EW interference-free high-speed communication.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h3 className="text-xl font-medium">Education</h3>
                        <ul className="list-disc pl-5 text-lg">
                            <li>Smart classrooms with high-speed, radiation-free internet.</li>
                            <li>FSO to connect campuses.</li>
                            <li>Enhanced e-learning experiences without harmful waves.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h3 className="text-xl font-medium">Industrial</h3>
                        <ul className="list-disc pl-5 text-lg">
                            <li>LiFi communication in EMI-prone zones.</li>
                            <li>FSO solutions for plant-wide connectivity.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h3 className="text-xl font-medium">Smart Cities</h3>
                        <ul className="list-disc pl-5 text-lg">
                            <li>Wireless links for traffic CCTV, sensors.</li>
                            <li>LiFi data transmission through street lighting.</li>
                            <li>FSO for last-mile networks and edge connectivity.</li>
                        </ul>
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                        <h3 className="text-xl font-medium">Green Technology</h3>
                        <ul className="list-disc pl-5 text-lg">
                            <li>License-free.</li>
                            <li>EMI-free.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}