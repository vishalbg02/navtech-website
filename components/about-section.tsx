"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

export default function AboutSection() {
    const sectionRef = useRef(null)
    const imageRef = useRef(null)
    const textContainerRef = useRef(null)
    const titleRef = useRef(null)
    const paragraph1Ref = useRef(null)
    const paragraph2Ref = useRef(null)
    const tagsContainerRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(imageRef.current, {
                width: "100vw",
                height: "100vh",
                left: 0,
                top: 0,
                xPercent: 0,
                yPercent: 0,
                borderRadius: 0,
                opacity: 1,
                scale: 1,
            })

            gsap.set(textContainerRef.current, {
                x: "-100%",
                opacity: 0,
            })

            gsap.set(
                [titleRef.current, paragraph1Ref.current, paragraph2Ref.current, tagsContainerRef.current, buttonRef.current],
                {
                    x: -60,
                    opacity: 0,
                },
            )

            // Master timeline - ONLY starts after horizontal scrolling is complete
            const masterTL = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    refreshPriority: 5, // Medium priority - after horizontal
                    id: "about-scroll",
                    onComplete: () => {
                        // Mark about section as complete
                        window.aboutScrollComplete = true
                        ScrollTrigger.refresh()
                    },
                },
            })

            // Phase 1: Image shrinks (0-30%)
            masterTL.to(imageRef.current, {
                width: "60vw",
                height: "70vh",
                borderRadius: "20px",
                duration: 0.3,
                ease: "power2.inOut",
            })

            // Phase 2: Image moves to right (30-60%)
            masterTL.to(imageRef.current, {
                width: "50vw",
                height: "80vh",
                left: "50%",
                top: "10%",
                borderRadius: "20px 0 0 20px",
                duration: 0.3,
                ease: "power2.inOut",
            })

            // Phase 3: Text container slides in (50-80%)
            masterTL.to(
                textContainerRef.current,
                {
                    x: "0%",
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                },
                "-=0.1",
            )

            // Phase 4: Text content staggers in (70-100%)
            masterTL
                .to(titleRef.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.15")
                .to(paragraph1Ref.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.04")
                .to(paragraph2Ref.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.04")
                .to(tagsContainerRef.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.04")
                .to(buttonRef.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.04")

            // Floating animation (independent of scroll)
            gsap.to(imageRef.current, {
                y: "+=5",
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden"
            style={{
                backgroundImage: "url('/images/nav-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/20"></div>

            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div ref={imageRef} className="absolute overflow-hidden shadow-2xl z-10">
                <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
                    alt="NavTech Innovation Center"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20"></div>
            </div>

            <div
                ref={textContainerRef}
                className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center px-6 lg:px-10 bg-gradient-to-r from-white/95 via-white/90 to-transparent backdrop-blur-md z-20"
            >
                <div ref={titleRef} className="mb-6">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                        ABOUT
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700">US</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
                </div>

                <div className="space-y-5">
                    <p ref={paragraph1Ref} className="text-base lg:text-lg text-gray-700 leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-700 font-bold text-lg lg:text-xl">
              Nav Wireless Technologies Pvt Ltd (NavTech)
            </span>{" "}
                        is a global leading solutions and services provider of wireless and information communications systems with
                        its own R&D facilities, manufacturing base, and sales and service teams.
                    </p>

                    <p ref={paragraph2Ref} className="text-sm lg:text-base text-gray-600 leading-relaxed">
                        The company offers a comprehensive suite of products and services including{" "}
                        <span className="text-green-600 font-semibold">Optical Wireless Communication systems</span>,{" "}
                        <span className="text-green-600 font-semibold">Wireless Electricity Transmission System</span>,{" "}
                        <span className="text-green-600 font-semibold">Electronic Tattoo for Healthcare Monitoring System</span>,{" "}
                        <span className="text-green-600 font-semibold">Wireless enhancement products</span>, and subsystems and
                        wireless transmission systems to its global customers.
                    </p>

                    <div ref={tagsContainerRef} className="flex flex-wrap gap-2 pt-3">
                        {["🔬 R&D Facilities", "🏭 Manufacturing", "🌍 Global Services"].map((tag, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-green-600/25 to-green-500/15 border border-green-400/40 rounded-full px-4 py-2 backdrop-blur-sm"
                            >
                                <span className="text-green-700 text-xs font-medium">{tag}</span>
                            </div>
                        ))}
                    </div>

                    <div ref={buttonRef} className="pt-4">
                        <button className="group relative bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-400 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 overflow-hidden">
              <span className="relative z-10 flex items-center">
                Discover Our Journey
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
