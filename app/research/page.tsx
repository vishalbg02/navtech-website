"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ArrowRight, ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ResearchPage() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])
    const [activeSection, setActiveSection] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Enhanced hero animations with smoother transitions
            const heroTl = gsap.timeline({ delay: 0.5, ease: "power3.out" })

            heroTl
                .fromTo(
                    ".hero-title",
                    { y: 100, opacity: 0, scale: 0.8 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.8, ease: "power4.out" },
                    "-=0.7",
                )
                .fromTo(".hero-subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }, "-=1")
                .fromTo(
                    ".hero-description",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                    "-=0.8",
                )
                .fromTo(
                    ".hero-stats",
                    { y: 40, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "elastic.out(1, 0.5)" },
                    "-=0.6",
                )

            // Enhanced section animations with smoother 3D effects
            sectionsRef.current.forEach((section, index) => {
                if (!section) return

                const card = section.querySelector(".research-card")
                const title = section.querySelector(".section-title")
                const content = section.querySelector(".section-content")
                const features = section.querySelectorAll(".feature-item")
                const image = section.querySelector(".section-image")
                const techSpecs = section.querySelectorAll(".tech-spec")

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                        onEnter: () => setActiveSection(index),
                    },
                })

                // Card entrance with smoother 3D rotation
                tl.fromTo(
                    card,
                    {
                        rotationY: index % 2 === 0 ? -45 : 45,
                        rotationX: 15,
                        scale: 0.8,
                        opacity: 0,
                        z: -200,
                    },
                    {
                        rotationY: 0,
                        rotationX: 0,
                        scale: 1,
                        opacity: 1,
                        z: 0,
                        duration: 1.8,
                        ease: "power4.out",
                        transformPerspective: 1200,
                    },
                )

                // Title with smoother typewriter effect
                if (title) {
                    tl.fromTo(
                        title,
                        { x: -100, opacity: 0, skewX: 10 },
                        { x: 0, opacity: 1, skewX: 0, duration: 1.2, ease: "power4.out" },
                        "-=1",
                    )
                }

                // Content with smoother wave animation
                if (content) {
                    tl.fromTo(content, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, "-=0.8")
                }

                // Image with smoother parallax and zoom
                if (image) {
                    tl.fromTo(
                        image,
                        { scale: 1.3, opacity: 0, filter: "blur(10px)" },
                        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.8, ease: "power4.out" },
                        "-=1.2",
                    )

                    gsap.to(image, {
                        yPercent: -20,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5,
                        },
                    })
                }

                // Features with smoother bounce effect
                if (features.length > 0) {
                    tl.fromTo(
                        features,
                        { y: 80, opacity: 0, scale: 0.7, rotation: 5 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            rotation: 0,
                            duration: 1,
                            stagger: 0.15,
                            ease: "elastic.out(1, 0.6)",
                        },
                        "-=0.6",
                    )
                }

                // Tech specs with smoother slide effect
                if (techSpecs.length > 0) {
                    tl.fromTo(
                        techSpecs,
                        { x: 50, opacity: 0 },
                        { x: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power4.out" },
                        "-=0.5",
                    )
                }
            })

            // Smoother continuous floating animations
            gsap.to(".floating-element", {
                y: "+=20",
                rotation: "+=3",
                duration: 6,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.4,
            })

            // Smoother advanced particle system
            gsap.to(".particle", {
                y: "random(-200, 200)",
                x: "random(-150, 150)",
                rotation: "random(-360, 360)",
                scale: "random(0.5, 1.5)",
                duration: "random(15, 25)",
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
                stagger: 0.15,
            })

            // Smoother interactive hover effects for cards
            sectionsRef.current.forEach((section) => {
                const card = section?.querySelector(".research-card")
                if (card) {
                    card.addEventListener("mouseenter", () => {
                        gsap.to(card, {
                            scale: 1.03,
                            rotationY: 3,
                            z: 60,
                            duration: 0.5,
                            ease: "power3.out",
                        })
                    })

                    card.addEventListener("mouseleave", () => {
                        gsap.to(card, {
                            scale: 1,
                            rotationY: 0,
                            z: 0,
                            duration: 0.5,
                            ease: "power3.out",
                        })
                    })
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const researchAreas = [
        {
            id: "owc",
            title: "OWC - Optical Wireless Communications",
            subtitle: "LiFi | FSO with Integrated AI & Machine Learning",
            description:
                "Nav Wireless Technologies is advancing LiFi and Free Space Optics (FSO) by integrating Artificial Intelligence (AI) and Machine Learning (ML) to create smarter, adaptive optical communication systems.",
            features: [
                { title: "Defence Applications", desc: "Military-grade secure communications" },
                { title: "Autonomous Systems", desc: "AI-driven adaptive networks" },
                { title: "Smart Infrastructure", desc: "Intelligent urban connectivity" },
                { title: "High-Reliability", desc: "Mission-critical environments" },
            ],
            techSpecs: ["Data Rate: Up to 10 Gbps", "Range: 1-5 km (FSO)", "Latency: <1ms", "Security: Quantum-level"],
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
            gradient: "from-green-700 via-gray-700 to-black",
            bgPattern: "radial-gradient(circle at 20% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
        },
        {
            id: "qkd",
            title: "QKD-Enabled Optical Wireless Systems",
            subtitle: "Quantum-Secured Communications",
            description:
                "QKD-Enabled Optical Wireless Systems combine the speed and flexibility of LiFi and FSO with the unbreakable security of Quantum Key Distribution (QKD).",
            features: [
                { title: "Critical Infrastructure", desc: "Quantum-secured networks" },
                { title: "Defence Networks", desc: "Unbreakable military comms" },
                { title: "Financial Systems", desc: "Ultra-secure transactions" },
                { title: "Strategic Communications", desc: "Government-level security" },
            ],
            techSpecs: ["Key Rate: 1 Mbps", "Distance: Up to 200 km", "Error Rate: <1%", "Detection: Instant tampering"],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
            gradient: "from-green-800 via-gray-800 to-black",
            bgPattern: "radial-gradient(circle at 80% 20%, rgba(75, 85, 99, 0.15) 0%, transparent 50%)",
        },
        {
            id: "owp",
            title: "OWP - Optical Wireless Power",
            subtitle: "Wireless Electricity Transmission",
            description:
                "Optical Wireless Power enables the wireless delivery of energy using focused beams of light, such as lasers or LEDs, to power electronic devices at a distance.",
            features: [
                { title: "IoT Sensors", desc: "Continuous wireless power" },
                { title: "Drone Applications", desc: "Extended flight time" },
                { title: "Medical Implants", desc: "Safe, contactless charging" },
                { title: "Remote Locations", desc: "Power without infrastructure" },
            ],
            techSpecs: ["Power: Up to 100W", "Efficiency: 85%+", "Range: 1-100m", "Safety: Eye-safe levels"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
            gradient: "from-green-600 via-gray-600 to-black",
            bgPattern: "radial-gradient(circle at 50% 50%, rgba(75, 85, 99, 0.15) 0%, transparent 50%)",
        },
        {
            id: "pof",
            title: "Power Over Fiber",
            subtitle: "Optical Power & Data Transmission",
            description:
                "Advanced research and development of Power over Fiber (PoF) systems—enabling the simultaneous transmission of optical power and data over optical fiber.",
            features: [
                { title: "EMI Immunity", desc: "Interference-free operation" },
                { title: "Isolated Power", desc: "Electrical isolation" },
                { title: "Hazardous Environments", desc: "Explosion-proof solutions" },
                { title: "Industrial Applications", desc: "Factory automation" },
            ],
            techSpecs: ["Power: Up to 50W", "Data: 10 Gbps", "Distance: 10+ km", "Isolation: >1 GΩ"],
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
            gradient: "from-green-700 via-gray-700 to-black",
            bgPattern: "radial-gradient(circle at 30% 70%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
        },
        {
            id: "space",
            title: "Space Communication",
            subtitle: "Laser Communication for Space",
            description:
                "Advanced laser communication systems for space applications enable high-bandwidth, secure data transmission between satellites, ground stations, and space platforms.",
            features: [
                { title: "Satellite Communications", desc: "Inter-satellite links" },
                { title: "Deep Space Missions", desc: "Long-range communications" },
                { title: "Ground-to-Space", desc: "High-speed uplinks" },
                { title: "Secure Links", desc: "Encrypted space comms" },
            ],
            techSpecs: ["Data Rate: 100+ Gbps", "Range: GEO to LEO", "Beam Divergence: <1 mrad", "Tracking: ±0.1 mrad"],
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
            gradient: "from-green-800 via-gray-800 to-black",
            bgPattern: "radial-gradient(circle at 70% 30%, rgba(75, 85, 99, 0.15) 0%, transparent 50%)",
        },
        {
            id: "ppic",
            title: "Semiconductor Programmable Photonic Integrated Circuit",
            subtitle: "Next-Gen Chip-Level Optics",
            description:
                "Programmable Photonic Integrated Circuits (PPICs) leverage semiconductor materials to enable ultra-fast, low-power data transmission at the chip level.",
            features: [
                { title: "Data Centers", desc: "High-speed interconnects" },
                { title: "IoT Applications", desc: "Low-power connectivity" },
                { title: "6G Networks", desc: "Next-gen wireless" },
                { title: "Edge Computing", desc: "Distributed processing" },
            ],
            techSpecs: ["Speed: 1+ Tbps", "Power: <1W per Gbps", "Latency: <100 ps", "Integration: CMOS compatible"],
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
            gradient: "from-green-600 via-gray-600 to-black",
            bgPattern: "radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)",
        },
        {
            id: "pat",
            title: "Pointing, Acquisition and Tracking (PAT) System",
            subtitle: "Precision Optical Alignment",
            description:
                "Advanced Pointing, Acquisition, and Tracking (PAT) systems ensure stable and accurate alignment in Free Space Optical (FSO) and laser communication links.",
            features: [
                { title: "Real-time Feedback", desc: "Microsecond response" },
                { title: "Beam Steering", desc: "Precision control" },
                { title: "Intelligent Control", desc: "AI-powered tracking" },
                { title: "Motion Compensation", desc: "Vibration immunity" },
            ],
            techSpecs: ["Accuracy: ±1 μrad", "Bandwidth: 1 kHz", "Range: 50+ km", "Stability: <0.1 μrad RMS"],
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
            gradient: "from-green-700 via-gray-700 to-black",
            bgPattern: "radial-gradient(circle at 60% 40%, rgba(75, 85, 99, 0.15) 0%, transparent 50%)",
        },
    ]

    return (
        <div
            ref={containerRef}
            className="min-h-screen relative overflow-hidden"
            style={{
                backgroundImage: "url('/images/nav-bg.png')",
                backgroundSize: "auto",
                backgroundPosition: "center",
                backgroundRepeat: "repeat",
                backgroundAttachment: "fixed",
                backgroundColor: "#1F2A44",
            }}
        >
            <Navbar />

            {/* Enhanced Background Effects */}
            <div className="fixed inset-0 z-0">
                {/* Animated gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-gray-900/10 to-black/30"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-900/5 to-transparent"></div>

                {/* Dynamic floating elements */}
                <div className="floating-element absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="floating-element absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-500/10 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-700/5 rounded-full blur-3xl"></div>

                {/* Advanced particle system */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute w-1 h-1 bg-green-400/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Section with Enhanced Animations */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 z-10">
                <div className="container mx-auto px-8 text-center">
                    {/* Main title with single color text */}
                    <h1 className="hero-title text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight text-green-400">
                        Research & Innovation
                    </h1>

                    {/* Subtitle */}
                    <h2 className="hero-subtitle text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-200 mb-8">
                        Optical Wireless Technologies
                    </h2>

                    {/* Description */}
                    <p className="hero-description text-xl lg:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12">
                        Optical Wireless Technology (OWT) is an advanced method of wireless communication and power delivery that
                        enables ultra-fast, interference-free, and license-free data connectivity while supporting simultaneous
                        wireless energy transmission.
                    </p>

                    {/* Stats with enhanced styling */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        {[
                            { number: "7+", label: "Research Areas" },
                            { number: "50+", label: "Patents Filed" },
                            { number: "100+", label: "Publications" },
                            { number: "15+", label: "Awards Won" },
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="hero-stats bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:bg-gray-700/50 transition-all duration-300 group"
                            >
                                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll indicator */}
                    <div className="floating-element">
                        <ChevronDown className="w-8 h-8 text-gray-400 animate-bounce mx-auto" />
                    </div>
                </div>
            </section>

            {/* Research Areas with Enhanced Cards */}
            <section className="relative py-20 z-10">
                <div className="container mx-auto px-8">
                    <div className="space-y-32">
                        {researchAreas.map((area, index) => (
                            <div
                                key={area.id}
                                ref={(el) => {
                                    if (el) sectionsRef.current[index] = el
                                }}
                                className="relative"
                            >
                                {/* Background pattern for each section */}
                                <div className="absolute inset-0 opacity-30 rounded-3xl" style={{ background: area.bgPattern }} />

                                <div
                                    className={`research-card flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-16 bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-gray-800 hover:border-gray-700 transition-all duration-500 relative overflow-hidden`}
                                >
                                    {/* Animated background gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-10 rounded-3xl`} />

                                    {/* Content Side */}
                                    <div className="flex-1 space-y-8 relative z-10">
                                        {/* Header */}
                                        <div>
                                            <h3 className="section-title text-4xl lg:text-5xl font-bold text-white mb-2">{area.title}</h3>
                                            <p className="text-xl text-green-400 font-medium">{area.subtitle}</p>
                                        </div>

                                        {/* Description */}
                                        <div className="section-content">
                                            <p className="text-lg text-gray-300 leading-relaxed mb-8">{area.description}</p>

                                            {/* Features Grid */}
                                            <div className="grid grid-cols-2 gap-4 mb-8">
                                                {area.features.map((feature, featureIndex) => (
                                                    <div
                                                        key={featureIndex}
                                                        className="feature-item group bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-500 cursor-pointer"
                                                    >
                                                        <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                                                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Technical Specifications */}
                                            <div className="bg-black/50 rounded-xl p-6 border border-gray-800">
                                                <h4 className="text-white font-semibold mb-4">
                                                    Technical Specifications
                                                </h4>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {area.techSpecs.map((spec, specIndex) => (
                                                        <div key={specIndex} className="tech-spec flex items-center text-gray-400 text-sm">
                                                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0" />
                                                            {spec}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA Button */}
                                            <button
                                                className={`group mt-8 px-8 py-4 rounded-full bg-gradient-to-r ${area.gradient} text-white font-semibold hover:scale-105 transition-all duration-500 hover:shadow-2xl flex items-center space-x-3`}
                                            >
                                                <span>Explore Technology</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className="flex-1 relative">
                                        <div className="section-image relative group">
                                            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                                <Image
                                                    src={area.image || "/placeholder.svg"}
                                                    alt={area.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                                <div
                                                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-20 mix-blend-overlay`}
                                                />

                                                {/* Overlay content */}
                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 border border-gray-700">
                                                        <h4 className="text-white font-semibold mb-2">{area.title}</h4>
                                                        <p className="text-gray-400 text-sm">{area.subtitle}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Floating decorative elements */}
                                            <div
                                                className={`floating-element absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-r ${area.gradient} opacity-20 blur-2xl`}
                                            />
                                            <div
                                                className={`floating-element absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-r ${area.gradient} opacity-30 blur-xl`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}