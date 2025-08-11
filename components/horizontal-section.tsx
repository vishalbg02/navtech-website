"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HorizontalSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const router = useRouter();

  const sections = [
    {
      title: "OpticSpectra",
      subtitle: "Adaptive FSO Connectivity for Unstoppable Networks",
      description:
          "Nav Wireless Technologies delivers adaptive Free Space Optics (FSO) solutions that dynamically adjust bandwidth based on environmental conditions like fog, rain, or interference. Ideal for mission-critical applications, these intelligent links ensure high availability and performance for smart cities, defense, disaster recovery, and enterprise backhaul.",
      images: ["/images/opticspectra.png"],
      hasMultipleImages: false,
      navigationPath: "/products/opticspectra",
    },
    {
      title: "NavOcular",
      subtitle: "Infrared Intelligence for Interference-Free Connectivity",
      description:
          "Nav Ocular uses invisible infrared (IR) light via Visible Light Communication (VLC) to provide secure, high-speed wireless communication without relying on RF spectrum. Its mesh network enables seamless data routing, self-healing, and scalability. Ideal for smart buildings, factories, hospitals, and EMI-sensitive areas, Nav Ocular ensures low-latency, interference-free, and secure connectivity for next-gen wireless infrastructure.",
      images: ["/images/navocular.png", "/images/nav2.png"],
      hasMultipleImages: true,
      navigationPath: "/products/navocular",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
      <section ref={sectionRef} className="bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[60px] xl:px-[120px]">
          {/* Main Heading */}
          <motion.div
              className="text-center mb-10 md:mb-16"
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-oswald font-semibold text-gray-900 uppercase tracking-wide">
              Our Innovations
            </h1>
          </motion.div>

          {/* Sections */}
          <motion.div
              className="space-y-16 md:space-y-20"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
          >
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16"
                    variants={fadeInUp}
                >
                  {/* Content Side - Always on Left */}
                  <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-oswald font-semibold text-gray-900 leading-tight mb-2 md:mb-4">
                        {section.title}
                      </h2>
                      <h3 className="text-lg md:text-xl lg:text-2xl max-w-full md:max-w-[650px] text-gray-700 font-sans leading-relaxed mb-2 md:mb-4">
                        {section.subtitle}
                      </h3>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                      <p className="text-sm md:text-base lg:text-lg text-gray-700 font-sans leading-relaxed">
                        {section.description}
                      </p>

                      <div>
                        <button
                            onClick={() => router.push(section.navigationPath)}
                            className="group border-2 border-[#95c149] hover:bg-[#95c149] text-gray-700 hover:text-white px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-200 ease-out transform hover:scale-105"
                        >
                          <span>Learn More</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Image Side - Always on Right */}
                  <div className="w-full lg:w-1/2 flex flex-col items-center">
                    {section.hasMultipleImages ? (
                        // NavOcular: Two images stacked vertically with responsive dimensions
                        <div className="flex flex-col w-full items-center space-y-2 md:space-y-4">
                          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden">
                            <Image
                                src={section.images[0]}
                                alt={`${section.title} 1`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                          <div className="relative w-full h-[120px] md:h-[200px] lg:h-[150px] rounded-lg overflow-hidden -mt-4 md:-mt-8">
                            <Image
                                src={section.images[1]}
                                alt={`${section.title} 2`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                        </div>
                    ) : (
                        // OpticSpectra: Single image
                        <div className="relative w-full h-[220px] md:h-[350px] lg:h-[500px] rounded-lg overflow-hidden">
                          <Image
                              src={section.images[0]}
                              alt={section.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                    )}
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}