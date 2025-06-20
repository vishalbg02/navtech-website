"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TextSection from "@/components/text-section"
import HorizontalSection from "@/components/horizontal-section"
import AboutSection from "@/components/about-section"
import PartnershipsSection from "@/components/partnerships-section"
import VerticalsSection from "@/components/verticals-section"

export default function Home() {
    const mainRef = useRef(null)

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        ScrollTrigger.config({
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
        })

        // Force refresh after all sections are mounted
        const timer = setTimeout(() => {
            ScrollTrigger.sort()
            ScrollTrigger.refresh(true)
        }, 300)

        // Clean up
        return () => {
            clearTimeout(timer)
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <div
            className="relative min-h-screen"
            style={{
                backgroundImage: "url('/images/nav-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Enhanced Background Effects - same as research page */}
            <div className="fixed inset-0 z-0">
                {/* Animated gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-purple-900/5 to-black/15"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/3 to-transparent"></div>

                {/* Dynamic floating elements */}
                <div className="floating-element absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
                <div className="floating-element absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/3 rounded-full blur-3xl"></div>

                {/* Subtle particle system */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-1 h-1 bg-white/10 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <main ref={mainRef} className="relative z-10">
                <Navbar />
                <HeroSection />
                <TextSection />
                <HorizontalSection />
                <AboutSection />
                <PartnershipsSection />
                <VerticalsSection />
            </main>
        </div>
    )
}
