"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

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
                            }
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
                            }
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
                            }
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
                            }
                        )
                    }
                })
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const sections = [
        {
            title: "OpticSpectra",
            subtitle: "Adaptive FSO Connectivity for Unstoppable Networks",
            description:
                "Nav Wireless Technologies delivers adaptive Free Space Optics (FSO) solutions that dynamically adjust bandwidth based on environmental conditions like fog, rain, or interference. Ideal for mission-critical applications, these intelligent links ensure high availability and performance for smart cities, defense, disaster recovery, and enterprise backhaul.",
            image: "/images/opticspectra.png",
        },
        {
            title: "NavOcular",
            subtitle: "Infrared Intelligence for Interference-Free Connectivity",
            description:
                "Nav Ocular uses invisible infrared (IR) light via Visible Light Communication (VLC) to provide secure, high-speed wireless communication without relying on RF spectrum. Its mesh network enables seamless data routing, self-healing, and scalability. Ideal for smart buildings, factories, hospitals, and EMI-sensitive areas, Nav Ocular ensures low-latency, interference-free, and secure connectivity for next-gen wireless infrastructure.",
            image: "/images/navocular.png",
        },
    ]

    return (
        <div
            ref={containerRef}
            className="horizontal-container relative w-full h-screen flex"
            style={{
                width: `${100 * sections.length}vw`,
            }}
        >
            {/* Light overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white/10 backdrop-blur-sm"></div>

            {sections.map((section, index) => {
                return (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) sectionsRef.current[index] = el
                        }}
                        className="horizontal-section w-screen h-screen flex items-center flex-shrink-0 relative"
                    >
                        {/* Section background gradient */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? "from-blue-500/20 to-cyan-500/20" : "from-purple-500/20 to-pink-500/20"} opacity-20`}
                        ></div>

                        <div className="container mx-auto px-8 flex flex-col items-center gap-8 relative z-10">
                            {/* Centered "OUR INNOVATIONS" Header */}
                            <div className="text-center">
                                <h1
                                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 uppercase tracking-wide mb-16"
                                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                >
                                    OUR INNOVATIONS
                                </h1>
                            </div>

                            {/* Content without card container */}
                            <div className="w-full max-w-6xl">
                                <div className="flex flex-col lg:flex-row items-center gap-16">
                                    {/* Content Side */}
                                    <div className="w-full lg:w-1/2 space-y-6">
                                        {/* Title */}
                                        <div className="section-title">
                                            <h2
                                                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4"
                                                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                            >
                                                {section.title}
                                            </h2>
                                            <h3
                                                className="text-xl lg:text-2xl text-gray-700 font-normal leading-relaxed mb-6"
                                                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                            >
                                                {section.subtitle}
                                            </h3>
                                        </div>

                                        {/* Content */}
                                        <div className="section-content space-y-6">
                                            <p
                                                className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg"
                                                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                            >
                                                {section.description}
                                            </p>

                                            {/* CTA Button */}
                                            <div className="pt-4">
                                                <button
                                                    className="group border-2 border-green-600 hover:bg-green-600 text-gray-700 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out"
                                                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                                >
                                                    <span>Learn More</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className="w-full lg:w-1/2 section-content">
                                        <div className="section-image relative w-full aspect-square max-w-md mx-auto">
                                            <Image
                                                src={section.image || "/placeholder.svg"}
                                                alt={section.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}