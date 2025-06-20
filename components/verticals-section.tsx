"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { ChevronDown, ArrowRight, X } from "lucide-react"

export default function VerticalsSection() {
    const containerRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])
    const [activeModal, setActiveModal] = useState<number | null>(null)

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: ".partnerships-container",
                start: "top top",
                end: "bottom top",
                onLeave: () => {
                    initializeVerticalAnimations()
                },
                refreshPriority: 1,
            })

            function initializeVerticalAnimations() {
                const sections = sectionsRef.current.filter(Boolean)

                sections.forEach((section, index) => {
                    const direction = index % 2 === 0 ? 1 : -1
                    const card = section.querySelector(".vertical-card")
                    const content = section.querySelector(".vertical-content")
                    const image = section.querySelector(".vertical-image")
                    const features = section.querySelectorAll(".feature-item")

                    gsap.fromTo(
                        card,
                        { x: direction * 100, opacity: 0, scale: 0.8 },
                        {
                            x: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1.2,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                end: "top 20%",
                                toggleActions: "play none none reverse",
                            },
                        },
                    )

                    gsap.fromTo(
                        content,
                        { y: 80, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            delay: 0.3,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 70%",
                                end: "top 30%",
                                toggleActions: "play none none reverse",
                            },
                        },
                    )

                    gsap.fromTo(
                        image,
                        { scale: 1.2, opacity: 0 },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 1.5,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 80%",
                                end: "top 20%",
                                toggleActions: "play none none reverse",
                            },
                        },
                    )

                    gsap.fromTo(
                        features,
                        { y: 60, opacity: 0, scale: 0.8 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.8,
                            delay: 0.6,
                            stagger: 0.15,
                            ease: "back.out(1.7)",
                            scrollTrigger: {
                                trigger: section,
                                start: "top 70%",
                                end: "top 30%",
                                toggleActions: "play none none reverse",
                            },
                        },
                    )

                    gsap.to(image, {
                        yPercent: -20,
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1,
                        },
                    })
                })

                gsap.to(".feature-item", {
                    y: "+=5",
                    duration: 3,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    stagger: 0.2,
                })
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const openModal = (index: number) => {
        setActiveModal(index)
        gsap.fromTo(".modal-overlay", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" })
        gsap.fromTo(
            ".modal-content",
            { scale: 0.8, opacity: 0, y: 50 },
            { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
        )
    }

    const closeModal = () => {
        gsap.to(".modal-content", {
            scale: 0.8,
            opacity: 0,
            y: 50,
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
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
            gradient: "from-green-600 to-gray-800",
            bgGradient: "from-gray-50 to-gray-100",
            features: [
                { title: "Secure Networks" },
                { title: "Smart Cities" },
                { title: "Disaster Resilient" },
            ],
            content: {
                sections: [
                    {
                        title: "Secure Communication Networks",
                        points: [
                            "Home Affairs, and Intelligence Services: Enable tamper-proof, RF-free communication that is immune to jamming and interception.",
                            "Police & Paramilitary Installations: Ensure secure intra-unit communications in urban and border deployments using LiFi and FSO.",
                        ],
                    },
                    {
                        title: "Smart Governance & Digital Infrastructure",
                        points: [
                            "Smart Cities: Power streetlights, traffic systems, surveillance cameras, and environmental sensors with LiFi-enabled data links.",
                            "E-Governance Centers: Deploy high-speed indoor LiFi zones for real-time citizen services and data processing.",
                        ],
                    },
                    {
                        title: "Disaster-Resilient Communication",
                        points: [
                            "Emergency Response and DRDO Deployments: Set up rapid, wireless optical links in post-disaster zones where traditional networks fail.",
                            "Rural and Remote Connectivity: FSO bridges can eliminate the need for fiber laying, connecting government outposts in hilly, forested, or coastal regions.",
                        ],
                    },
                    {
                        title: "Educational & Health Institutions",
                        points: [
                            "Digital Classrooms in Government Schools: Use LiFi to provide fast, radiation-free internet in rural classrooms.",
                            "Telemedicine & e-Hospitals: Secure, interference-free wireless data for medical diagnostics, patient records, and real-time specialist consultations.",
                        ],
                    },
                ],
            },
        },
        {
            title: "Defence",
            subtitle:
                "Next-Gen Optical Wireless Communication for Indian Armed Forces - Mission-Ready. EW-Resilient. Indigenously Developed.",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
            gradient: "from-green-600 to-gray-800",
            bgGradient: "from-gray-50 to-gray-100",
            features: [
                { title: "EW-Resilient" },
                { title: "Mission-Ready" },
                { title: "Multi-Force" },
            ],
            content: {
                intro:
                    "Nav Wireless Technologies Pvt. Ltd. is India's first and only company to indigenously develop and deliver Optical Wireless Communication (OWC) systems using LiFi (Light Fidelity) and FSO (Free Space Optics). These advanced technologies provide RF-free, high-speed, and secure communications, built specifically for deployment in high-threat, electronic warfare (EW) environments across all three wings of the Indian Armed Forces.",
                sections: [
                    {
                        title: "Indian Army",
                        points: [
                            "Forward Base Communication: Deploy FSO links in border zones and high-altitude posts to establish secure, high-speed networks without reliance on vulnerable RF systems.",
                            "Mobile Command Centers: Use LiFi within bunkers, armored vehicles, and tactical shelters for short-range communications immune to RF jamming and detection.",
                            "Field Deployable Optical Kits: Rapid deployment for temporary command posts or joint exercises in EW-prone areas where traditional radio-based systems fail.",
                        ],
                    },
                    {
                        title: "Indian Navy",
                        points: [
                            "Shipboard Communication: Use LiFi for secure intra-vessel data exchange with zero electromagnetic interference, protecting sensitive naval electronics and weapons systems.",
                            "Submarine Connectivity: Enable internal optical communications in RF-shielded environments, improving stealth and safety in subsurface operations.",
                            "Fleet Operations: FSO-based ship-to-ship or ship-to-shore communication ensures secure, jam-proof data transfer during coordinated naval maneuvers.",
                        ],
                    },
                    {
                        title: "Indian Air Force",
                        points: [
                            "Airbase Communication Grid: Connect control towers, radar posts, and hangars with FSO links, eliminating vulnerabilities associated with wireless RF networks.",
                            "EW-Protected Zones: Use LiFi inside hardened aircraft shelters and mission planning rooms, where RF silence is required.",
                            "UAV and ISR Support: Deploy optical links for drone-to-ground and satellite communication in electronic warfare zones where RF signals are disrupted or targeted.",
                        ],
                    },
                ],
            },
        },
        {
            title: "OEM/ODM",
            subtitle:
                "Integrate the Future: LiFi Optical Transceivers for Your Products - Nav Wireless Technologies Pvt. Ltd. - Your Optical Wireless Innovation Partner",
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
            gradient: "from-green-600 to-gray-800",
            bgGradient: "from-gray-50 to-gray-100",
            features: [
                { title: "Custom Integration" },
                { title: "High-Speed" },
                { title: "Secure" },
            ],
            content: {
                intro:
                    "At Nav Wireless Technologies Pvt. Ltd., we enable companies across industries to integrate LiFi-based Optical Wireless Communication (OWC) modules into their existing or new product lines. Our compact, customizable LiFi transceivers deliver ultra-secure, high-speed, interference-free connectivity-ideal for environments where traditional RF-based communication is limited or restricted.",
                subtitle: "Tailored Integration for OEMs, Device Manufacturers & Solution Providers - We collaborate with:",
                sections: [
                    {
                        title: "Industrial Automation Companies",
                        points: [
                            "Enable real-time data exchange between machines in RF-restricted or EMI-sensitive environments such as power plants, refineries, and assembly lines.",
                        ],
                    },
                    {
                        title: "Smart Infrastructure & IoT Device Makers",
                        points: [
                            "Embed LiFi in smart lighting, smart buildings, and IoT gateways, enabling data-over-light functionality with enhanced security and speed.",
                        ],
                    },
                    {
                        title: "Medical Equipment & Healthcare OEMs",
                        points: [
                            "Integrate radiation-free LiFi for data exchange in ICUs, operation theatres, and diagnostics equipment, where Wi-Fi or Bluetooth may interfere with critical systems.",
                        ],
                    },
                    {
                        title: "Automotive & Mobility Innovators",
                        points: [
                            "Enable vehicle-to-vehicle (V2V) or in-cabin optical communication for safer, interference-free data sharing in smart and autonomous vehicles.",
                        ],
                    },
                    {
                        title: "Consumer Electronics & Smart Devices",
                        points: [
                            "Equip your products with high-speed, short-range data transmission capabilities for secure indoor applications-without relying on crowded RF bands.",
                        ],
                    },
                ],
            },
        },
        {
            title: "Consumer",
            subtitle: "Our Solutions for End Customers",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
            gradient: "from-green-600 to-gray-800",
            bgGradient: "from-gray-50 to-gray-100",
            features: [
                { title: "End-to-End" },
                { title: "Smart Homes" },
                { title: "High Performance" },
            ],
            content: {
                sections: [
                    {
                        title: "Enterprises & Offices",
                        points: [
                            "High-speed LiFi networks for secure data zones",
                            "FSO backhaul links between buildings without trenching fiber",
                            "Ideal for finance, legal, data centers, and R&D spaces",
                        ],
                    },
                    {
                        title: "Smart Homes & Smart Buildings",
                        points: [
                            "LiFi-enabled lighting for radiation-free internet",
                            "Secure internal communication without Wi-Fi congestion",
                            "Seamless integration with IoT devices and automation systems",
                        ],
                    },
                    {
                        title: "Healthcare & Hospitals",
                        points: [
                            "LiFi zones in ICUs, OTs, and patient rooms",
                            "Zero-RF environments for sensitive medical equipment",
                            "Reliable, high-speed communication without EMI interference",
                        ],
                    },
                    {
                        title: "Education & Digital Classrooms",
                        points: [
                            "Smart classrooms with high-speed, safe internet",
                            "Enhanced e-learning experiences without harmful radio waves",
                            "FSO links to connect school blocks or remote campuses",
                        ],
                    },
                    {
                        title: "Industrial & Factory Environments",
                        points: [
                            "Machine-to-machine LiFi communication in EMI-prone zones",
                            "FSO solutions for plant-wide wireless connectivity",
                            "Ideal for automotive, oil & gas, power, and precision manufacturing",
                        ],
                    },
                    {
                        title: "Smart Cities & Urban Infrastructure",
                        points: [
                            "Optical wireless links for traffic signals, CCTV, and IoT sensors",
                            "LiFi streetlights for data transmission through lighting infrastructure",
                            "FSO networks for last-mile and edge communication without cables",
                        ],
                    },
                    {
                        title: "Green Technology",
                        points: ["License free", "EMI interference free"],
                    },
                ],
            },
        },
    ]

    return (
        <>
            <section
                ref={containerRef}
                className="relative py-20 bg-gray-100"
            >
                <div className="container mx-auto px-6 mb-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-gray-800">
                                Verticals
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-gray-800 rounded-full mx-auto mt-8"></div>
                    </div>
                </div>

                <div className="space-y-32 relative z-10">
                    {verticals.map((vertical, index) => {
                        const isEven = index % 2 === 0

                        return (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) sectionsRef.current[index] = el
                                }}
                                className="container mx-auto px-6"
                            >
                                <div
                                    className={`vertical-card bg-white rounded-3xl shadow-2xl overflow-hidden ${
                                        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    } flex flex-col lg:flex`}
                                >
                                    <div className="lg:w-1/2 relative overflow-hidden">
                                        <div className="vertical-image relative h-64 lg:h-full min-h-[400px]">
                                            <Image
                                                src={vertical.image || "/placeholder.svg"}
                                                alt={vertical.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${vertical.gradient} opacity-80`}></div>
                                        </div>
                                    </div>

                                    <div className="lg:w-1/2 p-8 lg:p-12">
                                        <div className="vertical-content h-full flex flex-col justify-center">
                                            <div className="mb-8">
                                                <h3 className="text-3xl font-bold text-gray-900">{vertical.title}</h3>
                                                <p className="text-gray-600 text-lg leading-relaxed">{vertical.subtitle}</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                                {vertical.features.map((feature, featureIndex) => (
                                                    <div
                                                        key={featureIndex}
                                                        className="feature-item group bg-gray-50 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300"
                                                    >
                                                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                                                    </div>
                                                ))}
                                            </div>

                                            <button
                                                onClick={() => openModal(index)}
                                                className={`group flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r ${vertical.gradient} text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-black/25 transition-all duration-300 hover:scale-105`}
                                            >
                                                <span>Learn More</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            {activeModal !== null && (
                <div className="modal-overlay fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="modal-content bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
                            <h2 className="text-2xl font-bold text-gray-900">{verticals[activeModal].title} Solutions</h2>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                            >
                                <X className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>

                        <div className="p-6">
                            {verticals[activeModal].content.intro && (
                                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                                    <p className="text-gray-700 leading-relaxed">{verticals[activeModal].content.intro}</p>
                                </div>
                            )}

                            {verticals[activeModal].content.subtitle && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900">{verticals[activeModal].content.subtitle}</h3>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {verticals[activeModal].content.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="bg-gray-50 rounded-2xl p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                                        <ul className="space-y-3">
                                            {section.points.map((point, pointIndex) => (
                                                <li key={pointIndex} className="text-gray-600 text-sm leading-relaxed flex items-start">
                                                    <ChevronDown className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0 rotate-[-90deg]" />
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
        </>
    )
}