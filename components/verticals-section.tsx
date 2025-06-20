"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"

export default function VerticalsSection() {
    const containerRef = useRef(null)
    const sectionsRef = useRef([])
    const [activeModal, setActiveModal] = useState(null)

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            sectionsRef.current.forEach((section, index) => {
                const text = section.querySelector(".vertical-text")
                const image = section.querySelector(".vertical-image")
                const button = section.querySelector(".learn-more-btn")

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
                button.addEventListener("mouseenter", () => {
                    gsap.to(button, {
                        scale: 1.05,
                        boxShadow: "0 6px 15px rgba(0,128,0,0.3)",
                        duration: 0.3,
                        ease: "power2.out",
                    })
                })
                button.addEventListener("mouseleave", () => {
                    gsap.to(button, {
                        scale: 1,
                        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                        duration: 0.3,
                        ease: "power2.out",
                    })
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const openModal = (index) => {
        setActiveModal(index)
        gsap.fromTo(
            ".modal-overlay",
            { opacity: 0 },
            { opacity: 1, duration: 0.3, ease: "power2.out" }
        )
        gsap.fromTo(
            ".modal-content",
            { scale: 0.9, opacity: 0, y: 30 },
            { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.4)" }
        )
    }

    const closeModal = () => {
        gsap.to(".modal-content", {
            scale: 0.9,
            opacity: 0,
            y: 30,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => setActiveModal(null),
        })
        gsap.to(".modal-overlay", {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
        })
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
        <>
            <section
                ref={containerRef}
                className="relative py-24 bg-gray-100"
            >
                <div className="container mx-auto px-6 mb-16">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-gray-800">
                                Verticals
                            </span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-gray-800 rounded-full mx-auto mt-6"></div>
                    </div>
                </div>

                <div className="space-y-32">
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
                                            onClick={() => openModal(index)}
                                            className="learn-more-btn inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-gray-800 text-white rounded-lg font-semibold text-base shadow-md transition-all duration-300"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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

                {/* Subtle Background Decorations */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/5 left-1/5 w-48 h-48 bg-green-200/5 rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-1/5 right-1/5 w-64 h-64 bg-gray-200/5 rounded-full blur-2xl animate-float delay-500"></div>
                </div>
            </section>

            {activeModal !== null && (
                <div className="modal-overlay fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="modal-content bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-xl">
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-5 flex items-center justify-between rounded-t-2xl">
                            <h2 className="text-xl font-bold text-gray-900">{verticals[activeModal].title} Solutions</h2>
                            <button
                                onClick={closeModal}
                                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                            >
                                <X className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>

                        <div className="p-5">
                            {verticals[activeModal].content.intro && (
                                <div className="mb-5 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-gray-700 text-sm leading-relaxed">{verticals[activeModal].content.intro}</p>
                                </div>
                            )}

                            {verticals[activeModal].content.subtitle && (
                                <div className="mb-5">
                                    <h3 className="text-base font-semibold text-gray-900">{verticals[activeModal].content.subtitle}</h3>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {verticals[activeModal].content.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="bg-gray-50 rounded-lg p-4">
                                        <h3 className="text-base font-semibold text-gray-900 mb-2">{section.title}</h3>
                                        <ul className="space-y-2">
                                            {section.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="text-gray-600 text-sm leading-relaxed flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
        </>
    )
}