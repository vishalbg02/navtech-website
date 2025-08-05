"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
}

export default function CTASection() {
    const footerRef = useRef(null)
    const footerInView = useInView(footerRef, { once: true })

    return (
        <motion.section
            ref={footerRef}
            className="bg-[#95C149] py-16"
            variants={fadeInUp}
            initial="hidden"
            animate={footerInView ? "visible" : "hidden"}
        >
            <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px] text-center">
                <motion.h2
                    className="text-3xl lg:text-5xl w-[1150px] mx-auto font-anton text-white mb-8 leading-relaxed"
                    variants={fadeInUp}
                >
                    Experience Ultra-Fast, Secure, And Wireless LiFi Built For The
                    Future.
                </motion.h2>
                <motion.a
                    href="#contact"
                    className="px-8 py-4 font-medium text-lg inline-block bg-white text-black rounded-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    variants={scaleIn}
                >
                    Contact Us
                </motion.a>
            </div>
        </motion.section>
    )
}
