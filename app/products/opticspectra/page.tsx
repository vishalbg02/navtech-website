"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import {
    CheckCircle,
    Shield,
    Zap,
    Globe,
    Wifi,
    Radio,
    Truck,
    Building,
    Plane,
    Ship,
    Target,
    Network,
    Factory,
    Mountain,
    AlertTriangle,
    Antenna,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function OpticSpectraPage() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])
    const neoScrollRef = useRef<HTMLDivElement>(null)
    const supremeScrollRef = useRef<HTMLDivElement>(null)

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

    const neoUseCases = [
        {
            icon: <Radio className="w-8 h-8" />,
            title: "RAIL NETWORK",
            description:
                "Enables high-speed, interference-free links between stations and onboard systems—perfect for tunnels, trackside monitoring, and secure data relay without physical cables.",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
        },
        {
            icon: <Wifi className="w-8 h-8" />,
            title: "EVENT CONNECTIVITY",
            description:
                "Delivers instant gigabit wireless access for temporary setups like concerts or exhibitions, bypassing trenching delays and eliminating reliance on congested RF bands.",
            image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
        },
        {
            icon: <Network className="w-8 h-8" />,
            title: "PRIVATE MOBILE NETWORK",
            description:
                "Ensures low-latency, secure optical backhaul for enterprise 4G/5G networks, in closed-loop industrial or campus environments.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            icon: <Factory className="w-8 h-8" />,
            title: "MINES CONNECTIVITY",
            description:
                "Offers robust, dust-tolerant optical links for mining pits and processing facilities where cabling is hazardous and RF signals are often unreliable.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
            icon: <AlertTriangle className="w-8 h-8" />,
            title: "EMI SENSITIVE RESTRICTED AREA",
            description:
                "Ideal for electromagnetic-sensitive environments like atomic energy plants and chemical manufacturing units, enabling high-speed communication without generating radio frequency interference.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
        },
        {
            icon: <Mountain className="w-8 h-8" />,
            title: "RURAL CONNECTIVITY",
            description:
                "Bridges the last-mile gap with fiber-grade performance over challenging terrain where laying cables is difficult or economically unviable.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        },
        {
            icon: <Antenna className="w-8 h-8" />,
            title: "4G/5G DEPLOYMENT",
            description:
                "Speeds up backhaul integration in urban and suburban rollouts, reducing spectrum costs and setup times for dense base station networks.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "SWAN CONNECTIVITY",
            description:
                "Strengthens statewide digital infrastructure by connecting government sites quickly, with high bandwidth and enhanced data security.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        },
        {
            icon: <Building className="w-8 h-8" />,
            title: "URBAN CONNECTIVITY",
            description:
                "Serves as a scalable alternative to fiber in cities—linking rooftops and buildings without civil work, spectrum constraints, or interference issues.",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        },
    ]

    const supremeUseCases = [
        {
            icon: <Truck className="w-8 h-8" />,
            title: "ARMY",
            description:
                "Enables high-bandwidth, secure communication between mobile ground units, command posts, and surveillance assets. PAT-enabled optical links remain aligned in motion and undetectable by Electronic Warfare Systems (EWS).",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
            icon: <Ship className="w-8 h-8" />,
            title: "NAVY",
            description:
                "Provides ship-to-ship and ship-to-shore communication with zero RF signature. Integrated PAT ensures stable laser connectivity on moving vessels, delivering stealthy, interference-free operation beyond the reach of EWS.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
        },
        {
            icon: <Plane className="w-8 h-8" />,
            title: "AIR FORCE",
            description:
                "Supports aircraft-to-aircraft and airborne-to-ground data exchange with real-time throughput. PAT integration compensates for speed and altitude shifts, ensuring continuity without RF traceable signals.",
            image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop",
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "TACTICAL COMMUNICATION",
            description:
                "Delivers mobile, jam-proof links for field operations, UAVs, and armored platforms. PAT-enabled FSO ensures real-time, directional communication immune to detection or disruption by EWS.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
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
            </div>

            <div className="floating-element absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-500/15 rounded-full blur-3xl"></div>
            <div className="floating-element absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"></div>

            <main className="relative z-10">
                <section ref={heroRef} className="pt-32 pb-20">
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-16">
                            <h1 className="hero-title text-6xl lg:text-8xl font-bold text-green-400 mb-6">OpticSpectra</h1>
                            <h2 className="hero-subtitle text-3xl lg:text-4xl font-semibold text-white mb-8">
                                Intelligent Optical Links for Dynamic Network Demands
                            </h2>
                            <p className="hero-description text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                                Nav Wireless Technologies offers Free Space Optics (FSO) solutions with adaptive bandwidth capabilities,
                                enabling optical links to automatically adjust data in response to changing environmental conditions
                                such as fog, rain, or signal degradation. This ensures continuous, optimized performance without
                                compromising reliability or security.
                            </p>
                        </div>
                    </div>
                </section>
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[0] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-16">
                            <h2 className="animate-in text-4xl lg:text-5xl font-bold text-white mb-6">OpticSpectra Neo</h2>
                            <p className="animate-in text-xl text-green-400 font-semibold mb-4">TEC CERTIFIED</p>
                            <p className="animate-in text-lg text-green-100 max-w-3xl mx-auto">
                                Perfect for civilian and commercial applications requiring reliable, high-speed optical wireless
                                communication
                            </p>
                        </div>

                        {/* Neo Product Details */}
                        <div className="max-w-4xl mx-auto mb-16">
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:bg-black/90 transition-all duration-300">
                                <CardContent className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div className="relative h-64">
                                            <Image
                                                src="/images/neo.png"
                                                alt="OpticSpectra Neo"
                                                fill
                                                className="object-contain rounded-lg shadow-md shadow-green-500/20"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-white">Technical Specifications</h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Max Bandwidth:</span>
                                                    <span className="text-white font-semibold hover:text-green-300 transition-colors duration-200">
                            Up to 10Gbps
                          </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Distance Range:</span>
                                                    <span className="text-white font-semibold hover:text-green-300 transition-colors duration-200">
                            3km - 10km
                          </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Certification:</span>
                                                    <span className="text-green-400 font-semibold">Department of Telecommunications</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Application:</span>
                                                    <span className="text-white font-semibold hover:text-green-300 transition-colors duration-200">
                            Civilian & Commercial
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Neo Use Cases - Horizontal Scroll */}
                        <div className="animate-in">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-3xl font-bold text-white">Civilian Applications</h3>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollLeft(neoScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollRight(neoScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div
                                ref={neoScrollRef}
                                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {neoUseCases.map((useCase, index) => (
                                    <Card
                                        key={index}
                                        className="flex-shrink-0 w-80 bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 overflow-hidden group hover:bg-black/90"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={useCase.image || "/placeholder.svg"}
                                                alt={useCase.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-lg shadow-md shadow-green-500/20"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <div className="text-green-400 bg-black/50 p-2 rounded-lg backdrop-blur-sm">{useCase.icon}</div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h4 className="text-lg font-bold text-white mb-3">{useCase.title}</h4>
                                            <p className="text-green-100 leading-relaxed text-sm">{useCase.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[1] = el
                    }}
                    className="py-20"
                >
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-16">
                            <h2 className="animate-in text-4xl lg:text-5xl font-bold text-white mb-6">OpticSpectra Supreme</h2>
                            <p className="animate-in text-xl text-green-400 font-semibold mb-4">MIL GRADE - JSS 55555 CERTIFIED</p>
                            <p className="animate-in text-lg text-green-100 max-w-3xl mx-auto">
                                Military-grade optical wireless communication system designed for defense and tactical operations
                            </p>
                        </div>

                        {/* Supreme Product Details */}
                        <div className="max-w-4xl mx-auto mb-16">
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:bg-black/90 transition-all duration-300">
                                <CardContent className="p-8">
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        <div className="relative h-64">
                                            <Image
                                                src="/images/supreme.png"
                                                alt="OpticSpectra Supreme"
                                                fill
                                                className="object-contain rounded-lg shadow-md shadow-green-500/20"
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-bold text-white">Technical Specifications</h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Max Bandwidth:</span>
                                                    <span className="text-white font-semibold hover:text-green-300 transition-colors duration-200">
                            Up to 40Gbps
                          </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Distance Range:</span>
                                                    <span className="text-white font-semibold hover:text-green-300 transition-colors duration-200">
                            1km - 20km
                          </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Certification:</span>
                                                    <span className="text-green-400 font-semibold">MIL GRADE JSS 55555</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-green-200">Application:</span>
                                                    <span className="text-white font-semibold hover:text-green-300 transition-colors duration-200">
                            Military & Defense
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Supreme Use Cases - Horizontal Scroll */}
                        <div className="animate-in">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-3xl font-bold text-white">Military & Defense Applications</h3>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollLeft(supremeScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollRight(supremeScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div
                                ref={supremeScrollRef}
                                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {supremeUseCases.map((useCase, index) => (
                                    <Card
                                        key={index}
                                        className="flex-shrink-0 w-80 bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 overflow-hidden group hover:bg-black/90"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={useCase.image || "/placeholder.svg"}
                                                alt={useCase.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-lg shadow-md shadow-green-500/20"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <div className="text-green-400 bg-black/50 p-2 rounded-lg backdrop-blur-sm">{useCase.icon}</div>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h4 className="text-lg font-bold text-white mb-3">{useCase.title}</h4>
                                            <p className="text-green-100 leading-relaxed text-sm">{useCase.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[2] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <h2 className="animate-in text-4xl lg:text-5xl font-bold text-center text-white mb-16">
                            Why Choose OpticSpectra?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-4">Adaptive Bandwidth</h3>
                                    <p className="text-green-100">
                                        Automatically adjusts data rates in response to changing environmental conditions
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-4">Mission Critical</h3>
                                    <p className="text-green-100">
                                        Ideal for high-availability applications requiring continuous performance
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-4">Real-time Scaling</h3>
                                    <p className="text-green-100">Supports real-time bandwidth scaling for dynamic network demands</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="py-20">
                    <div className="container mx-auto px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your Network?</h2>
                        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
                            Experience the future of optical wireless communications with OpticSpectra's adaptive FSO solutions for
                            smart cities, defense networks, disaster zones, and enterprise backhaul applications.
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
                                Download Datasheet
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx global>{`
        .scrollbar-hide 
          -ms-overflow-style: none;
          scrollbar-width: none;
        .scrollbar-hide::-webkit-scrollbar 
          display: none;
      `}</style>
        </div>
    )
}
