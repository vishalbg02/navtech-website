"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import {
    ArrowRight,
    Shield,
    Car,
    Headphones,
    Lock,
    Share2,
    Zap,
    Eye,
    Satellite,
    ChevronLeft,
    ChevronRight,
    Lightbulb,
    Radio,
    Cpu,
    Globe,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"

export default function ApplicationsPage() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])
    const applicationsScrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Hero animations
            const heroTl = gsap.timeline({ delay: 0.5 })

            heroTl
                .fromTo(".hero-title", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
                .fromTo(".hero-subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
                .fromTo(
                    ".hero-description",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.6",
                )

            // Section animations
            sectionsRef.current.forEach((section, index) => {
                if (!section) return

                gsap.fromTo(
                    section.querySelectorAll(".animate-in"),
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    },
                )
            })

            // Floating animations
            gsap.to(".floating-element", {
                y: "+=15",
                duration: 4,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.3,
            })

            // Application cards animation
            gsap.fromTo(
                ".app-card",
                { scale: 0.9, opacity: 0, rotateY: 15 },
                {
                    scale: 1,
                    opacity: 1,
                    rotateY: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".applications-grid",
                        start: "top 80%",
                    },
                },
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -400, behavior: "smooth" })
        }
    }

    const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 400, behavior: "smooth" })
        }
    }

    const futuristicApplications = [
        {
            id: 4,
            icon: <Shield className="w-8 h-8" />,
            title: "Private, Secure Mobile Payments",
            description:
                "LiFi enables line-of-sight, light-based communication between smartphones and payment terminals, creating a secure channel resistant to wireless interception or eavesdropping.",
            category: "Financial Security",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
            benefits: ["Zero RF Interference", "Unhackable Line-of-Sight", "Instant Transactions"],
        },
        {
            id: 6,
            icon: <Share2 className="w-8 h-8" />,
            title: "Mobile to Mobile File Sharing",
            description:
                "Smartphones equipped with LiFi can exchange files securely through light beams, without relying on Wi-Fi or Bluetooth, ensuring fast and discreet data transfer.",
            category: "Data Transfer",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
            benefits: ["No Network Required", "Ultra-Secure Transfer", "High-Speed Exchange"],
        },
        {
            id: 7,
            icon: <Car className="w-8 h-8" />,
            title: "LiFi-Enabled In-Vehicle Connectivity",
            description:
                "Cabin lights embedded with LiFi modules can deliver entertainment, updates, and connectivity to devices—without adding RF interference to sensitive vehicle electronics.",
            category: "Automotive",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
            benefits: ["EMI-Free Operation", "Seamless Integration", "Enhanced Safety"],
        },
        {
            id: 8,
            icon: <Headphones className="w-8 h-8" />,
            title: "High-Bandwidth AR/VR Streaming",
            description:
                "LiFi supports immersive mobile AR/VR applications by delivering stable, ultra-fast optical connectivity needed for rich visual content and low-latency interaction.",
            category: "Immersive Tech",
            image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop",
            benefits: ["Ultra-Low Latency", "High Bandwidth", "Stable Connection"],
        },
        {
            id: 10,
            icon: <Lock className="w-8 h-8" />,
            title: "Quantum-Safe Communication Layer",
            description:
                "The highly directional and confined nature of LiFi makes it a strong candidate for future mobile encryption systems, including physical-layer secured optical channels.",
            category: "Quantum Security",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
            benefits: ["Quantum-Resistant", "Physical Security", "Future-Proof"],
        },
        {
            id: 11,
            icon: <Radio className="w-8 h-8" />,
            title: "LiFi-Enabled V2V and V2X Communication",
            description:
                "LiFi enables ultra-fast, line-of-sight communication between vehicles (V2V) and with surrounding infrastructure (V2X), supporting real-time data exchange for navigation, collision avoidance, and situational awareness—without emitting RF signals that can interfere or be intercepted.",
            category: "Smart Transportation",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
            benefits: ["Real-Time Exchange", "Collision Avoidance", "No RF Interference"],
        },
        {
            id: 12,
            icon: <Satellite className="w-8 h-8" />,
            title: "Wire Harness Replacement in Vehicles & Satellites",
            description:
                "LiFi significantly reduces the need for bulky wiring by enabling high-speed, light-based data transmission between components. Ideal for spacecraft and modern vehicles where space, weight, and EMI resistance are critical—simplifying design while improving reliability.",
            category: "Aerospace & Automotive",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
            benefits: ["Weight Reduction", "Space Optimization", "Enhanced Reliability"],
        },
    ]

    const categories = [
        { name: "Financial Security", count: 1, color: "bg-blue-500/20 text-blue-400 border-blue-500/50" },
        { name: "Data Transfer", count: 1, color: "bg-purple-500/20 text-purple-400 border-purple-500/50" },
        { name: "Automotive", count: 1, color: "bg-orange-500/20 text-orange-400 border-orange-500/50" },
        { name: "Immersive Tech", count: 1, color: "bg-pink-500/20 text-pink-400 border-pink-500/50" },
        { name: "Quantum Security", count: 1, color: "bg-red-500/20 text-red-400 border-red-500/50" },
        { name: "Smart Transportation", count: 1, color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/50" },
        { name: "Aerospace & Automotive", count: 1, color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/50" },
    ]

    return (
        <div
            ref={containerRef}
            className="min-h-screen relative"
            style={{
                backgroundImage: "url('/images/nav-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-900/10 to-black/20"></div>
                <div className="floating-element absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"></div>
                <div className="floating-element absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-500/15 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-700/10 rounded-full blur-3xl"></div>
            </div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section ref={heroRef} className="pt-32 pb-20">
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-16">
                            <h1 className="hero-title text-6xl lg:text-8xl font-bold text-green-400 mb-6">Futuristic Applications</h1>
                            <h2 className="hero-subtitle text-3xl lg:text-4xl font-semibold text-green-100 mb-8">
                                The Next Generation of LiFi Technology
                            </h2>
                            <p className="hero-description text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
                                Discover revolutionary applications that will transform how we communicate, interact, and connect in the
                                digital future. From quantum-safe communications to autonomous vehicles, LiFi technology is paving the
                                way for unprecedented innovation across industries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Categories Overview */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[0] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <h2 className="animate-in text-4xl lg:text-5xl font-bold text-center text-green-300 mb-16">
                            Application Categories
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {categories.map((category, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className={`animate-in px-4 py-2 text-sm font-semibold border ${category.color}`}
                                >
                                    {category.name} ({category.count})
                                </Badge>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Applications Grid */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[1] = el
                    }}
                    className="py-20 applications-grid"
                >
                    <div className="container mx-auto px-8">
                        <div className="animate-in mb-16">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-4xl lg:text-5xl font-bold text-green-300">Revolutionary Applications</h2>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollLeft(applicationsScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-green-200 hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollRight(applicationsScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-green-200 hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div
                                ref={applicationsScrollRef}
                                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {futuristicApplications.map((app, index) => (
                                    <Card
                                        key={app.id}
                                        className="app-card flex-shrink-0 w-96 bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 overflow-hidden group hover:bg-black/90"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={app.image || "/placeholder.svg"}
                                                alt={app.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/50 text-xs">
                                                    #{app.id}
                                                </Badge>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <div className="text-green-400 bg-black/50 p-2 rounded-lg backdrop-blur-sm">{app.icon}</div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="mb-3">
                                                <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-xs">
                                                    {app.category}
                                                </Badge>
                                            </div>
                                            <h3 className="text-lg font-bold text-green-200 mb-3 line-clamp-2">{app.title}</h3>
                                            <p className="text-green-100 text-sm mb-4 line-clamp-4">{app.description}</p>
                                            <div className="space-y-2">
                                                <h4 className="text-sm font-semibold text-green-300">Key Benefits:</h4>
                                                <div className="flex flex-wrap gap-1">
                                                    {app.benefits.map((benefit, idx) => (
                                                        <Badge
                                                            key={idx}
                                                            variant="outline"
                                                            className="bg-green-500/10 text-green-300 border-green-500/30 text-xs"
                                                        >
                                                            {benefit}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Advantages */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[2] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <h2 className="animate-in text-4xl lg:text-5xl font-bold text-center text-green-300 mb-16">
                            Why LiFi is the Future
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <Lightbulb className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-green-200 mb-4">Light-Based Security</h3>
                                    <p className="text-green-100 text-sm">
                                        Inherently secure communication through confined light beams that cannot be intercepted remotely
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-green-200 mb-4">Ultra-High Speed</h3>
                                    <p className="text-green-100 text-sm">
                                        Gigabit-speed data transmission capabilities far exceeding traditional wireless technologies
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-green-200 mb-4">EMI-Free Operation</h3>
                                    <p className="text-green-100 text-sm">
                                        Zero electromagnetic interference, perfect for sensitive environments and medical facilities
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-green-200 mb-4">Spectrum Freedom</h3>
                                    <p className="text-green-100 text-sm">
                                        No spectrum licensing required, unlimited bandwidth potential using visible and infrared light
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Future Vision */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[3] = el
                    }}
                    className="py-20"
                >
                    <div className="container mx-auto px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="animate-in text-4xl lg:text-5xl font-bold text-green-300 mb-8">
                                Shaping Tomorrow's Connected World
                            </h2>
                            <p className="animate-in text-xl text-green-100 mb-12 leading-relaxed">
                                These futuristic applications represent just the beginning of what's possible with LiFi technology. As
                                we advance toward a more connected, secure, and efficient digital future, optical wireless communication
                                will play a pivotal role in enabling innovations we can only imagine today.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="animate-in">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Eye className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-green-200 mb-3">Visionary Innovation</h3>
                                    <p className="text-green-100 text-sm">
                                        Pioneering the next generation of communication technologies for a smarter world
                                    </p>
                                </div>
                                <div className="animate-in">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Cpu className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-green-200 mb-3">Advanced Integration</h3>
                                    <p className="text-green-100 text-sm">
                                        Seamlessly integrating with existing infrastructure while enabling new possibilities
                                    </p>
                                </div>
                                <div className="animate-in">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-green-200 mb-3">Global Impact</h3>
                                    <p className="text-green-100 text-sm">
                                        Creating solutions that will transform industries and improve lives worldwide
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-black/20 backdrop-blur-sm">
                    <div className="container mx-auto px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-green-300 mb-8">Ready to Embrace the Future?</h2>
                        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
                            Join us in revolutionizing communication technology. Explore how these futuristic applications can
                            transform your industry and create new opportunities for innovation and growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black px-8 py-4">
                                Explore Solutions <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-black text-green-200 border-green-500/50 hover:bg-gray-800 px-8 py-4"
                            >
                                Schedule Demo
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </div>
    )
}
