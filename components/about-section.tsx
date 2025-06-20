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
                [titleRef.current, paragraph1Ref.current, paragraph2Ref.current, buttonRef.current],
                {
                    x: -60,
                    opacity: 0,
                },
            )

            // Master timeline
            const masterTL = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    refreshPriority: 5,
                    id: "about-scroll",
                    onComplete: () => {
                        window.aboutScrollComplete = true
                        ScrollTrigger.refresh()
                    },
                },
            })

            // Phase 1: Image shrinks
            masterTL.to(imageRef.current, {
                width: "60vw",
                height: "70vh",
                borderRadius: "20px",
                duration: 0.3,
                ease: "power2.inOut",
            })

            // Phase 2: Image moves to right and slightly downward
            masterTL.to(imageRef.current, {
                width: "50vw",
                height: "80vh",
                left: "50%",
                top: "15%", // Adjusted from 10% to 15% to move image down
                borderRadius: "20px 0 0 20px",
                duration: 0.3,
                ease: "power2.inOut",
            })

            // Phase 3: Text container slides in
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

            // Phase 4: Text content staggers in
            masterTL
                .to(titleRef.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.15")
                .to(paragraph1Ref.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.04")
                .to(paragraph2Ref.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.04")
                .to(buttonRef.current, { x: 0, opacity: 1, duration: 0.06, ease: "power2.out" }, "-=0.04")

            // Floating animation for image
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
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
            {/* Light overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/15 to-white/10 backdrop-blur-sm"></div>

            {/* Subtle background decorations */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-grey-200/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-grey-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div ref={imageRef} className="absolute overflow-hidden shadow-xl z-10">
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
                className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center px-6 lg:px-12 bg-gradient-to-r from-white/95 via-white/90 to-transparent backdrop-blur-md z-20"
            >
                <div ref={titleRef} className="mb-6">
                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        ABOUT US
                    </h2>
                    <div className="w-24 h-1 bg-black rounded-full"></div>
                </div>

                <div className="space-y-5">
                    <p ref={paragraph1Ref} className="text-base lg:text-lg text-black leading-relaxed">
                        <span className="font-bold text-lg lg:text-xl">
                            Nav Wireless Technologies Pvt Ltd (NavTech)
                        </span>{" "}
                        is a global leading solutions and services provider of wireless and information communications systems with
                        its own R&D facilities, manufacturing base, and sales and service teams.
                    </p>

                    <p ref={paragraph2Ref} className="text-sm lg:text-base text-black leading-relaxed">
                        The company offers a comprehensive suite of products and services including{" "}
                        <span className="font-bold">Optical Wireless Communication systems</span>,{" "}
                        <span className="font-bold">Wireless Electricity Transmission System</span>,{" "}
                        <span className="font-bold">Electronic Tattoo for Healthcare Monitoring System</span>,{" "}
                        <span className="font-bold">Wireless enhancement products</span>, and subsystems and
                        wireless transmission systems to its global customers.
                    </p>

                    <div ref={buttonRef} className="pt-4">
                        <button className="group relative bg-gradient-to-r from-green-600 to-grey-800 hover:from-green-700 hover:to-grey-900 text-white px-8 py-3 rounded-full text-base font-semibold transition-all duration-400 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 overflow-hidden">
                            <span className="relative z-10 flex items-center">
                                Discover Our Journey
                                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-grey-700 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}