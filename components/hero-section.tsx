"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      }, 6000);
    };

    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative -top-5 bottom-0 h-[50vh] lg:top-0 lg:bottom-0 lg:h-screen w-full overflow-hidden"
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0
                   brightness-110 opacity-80
                   w-full h-full
                   object-contain lg:object-cover"
        style={{
          objectPosition: "center center",
        }}
      >
        <source src="/videos/01 Home_website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
