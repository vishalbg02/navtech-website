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
              "url('/images/cons.jpg?height=1080&width=1920&text=Business+Meeting')",
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
                text="Consumer"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-6xl lg:text-8xl font-anton uppercase leading-tight text-white mb-4"
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
                className="font-anton text-5xl mb-6"
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
                <h3
                  className="font-anton text-5xl mb-2"
                >
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
        <section ref={smartLivingRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={smartLivingInView ? "visible" : "hidden"}
            >
              <motion.div className="mb-12" variants={fadeInUp}>
                <h3
                  className="font-anton text-5xl mb-2"
                >
                  Smart Living Spaces
                </h3>
                <p
                  className="text-gray-600"
                  style={{
                    fontSize: "18px",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  Intelligent lighting systems that deliver internet without
                  electromagnetic interference
                </p>
              </motion.div>

              <motion.div
                className="relative h-[493px] rounded-lg overflow-hidden px-4 lg:px-12"
                style={{
                  backgroundImage:
                    "url('/images/cons4.jpg?height=493&width=1200&text=Smart+Home+Tech')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                variants={scaleIn}
              >
                <div className="absolute top-8 left-8 z-10 space-y-4 max-w-xs">
                  <motion.div
                    className="border border-white rounded-2xl p-3 text-white bg-transparent"
                    variants={fadeInLeft}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      LiFi-enabled lighting for radiation-free internet access
                    </p>
                  </motion.div>

                  <motion.div
                    className="border border-white rounded-2xl p-3 text-white bg-transparent"
                    variants={fadeInLeft}
                  >
                    <p
                      style={{
                        fontSize: "16px",
                        fontFamily: "Manrope, sans-serif",
                      }}
                    >
                      Secure internal communication eliminating Wi-Fi congestion
                    </p>
                  </motion.div>

                  <motion.div
                    className="border border-white rounded-2xl p-3 text-white bg-transparent"
                    variants={fadeInLeft}
                  >
                    <p
                      style={{
                        fontSize: "16px",
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
            className="relative pt-20"
            style={{
              minHeight: "800px", // Increased height
              backgroundImage:
                  "url('/images/cons5.jpg?height=631&width=1440&text=Medical+Facility')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
          <div
              className="absolute inset-0"
              style={{
                background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 30%)",
              }}
          />

          <div className="relative z-10 max-w-[1440px] mx-auto">
            <motion.div
                className="grid lg:grid-cols-5 gap-8 items-start" // Increased gap from 6 to 8
                variants={staggerContainer}
                initial="hidden"
                animate={healthcareInView ? "visible" : "hidden"}
            >
              <motion.div variants={fadeInLeft} className="lg:col-span-2 pl-4 lg:pl-8">
                <h3
                    className="font-anton text-5xl mb-4 whitespace-nowrap"
                >
                  Healthcare Excellence
                </h3>
                <p
                    className="text-gray-600"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                    }}
                >
                  Safe, interference-free communication for sensitive medical
                  environments
                </p>
              </motion.div>

              <motion.div className="ml-6 pr-3 lg:pr-5" variants={fadeInUp}> {/* Increased ml from 4 to 6, increased pr */}
                <div className="mb-4">
                  <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Manrope, sans-serif",
                        color: "#000",
                      }}
                  >
                    Dedicated LiFi zones for ICUs, operating theaters, and
                    patient rooms
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <Image
                      src="/images/cons_line1.png"
                      alt="Vertical Line"
                      width={12}
                      height={192}
                  />
                </div>
              </motion.div>

              <motion.div className="ml-6" variants={fadeInUp}> {/* Increased ml from 4 to 6 */}
                <div className="mb-4">
                  <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Manrope, sans-serif",
                        color: "#000",
                      }}
                  >
                    Reliable high-speed communication without EMI interference
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <Image
                      src="/images/cons_line2.png"
                      alt="Vertical Line"
                      width={12}
                      height={192}
                  />
                </div>
              </motion.div>

              <motion.div className="ml-6 pr-3 lg:pr-6" variants={fadeInRight}> {/* Increased ml from 4 to 6, increased pr */}
                <div className="mb-4">
                  <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Manrope, sans-serif",
                        color: "#000",
                      }}
                  >
                    Zero-RF environments protecting sensitive medical equipment
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <Image
                      src="/images/cons_line3.png"
                      alt="Vertical Line"
                      width={12}
                      height={192}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
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
                  <h3
                    className="font-anton text-5xl mb-2"
                  >
                    Educational Innovation
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{
                      fontSize: "18px",
                      fontFamily: "Manrope, sans-serif",
                    }}
                  >
                    Next-generation digital classrooms with safe,
                    high-performance connectivity
                  </p>
                </motion.div>

                <div className="space-y-4">
                  <motion.div
                    className="bg-white pl-4 rounded-lg shadow-md border-b-4 mr-14 border-[#95C149]"
                    variants={fadeInRight}
                  >
                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Manrope, sans-serif",
                        color: "#000",
                      }}
                    >
                      Smart classrooms with high-speed, health-safe internet
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white pl-8 rounded-lg shadow-md border-b-4 border-[#95C149] mr-1 ml-14"
                    variants={fadeInRight}
                  >
                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Manrope, sans-serif",
                        color: "#000",
                      }}
                    >
                      Enhanced e-learning harmful radio wave exposure
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white pl-4 rounded-lg shadow-md border-b-4 border-[#95C149] ml-24 -mr-16"
                    variants={fadeInRight}
                  >
                    <p
                      className="leading-relaxed"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Manrope, sans-serif",
                        color: "#000",
                      }}
                    >
                      FSO links connecting campus buildings and remote locations
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
                <h3
                  className="font-anton text-5xl mb-2"
                >
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
        <section ref={smartCitiesRef} className="py-20 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-[120px]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                  className="relative"
                  variants={scaleIn}
                  initial="hidden"
                  animate={smartCitiesInView ? "visible" : "hidden"}
              >
                <div className="relative w-[600px] h-[600px] mx-auto">
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

              <motion.div
                  className="-mt-56 -ml-16"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={smartCitiesInView ? "visible" : "hidden"}
              >
                <motion.div className="mb-6" variants={fadeInUp}>
                  <h3
                      className="font-anton text-5xl mb-2 ml-12"
                  >
                    Smart Cities
                  </h3>
                  <p
                      className="text-gray-600 ml-12"
                      style={{
                        fontSize: "18px",
                        fontFamily: "Manrope, sans-serif",
                      }}
                  >
                    Revolutionary urban infrastructure with optical wireless
                    communication networks
                  </p>
                </motion.div>

                {/* Connected bullet points with vertical line */}
                <div className="relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-1 top-2 w-0.5 h-full bg-[#95C149] ml-12"></div>

                  <div className="space-y-6">
                    <motion.div
                        className="flex items-start relative"
                        variants={fadeInRight}
                    >
                      <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-4 flex-shrink-0 relative z-10 ml-12"></div>
                      <p
                          className="leading-relaxed"
                          style={{
                            fontSize: "18px",
                            fontFamily: "Manrope, sans-serif",
                            color: "#000",
                          }}
                      >
                        Optical links for traffic systems, surveillance, and IoT
                        sensors
                      </p>
                    </motion.div>

                    <motion.div
                        className="flex items-start relative"
                        variants={fadeInRight}
                    >
                      <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-4 flex-shrink-0 relative z-10 ml-12"></div>
                      <p
                          className="leading-relaxed"
                          style={{
                            fontSize: "18px",
                            fontFamily: "Manrope, sans-serif",
                            color: "#000",
                          }}
                      >
                        LiFi streetlights providing data through lighting
                        infrastructure
                      </p>
                    </motion.div>

                    <motion.div
                        className="flex items-start relative"
                        variants={fadeInRight}
                    >
                      <div className="w-2 h-2 bg-[#95C149] rounded-full mt-2 mr-4 flex-shrink-0 relative z-10 ml-12"></div>
                      <p
                          className="leading-relaxed"
                          style={{
                            fontSize: "18px",
                            fontFamily: "Manrope, sans-serif",
                            color: "#000",
                          }}
                      >
                        Cable-free FSO networks for last-mile connectivity
                      </p>
                    </motion.div>
                  </div>

                  {/* Extended bottom line */}
                  <div className="absolute left-1 bottom-0 w-0.5 h-8 bg-[#95C149] transform translate-y-full ml-12"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
