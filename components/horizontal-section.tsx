"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GLBModelViewer from "@/components/utils/GLBModelViewer";

if (typeof GLBModelViewer.preload === "function") {
  GLBModelViewer.preload("/glb/opticspectra.glb");
  GLBModelViewer.preload("/glb/navocular.glb");
  GLBModelViewer.preload("/glb/navocular1.glb");
}

export default function HorizontalSection() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [currentNavOcularModel, setCurrentNavOcularModel] = useState(0);

  const animateSections = useCallback(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = sectionsRef.current.filter(Boolean);

      if (sections.length > 0) {
        const scrollDistance = window.innerWidth * (sections.length - 1);

        gsap.set(headerRef.current, { opacity: 0, y: -20 });
        gsap.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4, // Faster animation
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            toggleActions: "play none none reverse",
            id: "header-visibility",
          },
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 0.6, // Faster scrub
            id: "header-fade-out-end",
            onUpdate: (self) => {
              if (self.progress > 0.8) {
                const fadeProgress = (self.progress - 0.8) / 0.2;
                gsap.set(headerRef.current, {
                  opacity: 1 - fadeProgress,
                  y: -20 * fadeProgress,
                });
              }
            },
          },
        });

        const horizontalTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            scrub: 0.6,
            snap: {
              snapTo: 1 / (sections.length - 1),
              duration: { min: 0.1, max: 0.2 },
              delay: 0.03,
            },
            start: "top top",
            end: () => `+=${scrollDistance}`,
            refreshPriority: 10,
            id: "horizontal-scroll",
            fastRefresh: true, // Optimize ScrollTrigger refresh
            onComplete: () => {
              window.horizontalScrollComplete = true;
              ScrollTrigger.refresh();
            },
          },
        });

        sections.forEach((section, index) => {
          const title = section.querySelector(".section-title");
          const content = section.querySelector(".section-content");
          const model3d = section.querySelector(".section-3d");

          if (title) {
            gsap.fromTo(
              title,
              { y: 30, opacity: 0, scale: 0.97 },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6, // Faster animation
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  containerAnimation: horizontalTween,
                  start: "left center",
                  end: "center center",
                  toggleActions: "play none none reverse",
                  fastRefresh: true,
                },
              }
            );
          }

          if (content) {
            gsap.fromTo(
              content,
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                delay: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  containerAnimation: horizontalTween,
                  start: "left center",
                  end: "center center",
                  toggleActions: "play none none reverse",
                  fastRefresh: true,
                },
              }
            );
          }

          if (model3d) {
            gsap.fromTo(
              model3d,
              { scale: 0.95, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  containerAnimation: horizontalTween,
                  start: "left center",
                  end: "center center",
                  toggleActions: "play none none reverse",
                  fastRefresh: true,
                },
              }
            );
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    animateSections();
  }, [animateSections]);

  const sections = useMemo(
    () => [
      {
        title: "OpticSpectra",
        subtitle: "Adaptive FSO Connectivity for Unstoppable Networks",
        description:
          "Nav Wireless Technologies delivers adaptive Free Space Optics (FSO) solutions that dynamically adjust bandwidth based on environmental conditions like fog, rain, or interference. Ideal for mission-critical applications, these intelligent links ensure high availability and performance for smart cities, defense, disaster recovery, and enterprise backhaul.",
        model: "/glb/opticspectra.glb",
        isDual: false,
      },
      {
        title: "NavOcular",
        subtitle: "Infrared Intelligence for Interference-Free Connectivity",
        description:
          "Nav Ocular uses invisible infrared (IR) light via Visible Light Communication (VLC) to provide secure, high-speed wireless communication without relying on RF spectrum. Its mesh network enables seamless data routing, self-healing, and scalability. Ideal for smart buildings, factories, hospitals, and EMI-sensitive areas, Nav Ocular ensures low-latency, interference-free, and secure connectivity for next-gen wireless infrastructure.",
        model: ["/glb/navocular.glb", "/glb/navocular1.glb"],
        isDual: true,
      },
    ],
    []
  );

  const handleModelSwitch = useCallback((index: number) => {
    setCurrentNavOcularModel(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNavOcularModel((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        ref={headerRef}
        className="fixed top-0 left-0 right-0 text-center py-8 z-20"
      >
        <h1
          className="text-4xl lg:text-5xl xl:text-6xl font-oswald font-semibold text-gray-900 uppercase tracking-wide"
        >
          OUR INNOVATIONS
        </h1>
      </div>

      <div
        ref={containerRef}
        className="horizontal-container relative w-full h-screen flex"
        style={{
          width: `${100 * sections.length}vw`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-white/5 to-white/3"></div>

        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el;
            }}
            className="horizontal-section w-screen h-screen flex items-center flex-shrink-0 relative"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${
                index === 0
                  ? "from-blue-500/8 to-cyan-500/8"
                  : "from-purple-500/8 to-pink-500/8"
              } opacity-50`}
            ></div>

            <div className="container mx-auto px-8 flex flex-col items-center gap-8 relative z-10 pt-8">
              <div className="w-full max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="section-title">
                      <h2
                        className="text-[2.0rem] lg:text-[2.5rem] xl:text-[2.5rem] font-oswald font-semibold text-gray-900 leading-tight mb-4"
                      >
                        {section.title}
                      </h2>
                      <h3
                        className="text-xl lg:text-2xl text-gray-700 font-sans leading-relaxed mb-6"
                      >
                        {section.subtitle}
                      </h3>
                    </div>

                    <div className="section-content space-y-6">
                      <p
                        className="text-[1.0rem] lg:text-[1.0rem] text-gray-700 font-sans leading-relaxed max-w-lg"
                      >
                        {section.description}
                      </p>

                      {section.isDual && (
                        <div className="flex items-center space-x-4">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-75"></div>
                          </div>
                          <span className="text-sm text-gray-500">
                            Dual Model View
                          </span>
                          <div className="flex space-x-2">
                            <button
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                currentNavOcularModel === 0
                                  ? "bg-purple-500 text-white"
                                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                              }`}
                              onClick={() => handleModelSwitch(0)}
                            >
                              Model 1
                            </button>
                            <button
                              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                currentNavOcularModel === 1
                                  ? "bg-purple-500 text-white"
                                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                              }`}
                              onClick={() => handleModelSwitch(1)}
                            >
                              Model 2
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="pt-4">
                        <button
                          className="group border-2 border-[#95c149] hover:bg-[#95c149] text-gray-700 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200 ease-out transform hover:scale-105"
                        >
                          <span>Learn More</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 section-content">
                    <div
                      className={`section-3d relative w-full max-w-2xl mx-auto ${
                        section.title === "OpticSpectra"
                          ? "h-[600px] lg:h-[700px] top-[100px]" // OpticSpectra - increased size
                          : section.isDual && currentNavOcularModel === 0
                          ? "h-[600px] lg:h-[700px]"
                          : section.isDual && currentNavOcularModel === 1
                          ? "h-[600px] lg:h-[700px]"
                          : "h-[600px] lg:h-[700px]"
                      }`}
                    >
                      <GLBModelViewer
                        modelPath={
                          section.isDual && Array.isArray(section.model)
                            ? section.model[currentNavOcularModel]
                            : typeof section.model === "string"
                            ? section.model
                            : section.model[0]
                        }
                        className="w-full h-full"
                        autoRotate={true}
                        autoRotateSpeed={2}
                      />

                      <div className="absolute bottom-4 right-4 text-gray-500 text-sm flex items-center space-x-2">
                        <svg
                          className="w-6 h-6 animate-spin"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 12a8 8 0 0116 0 8 8 0 01-16 0zm8-8v2m0 12v2m8-8h-2m-12 0H4"
                          />
                        </svg>
                        <span>360° View</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
