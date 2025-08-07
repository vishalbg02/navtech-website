"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LogosSection() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  const members = [
    "/images/m1.png",
    "/images/m2.png",
    "/images/m3.png",
    "/images/m4.png",
    "/images/m5.png",
  ];

  const research = [
    "/images/rc1.png",
    "/images/rc2.png",
    "/images/rc3.png",
    "/images/rc4.png",
    "/images/rc5.png",
    "/images/rc6.png",
    "/images/rc7.png",
  ];

  const clients = [
    "/images/cl1.png",
    "/images/cl2.png",
    "/images/cl3.png",
    "/images/cl4.png",
    "/images/cl5.png",
    "/images/cl6.jpg",
    "/images/cl7.png",
  ];

  const sections = [
    {
      title: "MEMBERS",
      data: members,
    },
    {
      title: "RESEARCH COALITION",
      data: research,
    },
    {
      title: "ESTEEMED CLIENTS",
      data: clients,
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, sectionIndex) => {
        const logosContainer = section.querySelector(".logos-container-grid");
        const logos = section.querySelectorAll(".logo-item");

        if (!logosContainer || !logos.length) return;

        let totalWidth = 0;
        logos.forEach((logo) => {
          totalWidth += logo.offsetWidth + 160;
        });

        const originalHTML = logosContainer.innerHTML;
        logosContainer.innerHTML = originalHTML + originalHTML + originalHTML;

        gsap.set(logosContainer, { x: 0 });

        const tl = gsap.timeline({ repeat: -1 });
        tl.to(logosContainer, {
          x: -totalWidth,
          duration: logos.length * 3,
          ease: "none",
        });

        // Entrance animation for section header
        gsap.from(section.querySelector(".section-header"), {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="logos-container py-16 relative overflow-hidden"
    >
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/20 via-white/25 to-slate-100/20 backdrop-blur-lg"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-green-200/15 to-blue-200/15 blur-3xl animate-pulse"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-r from-green-200/10 to-emerald-200/10 blur-3xl animate-pulse delay-700"></div>
        <div className="absolute left-1/2 top-1/2 w-1/3 h-full bg-gradient-to-r from-blue-200/5 to-green-200/5 blur-2xl animate-pulse delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            ref={(el) => (sectionsRef.current[sectionIndex] = el)}
            className="py-12 px-4 sm:px-6 lg:px-8"
          >
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="section-header text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-oswald font-semibold text-black">
                  {section.title}
                </h2>
              </div>

              {/* Logos Scroller */}
              <div className="overflow-hidden relative">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>

                <div className="logos-container-grid flex flex-row gap-4 sm:gap-40 whitespace-nowrap">
                  {section.data.map((logo, index) => (
                    <div
                      key={index}
                      className="logo-item inline-block"
                      style={{ minWidth: "200px" }}
                    >
                      <img
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="w-full h-24 sm:h-28 lg:h-32 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .logo-item {
          transition: all 0.3s ease;
          transform-origin: center center;
        }

        .logos-container-grid {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
