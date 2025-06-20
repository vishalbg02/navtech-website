"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ArrowRight, Zap, Shield, Globe, Lightbulb } from "lucide-react"

export default function HorizontalSection() {
  const containerRef = useRef(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const sections = sectionsRef.current.filter(Boolean)

      if (sections.length > 0) {
        const scrollDistance = window.innerWidth * (sections.length - 1)

        const horizontalTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            snap: {
              snapTo: 1 / (sections.length - 1),
              duration: { min: 0.2, max: 0.4 },
              delay: 0.1,
            },
            start: "top top",
            end: () => `+=${scrollDistance}`,
            refreshPriority: 10,
            id: "horizontal-scroll",
            onComplete: () => {
              window.horizontalScrollComplete = true
              ScrollTrigger.refresh()
            },
          },
        })

        sections.forEach((section, index) => {
          const title = section.querySelector(".section-title")
          const content = section.querySelector(".section-content")
          const image = section.querySelector(".section-image")
          const features = section.querySelectorAll(".feature-item")

          // Enhanced title animation
          if (title) {
            gsap.fromTo(
                title,
                { y: 60, opacity: 0, scale: 0.9 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: section,
                    containerAnimation: horizontalTween,
                    start: "left center",
                    end: "center center",
                    toggleActions: "play none none reverse",
                  },
                },
            )
          }

          // Enhanced content animation
          if (content) {
            gsap.fromTo(
                content,
                { y: 80, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1.2,
                  delay: 0.2,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: section,
                    containerAnimation: horizontalTween,
                    start: "left center",
                    end: "center center",
                    toggleActions: "play none none reverse",
                  },
                },
            )
          }

          // Image animation
          if (image) {
            gsap.fromTo(
                image,
                { scale: 1.1, opacity: 0 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 1.5,
                  delay: 0.4,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: section,
                    containerAnimation: horizontalTween,
                    start: "left center",
                    end: "center center",
                    toggleActions: "play none none reverse",
                  },
                },
            )
          }

          // Features stagger animation
          if (features.length > 0) {
            gsap.fromTo(
                features,
                { y: 40, opacity: 0, scale: 0.8 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  delay: 0.6,
                  stagger: 0.1,
                  ease: "back.out(1.7)",
                  scrollTrigger: {
                    trigger: section,
                    containerAnimation: horizontalTween,
                    start: "left center",
                    end: "center center",
                    toggleActions: "play none none reverse",
                  },
                },
            )
          }
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const sections = [
    {
      title: "Revolutionary LiFi",
      subtitle: "Light-Based Communication",
      description:
          "Our LiFi technology uses visible light communication to transmit data at unprecedented speeds. Enhanced security, reduced interference, and lightning-fast connectivity.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      icon: Lightbulb,
      features: ["High-Speed Data Transfer", "Enhanced Security", "Zero RF Interference"],
      gradient: "from-green-500/20 to-blue-500/20",
    },
    {
      title: "Wireless Innovation",
      subtitle: "Next-Gen Connectivity",
      description:
          "Advanced wireless solutions that push boundaries. Our technology enables seamless communication where traditional wireless fails.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      icon: Zap,
      features: ["Seamless Integration", "Advanced Protocols", "Future-Ready Design"],
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Global Applications",
      subtitle: "Transforming Industries",
      description:
          "From smart cities to aerospace, healthcare to manufacturing - revolutionizing critical system communications with secure connectivity.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      icon: Globe,
      features: ["Smart Cities", "Healthcare Systems", "Industrial IoT"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Future Ready",
      subtitle: "Join the Revolution",
      description:
          "Partner with NavTech for wireless innovation leadership. Together, we're building tomorrow's connected world infrastructure.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      icon: Shield,
      features: ["Strategic Partnership", "Innovation Leadership", "Global Impact"],
      gradient: "from-pink-500/20 to-green-500/20",
    },
  ]

  return (
      <div
          ref={containerRef}
          className="horizontal-container relative w-full h-screen flex"
          style={{
            width: `${100 * sections.length}vw`,
            backgroundImage: "url('/images/nav-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
      >
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

        {sections.map((section, index) => {
          const IconComponent = section.icon

          return (
              <div
                  key={index}
                  ref={(el) => {
                    if (el) sectionsRef.current[index] = el
                  }}
                  className="horizontal-section w-screen h-screen flex items-center flex-shrink-0 relative"
              >
                {/* Section background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-30`}></div>

                <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-12 relative z-10">
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-8">
                    {/* Icon */}
                    <div className="section-title">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg shadow-gray-300/30 mb-6">
                        <IconComponent className="w-8 h-8 text-green-600" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="section-title">
                      <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-4">
                        {section.title}
                      </h2>
                      <h3 className="text-2xl lg:text-3xl text-green-600 font-semibold">{section.subtitle}</h3>
                    </div>

                    {/* Content */}
                    <div className="section-content space-y-6">
                      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">{section.description}</p>

                      {/* Features */}
                      <div className="grid grid-cols-1 gap-3">
                        {section.features.map((feature, featureIndex) => (
                            <div
                                key={featureIndex}
                                className="feature-item flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md shadow-gray-200/50 border border-gray-200/50"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/25 hover:shadow-green-600/40 flex items-center space-x-3">
                          <span>{index === sections.length - 1 ? "Get Started" : "Learn More"}</span>
                          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 section-content">
                    <div className="section-image relative w-full aspect-video overflow-hidden rounded-3xl shadow-2xl shadow-gray-400/20 bg-white/10 backdrop-blur-sm border border-white/20">
                      <Image src={section.image || "/placeholder.svg"} alt={section.title} fill className="object-cover" />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Section indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {sections.map((_, dotIndex) => (
                      <div
                          key={dotIndex}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              dotIndex === index ? "bg-green-600 scale-125" : "bg-white/50"
                          }`}
                      ></div>
                  ))}
                </div>
              </div>
          )
        })}
      </div>
  )
}
