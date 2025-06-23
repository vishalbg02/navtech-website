"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import {
    ArrowRight,
    Shield,
    Wifi,
    Building2,
    Network,
    Lightbulb,
    Signal,
    Layers,
    Usb,
    ChevronLeft,
    ChevronRight,
    AlertTriangle,
    Factory,
    Heart,
    Lock,
    GraduationCap,
    Camera,
    Server,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function NavOcularPage() {
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
                .fromTo(
                    ".product-card",
                    { y: 80, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "power3.out" },
                    "-=0.4",
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

            // Light pulse animation
            gsap.to(".light-pulse", {
                scale: 1.05,
                opacity: 0.8,
                duration: 2,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            })
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

    const applications = [
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "SMART BUILDINGS",
            description:
                "Empowers seamless user experience by using existing lighting for high-speed indoor connectivity, reducing dependence on traditional networks and enhancing energy-efficient communication.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        },
        {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: "EMI-SENSITIVE AREAS",
            description:
                "Enables wireless data flow in restricted environments like atomic energy zones, MRI rooms, and semiconductor fabs where RF-based systems are unsuitable.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
        },
        {
            icon: <Factory className="w-8 h-8" />,
            title: "INDUSTRIAL FLOORS",
            description:
                "Boosts machine coordination and sensor feedback through robust optical links, adapting easily to dynamic layouts without physical reconfiguration or frequency interference.",
            image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=300&fit=crop",
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "HEALTHCARE FACILITIES",
            description:
                "Maintains operational precision by supporting diagnostics and real-time monitoring without disrupting sensitive instruments or risking patient data.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "CONFIDENTIAL WORKSPACES",
            description:
                "Delivers tightly secured, directional links ideal for defense labs, strategic command centers, and financial institutions where data integrity is paramount.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "EDUCATION ENVIRONMENTS",
            description:
                "Facilitates reliable, localized communication for digital classrooms and exam centers where RF restrictions or signal control is essential.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
        },
        {
            icon: <Camera className="w-8 h-8" />,
            title: "CULTURAL & EXHIBITION SPACES",
            description:
                "Ensures visitor services and interactive systems function discreetly, preserving aesthetics and safeguarding historically sensitive installations.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
            icon: <Server className="w-8 h-8" />,
            title: "DATA-INTENSIVE INFRASTRUCTURE",
            description:
                "Augments server room monitoring and control with optical communication layers that avoid RF interference and maintain thermal efficiency.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        },
        {
            icon: <Signal className="w-8 h-8" />,
            title: "5G INDOOR OFFLOADING & EDGE ZONES",
            description:
                "Supports ultra-fast, short-range wireless links within high-density indoor zones (airports, malls, offices), offloading traffic from congested 5G small cells and enhancing network capacity with zero-spectrum use.",
            image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
        },
        {
            icon: <Layers className="w-8 h-8" />,
            title: "6G-READY OPTICAL LAYER INTEGRATION",
            description:
                "Acts as a foundational layer for 6G architecture by enabling distributed, low-latency optical cells indoors—leveraging visible and IR light for localized, energy-efficient, and ultra-secure mesh-based connectivity.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
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
                            <h1 className="hero-title text-6xl lg:text-8xl font-bold text-green-400 mb-6">NavOcular</h1>
                            <h2 className="hero-subtitle text-3xl lg:text-4xl font-semibold text-white mb-8">
                                Visible Light Communication with Mesh Network Intelligence
                            </h2>
                            <p className="hero-description text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                                Nav Ocular leverages Visible Light Communication (VLC) with invisible infrared light to deliver secure,
                                high-speed wireless communication without relying on traditional RF spectrum. Designed with mesh network
                                topology, Nav Ocular allows multiple nodes to seamlessly connect, route data intelligently, and
                                self-heal in case of link disruption.
                            </p>
                        </div>

                        {/* Product Cards */}
                        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Light Panel Product */}
                            <Card className="product-card bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-500 overflow-hidden group hover:bg-black/90">
                                <CardContent className="p-8">
                                    <div className="text-center mb-8">
                                        <div className="relative w-full h-80 mb-6">
                                            <div className="light-pulse absolute inset-0 bg-green-400/10 rounded-2xl blur-xl"></div>
                                            <Image
                                                src="/images/light.png"
                                                alt="NavOcular Light Panel"
                                                fill
                                                className="object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
                                            />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2">Light Panel</h3>
                                        <p className="text-green-400 font-semibold mb-4">VLC Transmitter</p>
                                        <div className="bg-black/50 rounded-xl p-6 space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-green-200">Type:</span>
                                                <span className="text-white font-semibold">Ceiling-Mounted Transmitter</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-green-200">Function:</span>
                                                <span className="text-white font-semibold">Data Transmission via Light</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-green-200">Coverage:</span>
                                                <span className="text-green-400 font-semibold">60° Transmission Angle</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Dongle Product */}
                            <Card className="product-card bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-500 overflow-hidden group hover:bg-black/90">
                                <CardContent className="p-8">
                                    <div className="text-center mb-8">
                                        <div className="relative w-full h-80 mb-6">
                                            <Image
                                                src="/images/dongle.png"
                                                alt="NavOcular Dongle"
                                                fill
                                                className="object-contain group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-2">Dongle</h3>
                                        <p className="text-green-400 font-semibold mb-4">VLC Receiver</p>
                                        <div className="bg-black/50 rounded-xl p-6 space-y-3">
                                            <div className="flex justify-between items-center">
                                                <span className="text-green-200">Type:</span>
                                                <span className="text-white font-semibold">Portable Receiver</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-green-200">Function:</span>
                                                <span className="text-white font-semibold">Data Reception & Processing</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-green-200">Connectivity:</span>
                                                <span className="text-green-400 font-semibold">USB/Wireless Interface</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[0] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <h2 className="animate-in text-4xl lg:text-5xl font-bold text-center text-white mb-16">
                            System Specifications
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30">
                                <CardContent className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <Lightbulb className="w-6 h-6 mr-3 text-green-400" />
                                                Light Panel Specs
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Bandwidth:</span>
                                                    <span className="text-white font-semibold">75-80 Mbps</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Range:</span>
                                                    <span className="text-white font-semibold">4 Meters</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Transmission Angle:</span>
                                                    <span className="text-white font-semibold">60 Degrees</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Light Type:</span>
                                                    <span className="text-green-400 font-semibold">Invisible IR</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                                <Usb className="w-6 h-6 mr-3 text-green-400" />
                                                Dongle Specs
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Reception:</span>
                                                    <span className="text-white font-semibold">75-80 Mbps</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Interface:</span>
                                                    <span className="text-white font-semibold">USB/Wireless</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Compatibility:</span>
                                                    <span className="text-white font-semibold">Universal</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Form Factor:</span>
                                                    <span className="text-green-400 font-semibold">Portable</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[1] = el
                    }}
                    className="py-20"
                >
                    <div className="container mx-auto px-8">
                        <h2 className="animate-in text-4xl lg:text-5xl font-bold text-center text-white mb-16">
                            Why Choose NavOcular?
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <Lightbulb className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-4">VLC Technology</h3>
                                    <p className="text-green-100 text-sm">
                                        Uses invisible infrared light for secure, interference-free communication
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <Network className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-4">Mesh Network</h3>
                                    <p className="text-green-100 text-sm">
                                        Self-healing topology with intelligent data routing capabilities
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-4">Enhanced Security</h3>
                                    <p className="text-green-100 text-sm">
                                        Light-based communication provides inherent security advantages
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300">
                                <CardContent className="p-8 text-center">
                                    <Wifi className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-4">Zero RF Interference</h3>
                                    <p className="text-green-100 text-sm">
                                        Perfect for EMI-sensitive environments and medical facilities
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Applications - Horizontal Scroll */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[2] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <div className="animate-in">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white">Applications & Use Cases</h2>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollLeft(applicationsScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollRight(applicationsScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
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
                                {applications.map((application, index) => (
                                    <Card
                                        key={index}
                                        className="flex-shrink-0 w-80 bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 overflow-hidden group hover:bg-black/90"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={application.image || "/placeholder.svg"}
                                                alt={application.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-lg shadow-md shadow-green-500/20"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <div className="text-green-400 bg-black/50 p-2 rounded-lg backdrop-blur-sm">
                                                    {application.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h4 className="text-lg font-bold text-white mb-3">{application.title}</h4>
                                            <p className="text-green-100 leading-relaxed text-sm">{application.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Illuminate Your Network Infrastructure</h2>
                        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
                            Experience the future of indoor wireless communication with NavOcular's innovative VLC technology. The
                            complete solution includes both the Light Panel transmitter and Dongle receiver for seamless connectivity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                                Request Demo <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-black text-white border-green-500/50 hover:bg-gray-800 px-8 py-4"
                            >
                                Download Specifications
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
      `}</style>
        </div>
    )
}
