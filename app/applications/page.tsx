"use client";

import Image from "next/image";
import Navbar from "@/components/navbar";
import type React from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/footer";
import BlurText from "@/components/utils/BlurTextProps";
import { motion } from "framer-motion";
import TiltedCard from "@/components/utils/TiltedCardProps";

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
          className="relative min-h-screen overflow-hidden"
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

          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="max-w-4xl">
              <BlurText
                  text="FUTURISTIC APPLICATION"
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-oswald font-semibold leading-tight text-white"
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-bounce mx-auto" />
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[120px]">
          <motion.div
              className="max-w-[807px] mx-auto text-center"
              variants={fadeInUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oswald font-semibold leading-tight text-black mb-4 md:mb-6">
              Our Solutions for End Customers
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed text-[#565656]">
              We bridge communication gaps in diverse environments through LiFi
              and FSO, offering reliable, high-speed wireless solutions where
              traditional networks fall short.
            </p>
          </motion.div>
        </section>

        {/* Private Secure Mobile Payments */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[120px] mb-8 md:mb-12 lg:mb-[50px]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
                className="relative mb-4 md:mb-6"
                variants={fadeInLeft(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-oswald font-semibold leading-tight text-black">
                Private,{" "}
                <span className="bg-[#95C149] text-white px-1 sm:px-2">Secure</span>{" "}
                Mobile Payments
              </h3>
            </motion.div>
            <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed text-[#565656] max-w-[786px] mb-6 md:mb-8"
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
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[364px] relative overflow-hidden rounded-lg"
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
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[120px] py-8 md:py-12 lg:py-[50px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-[89px]">
              <motion.div
                  className="w-full lg:w-[575px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] relative order-2 lg:order-1"
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
                  className="w-full lg:w-[536px] order-1 lg:order-2 text-center lg:text-left"
                  variants={fadeInRight(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-oswald font-semibold leading-tight text-black mb-2 md:mb-4">
                  Mobile to Mobile File Sharing
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed text-[#565656]">
                  Smartphones equipped with LiFi can exchange files securely
                  through light beams, without relying on Wi-Fi or Bluetooth,
                  ensuring fast and discreet data transfer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LiFi-Enabled In-Vehicle Connectivity */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[120px] py-8 md:py-12 lg:py-[50px]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
                className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[433px] bg-black overflow-hidden rounded-lg"
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
                  className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[39px] left-4 sm:left-6 md:left-8 lg:left-5 right-4 sm:right-6 md:right-8 lg:right-auto lg:w-[422px]"
                  variants={fadeInLeft(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[42px] font-oswald font-semibold leading-tight text-white mb-1 sm:mb-2 md:mb-4">
                  LiFi-Enabled In-Vehicle Connectivity
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-sans leading-relaxed text-white">
                  Cabin lights embedded with LiFi modules can deliver
                  entertainment, updates, and connectivity to passenger devices
                  without adding RF interference to sensitive vehicle electronics.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* High-Bandwidth AR/VR Streaming */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[103px] py-8 md:py-12 lg:py-[50px]">
          <div className="max-w-[1217px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-[34px]">
              <motion.div
                  className="w-full lg:w-[747px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[598px] relative order-2 lg:order-1"
                  variants={fadeInLeft(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <TiltedCard
                    imageSrc="/images/app6.png"
                    altText="AR/VR Technology"
                    captionText="AR/VR Technology"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={14}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                />
              </motion.div>
              <motion.div
                  className="w-full lg:w-[436px] order-1 lg:order-2 text-center lg:text-left"
                  variants={fadeInRight(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-oswald font-semibold leading-tight text-black mb-2 md:mb-4">
                  High-Bandwidth AR/VR Streaming
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed text-[#565656]">
                  LiFi supports immersive mobile AR/VR applications by delivering
                  stable, ultra-fast optical connectivity needed for rich visual
                  content and low-latency interaction.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quantum-Safe Communication Layer */}
        <section className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[394px] relative">
          <Image
              src="/images/app7.jpg"
              alt="Global Network Connection"
              fill
              className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[120px]">
            <motion.div
                className="max-w-[780px]"
                variants={fadeInLeft(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[42px] font-oswald font-semibold leading-tight text-white mb-1 sm:mb-2 md:mb-4">
                Quantum-Safe Communication Layer
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-sans leading-relaxed text-white max-w-[600px]">
                The highly directional and confined nature of LiFi makes it a strong
                candidate for future mobile encryption systems, including
                physical-layer secured optical channels.
              </p>
            </motion.div>
          </div>
        </section>

        {/* LiFi-Enabled V2V and V2X Communication */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-[49px] py-12 sm:py-16 md:py-20 lg:py-[100px]">
          <div className="max-w-[1342px] mx-auto">
            <motion.div
                className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-[50px]"
                variants={fadeInUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-oswald font-semibold leading-tight lg:leading-[51px] text-black mb-2 px-2 lg:px-0">
                LiFi-Enabled V2V and V2X Communication
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-sans leading-relaxed lg:leading-[22px] text-[#565656] max-w-[702px] mx-auto px-2 lg:px-0">
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
              {/* Mobile/Tablet Layout (below lg) */}
              <div className="flex justify-between items-center lg:hidden">
                <motion.div
                    className="w-[140px] h-[106px] sm:w-[200px] sm:h-[151px] md:w-[280px] md:h-[212px] relative flex-shrink-0"
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
                    className="w-[120px] h-[102px] sm:w-[170px] sm:h-[144px] md:w-[240px] md:h-[204px] relative flex-shrink-0"
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

              {/* Mobile Arrow (below lg) - Positioned between left and center */}
              <motion.div
                  className="absolute lg:hidden"
                  style={{
                    top: '50%',
                    left: '47%',
                    transform: 'translate(-50%, -50%)'
                  }}
                  variants={fadeInRight(0.5)}
              >
                <div className="relative flex items-center w-[40px] sm:w-[50px] md:w-[60px] z-10">
                  {/* Left Arrow (←) */}
                  <div className="w-0 h-0 border-y-[2px] sm:border-y-[2.5px] md:border-y-[3px] border-r-[3px] sm:border-r-[4px] md:border-r-[5px] border-y-transparent border-r-[#95C149]"></div>

                  {/* Dashed Line */}
                  <div className="flex-1 h-0 border-t-[0.8px] sm:border-t-[1px] md:border-t-[1.2px] border-dashed border-[#95C149]"></div>

                  {/* Right Arrow (→) */}
                  <div className="w-0 h-0 border-y-[2px] sm:border-y-[2.5px] md:border-y-[3px] border-l-[3px] sm:border-l-[4px] md:border-l-[5px] border-y-transparent border-l-[#95C149]"></div>
                </div>
              </motion.div>

              {/* Desktop Layout (lg and above) - UNCHANGED */}
              <div className="hidden lg:flex justify-between items-center">
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

              {/* Desktop Arrow (lg and above) - UNCHANGED */}
              <motion.div
                  className="hidden lg:block absolute top-[230px] left-[590px] transform -translate-x-1/2 -translate-y-1/2"
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
        <section className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[120px] py-8 md:py-12 lg:py-[50px]">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
                className="bg-[#95C149] p-4 sm:p-6 md:p-8 lg:p-[25px] rounded-lg"
                variants={scaleIn(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-[67px] min-h-[300px] lg:min-h-[481px]">
                <motion.div
                    className="w-full lg:w-[436px] text-center lg:text-left order-2 lg:order-1"
                    variants={fadeInLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-oswald font-semibold leading-tight text-white mb-2 md:mb-4">
                    LiFi as Replacement for Wire Harnessing
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed text-white">
                    LiFi significantly reduces the need for bulky wiring by enabling
                    high-speed, light-based data transmission between components.
                    Ideal for spacecraft and modern vehicles where space, weight,
                    and EMI resistance are critical, simplifying design while
                    improving reliability.
                  </p>
                </motion.div>
                <motion.div
                    className="w-full lg:w-[596px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[444px] relative order-1 lg:order-2 rounded-lg overflow-hidden"
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
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
  );
}