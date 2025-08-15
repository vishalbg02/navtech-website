"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import BlurText from "@/components/utils/BlurTextProps";
import { motion, useInView } from "framer-motion";

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

const fadeInDown = (delay: number) => ({
  hidden: { opacity: 0, y: -60 },
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

const drawLine = (delay: number) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut", delay: delay },
  },
});

export default function OpticSpectraPage() {
  const [neoCurrentIndex, setNeoCurrentIndex] = useState(0);
  // const videoRef = useRef<HTMLVideoElement>(null);

  const navocularUseCases = [
    {
      title: "Smart Buildings",
      description:
        "Empowers seamless user experience by using existing lighting for high-speed indoor connectivity, reducing dependence on traditional networks and enhancing energy-efficient communication.",
      image: "/images/Smart Buildings.png",
    },
    {
      title: "6G-Ready Optical Layer Integration",
      description:
        "Acts as a foundational layer for 6G architecture by enabling distributed, low-latency optical cells indoors leveraging visible and IR light for localized, energy-efficient, and ultra-secure mesh-based connectivity.",
      image: "/images/6G.png",
    },
    {
      title: "5G Indoor Offloading & Edge Zones",
      description:
        "Supports ultra-fast, short-range wireless links within high-density indoor zones (airports, malls, offices), offloading traffic from congested 5G small cells and enhancing network capacity with zero-spectrum use.",
      image: "/images/5G.png",
    },
  ];

  useEffect(() => {
    const neoInterval = setInterval(() => {
      setNeoCurrentIndex((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(neoInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Video Section */}
      <section className="relative w-full h-screen bg-[#E5E5E5] flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp(0.2)}>
            {/* <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute top-0 left-0 w-full h-full object-cover brightness-110 opacity-80"
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <BlurText
              text="Video of The product"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-oswald font-semibold leading-tight text-black mb-6"
            />
          </motion.div>
          <motion.div
            className="relative w-16 h-16 md:w-20 md:h-20 lg:w-[78px] lg:h-[78px] mx-auto"
            variants={scaleIn(0.8)}
          >
            <div className="absolute inset-0 bg-white/40 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[16px] md:border-l-[20px] border-l-white border-t-[10px] md:border-t-[12px] border-t-transparent border-b-[10px] md:border-b-[12px] border-b-transparent ml-1"></div>
          </motion.div>
        </motion.div>
      </section>

      <div className="flex flex-col items-center gap-16 md:gap-24 lg:gap-[120px] py-16 md:py-24 lg:py-[120px] px-4">
        {/* About NavOcular Section */}
        <section className="flex flex-col items-center gap-6 w-full max-w-5xl">
          <motion.div
            className="flex flex-col items-center gap-[14px] w-full"
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-lg md:text-xl lg:text-[22px] font-oswald font-semibold leading-tight text-center uppercase text-black">
                ABOUT
              </h2>
              <div className="relative mt-[5px] flex items-center justify-center w-72 md:w-80 lg:w-[400px] h-10 md:h-11 lg:h-[46px] bg-[#95C149]">
                <span className="text-3xl md:text-4xl lg:text-[46px] font-oswald font-semibold text-white uppercase z-10 leading-tight">
                  NavOcular
                </span>
              </div>
            </div>
          </motion.div>
          <motion.p
            className="text-base md:text-lg font-sans leading-relaxed text-center text-[#565656] max-w-4xl"
            variants={fadeInUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Nav Ocular leverages Visible Light Communication (VLC) using
            invisible infrared (IR) light to enable secure, high-speed wireless
            communication without relying on traditional RF spectrum. Designed
            with a mesh network topology, Nav Ocular allows multiple IR nodes to
            seamlessly connect, route data intelligently, and self-heal in case
            of link disruption, ensuring reliable and scalable connectivity
            across complex environments.
            <br />
            <br /> Ideal for smart buildings, industrial floors, medical
            facilities, and EMI-sensitive zones, Nav Ocular delivers
            low-latency, interference-free communication with enhanced security,
            making it a future-ready solution for modern wireless
            infrastructure.
          </motion.p>
        </section>

        <section className="py-[120px] relative bg-white">
          <div className="max-w-[1440px] mx-auto relative h-[700px] hidden lg:block">
            <motion.div
              className="absolute w-[800px] h-[700px] -left-[450px] transform -translate-x-1/2 -top-[80px]"
              variants={fadeInDown(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/images/Nav Ocular Light with Beam.png"
                alt="NavOcular Light Device"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.div
              className="absolute w-[300px] h-[200px] left-[-600px] top-[620px]"
              variants={fadeInLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/images/nav2.png"
                alt="NavOcular Dongle"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.div
              className="absolute w-[200px] h-0 left-[220px] top-[130px] border-t border-dashed border-[#95C149]"
              variants={fadeInRight(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute w-0 h-[200px] left-[420px] top-[130px] border-l border-dashed border-[#95C149]"
              variants={fadeInDown(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute w-[8px] h-[8px] rounded-full bg-[#95C149] left-[416px] top-[330px]"
              variants={scaleIn(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute w-[200px] h-0 left-[-450px] top-[130px] border-t border-dashed border-[#95C149]"
              variants={fadeInLeft(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute w-0 h-[200px] left-[-450px] top-[130px] border-l border-dashed border-[#95C149]"
              variants={fadeInDown(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute w-[8px] h-[8px] rounded-full bg-[#95C149] left-[-454px] top-[330px]"
              variants={scaleIn(1.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute w-[520px] h-0 left-[-230px] top-[700px] border-t border-dashed border-[#95C149]"
              variants={fadeInRight(1.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute w-[8px] h-[8px] rounded-full bg-[#95C149] top-[696px] left-[290px]"
              variants={scaleIn(1.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            ></motion.div>

            <motion.div
              className="absolute left-[330px] top-[350px] flex flex-col items-center gap-1 w-[170px]"
              variants={fadeInUp(1.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-[38px] font-oswald font-semibold leading-[46px] text-center text-black">
                4 Meter
              </div>
              <div className="text-[21px] font-sans leading-[26px] text-center text-black">
                Distance
              </div>
            </motion.div>

            <motion.div
              className="absolute right-[340px] top-[350px] flex flex-col items-center gap-1 w-[230px]"
              variants={fadeInUp(1.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-[38px] font-oswald font-semibold leading-[46px] text-center text-black">
                75-80Mbps
              </div>
              <div className="text-[21px] font-sans leading-[26px] text-center text-black">
                Bandwidth
              </div>
            </motion.div>

            <motion.div
              className="absolute right-[-550px] top-[650px] flex flex-col items-center gap-1 w-[177px]"
              variants={fadeInUp(1.6)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-[38px] font-oswald font-semibold leading-[46px] text-center text-black">
                60 Degree
              </div>
              <div className="text-[21px] font-sans leading-[26px] text-center text-black">
                Transmission Angle
              </div>
            </motion.div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden px-4">
            <div className="flex flex-col items-center gap-8 md:gap-12 relative max-w-2xl mx-auto">
              <motion.div
                className="w-full max-w-md relative"
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src="/images/Nav Ocular Light with Beam.png"
                  alt="NavOcular Light Device"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              <div className="relative w-full flex justify-center">
                <motion.div
                  className="w-[8px] h-[8px] relative"
                  variants={scaleIn(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute -top-[220px] right-[80px] w-7 md:w-24 h-0 border-t border-dashed border-[#95C149] transform -translate-y-1/2"
                    variants={fadeInDown(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  ></motion.div>

                  <motion.div
                    className="absolute -top-[220px] left-[-100px] md:left-[-96px] w-0 h-[260px] border-l border-dashed border-[#95C149]"
                    variants={fadeInDown(0.9)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  ></motion.div>

                  <motion.div
                    className="absolute -top-[220px] left-[90px] w-7 md:w-24 h-0 border-t border-dashed border-[#95C149] transform -translate-y-1/2"
                    variants={fadeInDown(0.7)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  ></motion.div>

                  <motion.div
                    className="absolute -top-[220px] right-[-110px] md:right-[-96px] w-0 h-[260px] border-l border-dashed border-[#95C149]"
                    variants={fadeInDown(0.9)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  ></motion.div>
                </motion.div>
              </div>

              <div className="relative w-full">
                <motion.div
                  className="flex justify-between items-start w-full relative pl-4 pr-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex flex-col items-center gap-1 text-center relative"
                    variants={fadeInUp(1.1)}
                  >
                    <motion.div
                      className="w-[8px] h-[8px] rounded-full bg-[#95C149] mb-2"
                      variants={scaleIn(1.3)}
                    ></motion.div>
                    <div className="text-xl md:text-2xl font-oswald font-semibold leading-tight text-black">
                      75-80Mbps
                    </div>
                    <div className="text-base md:text-lg font-sans leading-relaxed text-black">
                      Bandwidth
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center gap-1 text-center relative"
                    variants={fadeInDown(1.1)}
                  >
                    <motion.div
                      className="w-[8px] h-[8px] rounded-full bg-[#95C149] mb-2"
                      variants={scaleIn(1.3)}
                    ></motion.div>
                    <div className="text-xl md:text-2xl font-oswald font-semibold leading-tight text-black">
                      4 Meter
                    </div>
                    <div className="text-base md:text-lg font-sans leading-relaxed text-black">
                      Distance
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="relative flex flex-col items-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              ></motion.div>

              <motion.div
                className="w-48 md:w-60 relative mt-20"
                variants={fadeInUp(2.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src="/images/nav2.png"
                  alt="NavOcular Dongle"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

              <motion.div
                className="relative flex flex-col items-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-0 h-24 border-l border-dashed border-[#95C149]"
                  variants={fadeInDown(2.3)}
                ></motion.div>
                <motion.div
                  className="w-[8px] h-[8px] rounded-full bg-[#95C149]"
                  variants={scaleIn(2.5)}
                ></motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-1 text-center"
                variants={fadeInUp(2.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="text-xl md:text-2xl font-oswald font-semibold leading-tight text-black">
                  60 Degree
                </div>
                <div className="text-base md:text-lg font-sans leading-relaxed text-black">
                  Transmission Angle
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-[34px] w-full max-w-6xl">
              <motion.h3
                className="text-2xl md:text-3xl lg:text-[36px] font-oswald font-semibold leading-tight uppercase text-black text-center"
                variants={fadeInUp(1.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                USE CASES
              </motion.h3>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-[61px] w-full"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {navocularUseCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-4 lg:gap-[17px] w-full max-w-sm mx-auto lg:max-w-none"
                    variants={fadeInUp(0.5 * index)}
                  >
                    <motion.div
                      className="w-full h-48 md:h-56 lg:h-[259px] bg-[#D9D9D9] relative overflow-hidden group"
                      variants={scaleIn(0.5 + 0.5 * index)}
                    >
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </motion.div>
                    <div className="flex flex-col gap-2 lg:gap-[10px]">
                      <h4 className="text-xl md:text-2xl font-oswald font-semibold leading-tight text-black">
                        {useCase.title}
                      </h4>
                      <p className="text-base md:text-lg font-sans leading-relaxed text-[#565656]">
                        {useCase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
