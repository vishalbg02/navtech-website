"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import type React from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/footer";
import CTASection from "@/components/CTASection";
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
      staggerChildren: 0.2,
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

export default function ApplicationsPage() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: "white",
      }}
    >
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/app1.png"
            alt="Hands typing on laptop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl">
            <BlurText
              text="FUTURISTIC APPLICATION"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-[100px] px-[120px]">
        <motion.div
          className="max-w-[807px] mx-auto text-center"
          variants={fadeInUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] font-bold leading-[44px] text-black mb-6">
            Our Solutions for End Customers
          </h2>
          <p className="text-[18px] font-light leading-[22px] text-[#565656]">
            We bridge communication gaps in diverse environments through LiFi
            and FSO, offering reliable, high-speed wireless solutions where
            traditional networks fall short.
          </p>
        </motion.div>
      </section>

      {/* Private Secure Mobile Payments */}
      <section className="px-[120px] mb-[50px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="relative mb-6"
            variants={fadeInLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[36px] font-bold leading-[44px] text-black">
              Private,{" "}
              <span className="bg-[#95C149] text-white px-2">Secure</span>{" "}
              Mobile Payments
            </h3>
          </motion.div>
          <motion.p
            className="text-[18px] font-light leading-[22px] text-[#565656] max-w-[786px] mb-8"
            variants={fadeInLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            LiFi enables line-of-sight, light-based communication between
            smartphones and payment terminals, creating a secure channel that's
            resistant to wireless interception or eavesdropping.
          </motion.p>
          <motion.div
            className="w-full h-[364px] relative overflow-hidden"
            variants={scaleIn(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/images/app2.jpg"
              alt="Mobile Payment with NFC Technology"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mobile to Mobile File Sharing */}
      <section className="px-[120px] py-[50px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-[89px]">
            <motion.div
              className="w-[575px] h-[450px] relative"
              variants={fadeInLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/app3.png"
                alt="Mobile File Sharing"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              className="w-[536px]"
              variants={fadeInRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-[42px] font-bold leading-[51px] text-black mb-2">
                Mobile to Mobile File Sharing
              </h3>
              <p className="text-[18px] font-light leading-[22px] text-[#565656]">
                Smartphones equipped with LiFi can exchange files securely
                through light beams, without relying on Wi-Fi or Bluetooth,
                ensuring fast and discreet data transfer.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LiFi-Enabled In-Vehicle Connectivity */}
      <section className="px-[120px] py-[50px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="relative w-full h-[433px] bg-black overflow-hidden"
            style={{ transform: "scaleX(-1)" }}
            variants={scaleIn(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/images/app5.jpg"
              alt="Modern Car Interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <motion.div
              className="absolute bottom-[39px] left-5 w-[422px]"
              style={{ transform: "scaleX(-1)" }}
              variants={fadeInLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-[42px] font-bold leading-[51px] text-white mb-2">
                LiFi-Enabled In-Vehicle Connectivity
              </h3>
              <p className="text-[18px] font-light leading-[22px] text-white">
                Cabin lights embedded with LiFi modules can deliver
                entertainment, updates, and connectivity to passenger devices
                without adding RF interference to sensitive vehicle electronics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* High-Bandwidth AR/VR Streaming */}
      <section className="px-[103px] py-[50px]">
        <div className="max-w-[1217px] mx-auto">
          <div className="flex items-center gap-[34px]">
            <motion.div
              className="w-[747px] h-[598px] relative"
              variants={fadeInLeft(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/app6.png"
                alt="AR/VR Technology"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              className="w-[436px]"
              variants={fadeInRight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-[42px] font-bold leading-[51px] text-black mb-2">
                High-Bandwidth AR/VR Streaming
              </h3>
              <p className="text-[18px] font-light leading-[22px] text-[#565656]">
                LiFi supports immersive mobile AR/VR applications by delivering
                stable, ultra-fast optical connectivity needed for rich visual
                content and low-latency interaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum-Safe Communication Layer */}
      <section className="w-full h-[394px] relative">
        <Image
          src="/images/app7.jpg"
          alt="Global Network Connection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="absolute left-[120px] top-[41px] w-[780px]"
          variants={fadeInLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-[42px] font-bold leading-[51px] text-white mb-2">
            Quantum-Safe Communication Layer
          </h3>
        </motion.div>
        <motion.div
          className="absolute left-[120px] top-[105px] w-[600px]"
          variants={fadeInLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[18px] font-light leading-[22px] text-white">
            The highly directional and confined nature of LiFi makes it a strong
            candidate for future mobile encryption systems, including
            physical-layer secured optical channels.
          </p>
        </motion.div>
      </section>

      {/* LiFi-Enabled V2V and V2X Communication */}
      <section className="px-[49px] py-[100px]">
        <div className="max-w-[1342px] mx-auto">
          <motion.div
            className="text-center mb-[50px]"
            variants={fadeInUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-[42px] font-bold leading-[51px] text-black mb-2">
              LiFi-Enabled V2V and V2X Communication
            </h3>
            <p className="text-[18px] font-light leading-[22px] text-[#565656] max-w-[702px] mx-auto">
              LiFi enables ultra-fast, line-of-sight communication between
              vehicles (V2V) and with surrounding infrastructure (V2X),
              supporting real-time data exchange for navigation, collision
              avoidance, and situational awareness, without emitting RF signals
              that can interfere or be intercepted.
            </p>
          </motion.div>
          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <motion.div
                className="w-[580px] h-[439px] relative"
                variants={fadeInRight(0.3)}
              >
                <Image
                  src="/images/app8.png"
                  alt="Blue SUV Car"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                className="w-[500px] h-[424px] relative"
                variants={fadeInRight(0.7)}
              >
                <Image
                  src="/images/app9.png"
                  alt="Orange City Car"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
            <motion.div
              className="absolute top-[230px] left-[590px] transform -translate-x-1/2 -translate-y-1/2"
              variants={fadeInRight(0.5)}
            >
              <div className="relative flex items-center w-[200px]">
                {/* Left Arrow (←) */}
                <div className="w-0 h-0 border-y-[5px] border-r-[8px] border-y-transparent border-r-[#95C149]"></div>

                {/* Dashed Line */}
                <div className="flex-1 h-0 border-t-[1.5px] border-dashed border-[#95C149]"></div>

                {/* Right Arrow (→) */}
                <div className="w-0 h-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#95C149]"></div>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LiFi as Replacement for Wire Harnessing */}
      <section className="px-[120px] py-[50px]">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="bg-[#95C149] p-[25px] flex items-center gap-[67px] min-h-[481px]"
            variants={scaleIn(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="w-[436px]"
              variants={fadeInLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-[42px] font-bold leading-[51px] text-white mb-2">
                LiFi as Replacement for Wire Harnessing
              </h3>
              <p className="text-[18px] font-light leading-[22px] text-white">
                LiFi significantly reduces the need for bulky wiring by enabling
                high-speed, light-based data transmission between components.
                Ideal for spacecraft and modern vehicles where space, weight,
                and EMI resistance are critical, simplifying design while
                improving reliability.
              </p>
            </motion.div>
            <motion.div
              className="w-[596px] h-[444px] relative"
              variants={fadeInRight(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/images/app10.jpg"
                alt="View from Spaceship"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.div
        variants={fadeInUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <CTASection />
      </motion.div>

      <Footer />
    </div>
  );
}
