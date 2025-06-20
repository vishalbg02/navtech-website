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
        }, 300) // Increased delay

        // Clean up
        return () => {
            clearTimeout(timer)
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return (
        <main ref={mainRef} className="relative min-h-screen">
            <Navbar />
            <HeroSection />
            <TextSection />
            <HorizontalSection />
            <AboutSection />
            <PartnershipsSection />
            <VerticalsSection />
        </main>
    )
}
