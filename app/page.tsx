"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TextSection from "@/components/text-section"
import HorizontalSection from "@/components/horizontal-section"
import AboutSection from "@/components/about-section"
import PartnershipsSection from "@/components/partnerships-section"
import VerticalsSection from "@/components/verticals-section"
import Footer from "@/components/footer";
import CTASection from "@/components/CTASection";

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
            className="relative min-h-screen bg-white overflow-x-hidden"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >

            <main ref={mainRef} className="relative z-10">
                <Navbar />
                <HeroSection />
                <TextSection />
                <HorizontalSection />
                <AboutSection />
                <PartnershipsSection />
                <VerticalsSection />
                <CTASection />
                <Footer />
            </main>
        </div>
    )
}
