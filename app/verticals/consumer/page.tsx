"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import BlurText from "@/components/utils/BlurTextProps";
import SplitText from "@/components/utils/SplitTextProps";
import TiltedCard from "@/components/utils/TiltedCardProps";

export default function ConsumerPage() {
  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const enterpriseRef = useRef(null);
  const smartLivingRef = useRef(null);
  const healthcareRef = useRef(null);
  const educationRef = useRef(null);
  const industrialRef = useRef(null);
  const smartCitiesRef = useRef(null);
  const footerRef = useRef(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const enterpriseInView = useInView(enterpriseRef, {
    once: true,
    margin: "-100px",
  });
  const smartLivingInView = useInView(smartLivingRef, {
    once: true,
    margin: "-100px",
  });
  const healthcareInView = useInView(healthcareRef, {
    once: true,
    margin: "-100px",
  });
  const educationInView = useInView(educationRef, {
    once: true,
    margin: "-100px",
  });
  const industrialInView = useInView(industrialRef, {
    once: true,
    margin: "-100px",
  });
  const smartCitiesInView = useInView(smartCitiesRef, {
    once: true,
    margin: "-100px",
  });
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Animation variants
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

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

  return (
    <div className="min-h-screen bg-white text-black font-['Manrope',sans-serif] overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="h-screen relative flex items-center pt-0"
          style={{
            backgroundImage:
              "url('/images/cons.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[120px] w-full">
            <motion.div
              className="max-w-2xl"
              variants={staggerContainer}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <BlurText
                text="Consumer"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-6xl lg:text-8xl font-oswald font-semibold uppercase leading-tight text-white mb-4"
              />
              <SplitText
                text="Integrate the Future: LiFi Optical Transceivers for Your
                Products"
                className="text-xl lg:text-2xl font-sans text-white"
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
        </section>

        {/* Introduction Section */}
        <section ref={introRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="font-oswald font-semibold text-5xl mb-6"
                variants={fadeInUp}
              >
                Our Solutions for End Customers
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed"
                style={{
                  fontSize: "18px",
                  fontFamily: "Manrope, sans-serif",
                }}
                variants={fadeInUp}
              >
                We bridge communication gaps in diverse environments through
                LiFi and FSO, offering reliable, high-speed wireless solutions
                where traditional networks fall short.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Enterprise & Corporate Section */}
        <section ref={enterpriseRef} className="py-20">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={enterpriseInView ? "visible" : "hidden"}
            >
              <motion.div className="mb-12" variants={fadeInUp}>
                <h3 className="font-oswald font-semibold text-5xl mb-2">
                  Enterprise & Corporate
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "18px",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  Ultra-secure, high-speed connectivity for mission-critical
                  business environments
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div className="text-center" variants={fadeInLeft}>
                  <div className="relative h-[235px] rounded-lg overflow-hidden mb-5 group">
                    <Image
                      src="/images/cons1.jpg?height=235&width=380&text=Office+Building"
                      alt="Office Building"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                      color: "#000",
                    }}
                  >
                    High-speed LiFi networks for secure data zones
                  </p>
                </motion.div>

                <motion.div className="text-center" variants={fadeInUp}>
                  <div className="relative h-[235px] rounded-lg overflow-hidden mb-5 group">
                    <Image
                      src="/images/cons2.jpg?height=235&width=382&text=Data+Center"
                      alt="Data Center"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                      color: "#000",
                    }}
                  >
                    FSO backhaul links between buildings without fiber trenching
                  </p>
                </motion.div>

                <motion.div className="text-center" variants={fadeInRight}>
                  <div className="relative h-[235px] rounded-lg overflow-hidden mb-5 group">
                    <Image
                      src="/images/cons3.jpg?height=235&width=380&text=Business+Meeting"
                      alt="Business Meeting"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                      color: "#000",
                    }}
                  >
                    Perfect for finance, legal, data centers, and R&D facilities
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Smart Living Spaces Section */}
        <section ref={smartLivingRef} className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px]">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={smartLivingInView ? "visible" : "hidden"}
            >
              <motion.div className="mb-8 sm:mb-10 lg:mb-12 text-center sm:text-left" variants={fadeInUp}>
                <h3 className="font-oswald font-semibold text-3xl sm:text-4xl lg:text-5xl mb-2 leading-tight">
                  Smart Living Spaces
                </h3>
                <p
                    className="text-gray-600 max-w-2xl mx-auto sm:mx-0"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Manrope, sans-serif",
                    }}
                >
                  Intelligent lighting systems that deliver internet without
                  electromagnetic interference
                </p>
              </motion.div>

              <motion.div
                  className="relative h-[300px] sm:h-[400px] lg:h-[493px] rounded-lg overflow-hidden"
                  style={{
                    backgroundImage:
                        "url('/images/cons4.jpg?height=493&width=1200&text=Smart+Home+Tech')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  variants={scaleIn}
              >
                {/* Mobile Layout - Tiny cards on left top */}
                <div className="absolute top-2 left-2 z-10 space-y-1 max-w-[180px] sm:hidden">
                  <motion.div
                      className="border border-white rounded px-1 py-0.5 text-white bg-black bg-opacity-40 backdrop-blur-sm"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-[8px] leading-tight"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      LiFi-enabled lighting for radiation-free internet
                    </p>
                  </motion.div>

                  <motion.div
                      className="border border-white rounded px-1 py-0.5 text-white bg-black bg-opacity-40 backdrop-blur-sm"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-[8px] leading-tight"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      Secure communication eliminating Wi-Fi congestion
                    </p>
                  </motion.div>

                  <motion.div
                      className="border border-white rounded px-1 py-0.5 text-white bg-black bg-opacity-40 backdrop-blur-sm"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-[8px] leading-tight"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      Seamless IoT integration and home automation
                    </p>
                  </motion.div>
                </div>

                {/* Tablet Layout - Small cards on left top */}
                <div className="hidden sm:block lg:hidden absolute top-5 left-5 z-10 space-y-2.5 max-w-[300px]">
                  <motion.div
                      className="border border-white rounded-lg px-3 py-2 text-white bg-black bg-opacity-20 backdrop-blur-sm"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      LiFi-enabled lighting for radiation-free internet access
                    </p>
                  </motion.div>

                  <motion.div
                      className="border border-white rounded-lg px-3 py-2 text-white bg-black bg-opacity-20 backdrop-blur-sm"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      Secure internal communication eliminating Wi-Fi congestion
                    </p>
                  </motion.div>

                  <motion.div
                      className="border border-white rounded-lg px-3 py-2 text-white bg-black bg-opacity-20 backdrop-blur-sm"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      Seamless IoT integration and home automation systems
                    </p>
                  </motion.div>
                </div>

                {/* Desktop Layout - Smaller boxes on left top */}
                <div className="hidden lg:block absolute top-6 left-6 z-10 space-y-3 max-w-[320px]">
                  <motion.div
                      className="border border-white rounded-xl px-3 py-2.5 text-white bg-transparent"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      LiFi-enabled lighting for radiation-free internet access
                    </p>
                  </motion.div>

                  <motion.div
                      className="border border-white rounded-xl px-3 py-2.5 text-white bg-transparent"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      Secure internal communication eliminating Wi-Fi congestion
                    </p>
                  </motion.div>

                  <motion.div
                      className="border border-white rounded-xl px-3 py-2.5 text-white bg-transparent"
                      variants={fadeInLeft}
                  >
                    <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Manrope, sans-serif",
                        }}
                    >
                      Seamless IoT integration and home automation systems
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Healthcare Excellence Section */}
        <section
            ref={healthcareRef}
            className="relative pt-12 sm:pt-16 lg:pt-20"
            style={{
              minHeight: "400px", // Mobile scaled down
              backgroundImage:
                  "url('/images/cons5.jpg?height=631&width=1440&text=Medical+Facility')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
          {/* Same background overlay */}
          <div
              className="absolute inset-0"
              style={{
                background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 30%)",
              }}
          />

          <div className="relative z-10 max-w-[1440px] mx-auto px-2 sm:px-4 lg:px-0">
            {/* Exact same grid layout, just scaled */}
            <motion.div
                className="grid grid-cols-5 gap-2 sm:gap-4 lg:gap-8 items-start"
                variants={staggerContainer}
                initial="hidden"
                animate={healthcareInView ? "visible" : "hidden"}
            >
              {/* Header - Exact same proportions */}
              <motion.div
                  variants={fadeInLeft}
                  className="col-span-2 pl-2 sm:pl-4 lg:pl-8"
              >
                <h3 className="font-oswald font-semibold text-sm sm:text-2xl lg:text-5xl mb-2 sm:mb-3 lg:mb-4 leading-tight">
                  Healthcare Excellence
                </h3>
                <p
                    className="text-gray-600 text-[10px] sm:text-sm lg:text-lg"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                    }}
                >
                  Safe, interference-free communication for sensitive medical
                  environments
                </p>
              </motion.div>

              {/* Column 1 - Scaled down version */}
              <motion.div className="ml-1 sm:ml-3 lg:ml-6 pr-1 sm:pr-2 lg:pr-5" variants={fadeInUp}>
                <div className="mb-2 sm:mb-3 lg:mb-4">
                  <p
                      className="leading-tight sm:leading-snug text-[8px] sm:text-[10px] md:leading-relaxed md:text-sm lg:text-lg"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#000" }}
                  >
                    Dedicated LiFi zones for ICUs, operating theaters, and patient rooms
                  </p>

                </div>
                <div className="flex justify-center mt-2 sm:mt-4 lg:mt-6">
                  <Image
                      src="/images/cons_line1.png"
                      alt="Vertical Line"
                      width={6} // Scaled down for mobile
                      height={80} // Scaled down for mobile
                      className="sm:w-[8px] sm:h-[120px] lg:w-[12px] lg:h-[192px]"
                  />
                </div>
              </motion.div>

              {/* Column 2 - Scaled down version */}
              <motion.div className="ml-1 sm:ml-3 lg:ml-6" variants={fadeInUp}>
                <div className="mb-2 sm:mb-3 lg:mb-4">
                  <p
                      className="leading-tight sm:leading-snug text-[8px] sm:text-[10px] md:leading-relaxed md:text-sm lg:text-lg"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#000" }}
                  >
                    Reliable high-speed communication without EMI interference
                  </p>
                </div>
                <div className="flex justify-center mt-2 sm:mt-4 lg:mt-6">
                  <Image
                      src="/images/cons_line2.png"
                      alt="Vertical Line"
                      width={6}
                      height={80}
                      className="sm:w-[8px] sm:h-[120px] lg:w-[12px] lg:h-[192px]"
                  />
                </div>
              </motion.div>

              {/* Column 3 - Scaled down version */}
              <motion.div className="ml-1 sm:ml-3 lg:ml-6 pr-1 sm:pr-2 lg:pr-6" variants={fadeInRight}>
                <div className="mb-2 sm:mb-3 lg:mb-4">
                  <p
                      className="leading-tight sm:leading-snug text-[8px] sm:text-[10px] md:leading-relaxed md:text-sm lg:text-lg"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#000" }}
                  >
                    Zero-RF environments protecting sensitive medical equipment
                  </p>
                </div>
                <div className="flex justify-center mt-2 sm:mt-4 lg:mt-6">
                  <Image
                      src="/images/cons_line3.png"
                      alt="Vertical Line"
                      width={6}
                      height={80}
                      className="sm:w-[8px] sm:h-[120px] lg:w-[12px] lg:h-[192px]"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Responsive height scaling */}
          <style jsx>{`
    @media (min-width: 640px) {
      section {
        min-height: 600px !important;
      }
    }
    @media (min-width: 1024px) {
      section {
        min-height: 800px !important;
      }
    }
  `}</style>
        </section>

        {/* Educational Innovation Section */}
        <section ref={educationRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                  className="relative h-[344px] rounded-lg overflow-hidden"
                  variants={fadeInLeft}
                  initial="hidden"
                  animate={educationInView ? "visible" : "hidden"}
              >
                <TiltedCard
                    imageSrc="/images/cons6.jpg"
                    altText="Digital Classroom"
                    captionText="Digital Classroom"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="110%"
                    imageWidth="110%"
                    rotateAmplitude={14}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={true}
                />
              </motion.div>

              <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate={educationInView ? "visible" : "hidden"}
              >
                <motion.div className="mb-8" variants={fadeInUp}>
                  <h3 className="font-oswald font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2">
                    Educational Innovation
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg font-manrope">
                    Next-generation digital classrooms with safe,
                    high-performance connectivity
                  </p>
                </motion.div>

                <div className="space-y-4">
                  <motion.div
                      className="bg-white pl-0.5 sm:pl-1 md:pl-4 rounded-lg shadow-md border-b-4 mr-14 border-[#95C149]"
                      variants={fadeInRight}
                  >
                    <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-manrope text-black">
                      Smart classrooms with high-speed, health-safe internet
                    </p>
                  </motion.div>

                  <motion.div
                      className="bg-white pl-1 sm:pl-2 md:pl-8 rounded-lg shadow-md border-b-4 border-[#95C149] mr-1 ml-14"
                      variants={fadeInRight}
                  >
                    <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-manrope text-black">
                      Enhanced e-learning without harmful radio wave exposure
                    </p>
                  </motion.div>

                  <motion.div
                      className="bg-white pl-0.5 sm:pl-1 md:pl-4 rounded-lg shadow-md border-b-4 border-[#95C149] ml-24 -mr-16"
                      variants={fadeInRight}
                  >
                    <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-manrope text-black">
                      <span className="hidden sm:inline">FSO links connecting campus buildings and remote locations</span>
                      <span className="sm:hidden">
    FSO links connecting campus buildings and<br />
    remote locations
  </span>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industrial Power Section */}
        <section ref={industrialRef} className="py-20">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={industrialInView ? "visible" : "hidden"}
            >
              <motion.div className="mb-12" variants={fadeInUp}>
                <h3 className="font-oswald font-semibold text-5xl mb-2">
                  Industrial <span style={{ color: "#95C149" }}>Power</span>
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "18px",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  Robust wireless solutions for electromagnetic
                  interference-prone industrial environments
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div className="text-center" variants={fadeInLeft}>
                  <div className="relative h-[235px] rounded-lg overflow-hidden mb-5 group">
                    <Image
                      src="/images/cons7.jpg?height=235&width=380&text=Industrial+Automation"
                      alt="Industrial Automation"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                      color: "#000",
                    }}
                  >
                    Machine-to-machine LiFi in EMI-sensitive industrial zones
                  </p>
                </motion.div>

                <motion.div className="text-center" variants={fadeInUp}>
                  <div className="relative h-[235px] rounded-lg overflow-hidden mb-5 group">
                    <Image
                      src="/images/cons8.jpg?height=235&width=382&text=Manufacturing+Plant"
                      alt="Manufacturing Plant"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                      color: "#000",
                    }}
                  >
                    Plant-wide FSO connectivity without cable infrastructure
                  </p>
                </motion.div>

                <motion.div className="text-center" variants={fadeInRight}>
                  <div className="relative h-[235px] rounded-lg overflow-hidden mb-5 group">
                    <Image
                      src="/images/cons9.jpg?height=235&width=380&text=Power+Plant"
                      alt="Power Plant"
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                      color: "#000",
                    }}
                  >
                    Optimized for automotive, oil & gas, power, and
                    manufacturing
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Smart Cities Section */}
        <section ref={smartCitiesRef} className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Image Section */}
              <motion.div
                  className="relative order-1 lg:order-none"
                  variants={scaleIn}
                  initial="hidden"
                  animate={smartCitiesInView ? "visible" : "hidden"}
              >
                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] mx-auto">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <TiltedCard
                        imageSrc="/images/cons10.jpg"
                        altText="Smart City"
                        captionText="Smart City"
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={14}
                        scaleOnHover={1.3}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                  className="order-2 lg:order-none lg:-mt-56 lg:-ml-16"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={smartCitiesInView ? "visible" : "hidden"}
              >
                {/* Header */}
                <motion.div className="mb-6 text-center lg:text-left" variants={fadeInUp}>
                  <h3 className="font-oswald font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 lg:ml-12">
                    Smart Cities
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-manrope lg:ml-12">
                    Revolutionary urban infrastructure with optical wireless
                    communication networks
                  </p>
                </motion.div>

                {/* Connected bullet points with vertical line */}
                <div className="relative">
                  {/* Vertical connecting line - hidden on mobile, visible on lg+ */}
                  <div className="hidden lg:block absolute left-1 top-2 w-0.5 h-full bg-[#95C149] ml-12"></div>

                  <div className="space-y-4 md:space-y-6">
                    <motion.div
                        className="flex items-start relative"
                        variants={fadeInRight}
                    >
                      <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0 relative z-10 lg:ml-12"></div>
                      <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-manrope text-black">
                        Optical links for traffic systems, surveillance, and IoT
                        sensors
                      </p>
                    </motion.div>

                    <motion.div
                        className="flex items-start relative"
                        variants={fadeInRight}
                    >
                      <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0 relative z-10 lg:ml-12"></div>
                      <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-manrope text-black">
                        LiFi streetlights providing data through lighting
                        infrastructure
                      </p>
                    </motion.div>

                    <motion.div
                        className="flex items-start relative"
                        variants={fadeInRight}
                    >
                      <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-3 sm:mr-4 flex-shrink-0 relative z-10 lg:ml-12"></div>
                      <p className="leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg font-manrope text-black">
                        Cable-free FSO networks for last-mile connectivity
                      </p>
                    </motion.div>
                  </div>

                  {/* Extended bottom line - hidden on mobile, visible on lg+ */}
                  <div className="hidden lg:block absolute left-1 bottom-0 w-0.5 h-8 bg-[#95C149] transform translate-y-full ml-12"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
