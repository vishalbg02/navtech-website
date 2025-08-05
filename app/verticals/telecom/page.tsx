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
        className="h-screen relative flex items-center pt-0"
        style={{
          backgroundImage:
            "url('/images/Telecom.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[120px] w-full">
          <motion.div
            className="max-w-2xl"
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
                className="text-6xl lg:text-8xl font-oswald font-semibold uppercase leading-tight text-white mb-4"
              />
            </motion.div>
            <motion.p
              className="text-xl lg:text-2xl font-sans text-white"
              variants={fadeInUp(0.8)}
            >
              Connecting Enterprises, Homes, and Cities with <br />
              Light Speed Precision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Next-Gen Optical Wireless Section */}
      <section className="py-16 px-8">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-semibold text-black mb-6 font-oswald"
            variants={fadeInUp(0.2)}
          >
            Next-Gen Optical Wireless
          </motion.h2>
          <motion.p
            className="text-lg font-sans text-gray-600 leading-[22px]"
            variants={fadeInUp(0.4)}
          >
            Revolutionizing telecommunications with cutting-edge FSO and LiFi
            technologies. Ultra-fast, license-free, fiberless solutions for the
            5G and 6G era.
          </motion.p>
        </motion.div>
      </section>

      {/* OpticSpectra Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div
              className="lg:w-1/2"
              variants={fadeInLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-base font-sans text-black mb-3"
                  variants={fadeInUp(0.2)}
                >
                  Ultra Fast • License-Free • Fiberless
                </motion.p>
                <motion.h3
                  className="text-3xl font-oswald font-semibold text-black mb-4"
                  variants={fadeInUp(0.4)}
                >
                  OpticSpectra
                </motion.h3>
                <motion.p
                  className="text-base font-sans text-gray-600 leading-[22px]"
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
                className="grid grid-cols-2 gap-4"
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
                    className="border border-[#95C149] bg-[#95C149]/10 p-5 h-[100px] flex flex-col justify-between"
                    variants={scaleIn(0.1 * i)}
                  >
                    <h4 className="text-base font-oswald font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="text-sm font-sans text-gray-600 leading-[20px]">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="lg:w-1/2"
              variants={fadeInRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-full h-[650px] bg-gray-300">
                <Image
                  src="/images/tele2.jpg?height=680&width=519"
                  alt="Telecom towers"
                  width={519}
                  height={680}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NavOcular Section */}
      <section className="pt-12 pb-28 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <motion.div
              className="lg:w-1/2"
              variants={fadeInLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="w-full h-[600px] bg-gray-300">
                <Image
                  src="/images/tele3.jpg?height=680&width=519"
                  alt="Satellite dishes"
                  width={519}
                  height={650}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="lg:w-1/2"
              variants={fadeInRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="mb-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p
                  className="text-base font-sans text-black mb-3"
                  variants={fadeInUp(0.2)}
                >
                  Light Fidelity • Seamless Indoor Telecom
                </motion.p>
                <motion.h3
                  className="text-3xl font-oswald font-semibold text-black mb-4"
                  variants={fadeInUp(0.4)}
                >
                  NavOcular
                </motion.h3>
                <motion.p
                  className="text-base font-sans text-gray-600 leading-[22px]"
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
                className="grid grid-cols-2 gap-4"
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
                    className="border border-[#95C149] bg-[#95C149]/10 p-5 h-[100px] flex flex-col justify-between"
                    variants={scaleIn(0.1 * i)}
                  >
                    <h4 className="text-base font-oswald font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="text-sm font-sans text-gray-600 leading-[20px]">
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
