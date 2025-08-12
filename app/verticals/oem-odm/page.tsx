"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import BlurText from "@/components/utils/BlurTextProps";
import SplitText from "@/components/utils/SplitTextProps";
import TiltedCard from "@/components/utils/TiltedCardProps";

export default function OEMODMPage() {
  // Refs for scroll-triggered animations
  const heroRef = useRef(null);
  const introRef = useRef(null);
  const collaborateRef = useRef(null);
  const industrialRef = useRef(null);
  const smartInfraRef = useRef(null);
  const medicalRef = useRef(null);
  const automotiveRef = useRef(null);
  const consumerRef = useRef(null);
  const footerRef = useRef(null);

  // InView hooks
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const collaborateInView = useInView(collaborateRef, {
    once: true,
    margin: "-100px",
  });
  const industrialInView = useInView(industrialRef, {
    once: true,
    margin: "-100px",
  });
  const smartInfraInView = useInView(smartInfraRef, {
    once: true,
    margin: "-100px",
  });
  const medicalInView = useInView(medicalRef, { once: true, margin: "-100px" });
  const automotiveInView = useInView(automotiveRef, {
    once: true,
    margin: "-100px",
  });
  const consumerInView = useInView(consumerRef, {
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
      <div className="min-h-screen bg-white text-black font-['Helvetica_Neue',sans-serif] overflow-x-hidden">
        <main>
          {/* Hero Section */}
          <section
              ref={heroRef}
              className="h-screen min-h-[600px] relative flex items-center pt-0"
              style={{
                backgroundImage: "url('/images/Oem_ODM.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // backgroundAttachment: "fixed",
              }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-75" />
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px] w-full">
              <motion.div
                  className="max-w-4xl"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={heroInView ? "visible" : "hidden"}
              >
                <BlurText
                    text="OEM/ODM"
                    delay={150}
                    animateBy="words"
                    direction="bottom"
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-oswald font-semibold uppercase leading-tight text-white mb-4"
                />
                <div className="text-lg sm:text-xl lg:text-2xl font-sans text-white">
                  <SplitText
                      text="Integrate the Future: LiFi Optical Transceivers for Your Products"
                      delay={180}
                      duration={0.8}
                      ease="power3.out"
                      splitType="lines"
                      from={{ opacity: 0, y: 30 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Introduction Section */}
          <section ref={introRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <motion.div
                  className="text-center max-w-4xl mx-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={introInView ? "visible" : "hidden"}
              >
                <motion.h2
                    className="font-oswald font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight"
                    variants={fadeInUp}
                >
                  Accelerate Your Product with Embedded
                  <br className="hidden sm:block" />
                  <span style={{ color: "#95C149" }}>LiFi Technology</span>
                </motion.h2>
                <motion.p
                    className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                    }}
                    variants={fadeInUp}
                >
                  At Nav Wireless Technologies Pvt. Ltd., we enable companies
                  across industries to integrate LiFi-based Optical Wireless
                  Communication (OWC) modules into their existing or new product
                  lines. Our compact, customizable LiFi transceivers deliver
                  ultra-secure, high-speed, interference-free connectivity—ideal
                  for environments where traditional RF-based communication is
                  limited or restricted.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* We Collaborate With Section */}
          <section ref={collaborateRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <motion.div
                  className="text-center max-w-4xl mx-auto"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={collaborateInView ? "visible" : "hidden"}
              >
                <motion.h2
                    className="font-oswald font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6"
                    variants={fadeInUp}
                >
                  We Collaborate With
                </motion.h2>
                <motion.p
                    className="text-gray-600 leading-relaxed text-base sm:text-lg lg:text-xl"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                    }}
                    variants={fadeInUp}
                >
                  Tailored Integration for OEMs, Device Manufacturers & Solution
                  Providers
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Industrial Automation Section */}
          <section ref={industrialRef} className="py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                <motion.div
                    className="order-2 lg:order-1"
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={industrialInView ? "visible" : "hidden"}
                >
                  <h3 className="font-oswald font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
                    Industrial{" "}
                    <span style={{ color: "#95C149" }}>Automation</span> Companies
                  </h3>
                  <p
                      className="leading-relaxed text-base sm:text-lg lg:text-xl"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        color: "#565656",
                      }}
                  >
                    Enable real-time data exchange between machines in
                    RF-restricted or EMI-sensitive environments such as power
                    plants, refineries, and assembly lines.
                  </p>
                </motion.div>

                <motion.div
                    className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[413px] rounded-lg overflow-hidden order-1 lg:order-2"
                    variants={fadeInRight}
                    initial="hidden"
                    animate={industrialInView ? "visible" : "hidden"}
                >
                  <TiltedCard
                      imageSrc="/images/oem3.jpg"
                      altText="Industrial Automation"
                      captionText="Industrial Automation"
                      containerHeight="100%"
                      containerWidth="100%"
                      imageHeight="90%"
                      imageWidth="90%"
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

          {/* Smart Infrastructure Section with Background */}
          <section
              ref={smartInfraRef}
              className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
              style={{
                backgroundImage: "url('/images/oem4.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // backgroundAttachment: "fixed",
              }}
          >
            {/* Gradient Overlays - Responsive */}
            <div
                className="absolute inset-0"
                style={{
                  background:
                      "linear-gradient(180deg, #FFFFFF 32.67%, rgba(255, 255, 255, 0) 100%)",
                }}
            />
            <div
                className="absolute left-0 top-0 w-full sm:w-[410px] h-full"
                style={{
                  background:
                      "linear-gradient(162.06deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 78.35%)",
                }}
            />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px] h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
                <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={smartInfraInView ? "visible" : "hidden"}
                >
                  <h3 className="font-oswald font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
                    Smart Infrastructure & IoT Device Makers
                  </h3>
                </motion.div>

                <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    animate={smartInfraInView ? "visible" : "hidden"}
                >
                  <p
                      className="leading-relaxed text-base sm:text-lg lg:text-xl"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        color: "#565656",
                      }}
                  >
                    Embed LiFi in smart lighting, smart buildings, and IoT
                    gateways, enabling data-over-light functionality with enhanced
                    security and speed.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Medical Equipment Section */}
          <section ref={medicalRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                {/* Left Half: Two images */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 order-2 lg:order-1"
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={medicalInView ? "visible" : "hidden"}
                >
                  <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] flex-1 rounded-lg overflow-hidden group">
                    <Image
                        src="/images/oem5.jpg"
                        alt="Medical Equipment"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px] flex-1 rounded-lg overflow-hidden sm:mt-8 md:mt-12 group">
                    <Image
                        src="/images/oem6.jpg"
                        alt="Operating Room"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>

                {/* Right Half: Content */}
                <motion.div
                    className="flex flex-col justify-center order-1 lg:order-2"
                    variants={fadeInRight}
                    initial="hidden"
                    animate={medicalInView ? "visible" : "hidden"}
                >
                  <div className="mb-4 sm:mb-6">
                    <h3 className="font-oswald font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative z-10 leading-tight">
                      Medical Equipment &{" "}
                      <span
                          style={{
                            backgroundColor: "#95C149",
                            color: "#fff",
                            padding: "2px 8px",
                            display: "inline-block",
                          }}
                      >
                      Healthcare
                    </span>{" "}
                      OEMs
                    </h3>
                  </div>
                  <p
                      className="leading-relaxed text-base sm:text-lg lg:text-xl"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        color: "#565656",
                      }}
                  >
                    Integrate radiation-free LiFi for data exchange in ICUs,
                    operation theatres, and diagnostics equipment, where Wi-Fi or
                    Bluetooth may interfere with critical systems.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Automotive Section */}
          <section
              ref={automotiveRef}
              className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-top"
              style={{
                backgroundImage: "url('/images/oem7.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                // backgroundAttachment: "fixed",
              }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px] w-full">
              <motion.div
                  className="text-center py-8 sm:py-12 lg:py-16"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={automotiveInView ? "visible" : "hidden"}
              >
                <motion.h3
                    className="font-oswald font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 inline-block leading-tight"
                    variants={fadeInUp}
                >
                <span className="inline-block relative">
                  Automotive
                  <span className="block mt-2">
                    <svg
                        className="w-full max-w-[195px] h-auto mx-auto"
                        viewBox="0 0 195 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M195 3.40409C178.482 -2.76105 58.1176 0.835284 0 3.40409V7C89.1953 1.24587 167.165 4.60245 195 7V3.40409Z"
                          fill="#95C149"
                      />
                    </svg>
                  </span>
                </span>{" "}
                  <br className="sm:hidden" />
                  & Mobility Innovators
                </motion.h3>

                <motion.p
                    className="font-light text-white max-w-[691px] mx-auto leading-relaxed text-base sm:text-lg lg:text-xl px-4 text-left sm:text-center"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                    }}
                    variants={fadeInUp}
                >
                  Enable vehicle-to-vehicle (V2V) or in-cabin optical
                  communication for safer, interference-free data sharing in smart
                  and autonomous vehicles.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Consumer Electronics Section */}
          <section ref={consumerRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px]">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                <motion.div
                    className="order-2 lg:order-1"
                    variants={fadeInLeft}
                    initial="hidden"
                    animate={consumerInView ? "visible" : "hidden"}
                >
                  <h3 className="font-oswald font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
                    Consumer <span style={{ color: "#95C149" }}>Electronics</span>{" "}
                    & Smart Devices
                  </h3>
                  <p
                      className="leading-relaxed text-base sm:text-lg lg:text-xl"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        color: "#565656",
                      }}
                  >
                    Equip your products with high-speed, short-range data
                    transmission capabilities for secure indoor
                    applications—without relying on crowded RF bands.
                  </p>
                </motion.div>

                <motion.div
                    className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[482px] rounded-lg overflow-hidden order-1 lg:order-2"
                    variants={fadeInRight}
                    initial="hidden"
                    animate={consumerInView ? "visible" : "hidden"}
                >
                  <TiltedCard
                      imageSrc="/images/oem8.jpg"
                      altText="Smart Home Devices"
                      captionText="Smart Home Devices"
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
              </div>
            </div>
          </section>
        </main>
      </div>
  );
}