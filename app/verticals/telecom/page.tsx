"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import BlurText from "@/components/utils/BlurTextProps";
import { motion } from "framer-motion";

const fadeInLeft = (delay: number) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: delay },
  },
});

const fadeInRight = (delay: number) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: delay },
  },
});

const fadeInUp = (delay: number) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: delay },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const scaleIn = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: delay },
  },
});

const gridStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function TelecomPage() {
  return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
            className="h-screen min-h-[600px] relative flex items-center pt-0"
            style={{
              backgroundImage: "url('/images/Telecom.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
        >
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px] w-full">
            <motion.div
                className="max-w-4xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
              <motion.div variants={fadeInUp(0.2)}>
                <BlurText
                    text="Telecom"
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-oswald font-semibold uppercase leading-tight text-white mb-4"
                />
              </motion.div>
              <motion.p
                  className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-sans text-white leading-relaxed"
                  variants={fadeInUp(0.8)}
              >
                Connecting Enterprises, Homes, and Cities with <br className="hidden sm:block" />
                Light Speed Precision.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Next-Gen Optical Wireless Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
              className="container mx-auto max-w-4xl text-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
          >
            <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-4 sm:mb-6 font-oswald leading-tight"
                variants={fadeInUp(0.2)}
            >
              Next-Gen Optical Wireless
            </motion.h2>
            <motion.p
                className="text-base sm:text-lg lg:text-xl font-sans text-gray-600 leading-relaxed max-w-3xl mx-auto"
                variants={fadeInUp(0.4)}
            >
              Revolutionizing telecommunications with cutting-edge FSO and LiFi
              technologies. Ultra-fast, license-free, fiberless solutions for the
              5G and 6G era.
            </motion.p>
          </motion.div>
        </section>

        {/* OpticSpectra Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
              {/* Left Content */}
              <motion.div
                  className="w-full lg:w-1/2 order-2 lg:order-1"
                  variants={fadeInLeft(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <motion.div
                    className="mb-6 sm:mb-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  <motion.p
                      className="text-sm sm:text-base font-sans text-black mb-3 uppercase tracking-wide"
                      variants={fadeInUp(0.2)}
                  >
                    Ultra Fast • License-Free • Fiberless
                  </motion.p>
                  <motion.h3
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oswald font-semibold text-black mb-4 sm:mb-6"
                      variants={fadeInUp(0.4)}
                  >
                    OpticSpectra
                  </motion.h3>
                  <motion.p
                      className="text-sm sm:text-base lg:text-lg font-sans text-gray-600 leading-relaxed"
                      variants={fadeInUp(0.6)}
                  >
                    Conventional FSO systems have long been limited by
                    environmental sensitivity and link instability. NavTech's
                    advanced FSO architecture redefines this paradigm, delivering
                    a deterministic optical wireless transport layer with
                    guaranteed performance.
                  </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                    variants={gridStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  {[
                    {
                      title: "Phase Correction",
                      desc: "Real-time compensation technology",
                    },
                    {
                      title: "Beam Steering",
                      desc: "Adaptive environmental adjustment",
                    },
                    {
                      title: "Sub-ms Response",
                      desc: "Lightning-fast alignment correction",
                    },
                    {
                      title: "Weather Proof",
                      desc: "No performance loss in conditions",
                    },
                    { title: "5G/6G Ready", desc: "Built for next-gen backhaul" },
                    {
                      title: "Zero Infrastructure",
                      desc: "No fiber or trenching required",
                    },
                  ].map((item, i) => (
                      <motion.div
                          key={i}
                          className="border border-[#95C149] bg-[#95C149]/10 p-4 sm:p-5 h-[80px] sm:h-[100px] flex flex-col justify-between rounded-lg"
                          variants={scaleIn(0.1 * i)}
                      >
                        <h4 className="text-sm sm:text-base font-oswald font-semibold text-black">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                  className="w-full lg:w-1/2 order-1 lg:order-2"
                  variants={fadeInRight(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] bg-gray-300 group rounded-lg overflow-hidden">
                  <Image
                      src="/images/tele2.jpg"
                      alt="Telecom towers"
                      width={519}
                      height={680}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NavOcular Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
              {/* Left Image */}
              <motion.div
                  className="w-full lg:w-1/2 order-1 lg:order-1"
                  variants={fadeInLeft(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-300 group rounded-lg overflow-hidden">
                  <Image
                      src="/images/NavOcular_telecom.jpg"
                      alt="Satellite dishes"
                      width={519}
                      height={650}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                  className="w-full lg:w-1/2 order-2 lg:order-2"
                  variants={fadeInRight(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <motion.div
                    className="mb-6 sm:mb-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  <motion.p
                      className="text-sm sm:text-base font-sans text-black mb-3 uppercase tracking-wide"
                      variants={fadeInUp(0.2)}
                  >
                    Light Fidelity • Seamless Indoor Telecom
                  </motion.p>
                  <motion.h3
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oswald font-semibold text-black mb-4 sm:mb-6"
                      variants={fadeInUp(0.4)}
                  >
                    NavOcular
                  </motion.h3>
                  <motion.p
                      className="text-sm sm:text-base lg:text-lg font-sans text-gray-600 leading-relaxed"
                      variants={fadeInUp(0.6)}
                  >
                    Groundbreaking VLC technology using LED light for high-speed,
                    secure wireless data transmission. Perfect for dense
                    environments where WiFi is congested or RF is restricted,
                    offering uninterrupted high-capacity data layers.
                  </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                    variants={gridStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  {[
                    {
                      title: "VLC Technology",
                      desc: "Visible Light Communication",
                    },
                    {
                      title: "High Security",
                      desc: "Light-contained data transmission",
                    },
                    {
                      title: "RF-Free Zones",
                      desc: "Perfect for restricted environments",
                    },
                    {
                      title: "Dual Purpose",
                      desc: "Lighting + data infrastructure",
                    },
                    {
                      title: "Mission Critical",
                      desc: "Defense, healthcare, aviation ready",
                    },
                    { title: "6G Zones", desc: "Future-ready optical wireless" },
                  ].map((item, i) => (
                      <motion.div
                          key={i}
                          className="border border-[#95C149] bg-[#95C149]/10 p-4 sm:p-5 h-[80px] sm:h-[100px] flex flex-col justify-between rounded-lg"
                          variants={scaleIn(0.1 * i)}
                      >
                        <h4 className="text-sm sm:text-base font-oswald font-semibold text-black">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm font-sans text-gray-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  );
}