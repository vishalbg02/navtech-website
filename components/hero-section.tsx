"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlurText from "./utils/BlurTextProps";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade out video on scroll
      gsap.to(heroRef.current, {
        opacity: 0.5,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
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
      </video>

      {/* Light overlay to blend with global background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent" />

      {/* Hero Text Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <BlurText
          text="Main Video"
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-4xl lg:text-5xl xl:text-6xl font-oswald font-semibold leading-tight text-black"
        />
      </div>
    </section>
  );
}
