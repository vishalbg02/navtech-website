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
          className="h-screen relative flex items-center pt-0"
          style={{
            backgroundImage:
              "url('/images/oem1.jpg?height=1080&width=1920&text=Industrial+Equipment')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-75" />
          <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[120px] w-full">
            <motion.div
              className="max-w-2xl"
              variants={staggerContainer}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
            >
              <BlurText
                text="OEM/ODM"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-6xl lg:text-8xl font-oswald font-semibold uppercase leading-tight text-white mb-4"
              />
              <SplitText
                text="Integrate the Future: LiFi Optical Transceivers for Your
                Products"
                className="text-xl lg:text-2xl font-sans text-white"
                delay={180}
                duration={0.8}
                ease="power3.out"
                splitType="lines"
                from={{ opacity: 0, y: 30 }}
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
                Accelerate Your Product with Embedded
                <br /> <span style={{ color: "#95C149" }}>LiFi Technology</span>
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed"
                style={{
                  fontSize: "18px",
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

        {/* Background Image Section */}
        <motion.section
          className="h-[400px] lg:h-[432px] relative"
          variants={scaleIn}
          initial="hidden"
          animate={introInView ? "visible" : "hidden"}
        >
          <Image
            src="/images/oem2.jpg?height=432&width=1440&text=Industrial+Facility"
            alt="Industrial Facility"
            fill
            className="object-cover"
          />
        </motion.section>

        {/* We Collaborate With Section */}
        <section ref={collaborateRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate={collaborateInView ? "visible" : "hidden"}
            >
              <motion.h2
                className="font-oswald font-semibold text-5xl mb-6"
                variants={fadeInUp}
              >
                We Collaborate With
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed"
                style={{
                  fontSize: "18px",
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
        <section ref={industrialRef} className="py-20">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate={industrialInView ? "visible" : "hidden"}
              >
                <h3 className="font-oswald font-semibold text-5xl mb-6">
                  Industrial{" "}
                  <span style={{ color: "#95C149" }}>Automation</span> Companies
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "18px",
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
                className="relative h-[400px] lg:h-[413px] rounded-lg overflow-hidden"
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
          className="relative py-20 h-[700px]" // Increased height
          style={{
            backgroundImage:
              "url('/images/oem4.jpg?height=700&width=1440&text=Smart+City+Infrastructure')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 32.67%, rgba(255, 255, 255, 0) 100%)",
            }}
          />
          <div
            className="absolute left-0 top-0 w-[410px] h-full"
            style={{
              background:
                "linear-gradient(162.06deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 78.35%)",
            }}
          />

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate={smartInfraInView ? "visible" : "hidden"}
              >
                <h3 className="font-oswald font-semibold text-5xl mb-6">
                  Smart Infrastructure & IoT Device Makers
                </h3>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                initial="hidden"
                animate={smartInfraInView ? "visible" : "hidden"}
              >
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "18px",
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
        <section ref={medicalRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Left Side: Two side-by-side images */}
              <motion.div
                className="flex flex-col"
                variants={fadeInLeft}
                initial="hidden"
                animate={medicalInView ? "visible" : "hidden"}
              >
                <div className="flex gap-4">
                  <div className="relative h-[400px] w-[450px] rounded-lg overflow-hidden">
                    <Image
                      src="/images/oem5.jpg?height=240&width=300&text=Medical+Equipment"
                      alt="Medical Equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-[400px] w-[450px] rounded-lg overflow-hidden mt-12">
                    <Image
                      src="/images/oem6.jpg?height=240&width=260&text=Operating+Room"
                      alt="Operating Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Center Content: Now left-aligned */}
              <motion.div
                className="text-left col-span-2 mt-14 ml-10"
                variants={fadeInUp}
                initial="hidden"
                animate={medicalInView ? "visible" : "hidden"}
              >
                <div className="mb-6">
                  <h3 className="font-oswald font-semibold text-5xl relative z-10">
                    Medical Equipment &{" "}
                    <span
                      style={{
                        backgroundColor: "#95C149",
                        color: "#fff",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        display: "inline-block",
                      }}
                    >
                      Healthcare
                    </span>{" "}
                    OEMs
                  </h3>
                </div>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "18px",
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
          className="relative"
          style={{
            backgroundImage:
              "url('/images/oem7.jpg?height=600&width=1440&text=Futuristic+Car')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "700px",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <motion.div
              className="text-center pt-[40px]"
              variants={staggerContainer}
              initial="hidden"
              animate={automotiveInView ? "visible" : "hidden"}
            >
              <motion.h3
                className="font-oswald font-semibold text-5xl text-white mb-4 inline-block"
                variants={fadeInUp}
              >
                Automotive &{" "}
                <span
                  style={{
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Mobility
                  <span
                    style={{
                      content: "''",
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#fff",
                      borderRadius: "2px",
                    }}
                  ></span>
                </span>{" "}
                Innovators
              </motion.h3>

              <motion.p
                className="font-light text-white max-w-[691px] mx-auto leading-relaxed"
                style={{
                  fontSize: "18px",
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
        <section ref={consumerRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                variants={fadeInLeft}
                initial="hidden"
                animate={consumerInView ? "visible" : "hidden"}
              >
                <h3 className="font-oswald font-semibold text-5xl mb-6">
                  Consumer <span style={{ color: "#95C149" }}>Electronics</span>{" "}
                  & Smart Devices
                </h3>
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: "18px",
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
                className="relative h-[400px] lg:h-[482px] rounded-lg overflow-hidden"
                variants={fadeInRight}
                initial="hidden"
                animate={consumerInView ? "visible" : "hidden"}
              >
                <Image
                  src="/images/oem8.jpg?height=482&width=720&text=Smart+Home+Devices"
                  alt="Smart Home Devices"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
