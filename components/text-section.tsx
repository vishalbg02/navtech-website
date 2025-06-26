"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function TextSection() {
  const textRef = useRef(null)
  const sectionRef = useRef(null)
  const backgroundRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate text entrance with stagger
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
          },
      )

      // Animate background elements
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
          },
      )

      // Fade out section when scrolling to next
      gsap.to(sectionRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "center top",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Subtle parallax effect
      gsap.to(textRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
      <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div ref={backgroundRef} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white/10 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-20"></div>
        </div>

        <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div ref={textRef} className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Main heading */}
                <div className="text-element">
                    <h1
                        className="text-[7.5rem] font-medium text-gray-900 leading-tight tracking-tight"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                        NAVTECH
                    </h1>
                </div>

                {/* Subtitle */}
                <div className="text-element mb-11">
                    <h2
                        className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed"
                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                    >
                        Innovating with LiFi Wireless Technology
                    </h2>
                </div>
            </div>



            <div className="text-element mb-12">
              <p
                  className="text-[1.5rem] md:text-[1.5rem] lg:text-[1.5rem] font-light text-gray-900 max-w-3xl mx-auto leading-relaxed mb-12"
                  style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
              >
                  Transforming the future of connectivity with cutting-edge optical wireless solutions that revolutionize how
                  the world communicates
              </p>
          </div>


          {/* Key features */}
          <div className="text-element mb-12">
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <div className="border-2 border-[#95c149] hover:bg-[#95c149] hover:text-white text-gray-700 rounded-full px-6 py-3 transition-all duration-300 ease-in-out">
      <span
          className="font-medium text-sm md:text-base"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        RF-Free Communication
      </span>
              </div>
              <div className="border-2 border-[#95c149] hover:bg-[#95c149] hover:text-white text-gray-700 rounded-full px-6 py-3 transition-all duration-300 ease-in-out">
      <span
          className="font-medium text-sm md:text-base"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        High-Speed Data Transfer
      </span>
              </div>
              <div className="border-2 border-[#95c149] hover:bg-[#95c149] hover:text-white text-gray-700 rounded-full px-6 py-3 transition-all duration-300 ease-in-out">
      <span
          className="font-medium text-sm md:text-base"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        Secure & Reliable
      </span>
              </div>
            </div>
          </div>

        </div>
      </section>
  )
}
