"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

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
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover brightness-110"
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Very light overlay to ensure video visibility */}
      <div className="absolute inset-0 bg-black/5" />
    </section>
  )
}
