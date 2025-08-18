"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
      <section
          ref={sectionRef}
          className="relative h-screen w-full -translate-y-28 overflow-hidden bg-white flex items-center"
      >
        {/* Background with enhanced gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/20 via-white/25 to-slate-100/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-green-200/15 to-blue-200/15 blur-3xl animate-pulse"></div>
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-r from-green-200/10 to-emerald-200/10 blur-3xl animate-pulse delay-700"></div>
          <div className="absolute left-1/2 top-1/2 w-1/3 h-full bg-gradient-to-r from-blue-200/5 to-green-200/5 blur-2xl animate-pulse delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] w-full">
          <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
          >
            {/* 1. Left Text - Mobile: order-1, Desktop: order-1 */}
            <motion.div
                className="space-y-4 sm:space-y-6 mb-0 lg:mb-44 text-center lg:text-left order-1 lg:order-1"
                variants={fadeInLeft}
            >
              <div className="mb-6 sm:mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-oswald font-semibold text-black leading-tight tracking-tight mb-4 sm:mb-6">
                  ABOUT NAV
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-sans max-w-md mx-auto lg:mx-0">
                  NavWireless Technologies Pvt Ltd (NavTech) is a global leading
                  solutions and services provider of wireless and information
                  communications systems with its own R&D facilities,
                  manufacturing base, and sales and service teams.
                </p>
              </div>
            </motion.div>

            {/* 2. Logo - Mobile: order-2, Desktop: order-2 */}
            <motion.div
                className="flex justify-center items-center perspective-1000 order-2 lg:order-2"
                variants={fadeInUp}
            >
              <motion.div
                  className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] flex justify-center items-center"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Image
                    src="/images/Navtech Logo 2.png"
                    alt="NavTech Logo"
                    width={400}
                    height={400}
                    className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* 3. Right Text - Mobile: order-3, Desktop: order-3 */}
            <motion.div
                className="space-y-4 sm:space-y-6 mt-0 lg:mt-44 text-center lg:text-left order-3 lg:order-3"
                variants={fadeInRight}
            >
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed font-sans max-w-md mx-auto lg:mx-0">
                The company offers a comprehensive suite of products and services
                including Optical Wireless Communication Systems, Wireless
                Electricity Transmission Systems, Electronic Tattoos for
                Healthcare Monitoring, Wireless Enhancement Products, and
                subsystems and customers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}