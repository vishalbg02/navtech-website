"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import TiltedCard from "@/components/utils/TiltedCardProps"
import BlurText from "@/components/utils/BlurTextProps"
import SplitText from "@/components/utils/SplitTextProps"

export default function GovernmentPage() {
  // Refs for scroll-triggered animations
  const heroRef = useRef<HTMLElement>(null)
  const introRef = useRef<HTMLElement>(null)
  const secureNetworksRef = useRef<HTMLElement>(null)
  const smartGovernanceRef = useRef<HTMLElement>(null)
  const disasterResilientRef = useRef<HTMLElement>(null)
  const educationHealthRef = useRef<HTMLElement>(null)
  const footerRef = useRef<HTMLElement>(null)

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" })
  const introInView = useInView(introRef, { once: true, margin: "-100px" })
  const secureNetworksInView = useInView(secureNetworksRef, {
    once: true,
    margin: "-100px",
  })
  const smartGovernanceInView = useInView(smartGovernanceRef, {
    once: true,
    margin: "-100px",
  })
  const disasterResilientInView = useInView(disasterResilientRef, {
    once: true,
    margin: "-100px",
  })
  const educationHealthInView = useInView(educationHealthRef, {
    once: true,
    margin: "-100px",
  })
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" })

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const parentVariant = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: {},
  }

  const imageVariantLeft = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  }

  const imageVariantRight = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  }

  return (
      <div className="min-h-screen bg-white text-black font-['Manrope',sans-serif] overflow-x-hidden">
        <main>
          {/* Hero Section */}
          <section
              ref={heroRef}
              className="min-h-screen relative flex items-center pt-0"
              style={{
                backgroundImage: "url('/images/gov1.jpg?height=1080&width=1920&text=Government+Building')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-75" />
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
                <motion.div
                    className="max-w-4xl w-full text-center lg:text-left"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={heroInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <BlurText
                      text="Government"
                      delay={150}
                      animateBy="words"
                      direction="bottom"
                      className="font-oswald font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-tight text-white mb-4"
                  />
                  <SplitText
                      text="Empowering Governance with Next-Gen Optical Wireless Communications (OWC)"
                      className="text-lg sm:text-xl lg:text-2xl font-light text-white max-w-3xl mx-auto lg:mx-0"
                      delay={100}
                      duration={0.9}
                      ease="power3.out"
                      splitType="lines"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="left"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Introduction Section */}
          <section ref={introRef} className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <motion.div
                  className="text-center max-w-5xl mx-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={introInView ? "visible" : "hidden"}
              >
                <motion.h2
                    className="font-oswald font-semibold text-2xl sm:text-3xl lg:text-4xl leading-normal mb-6 mx-auto"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Enabling India's Critical Sectors with Optical <span style={{ color: "#95C149" }}>Wireless</span>{" "}
                  Innovation
                </motion.h2>
                <motion.p
                    className="text-gray-600 leading-relaxed text-base sm:text-lg mx-auto max-w-4xl px-4"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                    }}
                    variants={fadeInUp}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  From defense to disaster zones, smart cities to schools—LiFi and FSO technologies deliver secure,
                  high-speed, and resilient communication for the nation's most vital operations.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Secure Communication Networks */}
          <section ref={secureNetworksRef} className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-0">
                {/* Left: Text Content */}
                <motion.div
                    className="px-4 sm:px-6 lg:pl-8 xl:pl-[120px] order-2 lg:order-1"
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={secureNetworksInView ? "visible" : "hidden"}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                  <div className="mb-6">
                    <h3 className="font-oswald font-semibold text-2xl sm:text-3xl lg:text-4xl relative z-10">
                    <span
                        style={{
                          backgroundColor: "#95C149",
                          color: "#fff",
                          padding: "4px 10px",
                          borderRadius: "4px",
                          display: "inline-block",
                        }}
                    >
                      Secure
                    </span>{" "}
                      Communication Networks
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p
                        className="leading-relaxed text-sm sm:text-base"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                          color: "#000",
                        }}
                    >
                      <strong>Home Affairs, and Intelligence Services:</strong>
                      <br />
                      Enable tamper-proof, RF-free communication that is immune to jamming and interception.
                    </p>
                    <p
                        className="leading-relaxed text-sm sm:text-base"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                          color: "#000",
                        }}
                    >
                      <strong>Police & Paramilitary Installations:</strong>
                      <br />
                      Ensure secure intra-unit communications in urban and border deployments using LiFi and FSO.
                    </p>
                  </div>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                    className="relative h-[300px] sm:h-[400px] lg:h-[441px] w-full overflow-hidden flex justify-center items-center order-1 lg:order-2"
                    variants={fadeInRight}
                    initial="hidden"
                    animate={secureNetworksInView ? "visible" : "hidden"}
                >
                  <TiltedCard
                      imageSrc="/images/Secure Communication Networks.jpeg"
                      altText="Secure Communication Networks"
                      captionText="Secure Communication Networks"
                      containerHeight="100%"
                      containerWidth="100%"
                      imageHeight="110%"
                      imageWidth="100%"
                      rotateAmplitude={14}
                      scaleOnHover={1.1}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={true}
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Smart Governance & Digital Infrastructure */}
          <section ref={smartGovernanceRef} className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                {/* Left Column: Heading */}
                <motion.div
                    className="flex items-start lg:items-center text-center lg:text-left"
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={smartGovernanceInView ? "visible" : "hidden"}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-oswald font-semibold">
                    Smart Governance & Digital Infrastructure
                  </h3>
                </motion.div>

                {/* Center Column: Image */}
                <motion.div
                    className="relative h-[300px] sm:h-[400px] lg:h-[451px] overflow-hidden flex items-center justify-center"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={smartGovernanceInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <TiltedCard
                      imageSrc="/images/Smart Government.jpeg"
                      altText="Smart Governance"
                      captionText="Smart Governance"
                      containerHeight="110%"
                      containerWidth="110%"
                      imageHeight="100%"
                      imageWidth="100%"
                      rotateAmplitude={14}
                      scaleOnHover={1.1}
                      showMobileWarning={false}
                      showTooltip={false}
                      displayOverlayContent={true}
                  />
                </motion.div>

                {/* Right Column: Text */}
                <motion.div
                    className="flex flex-col justify-center lg:justify-end space-y-4"
                    variants={fadeInRight}
                    initial="hidden"
                    animate={smartGovernanceInView ? "visible" : "hidden"}
                >
                  <p
                      className="text-sm sm:text-base leading-relaxed text-gray-700"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    <strong className="text-black text-base sm:text-lg">Smart Cities:</strong>
                    <br />
                    Power streetlights, traffic systems, surveillance cameras, and environmental sensors with LiFi-enabled
                    data links.
                  </p>
                  <p
                      className="text-sm sm:text-base leading-relaxed text-gray-700"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    <strong className="text-black text-base sm:text-lg">E-Governance Centres:</strong>
                    <br />
                    Deploy high-speed indoor LiFi zones for real-time citizen services and data processing.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Disaster-Resilient Communication */}
          <section ref={disasterResilientRef} className="py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Left Image */}
                <motion.div
                    className="relative h-[250px] sm:h-[350px] lg:h-[461px] rounded-lg overflow-hidden order-1"
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={disasterResilientInView ? "visible" : "hidden"}
                >
                  <Image
                      src="/images/gov5.jpg?height=461&width=344&text=Disaster+Zone"
                      alt="Disaster Zone"
                      fill
                      className="object-cover"
                  />
                </motion.div>

                {/* Center Text */}
                <motion.div
                    className="text-center order-3 lg:order-2"
                    variants={fadeInUp}
                    initial="hidden"
                    animate={disasterResilientInView ? "visible" : "hidden"}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-oswald font-semibold mb-6">
                    Disaster-Resilient Communication
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                      <strong className="text-black text-base sm:text-lg">
                        Emergency Response and DRDO Deployments:
                      </strong>
                      <br />
                      Set up rapid, wireless optical links in post-disaster zones where traditional networks fail.
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                      <strong className="text-black text-base sm:text-lg">Rural and Remote Connectivity:</strong>
                      <br />
                      FSO bridges can eliminate the need for fiber laying, connecting government outposts in hilly,
                      forested, or coastal regions.
                    </p>
                  </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="relative h-[250px] sm:h-[350px] lg:h-[461px] rounded-lg overflow-hidden order-2 lg:order-3"
                    variants={fadeInRight}
                    initial="hidden"
                    animate={disasterResilientInView ? "visible" : "hidden"}
                >
                  <Image src="/images/rural.jpg" alt="Rural Landscape" fill className="object-cover" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Educational & Health Institutions */}
          <section ref={educationHealthRef} className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              {/* Motion wrapper for parent animation */}
              <motion.div
                  className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8"
                  variants={parentVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
              >
                {/* Left Image */}
                <motion.div
                    className="group relative h-[200px] sm:h-[240px] lg:h-[280px] rounded-lg overflow-hidden"
                    variants={imageVariantLeft}
                    initial="hidden"
                    animate={educationHealthInView ? "visible" : "hidden"}
                    transition={{ duration: 2, ease: [0.6, 0.01, 0.05, 0.9] }}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/30 to-transparent group-hover:from-black/50 transition duration-500" />
                  <Image
                      src="/images/gov8.jpg"
                      alt="Educational Institution"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                {/* Right Image */}
                <motion.div
                    className="group relative h-[200px] sm:h-[240px] lg:h-[280px] rounded-lg overflow-hidden"
                    variants={imageVariantRight}
                    initial="hidden"
                    animate={educationHealthInView ? "visible" : "hidden"}
                    transition={{ duration: 2, ease: [0.6, 0.01, 0.05, 0.9] }}
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/30 to-transparent group-hover:from-black/50 transition duration-500" />
                  <Image
                      src="/images/gov7.jpg"
                      alt="Health Institution"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              </motion.div>

              {/* Content below the grid */}
              <motion.div
                  className="text-center max-w-4xl mx-auto"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-oswald font-semibold mb-6">
                  Education & Health Institutions
                </h2>
                <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-black">Digital Classrooms in Government Schools:</strong>
                    <br />
                    Use LiFi to provide fast, radiation-free internet in rural classrooms.
                  </p>
                  <p>
                    <strong className="text-black">Telemedicine & e-Hospitals:</strong>
                    <br />
                    Secure, interference-free wireless data for medical diagnostics, patient records, and real-time
                    specialist consultations.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
  )
}
