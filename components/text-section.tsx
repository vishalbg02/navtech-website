"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"

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
      <section
          ref={sectionRef}
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/images/nav-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
      >
        {/* Background overlay for better text readability */}
        <div
            ref={backgroundRef}
            className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20"
        ></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.1)_0%,transparent_50%)] bg-[length:100px_100px]"></div>
        </div>

        <div ref={textRef} className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          {/* Main heading */}
          <div className="text-element mb-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-800 mb-4 leading-tight tracking-tight">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              NavTech
            </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-element mb-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-green-600 mb-4 leading-tight">
              <span className="block mb-2">Innovating with LiFi</span>
              <span className="block">Wireless Technology</span>
            </h2>
          </div>

          {/* Description */}
          <div className="text-element mb-12">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light">
              Transforming the future of connectivity with cutting-edge optical wireless solutions that revolutionize how
              the world communicates
            </p>
          </div>

          {/* Key features */}
          <div className="text-element mb-12">
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg shadow-gray-200/50 border border-gray-200/50">
                <span className="text-green-600 font-semibold text-lg">RF-Free Communication</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg shadow-gray-200/50 border border-gray-200/50">
                <span className="text-green-600 font-semibold text-lg">High-Speed Data Transfer</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg shadow-gray-200/50 border border-gray-200/50">
                <span className="text-green-600 font-semibold text-lg">Secure & Reliable</span>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-element">
            <div className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl shadow-gray-300/30 border border-gray-200/50 hover:bg-white transition-all duration-300 group cursor-pointer">
              <span className="text-gray-700 text-lg font-medium">Scroll to explore our innovations</span>
              <ChevronDown className="w-5 h-5 text-green-600 animate-bounce group-hover:animate-none transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-500/5 rounded-full blur-2xl"></div>
      </section>
  )
}
