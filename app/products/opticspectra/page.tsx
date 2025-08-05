"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import BlurText from "@/components/utils/BlurTextProps";
import ReferenceCarousel from "@/components/ui/ReferenceCarousel";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function OpticSpectraPage() {
  const neoScrollRef = useRef<HTMLDivElement>(null);
  const supremeScrollRef = useRef<HTMLDivElement>(null);
  const departmentTextRef = useRef<HTMLHeadingElement>(null);
  const tecCertifiedRef = useRef<HTMLHeadingElement>(null);
  const milGradeRef = useRef<HTMLHeadElement>(null);
  const jssCertifiedRef = useRef<HTMLHeadingElement>(null);
  const [neoCurrentIndex, setNeoCurrentIndex] = useState(0);
  const [supremeCurrentIndex, setSupremeCurrentIndex] = useState(0);

  // Refs for motion animations
  const neoCenterImageRef = useRef(null);
  const neoLeftSpecsRef = useRef(null);
  const neoRightSpecsRef = useRef(null);
  const supremeCenterImageRef = useRef(null);
  const supremeLeftSpecsRef = useRef(null);
  const supremeRightSpecsRef = useRef(null);
  const referenceRef = useRef(null);
  const referenceDefenceRef = useRef(null);

  const referenceInView = useInView(referenceRef, {
    once: true,
    margin: "-100px",
  });

  const referenceDefenceInView = useInView(referenceDefenceRef, {
    once: true,
    margin: "-100px",
  });

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const neoUseCases = [
    {
      title: "Rail Network",
      description:
        "Enables high-speed, interference-free links between stations and onboard systems—perfect for tunnels, trackside monitoring, and secure data relay without physical cables.",
      image: "/images/op2.jpg",
    },
    {
      title: "Event Connectivity",
      description:
        "Delivers instant gigabit wireless access for temporary setups like concerts or exhibitions, bypassing trenching delays and eliminating reliance on congested RF bands.",
      image: "/images/op3.jpg",
    },
    {
      title: "Urban Connectivity",
      description:
        "Serves as a scalable alternative to fiber in cities—linking rooftops and buildings without civil work, spectrum constraints, or interference issues.",
      image: "/images/op4.jpg",
    },
  ];

  const supremeUseCases = [
    {
      title: "Army",
      description:
        "Enables high-bandwidth, secure communication between mobile ground units, command posts, and surveillance assets. PAT-enabled optical links remain aligned in motion and undetectable by Electronic Warfare Systems (EWS).",
      image: "/images/op7.jpg",
    },
    {
      title: "Navy",
      description:
        "Provides ship-to-ship and ship-to-shore communication with zero RF signature. Integrated PAT ensures stable laser connectivity on moving vessels, delivering stealthy, interference-free operation beyond the reach of EWS.",
      image: "/images/op8.jpg",
    },
    {
      title: "Air Force",
      description:
        "Supports aircraft-to-aircraft and airborne-to-ground data exchange with real-time throughput. PAT integration compensates for speed and altitude shifts, ensuring continuity without RF traceable signals.",
      image: "/images/op9.jpg",
    },
  ];

  // Auto scroll functionality
  useEffect(() => {
    const neoInterval = setInterval(() => {
      setNeoCurrentIndex((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 5000);

    const supremeInterval = setInterval(() => {
      setSupremeCurrentIndex((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(neoInterval);
      clearInterval(supremeInterval);
    };
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      departmentTextRef.current &&
      tecCertifiedRef.current &&
      milGradeRef.current &&
      jssCertifiedRef.current
    ) {
      gsap.fromTo(
        departmentTextRef.current,
        {
          backgroundImage:
            "linear-gradient(180deg, #95C149 0%, #95C149 0%, transparent 0%, transparent 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        },
        {
          backgroundImage:
            "linear-gradient(180deg, #95C149 0%, #95C149 100%, transparent 100%, transparent 100%)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: departmentTextRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        tecCertifiedRef.current,
        {
          backgroundImage:
            "linear-gradient(180deg, #95C149 0%, #95C149 0%, transparent 0%, transparent 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        },
        {
          backgroundImage:
            "linear-gradient(180deg, #95C149 0%, #95C149 100%, transparent 100%, transparent 100%)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tecCertifiedRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        milGradeRef.current,
        {
          backgroundImage:
            "linear-gradient(180deg, #95C149 0%, #95C149 0%, transparent 0%, transparent 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        },
        {
          backgroundImage:
            "linear-gradient(180deg, #95C149 0%, #95C149 100%, transparent 100%, transparent 100%)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: milGradeRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );

      gsap.fromTo(
        jssCertifiedRef.current,
        {
          backgroundImage:
            "linear-gradient(180deg, #95C149 0%, #95C149 0%, transparent 0%, transparent 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        },
        {
          backgroundImage:
            "linear-gradient(180deg, #95C149 0%, #95C149 100%, transparent 100%, transparent 100%)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: jssCertifiedRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="relative min-h-screen bg-white overflow-x-hidden"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* Video Section */}
      <section className="relative w-full h-screen bg-[#E5E5E5] flex items-center justify-center">
        <div className="text-center">
          <BlurText
            text="Video of The product"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-[64px] font-oswald font-semibold leading-[77px] text-black mb-6"
          />
          <div className="relative w-[78px] h-[78px] mx-auto">
            <div className="absolute inset-0 bg-white/40 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="flex flex-col items-center gap-[120px] py-[120px]">
        {/* About OpticSpectra Section */}
        <section className="flex flex-col items-center gap-6 w-[1125px]">
          <motion.div
            className="flex flex-col items-center gap-[14px] w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="flex flex-col items-center"
              variants={fadeInUp}
            >
              <h2 className="text-[27px] font-oswald font-semibold leading-[23px] text-center uppercase text-black">
                ABOUT
              </h2>
              <div className="relative mt-[5px] flex items-center justify-center w-[400px] h-[46px] bg-[#95C149]">
                <span className="text-[46px] font-oswald font-semibold text-white uppercase z-10 leading-[56px]">
                  OPTICSPECTRA
                </span>
              </div>
            </motion.div>
            <motion.p
              className="text-[20px] font-sans leading-6 text-center text-black"
              variants={fadeInUp}
            >
              Intelligent Optical Links for Dynamic Network Demands
            </motion.p>
          </motion.div>
          <motion.p
            className="text-[18px] font-sans leading-[22px] text-center text-[#565656]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            Nav Wireless Technologies offers Free Space Optics (FSO) solutions
            with adaptive bandwidth capabilities, enabling optical links to
            automatically adjust data rates in response to changing
            environmental conditions such as fog, rain, or signal degradation.
            This ensures continuous, optimized performance without compromising
            link stability or security.
            <br />
            <br /> Ideal for mission-critical, high-availability applications,
            adaptive FSO systems support real-time bandwidth scaling, making
            them suitable for smart cities, defense networks, disaster zones,
            and enterprise backhaul where reliability and flexibility are
            essential.
          </motion.p>
        </section>

        {/* Neo Section */}
        <section className="flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col items-center w-full">
            {/* Neo Product Diagram with Overlaid Text */}
            <div className="relative w-[1200px] h-[1200px]">
              {/* Overlaid Header Text */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center w-full z-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  ref={departmentTextRef}
                  className="text-[68px] font-oswald font-semibold leading-[70px] text-center uppercase w-full mb-2"
                  style={{
                    WebkitTextStroke: "1px #AFAFAF",
                    backgroundImage:
                      "linear-gradient(90deg, #000000 0%, #000000 0%, transparent 0%, transparent 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  variants={fadeInUp}
                >
                  DEPARTMENT OF
                  <br />
                  TELECOMMUNICATIONS
                </motion.h2>

                <motion.h3
                  className="text-[52px] font-oswald font-semibold leading-[55px] text-center text-black mb-2"
                  variants={fadeInUp}
                >
                  Versions - Neo
                </motion.h3>

                <motion.h2
                  ref={tecCertifiedRef}
                  className="text-[68px] font-oswald font-semibold leading-[70px] text-center uppercase w-[1199px] mb-4"
                  style={{
                    WebkitTextStroke: "1px #AFAFAF",
                    backgroundImage:
                      "linear-gradient(90deg, #000000 0%, #000000 0%, transparent 0%, transparent 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  variants={fadeInUp}
                >
                  TEC CERTIFIED
                </motion.h2>
              </motion.div>
              {/* Center Image */}
              <motion.div
                ref={neoCenterImageRef}
                className="absolute left-[385px] top-[400px] transform -translate-x-1/2 -translate-y-1/2 w-[436px] h-[688px] overflow-visible"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ maxWidth: "100%" }}
              >
                <Image
                  src="/images/op1.png?height=688&width=436&text=OpticSpectra+Neo+Device"
                  alt="OpticSpectra Neo Device"
                  fill
                  className="object-contain"
                  style={{ maxWidth: "100%" }}
                />
              </motion.div>

              {/* Left Side - Bandwidth Specs */}
              <motion.div
                ref={neoLeftSpecsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative left-0 top-[329px] flex flex-col gap-[80px]"
              >
                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[120px] top-[150px] flex items-center gap-5"
                >
                  <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                    <div className="text-[20px] font-oswald font-semibold leading-6 text-center text-black">
                      Upto 1Gbps
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[100px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[120px] top-[294px] flex items-center gap-5"
                >
                  <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                    <div className="text-[20px] font-oswald font-semibold leading-6 text-center text-black">
                      Upto 1Gbps
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[185px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[120px] top-[453px] flex items-center gap-5"
                >
                  <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                    <div className="text-[20px] font-oswald font-semibold leading-6 text-center text-black">
                      Upto 10Gbps
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[160px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[120px] top-[630px] flex items-center gap-5"
                >
                  <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                    <div className="text-[20px] font-oswald font-semibold leading-6 text-center text-black">
                      Upto 10Gbps
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[220px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Distance Specs */}
              <motion.div
                ref={neoRightSpecsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative right-0 top-[268px] flex flex-col gap-[80px]"
              >
                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[120px] top-[160px] flex items-center gap-5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[260px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                    <div className="text-[37.8294px] font-oswald font-semibold leading-[46px] text-center text-black">
                      10km
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[120px] top-[300px] flex items-center gap-5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[270px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                    <div className="text-[37.8294px] font-oswald font-semibold leading-[46px] text-center text-black">
                      5km
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[120px] top-[437px] flex items-center gap-5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[235px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                    <div className="text-[37.8294px] font-oswald font-semibold leading-[46px] text-center text-black">
                      5km
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[120px] top-[595px] flex items-center gap-5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[160px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                    <div className="text-[37.8294px] font-oswald font-semibold leading-[46px] text-center text-black">
                      3km
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Neo Use Cases */}
            <motion.div
              className="flex flex-col justify-center items-center gap-[34px] w-[1199px]"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className="text-[36px] font-oswald font-semibold leading-[44px] uppercase text-black"
                variants={fadeInUp}
              >
                USE CASES
              </motion.h3>
              <motion.div
                className="flex items-center gap-[61px] w-full"
                variants={staggerContainer}
              >
                {neoUseCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-[17px] w-[359px]"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <div className="w-full h-[259px] bg-[#D9D9D9] relative overflow-hidden group">
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <h4 className="text-[24px] font-oswald font-semibold leading-[29px] text-black">
                        {useCase.title}
                      </h4>
                      <p className="text-[18px] font-sans leading-[22px] text-[#565656]">
                        {useCase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="flex gap-[15px]" variants={fadeInUp}>
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === neoCurrentIndex
                        ? "bg-[#95C149]"
                        : "bg-[#D9D9D9]"
                    }`}
                  ></div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Reference Image */}
          <motion.div
            className="w-full h-[545px] relative overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ReferenceCarousel
              images={[
                "/images/op5.png",
                "/images/op5.png",
                "/images/op5.png",
                "/images/op5.png",
              ]}
              referenceRef={referenceRef}
              referenceInView={referenceInView}
            />
          </motion.div>
        </section>

        {/* Supreme Section */}
        <section className="flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col items-center w-full">
            {/* Supreme Product Diagram with Overlaid Text */}
            <div className="relative w-[1200px] h-[910px]">
              {/* Overlaid Header Text */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center w-full z-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  ref={milGradeRef}
                  className="text-[68px] font-oswald font-semibold leading-[70px] text-center uppercase w-full mb-2"
                  style={{
                    WebkitTextStroke: "1px #AFAFAF",
                    backgroundImage:
                      "linear-gradient(90deg, #000000 0%, #000000 0%, transparent 0%, transparent 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  variants={fadeInUp}
                >
                  MIL GRADE
                </motion.h2>

                <motion.h3
                  className="text-[52px] font-oswald font-semibold leading-[55px] text-center text-black mb-2"
                  variants={fadeInUp}
                >
                  Versions - Supreme
                </motion.h3>
                <motion.h2
                  ref={jssCertifiedRef}
                  className="text-[68px] font-oswald font-semibold leading-[70px] text-center uppercase w-[1199px] mb-4"
                  style={{
                    WebkitTextStroke: "1px #AFAFAF",
                    backgroundImage:
                      "linear-gradient(90deg, #000000 0%, #000000 0%, transparent 0%, transparent 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                  variants={fadeInUp}
                >
                  JSS 55555 CERTIFIED
                </motion.h2>
              </motion.div>
              {/* Center Device Image */}
              <motion.div
                ref={supremeCenterImageRef}
                className="absolute left-[280px] top-[147px] transform -translate-x-1/2 -translate-y-1/2 w-[764px] h-[611px] overflow-visible"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ maxWidth: "100%" }}
              >
                <Image
                  src="/images/op6.png?height=611&width=764&text=OpticSpectra+Supreme+Device"
                  alt="OpticSpectra Supreme Device"
                  fill
                  className="object-contain"
                  style={{ maxWidth: "100%" }}
                />
              </motion.div>

              {/* Left Side - Bandwidth Specs */}
              <motion.div
                ref={supremeLeftSpecsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative left-0 top-[299px] flex flex-col gap-[80px]"
              >
                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[180px] top-0 flex items-center gap-5"
                >
                  <div className="flex flex-col items-center gap-[0.88px] w-[140px]">
                    <div className="text-[20px] font-oswald font-semibold leading-6 text-center text-black">
                      Upto 1Gbps
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[170px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[120px] top-[150px] flex items-center gap-5"
                >
                  <div className="flex flex-col items-center gap-[0.88px] w-[140px]">
                    <div className="text-[20px] font-oswald font-semibold leading-6 text-center text-black">
                      Upto 1Gbps
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[290px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[232px] top-[309px] flex items-center gap-5"
                >
                  <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                    <div className="text-[20px] font-oswald font-semibold leading-6 text-center text-black">
                      Upto 40Gbps
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[100px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Distance Specs */}
              <motion.div
                ref={supremeRightSpecsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative right-0 top-[377px] flex flex-col gap-[80px]"
              >
                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[120px] top-0 flex items-center gap-5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[220px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                    <div className="text-[37.8294px] font-oswald font-semibold leading-[46px] text-center text-black">
                      10km
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[120px] top-[158px] flex items-center gap-5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[190px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                    <div className="text-[37.8294px] font-oswald font-semibold leading-[46px] text-center text-black">
                      20km
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[120px] top-[316px] flex items-center gap-5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[230px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                    <div className="text-[37.8294px] font-oswald font-semibold leading-[46px] text-center text-black">
                      1km
                    </div>
                    <div className="text-[21.279px] font-sans leading-[26px] text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Supreme Use Cases */}
            <motion.div
              className="flex flex-col justify-center items-center gap-[34px] w-[1199px]"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className="text-[36px] font-oswald font-semibold leading-[44px] uppercase text-black"
                variants={fadeInUp}
              >
                USE CASES
              </motion.h3>
              <motion.div
                className="flex items-start gap-[61px] w-full"
                variants={staggerContainer}
              >
                {supremeUseCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-[17px] w-[359px] bg-white"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <div className="w-full h-[259px] bg-[#D9D9D9] relative overflow-hidden group">
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <h4 className="text-[24px] font-oswald font-semibold leading-[29px] text-black">
                        {useCase.title}
                      </h4>
                      <p className="text-[18px] font-sans leading-[22px] text-[#565656]">
                        {useCase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="flex gap-[15px]" variants={fadeInUp}>
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === supremeCurrentIndex
                        ? "bg-[#95C149]"
                        : "bg-[#D9D9D9]"
                    }`}
                  ></div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Reference Image for Defense - No spacing */}
      <motion.div
        className="w-full h-[540px] relative overflow-hidden"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ReferenceCarousel
          images={[
            "/images/op10.jpg",
            "/images/op10.jpg",
            "/images/op10.jpg",
            "/images/op10.jpg",
          ]}
          referenceRef={referenceDefenceRef}
          referenceInView={referenceDefenceInView}
        />
      </motion.div>
    </div>
  );
}
