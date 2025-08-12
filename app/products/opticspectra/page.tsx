"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";
import BlurText from "@/components/utils/BlurTextProps";

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
      image: "/images/op2.png",
    },
    {
      title: "Event Connectivity",
      description:
        "Delivers instant gigabit wireless access for temporary setups like concerts or exhibitions, bypassing trenching delays and eliminating reliance on congested RF bands.",
      image: "/images/op3.png",
    },
    {
      title: "Urban Connectivity",
      description:
        "Serves as a scalable alternative to fiber in cities—linking rooftops and buildings without civil work, spectrum constraints, or interference issues.",
      image: "/images/Urban Connectivity.jpg",
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
      <section className="relative w-full h-screen bg-[#E5E5E5] flex items-center justify-center lg:px-0 px-4">
        <div className="text-center">
          <BlurText
            text="Video of The product"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="lg:text-[64px] lg:font-oswald lg:font-semibold lg:leading-[77px] text-black mb-6 text-[32px] md:text-[48px] font-oswald font-semibold leading-tight"
          />
          <div className="relative lg:w-[78px] lg:h-[78px] w-[52px] h-[52px] md:w-[65px] md:h-[65px] mx-auto">
            <div className="absolute inset-0 bg-white/40 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 lg:border-l-[20px] lg:border-l-white lg:border-t-[12px] lg:border-t-transparent lg:border-b-[12px] lg:border-b-transparent border-l-[13px] md:border-l-[16px] border-l-white border-t-[8px] md:border-t-[10px] border-t-transparent border-b-[8px] md:border-b-[10px] border-b-transparent ml-1"></div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="flex flex-col items-center lg:gap-[120px] gap-[60px] lg:py-[120px] py-[60px] lg:px-0 px-4">
        {/* About OpticSpectra Section */}
        <section className="flex flex-col items-center gap-6 lg:w-[1125px] w-full max-w-[1125px]">
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
              <h2 className="lg:text-[27px] lg:font-oswald lg:font-semibold lg:leading-[23px] text-center uppercase text-black text-[18px] md:text-[22px] font-oswald font-semibold leading-tight">
                ABOUT
              </h2>
              <div className="relative mt-[5px] flex items-center justify-center lg:w-[400px] lg:h-[46px] w-[280px] md:w-[320px] h-[32px] md:h-[38px] bg-[#95C149]">
                <span className="lg:text-[46px] lg:font-oswald lg:font-semibold text-white uppercase z-10 lg:leading-[56px] text-[24px] md:text-[32px] font-oswald font-semibold leading-tight">
                  OPTICSPECTRA
                </span>
              </div>
            </motion.div>
            <motion.p
              className="lg:text-[20px] lg:font-sans lg:leading-6 text-center text-black text-[16px] md:text-[18px] font-sans leading-6"
              variants={fadeInUp}
            >
              Intelligent Optical Links for Dynamic Network Demands
            </motion.p>
          </motion.div>
          <motion.p
            className="w-[90%] lg:text-[18px] lg:font-sans lg:leading-[22px] text-center text-[#565656] text-[14px] md:text-[16px] font-sans leading-relaxed"
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
            <div className="relative lg:w-[1200px] lg:h-[1200px] w-full h-[800px] md:h-[1000px] max-w-[1200px]">
              {/* Overlaid Header Text */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center w-full z-10 lg:px-0 px-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  ref={departmentTextRef}
                  className="lg:text-[68px] lg:font-oswald lg:font-semibold lg:leading-[70px] text-center uppercase w-full mb-2 text-[24px] md:text-[40px] font-oswald font-semibold leading-tight"
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
                  className="lg:text-[52px] lg:font-oswald lg:font-semibold lg:leading-[55px] text-center text-black mb-2 text-[20px] md:text-[32px] font-oswald font-semibold leading-tight"
                  variants={fadeInUp}
                >
                  Versions - Neo
                </motion.h3>

                <motion.h2
                  ref={tecCertifiedRef}
                  className="lg:text-[68px] lg:font-oswald lg:font-semibold lg:leading-[70px] text-center uppercase lg:w-[1199px] w-full mb-4 text-[24px] md:text-[40px] font-oswald font-semibold leading-tight"
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
                className="absolute inset-0 flex justify-center items-center left-[60px] top-[250px] lg:left-[385px] lg:top-[400px] lg:w-[436px] lg:h-[688px] w-[300px] h-[420px] md:w-[300px] md:h-[470px] overflow-visible"
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

              {/* Desktop Layout - Left Side - Bandwidth Specs */}
              <motion.div
                ref={neoLeftSpecsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="hidden lg:block relative left-0 top-[329px] flex flex-col gap-[80px]"
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

              {/* Desktop Layout - Right Side - Distance Specs */}
              <motion.div
                ref={neoRightSpecsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="hidden lg:block relative right-0 top-[268px] flex flex-col gap-[80px]"
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

              {/* Mobile/Tablet Layout - Left Side - Bandwidth Specs */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="lg:hidden relative left-0 top-[200px] md:top-[250px] flex flex-col gap-[40px] md:gap-[60px]"
              >
                <motion.div
                  variants={fadeInLeft}
                  className="absolute -left-3 md:left-[20px] top-[100px] md:top-[120px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex flex-col items-center gap-[0.5px] w-[80px] md:w-[100px]">
                    <div className="text-[10px] md:text-[12px] font-oswald font-semibold leading-tight text-center text-black">
                      Upto 1Gbps
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[25px] md:w-[60px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute -left-3 md:left-[20px] top-[200px] md:top-[240px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex flex-col items-center gap-[0.5px] w-[80px] md:w-[100px]">
                    <div className="text-[10px] md:text-[12px] font-oswald font-semibold leading-tight text-center text-black">
                      Upto 1Gbps
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[80px] md:w-[80px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute -left-3 md:left-[20px] top-[300px] md:top-[360px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex flex-col items-center gap-[0.5px] w-[80px] md:w-[100px]">
                    <div className="text-[10px] md:text-[12px] font-oswald font-semibold leading-tight text-center text-black">
                      Upto 10Gbps
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[50px] md:w-[70px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute -left-3 md:left-[20px] top-[400px] md:top-[480px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex flex-col items-center gap-[0.5px] w-[80px] md:w-[100px]">
                    <div className="text-[10px] md:text-[12px] font-oswald font-semibold leading-tight text-center text-black">
                      Upto 10Gbps
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[90px] md:w-[90px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Mobile/Tablet Layout - Right Side - Distance Specs */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="lg:hidden relative right-0 top-[200px] md:top-[250px] flex flex-col gap-[40px] md:gap-[60px]"
              >
                <motion.div
                  variants={fadeInRight}
                  className="absolute right-0 md:right-[20px] top-[100px] md:top-[120px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex items-center">
                    <div className="w-[20px] md:w-[100px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.5px] w-[50px] md:w-[60px]">
                    <div className="text-[14px] md:text-[18px] font-oswald font-semibold leading-tight text-center text-black">
                      10km
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-0 md:right-[20px] top-[200px] md:top-[240px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex items-center">
                    <div className="w-[40px] md:w-[110px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.5px] w-[50px] md:w-[60px]">
                    <div className="text-[14px] md:text-[18px] font-oswald font-semibold leading-tight text-center text-black">
                      5km
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-0 md:right-[20px] top-[300px] md:top-[360px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex items-center">
                    <div className="w-[70px] md:w-[90px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.5px] w-[50px] md:w-[60px]">
                    <div className="text-[14px] md:text-[18px] font-oswald font-semibold leading-tight text-center text-black">
                      5km
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-0 md:right-[20px] top-[400px] md:top-[480px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex items-center">
                    <div className="w-[70px] md:w-[70px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.5px] w-[50px] md:w-[60px]">
                    <div className="text-[14px] md:text-[18px] font-oswald font-semibold leading-tight text-center text-black">
                      3km
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Neo Use Cases - Fixed Desktop Layout */}
            <motion.div
              className="flex flex-col justify-center items-center gap-[34px] lg:w-[1199px] w-full max-w-[1199px]"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className="lg:text-[36px] lg:font-oswald lg:font-semibold lg:leading-[44px] uppercase text-black text-[24px] md:text-[30px] font-oswald font-semibold leading-tight"
                variants={fadeInUp}
              >
                USE CASES
              </motion.h3>
              {/* Desktop Layout */}
              <motion.div
                className="hidden xl:flex xl:items-center xl:gap-[61px] xl:w-full"
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

              {/* iPad Layout */}
              <motion.div
                className="hidden lg:flex xl:hidden lg:flex-col lg:items-center lg:gap-[40px] w-full"
                variants={staggerContainer}
              >
                <div className="grid grid-cols-3 gap-[30px] w-full max-w-[900px]">
                  {neoUseCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col gap-[17px] w-full"
                      variants={fadeInUp}
                      custom={index}
                    >
                      <div className="w-full h-[220px] bg-[#D9D9D9] relative overflow-hidden group">
                        <Image
                          src={useCase.image || "/placeholder.svg"}
                          alt={useCase.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <h4 className="text-[22px] font-oswald font-semibold leading-[26px] text-black">
                          {useCase.title}
                        </h4>
                        <p className="text-[16px] font-sans leading-[20px] text-[#565656]">
                          {useCase.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Layout */}
              <motion.div
                className="lg:hidden flex flex-col items-center gap-[30px] w-full"
                variants={staggerContainer}
              >
                {neoUseCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-[17px] w-full max-w-[359px]"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <div className="w-full h-[200px] md:h-[230px] bg-[#D9D9D9] relative overflow-hidden group">
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <h4 className="text-[20px] md:text-[22px] font-oswald font-semibold leading-tight text-black">
                        {useCase.title}
                      </h4>
                      <p className="text-[14px] md:text-[16px] font-sans leading-relaxed text-[#565656]">
                        {useCase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Supreme Section */}
        <section className="flex flex-col items-center gap-12 w-full">
          <div className="flex flex-col items-center w-full">
            {/* Supreme Product Diagram with Overlaid Text */}
            <div className="relative lg:w-[1200px] lg:h-[910px] w-full h-[700px] md:h-[850px] max-w-[1200px]">
              {/* Overlaid Header Text */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center w-full z-10 lg:px-0 px-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2
                  ref={milGradeRef}
                  className="lg:text-[68px] lg:font-oswald lg:font-semibold lg:leading-[70px] text-center uppercase w-full mb-2 text-[24px] md:text-[40px] font-oswald font-semibold leading-tight"
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
                  className="lg:text-[52px] lg:font-oswald lg:font-semibold lg:leading-[55px] text-center text-black mb-2 text-[20px] md:text-[32px] font-oswald font-semibold leading-tight"
                  variants={fadeInUp}
                >
                  Versions - Supreme
                </motion.h3>
                <motion.h2
                  ref={jssCertifiedRef}
                  className="lg:text-[68px] lg:font-oswald lg:font-semibold lg:leading-[70px] text-center uppercase lg:w-[1199px] w-full mb-4 text-[24px] md:text-[40px] font-oswald font-semibold leading-tight"
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
                className="absolute lg:left-[280px] lg:top-[147px] left-[30px] top-[15%] transform -translate-x-1/2 -translate-y-1/2 lg:w-[764px] lg:h-[611px] w-[500px] h-[450px] md:w-[500px] md:h-[400px] overflow-visible"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{ maxWidth: "100%" }}
              >
                <Image
                  src="/images/op6.png"
                  alt="OpticSpectra Supreme Device"
                  fill
                  className="object-contain"
                  style={{ maxWidth: "100%" }}
                />
              </motion.div>

              {/* Desktop Layout - Left Side - Bandwidth Specs */}
              <motion.div
                ref={supremeLeftSpecsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="hidden lg:block relative left-0 top-[299px] flex flex-col gap-[80px]"
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

              {/* Desktop Layout - Right Side - Distance Specs */}
              <motion.div
                ref={supremeRightSpecsRef}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="hidden lg:block relative right-0 top-[377px] flex flex-col gap-[80px]"
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

              {/* Mobile/Tablet Layout - Left Side - Bandwidth Specs */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="lg:hidden relative left-0 top-[180px] md:top-[220px] flex flex-col gap-[40px] md:gap-[60px]"
              >
                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[5px] md:left-[40px] top-[80px] md:top-[100px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex flex-col items-center gap-[0.5px] w-[70px] md:w-[90px]">
                    <div className="text-[10px] md:text-[12px] font-oswald font-semibold leading-tight text-center text-black">
                      Upto 1Gbps
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[40px] md:w-[70px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[5px] md:left-[20px] top-[160px] md:top-[200px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex flex-col items-center gap-[0.5px] w-[70px] md:w-[90px]">
                    <div className="text-[10px] md:text-[12px] font-oswald font-semibold leading-tight text-center text-black">
                      Upto 1Gbps
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[80px] md:w-[100px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInLeft}
                  className="absolute left-[5px] md:left-[60px] top-[250px] md:top-[310px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex flex-col items-center gap-[0.5px] w-[80px] md:w-[100px]">
                    <div className="text-[10px] md:text-[12px] font-oswald font-semibold leading-tight text-center text-black">
                      Upto 40Gbps
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Bandwidth
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                    <div className="w-[40px] md:w-[50px] h-0 border-t border-dashed border-[#95C149]"></div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Mobile/Tablet Layout - Right Side - Distance Specs */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="lg:hidden relative right-0 top-[180px] md:top-[220px] flex flex-col gap-[40px] md:gap-[60px]"
              >
                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[5px] md:right-[20px] top-[80px] md:top-[100px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex items-center gap-1">
                    <div className="w-[30px] md:w-[90px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.5px] w-[50px] md:w-[60px]">
                    <div className="text-[14px] md:text-[18px] font-oswald font-semibold leading-tight text-center text-black">
                      10km
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[5px] md:right-[20px] top-[160px] md:top-[200px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex items-center gap-1">
                    <div className="w-[50px] md:w-[80px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.5px] w-[50px] md:w-[60px]">
                    <div className="text-[14px] md:text-[18px] font-oswald font-semibold leading-tight text-center text-black">
                      20km
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInRight}
                  className="absolute right-[5px] md:right-[20px] top-[250px] md:top-[310px] flex items-center gap-1 md:gap-3"
                >
                  <div className="flex items-center gap-1">
                    <div className="w-[55px] md:w-[100px] h-0 border-t border-dashed border-[#95C149]"></div>
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#95C149]"></div>
                  </div>
                  <div className="flex flex-col items-center gap-[0.5px] w-[50px] md:w-[60px]">
                    <div className="text-[14px] md:text-[18px] font-oswald font-semibold leading-tight text-center text-black">
                      1km
                    </div>
                    <div className="text-[9px] md:text-[11px] font-sans leading-tight text-center text-black">
                      Distance
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Supreme Use Cases - Fixed Desktop Layout */}
            <motion.div
              className="flex flex-col justify-center items-center gap-[34px] lg:w-[1199px] w-full max-w-[1199px]"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3
                className="lg:text-[36px] lg:font-oswald lg:font-semibold lg:leading-[44px] uppercase text-black text-[24px] md:text-[30px] font-oswald font-semibold leading-tight"
                variants={fadeInUp}
              >
                USE CASES
              </motion.h3>
              {/* Desktop Layout */}
              <motion.div
                className="hidden xl:flex xl:items-start xl:gap-[61px] xl:w-full"
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

              {/* iPad Layout */}
              <motion.div
                className="hidden lg:flex xl:hidden lg:flex-col lg:items-center lg:gap-[40px] w-full"
                variants={staggerContainer}
              >
                <div className="grid grid-cols-3 gap-[30px] w-full max-w-[900px]">
                  {supremeUseCases.map((useCase, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col gap-[17px] w-full bg-white"
                      variants={fadeInUp}
                      custom={index}
                    >
                      <div className="w-full h-[220px] bg-[#D9D9D9] relative overflow-hidden group">
                        <Image
                          src={useCase.image || "/placeholder.svg"}
                          alt={useCase.title}
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col gap-[10px]">
                        <h4 className="text-[22px] font-oswald font-semibold leading-[26px] text-black">
                          {useCase.title}
                        </h4>
                        <p className="text-[16px] font-sans leading-[20px] text-[#565656]">
                          {useCase.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mobile Layout */}
              <motion.div
                className="lg:hidden flex flex-col items-start gap-[30px] w-full"
                variants={staggerContainer}
              >
                {supremeUseCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-[17px] w-full max-w-[359px] bg-white"
                    variants={fadeInUp}
                    custom={index}
                  >
                    <div className="w-full h-[200px] md:h-[230px] bg-[#D9D9D9] relative overflow-hidden group">
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                      <h4 className="text-[20px] md:text-[22px] font-oswald font-semibold leading-tight text-black">
                        {useCase.title}
                      </h4>
                      <p className="text-[14px] md:text-[16px] font-sans leading-relaxed text-[#565656]">
                        {useCase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
