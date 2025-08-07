"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextSection() {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".text-element",
        {
          y: 80,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        backgroundRef.current,
        {
          scale: 1.1,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 10%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.to(sectionRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(textRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background - solid white */}
      <div ref={backgroundRef} className="absolute inset-0 bg-white"></div>

      <div
        ref={textRef}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Main heading */}
        <div className="text-element">
          <h1
            className="text-[55px] font-oswald font-semibold leading-tight tracking-tight"
            style={{ color: "#000000" }}
          >
            NAVTECH
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-element mb-11">
          <h2
            className="text-[24px] font-manrope font-normal leading-relaxed"
            style={{ color: "#565656" }}
          >
            Innovating with Optical Wireless Technology
          </h2>
        </div>

        {/* Paragraph */}
        <div className="text-element">
          <p className="text-[24px] font-manrope font-normal max-w-3xl mx-auto leading-relaxed mb-12 text-[#000000]">
            <span className="block">
              Transforming the future of connectivity with cutting-edge optical
              wireless
            </span>
            <span className="block">
              solutions that revolutionize how the world communicates
            </span>
          </p>
        </div>

        {/* Key features */}
        <div className="text-element">
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <div className="border-2 border-[#95c149] hover:bg-[#95c149] hover:text-white text-gray-700 rounded-full px-6 py-3 transition-all duration-300 ease-in-out">
              <span className="font-normal text-sm md:text-base font-manrope">
                RF-Free Communication
              </span>
            </div>
            <div className="border-2 border-[#95c149] hover:bg-[#95c149] hover:text-white text-gray-700 rounded-full px-6 py-3 transition-all duration-300 ease-in-out">
              <span className="font-normal text-sm md:text-base font-manrope">
                High-Speed Data Transfer
              </span>
            </div>
            <div className="border-2 border-[#95c149] hover:bg-[#95c149] hover:text-white text-gray-700 rounded-full px-6 py-3 transition-all duration-300 ease-in-out">
              <span className="font-normal text-sm md:text-base font-manrope">
                Secure & Reliable
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
