"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function VerticalsSection() {
    const containerRef = useRef(null)
    const sectionsRef = useRef([])
    const router = useRouter()

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            sectionsRef.current.forEach((section, index) => {
                const text = section.querySelector(".vertical-text")
                const image = section.querySelector(".vertical-image")
                const button = section.querySelector(".learn-more-btn")

                if (!button) return // Skip if button is not found

                // Text slide-in and fade
                gsap.fromTo(
                    text,
                    { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            end: "top 30%",
                            toggleActions: "play none none reverse",
                        },
                    }
                )

                // Image scale and fade
                gsap.fromTo(
                    image,
                    { scale: 1.2, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            end: "top 30%",
                            toggleActions: "play none none reverse",
                        },
                    }
                )

                // Parallax effect
                gsap.to(image, {
                    yPercent: -15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                })

                // Button hover animation
                const onMouseEnter = () => {
                    gsap.to(button, {
                        scale: 1.05,
                        boxShadow: "0 6px 15px rgba(0,128,0,0.3)",
                        duration: 0.3,
                        ease: "power2.out",
                    })
                }

                const onMouseLeave = () => {
                    gsap.to(button, {
                        scale: 1,
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                        duration: 0.3,
                        ease: "power2.out",
                    })
                }

                button.addEventListener("mouseenter", onMouseEnter)
                button.addEventListener("mouseleave", onMouseLeave)

                // Cleanup event listeners
                return () => {
                    button.removeEventListener("mouseenter", onMouseEnter)
                    button.removeEventListener("mouseleave", onMouseLeave)
                }
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const handleLearnMore = (title) => {
        const slug = title.toLowerCase().replace(/ /g, "-")
        router.push(`/verticals/${slug}`)
    }

    const verticals = [
        {
            title: "Government",
            subtitle: "Empowering Governance with Next-Gen Optical Wireless Communications (OWC)",
            image: "https://images.unsplash.com/photo-148640058-6926-c627a92ad1ab?w=800&auto=format&fit=crop",
            content: {
                sections: [
                    {
                        title: "Secure Communication Networks",
                        points: [
                            "Home Affairs: Tamper-proof, RF-free communication immune to jamming.",
                            "Police: Secure intra-unit communications using LiFi and FSO.",
                        ],
                    },
                    {
                        title: "Smart Governance",
                        points: [
                            "Smart Cities: LiFi-enabled data links for traffic and surveillance.",
                            "E-Governance: High-speed indoor LiFi for citizen services.",
                        ],
                    },
                    {
                        title: "Disaster-Resilient",
                        points: [
                            "Emergency Response: Rapid optical links in disaster zones.",
                            "Rural Connectivity: FSO bridges for remote government outposts.",
                        ],
                    },
                    {
                        title: "Education & Health",
                        points: [
                            "Digital Classrooms: LiFi for fast, radiation-free internet in rural schools.",
                            "Telemedicine: Secure, interference-free wireless data for diagnostics.",
                        ],
                    },
                ],
            },
        },
        {
            title: "Defence",
            subtitle: "Mission-Ready Optical Wireless Communication for Indian Armed Forces.",
            image: "https://images.unsplash.com/photo-1549321743-891475-5e087794-1af2-d32d-a5e2?w=800&auto=format",
            content: {
                intro: "India's first indigenous Optical Wireless Communication systems using LiFi and FSO for secure, RF-free communications in high-threat environments.",
                sections: [
                    {
                        title: "Indian Army",
                        points: [
                            "Forward Bases: Secure FSO links in border zones.",
                            "Command Centers: LiFi for jam-free communications.",
                            "Field Kits: Rapid deployment in EW-prone areas.",
                        ],
                    },
                    {
                        title: "Indian Navy",
                        points: [
                            "Shipboard: LiFi for secure intra-vessel data exchange.",
                            "Submarines: Optical communications for stealth operations.",
                            "Fleet: FSO for secure ship-to-ship communication.",
                        ],
                    },
                    {
                        title: "Indian Air Force",
                        points: [
                            "Airbases: FSO links for control towers and hangars.",
                            "EW Zones: LiFi in RF-silent areas.",
                            "UAV Support: Optical links for drone communication.",
                        ],
                    },
                ],
            },
        },
        {
            title: "OEM/ODM",
            subtitle: "LiFi Optical Transceivers for Your Products - Innovation Partner.",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&auto=format",
            content: {
                intro: "We enable companies to integrate LiFi-based OWC modules for secure, high-speed connectivity in RF-limited settings.",
                subtitle: "Tailored for OEMs and Solution Providers:",
                sections: [
                    {
                        title: "Industrial Automation",
                        points: ["Real-time data exchange in EMI-sensitive environments."],
                    },
                    {
                        title: "Smart Infrastructure",
                        points: ["Embed LiFi in smart lighting and IoT gateways."],
                    },
                    {
                        title: "Healthcare OEMs",
                        points: ["Radiation-free LiFi for ICUs and diagnostics."],
                    },
                    {
                        title: "Automotive",
                        points: ["V2V and in-cabin optical communication."],
                    },
                    {
                        title: "Consumer Electronics",
                        points: ["High-speed, secure data transmission."],
                    },
                ],
            },
        },
        {
            title: "Consumer",
            subtitle: "Our Solutions for End Customers",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop",
            content: {
                sections: [
                    {
                        title: "Enterprises",
                        points: [
                            "LiFi networks for secure data zones.",
                            "FSO links for building connectivity.",
                            "Ideal for finance and legal.",
                        ],
                    },
                    {
                        title: "Smart Homes",
                        points: [
                            "LiFi-enabled lighting for internet.",
                            "Secure IoT communication.",
                            "Integration with automation systems.",
                        ],
                    },
                    {
                        title: "Healthcare",
                        points: [
                            "LiFi zones in ICUs.",
                            "Zero-RF for sensitive equipment.",
                            "High-speed communication.",
                        ],
                    },
                    {
                        title: "Education",
                        points: [
                            "Smart classrooms with safe internet.",
                            "FSO for campus connectivity.",
                            "Enhanced e-learning experiences.",
                        ],
                    },
                    {
                        title: "Industrial",
                        points: [
                            "LiFi for EMI-prone zones.",
                            "FSO for plant-wide connectivity.",
                            "Ideal for manufacturing.",
                        ],
                    },
                    {
                        title: "Smart Cities",
                        points: [
                            "Optical links for CCTV and sensors.",
                            "LiFi streetlights for data.",
                            "FSO for last-mile networks.",
                        ],
                    },
                    {
                        title: "Green Technology",
                        points: ["License-free", "EMI-free"],
                    },
                ],
            },
        },
    ]

    return (
        <section
            ref={containerRef}
            className="relative py-24 min-h-screen flex flex-col"
        >
            {/* Background with enhanced gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/20 via-white/25 to-slate-100/20 backdrop-blur-lg"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-green-200/15 to-blue-200/15 blur-3xl animate-pulse"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-r from-green-200/10 to-emerald-200/10 blur-3xl animate-pulse delay-700"></div>
                <div className="absolute left-1/2 top-1/2 w-1/3 h-full bg-gradient-to-r from-blue-200/5 to-green-200/5 blur-2xl animate-pulse delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 mb-16">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-black">
                            Verticals
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-gray-800 to-gray-800 rounded-full mx-auto mt-6"></div>
                </div>
            </div>

            <div className="relative z-10 space-y-32">
                {verticals.map((vertical, index) => {
                    const isEven = index % 2 === 0

                    return (
                        <div
                            key={index}
                            ref={(el) => (sectionsRef.current[index] = el)}
                            className="container mx-auto px-6"
                        >
                            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
                                <div className="vertical-text w-full md:w-1/2 text-center md:text-left">
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{vertical.title}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">{vertical.subtitle}</p>
                                    <button
                                        onClick={() => handleLearnMore(vertical.title)}
                                        className="learn-more-btn group border-2 border-[#95c149] hover:bg-[#95c149] text-gray-700 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200 ease-out transform hover:scale-105"
                                    >
                                        <span>Learn More</span>
                                    </button>
                                </div>
                                <div className="vertical-image w-full md:w-1/2 relative h-96 md:h-[28rem] rounded-xl overflow-hidden">
                                    <Image
                                        src={vertical.image}
                                        alt={vertical.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800/30 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Custom CSS for Animations and Styling */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
                .delay-500 {
                    animation-delay: 0.5s;
                }
                .vertical-image {
                    transition: all 0.3s ease;
                }
                .learn-more-btn {
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    )
}