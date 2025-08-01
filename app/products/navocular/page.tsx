"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import BlurText from "@/components/utils/BlurTextProps";
import { motion, useInView } from "framer-motion";
import Reference from "@/components/ui/ReferenceCarousel";
import ReferenceCarousel from "@/components/ui/ReferenceCarousel";

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

  const referenceRef = useRef(null);

  const referenceInView = useInView(referenceRef, {
    once: true,
    margin: "-100px",
  });

  const navocularUseCases = [
    {
      title: "Smart Buildings",
      description:
        "Empowers seamless user experience by using existing lighting for high-speed indoor connectivity, reducing dependence on traditional networks and enhancing energy-efficient communication.",
      image: "/images/op2.jpg",
    },
    {
      title: "6G-Ready Optical Layer Integration",
      description:
        "Acts as a foundational layer for 6G architecture by enabling distributed, low-latency optical cells indoors leveraging visible and IR light for localized, energy-efficient, and ultra-secure mesh-based connectivity.",
      image: "/images/op3.jpg",
    },
    {
      title: "5G Indoor Offloading & Edge Zones",
      description:
        "Supports ultra-fast, short-range wireless links within high-density indoor zones (airports, malls, offices), offloading traffic from congested 5G small cells and enhancing network capacity with zero-spectrum use.",
      image: "/images/op4.jpg",
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
    <div
      className="relative min-h-screen bg-white"
      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
    >
      {/* Video Section */}
      <section className="relative w-full h-screen bg-[#E5E5E5] flex items-center justify-center">
        <motion.div
          className="text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp(0.2)}>
            <BlurText
              text="Video of The product"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-[64px] font-bold leading-[77px] text-black mb-6"
            />
          </motion.div>
          <motion.div
            className="relative w-[78px] h-[78px] mx-auto"
            variants={scaleIn(0.8)}
          >
            <div className="absolute inset-0 bg-white/40 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
          </motion.div>
        </motion.div>
      </section>

      <div className="flex flex-col items-center gap-[120px] py-[120px]">
        {/* About NavOcular Section */}
        <section className="flex flex-col items-center gap-6 w-[1125px]">
          <motion.div
            className="flex flex-col items-center gap-[14px] w-full"
            variants={fadeInUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <h2 className="text-[22px] font-bold leading-[23px] text-center uppercase text-black">
                ABOUT
              </h2>
              <div className="relative mt-[5px] flex items-center justify-center w-[400px] h-[46px] bg-[#95C149]">
                <span className="text-[46px] font-bold text-white uppercase z-10 leading-[56px]">
                  NavOcular
                </span>
              </div>
            </div>
          </motion.div>
          <motion.p
            className="text-[18px] font-light leading-[22px] text-center text-[#565656]"
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

        {/* Reference Image */}
        <motion.div
          className="w-full h-[436px] relative"
          variants={scaleIn(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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

        <section className="py-[120px] relative bg-white">
          <div className="max-w-[1440px] mx-auto relative h-[700px]">
            <motion.div
              className="absolute w-[400px] h-[200px] -left-[220px] transform -translate-x-1/2 top-[20px]"
              variants={fadeInDown(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src="/images/nav1.png"
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
              <div className="text-[38px] font-bold leading-[46px] text-center text-black">
                4 Meter
              </div>
              <div className="text-[21px] font-light leading-[26px] text-center text-black">
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
              <div className="text-[38px] font-bold leading-[46px] text-center text-black">
                75-80Mbps
              </div>
              <div className="text-[21px] font-light leading-[26px] text-center text-black">
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
              <div className="text-[38px] font-bold leading-[46px] text-center text-black">
                60 Degree
              </div>
              <div className="text-[21px] font-light leading-[26px] text-center text-black">
                Transmission Angle
              </div>
            </motion.div>
          </div>
        </section>

        <section className="flex flex-col items-center gap-20 w-full">
          <div className="flex flex-col items-center -gap-0 w-full">
            <div className="flex flex-col justify-center items-center gap-[34px] w-[1199px]">
              <motion.h3
                className="text-[36px] font-bold leading-[44px] uppercase text-black"
                variants={fadeInUp(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                USE CASES
              </motion.h3>
              <motion.div
                className="flex items-start gap-[61px] w-full"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {navocularUseCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-[17px] w-[359px]"
                    variants={fadeInUp(0.2 * index)}
                  >
                    <motion.div
                      className="w-full h-[259px] bg-[#D9D9D9] relative overflow-hidden group"
                      variants={scaleIn(0.3 + 0.2 * index)}
                    >
                      <Image
                        src={useCase.image || "/placeholder.svg"}
                        alt={useCase.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </motion.div>
                    <div className="flex flex-col gap-[10px]">
                      <h4 className="text-[24px] font-bold leading-[29px] text-black">
                        {useCase.title}
                      </h4>
                      <p className="text-[18px] font-light leading-[22px] text-[#565656]">
                        {useCase.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="flex gap-[15px]"
                variants={fadeInUp(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
