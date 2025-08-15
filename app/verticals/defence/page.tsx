"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import BlurText from "@/components/utils/BlurTextProps";
import SplitText from "@/components/utils/SplitTextProps";
import TiltedCard from "@/components/utils/TiltedCardProps";
import FlipCard from "@/components/utils/FlipCard";

export default function DefencePage() {
  // Refs for scroll-triggered animations
  const introRef = useRef(null);
  const useCasesRef = useRef(null);
  const armyRef = useRef(null);
  const navyRef = useRef(null);
  const airForceRef = useRef(null);
  const fullImageRef = useRef(null);
  const cardsRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef(null);

  // InView hooks
  const introInView = useInView(introRef, { once: true, margin: "-100px" });
  const useCasesInView = useInView(useCasesRef, {
    once: true,
    margin: "-100px",
  });
  const armyInView = useInView(armyRef, { once: true, margin: "-100px" });
  const navyInView = useInView(navyRef, { once: true, margin: "-100px" });
  const airForceInView = useInView(airForceRef, {
    once: true,
    margin: "-100px",
  });
  const fullImageInView = useInView(fullImageRef, {
    once: true,
    margin: "-100px",
  });
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" });

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
        delayChildren: 0.3,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Special animation for large background titles
  const backgroundTitleFromLeft = {
    hidden: {
      opacity: 0,
      x: -200,
      y: -50,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const backgroundTitleFromRight = {
    hidden: {
      opacity: 0,
      x: 200,
      y: -50,
      scale: 0.8,
      rotate: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
      <div
          className="overflow-x-hidden"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#000000",
            fontFamily: "'Helvetica Neue', sans-serif",
          }}
      >
        <main>
          {/* Hero Section */}
          <section
              ref={heroRef}
              className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#E5E5E5]"
          >
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover brightness-110 opacity-80"
            >
              {/* <source src="/placeholder-video.mp4" type="video/mp4" /> */}
              Your browser does not support the video tag.
              <source src="/videos/04 Defence.mp4" type="video/mp4" />
            </video>

            {/* Light overlay to blend with global background */}
            {/*<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />*/}

            {/* Hero Text Content */}
            {/*<div className="relative z-10 text-center px-4 max-w-4xl">*/}
            {/*  <BlurText*/}
            {/*    text="Main Video"*/}
            {/*    delay={150}*/}
            {/*    animateBy="words"*/}
            {/*    direction="bottom"*/}
            {/*    className="text-4xl lg:text-5xl xl:text-6xl font-oswald font-semibold leading-tight text-black"*/}
            {/*  />*/}
            {/*</div>*/}
          </section>

          {/* Intro Section */}
          <motion.section
              ref={introRef}
              className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
              variants={fadeInUp}
              initial="hidden"
              animate={introInView ? "visible" : "hidden"}
          >
            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-oswald font-semibold leading-snug max-w-6xl"
                variants={scaleIn}
                initial="hidden"
                animate={introInView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
            >
              <span style={{ color: "#95C149" }}>Mission-Ready.</span>{" "}
              EW-Resilient. Indigenously
              <br className="hidden sm:block" />
              Developed.
            </motion.h2>

            <motion.p
                className="max-w-4xl mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl font-light leading-relaxed"
                style={{
                  fontFamily: '"Manrope", sans-serif',
                }}
                variants={fadeInUp}
                initial="hidden"
                animate={introInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
            >
              Nav Wireless Technologies Pvt. Ltd. is India's first and only
              company to indigenously develop and deliver Optical Wireless
              Communication (OWC) systems using LiFi (Light Fidelity) and FSO
              (Free Space Optics). These advanced technologies provide RF-free,
              high-speed, and secure communications, built specifically for
              deployment in high-threat, electronic warfare (EW) environments
              across all three wings of the Armed Forces.
            </motion.p>
          </motion.section>

          {/* Use Cases Section */}
          <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                  ref={useCasesRef}
                  className="font-oswald font-semibold text-center pb-6 sm:pb-9 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                  variants={scaleIn}
                  initial="hidden"
                  animate={useCasesInView ? "visible" : "hidden"}
              >
                Use Cases by <span style={{ color: "#95C149" }}>Defence</span>
              </motion.h2>

              {/* Army Section */}
              <div ref={armyRef} className="relative mt-16 sm:mt-24 md:mt-32">
                <motion.h3
                    className="absolute -top-12 sm:-top-16 md:-top-20 left-[-20px] sm:left-[-34px] md:left-[-60px] lg:left-[-80px] select-none text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[190px] font-bold leading-none"
                    style={{ color: "rgba(0, 0, 0, 0.08)" }}
                    variants={backgroundTitleFromLeft}
                    initial="hidden"
                    animate={armyInView ? "visible" : "hidden"}
                >
                  ARMY
                </motion.h3>
                <div className="flex flex-col lg:flex-row items-center relative z-10 gap-8 lg:gap-12">
                  <motion.div
                      className="w-full lg:w-2/5 h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden"
                      variants={fadeInLeft}
                      initial="hidden"
                      animate={armyInView ? "visible" : "hidden"}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                  >
                    <TiltedCard
                        imageSrc="/images/def_army.jpg"
                        altText="Army Operations"
                        captionText="Army Operations"
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="110%"
                        imageWidth="90%"
                        rotateAmplitude={14}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                    />
                  </motion.div>
                  <motion.div
                      className="w-full lg:w-3/5"
                      variants={staggerContainer}
                      initial="hidden"
                      animate={armyInView ? "visible" : "hidden"}
                  >
                    <motion.h4
                        className="text-2xl sm:text-3xl md:text-4xl font-oswald font-semibold mb-6 sm:mb-8 px-4 sm:px-6 py-2 inline-block text-white"
                        style={{
                          backgroundColor: "#95C149",
                        }}
                        variants={staggerItem}
                    >
                      Army
                    </motion.h4>

                    <motion.ul className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600">
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        Forward Base Communication:
                      </span>
                        <br />
                        Deploy FSO links in border zones and high-altitude posts
                        to establish secure, high-speed networks without reliance
                        on vulnerable RF systems.
                      </motion.li>
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        Mobile Command Centers:
                      </span>
                        <br />
                        Use LiFi within bunkers, armored vehicles, and tactical
                        shelters for short-range communications immune to RF
                        jamming and detection.
                      </motion.li>
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        Stealth Operations:
                      </span>
                        <br />
                        Utilize optical links for covert missions where
                        maintaining a zero RF footprint is critical to avoiding
                        detection by enemy EW assets.
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </div>
              </div>

              {/* Navy Section */}
              <div ref={navyRef} className="relative mt-24 sm:mt-32 md:mt-48">
                <motion.h3
                    className="absolute -top-12 sm:-top-16 md:-top-20 right-[-20px] sm:right-[-34px] md:right-[-60px] lg:right-[-80px] text-right select-none text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[190px] font-bold leading-none"
                    style={{ color: "rgba(0, 0, 0, 0.08)" }}
                    variants={backgroundTitleFromRight}
                    initial="hidden"
                    animate={navyInView ? "visible" : "hidden"}
                >
                  NAVY
                </motion.h3>
                <div className="flex flex-col lg:flex-row-reverse items-center relative z-10 gap-8 lg:gap-12">
                  <motion.div
                      className="w-full lg:w-2/5 h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden"
                      variants={fadeInRight}
                      initial="hidden"
                      animate={navyInView ? "visible" : "hidden"}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                  >
                    <TiltedCard
                        imageSrc="/images/def_navy.png"
                        altText="Naval Fleet"
                        captionText="Naval Fleet"
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="110%"
                        imageWidth="90%"
                        rotateAmplitude={14}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                    />
                  </motion.div>
                  <motion.div
                      className="w-full lg:w-3/5"
                      variants={staggerContainer}
                      initial="hidden"
                      animate={navyInView ? "visible" : "hidden"}
                  >
                    <motion.h4
                        className="text-2xl sm:text-3xl md:text-4xl font-oswald font-semibold mb-6 sm:mb-8 px-4 sm:px-6 py-2 inline-block text-white"
                        style={{
                          backgroundColor: "#95C149",
                        }}
                        variants={staggerItem}
                    >
                      Navy
                    </motion.h4>
                    <motion.ul className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600">
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        Shipboard Communication:
                      </span>
                        <br />
                        Use LiFi for secure intra-vessel data exchange with zero
                        electromagnetic interference, protecting sensitive naval
                        electronics and weapons systems.
                      </motion.li>
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        Submarine Connectivity:
                      </span>
                        <br />
                        Enable internal optical communications in RF-shielded
                        environments, improving stealth and safety in subsurface
                        operations.
                      </motion.li>
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        Fleet Operations:
                      </span>
                        <br />
                        FSO-based ship-to-ship or ship-to-shore communication
                        ensures secure, jam-proof data transfer during coordinated
                        naval maneuvers.
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </div>
              </div>

              {/* Air Force Section */}
              <div ref={airForceRef} className="relative mt-24 sm:mt-32 md:mt-48">
                <motion.h3
                    className="absolute -top-12 sm:-top-16 md:-top-20 left-[-20px] sm:left-[-34px] md:left-[-60px] lg:left-[-80px] select-none text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] xl:text-[150px] font-bold leading-none"
                    style={{ color: "rgba(0, 0, 0, 0.08)" }}
                    variants={backgroundTitleFromLeft}
                    initial="hidden"
                    animate={airForceInView ? "visible" : "hidden"}
                >
                  Air Force
                </motion.h3>
                <div className="flex flex-col lg:flex-row items-center relative z-10 gap-8 lg:gap-12">
                  <motion.div
                      className="w-full lg:w-2/5 h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden"
                      variants={fadeInLeft}
                      initial="hidden"
                      animate={airForceInView ? "visible" : "hidden"}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      }}
                  >
                    <TiltedCard
                        imageSrc="/images/def_air_force.jpg"
                        altText="Air Force Jet"
                        captionText="Air Force Jet"
                        containerHeight="100%"
                        containerWidth="100%"
                        imageHeight="110%"
                        imageWidth="90%"
                        rotateAmplitude={14}
                        scaleOnHover={1.1}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={true}
                    />
                  </motion.div>
                  <motion.div
                      className="w-full lg:w-3/5"
                      variants={staggerContainer}
                      initial="hidden"
                      animate={airForceInView ? "visible" : "hidden"}
                  >
                    <motion.h4
                        className="text-2xl sm:text-3xl md:text-4xl font-oswald font-semibold mb-6 sm:mb-8 px-4 sm:px-6 py-2 inline-block text-white"
                        style={{
                          backgroundColor: "#95C149",
                        }}
                        variants={staggerItem}
                    >
                      Air Force
                    </motion.h4>

                    <motion.ul className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg font-light text-justify text-gray-600">
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        Airbase Communication Grid:
                      </span>
                        <br />
                        Connect control towers, radar posts, and hangars with FSO
                        links, eliminating vulnerabilities associated with
                        wireless RF networks.
                      </motion.li>
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        EW-Protected Zones:
                      </span>
                        <br />
                        Use LiFi inside hardened aircraft shelters and mission
                        planning rooms, where RF silence is required.
                      </motion.li>
                      <motion.li variants={staggerItem}>
                      <span className="font-sans font-bold text-black">
                        UAV and ISR Support:
                      </span>
                        <br />
                        Deploy optical links for drone-to-ground and satellite
                        communication in electronic warfare zones where RF signals
                        are disrupted or targeted.
                      </motion.li>
                    </motion.ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <motion.section
              ref={cardsRef}
              className="pt-8 sm:pt-12"
              variants={staggerContainer}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-oswald font-semibold text-black text-center leading-tight"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    fullImageInView
                        ? {
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                          },
                        }
                        : {}
                  }
              >
                Critical Communication. Seamless. Silent. Secure.
              </motion.h2>

              <motion.p
                  className="max-w-5xl mx-auto mt-4 text-sm sm:text-base lg:text-lg font-sans text-gray-600 text-center pb-8 sm:pb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    fullImageInView
                        ? {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.8,
                            delay: 0.5,
                            ease: "easeOut",
                          },
                        }
                        : {}
                  }
              >
                Tailored LiFi and FSO solutions enabling the Armed Forces
                to operate confidently in the most challenging electronic warfare
                environments.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-8 lg:px-12">
                <FlipCard
                    frontImage="/images/def_army1.jpg"
                    title="ARMY"
                    backContent="Secure, high-speed links for forward bases and mobile units in EW-prone zones. Reliable even in high-altitude and RF-restricted conditions."
                />
                <FlipCard
                    frontImage="/images/def_navy1.jpg"
                    title="NAVY"
                    backContent="LiFi and FSO power interference-free communications across ships and subs. Protects sensitive systems while enabling coordinated fleet operations."
                />
                <FlipCard
                    frontImage="/images/def_air_force1.jpg"
                    title="AIRFORCE"
                    backContent="Tailored LiFi and FSO solutions enabling the Armed Forces to operate confidently in the most challenging electronic warfare environments."
                />
              </div>
            </div>
          </motion.section>
        </main>
      </div>
  );
}