"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"

export default function NavOcularPage() {
    const lightScrollRef = useRef<HTMLDivElement>(null)
    const dongleScrollRef = useRef<HTMLDivElement>(null)
    const [lightCurrentIndex, setLightCurrentIndex] = useState(0)
    const [dongleCurrentIndex, setDongleCurrentIndex] = useState(0)

    const lightUseCases = [
        {
            title: "Smart Buildings",
            description:
                "Empowers seamless user experience by using existing lighting for high-speed indoor connectivity, reducing dependence on traditional networks and enhancing energy-efficient communication.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        },
        {
            title: "EMI-Sensitive Areas",
            description:
                "Enables wireless data flow in restricted environments like atomic energy zones, MRI rooms, and semiconductor fabs where RF-based systems are unsuitable.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
        },
        {
            title: "Industrial Floors",
            description:
                "Boosts machine coordination and sensor feedback through robust optical links, adapting easily to dynamic layouts without physical reconfiguration or frequency interference.",
            image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=300&fit=crop",
        },
        {
            title: "Healthcare Facilities",
            description:
                "Maintains operational precision by supporting diagnostics and real-time monitoring without disrupting sensitive instruments or risking patient data.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        },
        {
            title: "Confidential Workspaces",
            description:
                "Delivers tightly secured, directional links ideal for defense labs, strategic command centers, and financial institutions where data integrity is paramount.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
        },
        {
            title: "Education Environments",
            description:
                "Facilitates reliable, localized communication for digital classrooms and exam centers where RF restrictions or signal control is essential.",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
        },
        {
            title: "Cultural & Exhibition Spaces",
            description:
                "Ensures visitor services and interactive systems function discreetly, preserving aesthetics and safeguarding historically sensitive installations.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
            title: "Data-Intensive Infrastructure",
            description:
                "Augments server room monitoring and control with optical communication layers that avoid RF interference and maintain thermal efficiency.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
        },
        {
            title: "Urban Connectivity",
            description:
                "Serves as a scalable alternative to fiber in cities—linking rooftops and buildings without civil work, spectrum constraints, or interference issues.",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        },
    ]

    const dongleUseCases = [
        {
            title: "5G Indoor Offloading",
            description:
                "Supports ultra-fast, short-range wireless links within high-density indoor zones (airports, malls, offices), offloading traffic from congested 5G small cells and enhancing network capacity with zero-spectrum use.",
            image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
        },
        {
            title: "6G-Ready Optical Integration",
            description:
                "Acts as a foundational layer for 6G architecture by enabling distributed, low-latency optical cells indoors—leveraging visible and IR light for localized, energy-efficient, and ultra-secure mesh-based connectivity.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            title: "Mobile Device Integration",
            description:
                "Enables seamless integration with smartphones, tablets, and laptops through USB and wireless interfaces, providing instant high-speed connectivity without traditional network setup.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
        },
        {
            title: "Portable Workstations",
            description:
                "Delivers instant connectivity for temporary workstations, field operations, and mobile offices where traditional network infrastructure is unavailable or impractical.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
        },
    ]

    // Auto scroll functionality
    useEffect(() => {
        const lightInterval = setInterval(() => {
            if (lightScrollRef.current) {
                const maxIndex = Math.ceil(lightUseCases.length / 3) - 1
                const nextIndex = lightCurrentIndex >= maxIndex ? 0 : lightCurrentIndex + 1
                setLightCurrentIndex(nextIndex)
                lightScrollRef.current.scrollTo({
                    left: nextIndex * 400 * 3,
                    behavior: "smooth",
                })
            }
        }, 5000)

        const dongleInterval = setInterval(() => {
            if (dongleScrollRef.current) {
                const maxIndex = Math.ceil(dongleUseCases.length / 3) - 1
                const nextIndex = dongleCurrentIndex >= maxIndex ? 0 : dongleCurrentIndex + 1
                setDongleCurrentIndex(nextIndex)
                dongleScrollRef.current.scrollTo({
                    left: nextIndex * 400 * 3,
                    behavior: "smooth",
                })
            }
        }, 5000)

        return () => {
            clearInterval(lightInterval)
            clearInterval(dongleInterval)
        }
    }, [lightCurrentIndex, dongleCurrentIndex, lightUseCases.length, dongleUseCases.length])

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
            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-purple-900/5 to-black/15"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/3 to-transparent"></div>

                <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/8 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/3 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <Navbar />

                {/* Hero Section - Full Page */}
                <section className="relative h-screen flex items-center justify-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image src="/images/navocular_bg.png" alt="NavOcular Background" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-white/20"></div>
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">NAVOCULAR</h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-black animate-bounce mx-auto" />
                    </div>
                </section>

                {/* About NavOcular Section */}
                <section className="py-16 px-8">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-8">ABOUT NAVOCULAR</h2>
                        <p className="text-lg lg:text-xl text-black max-w-4xl mx-auto leading-relaxed mb-8">
                            Nav Ocular leverages Visible Light Communication (VLC) with invisible infrared light to deliver secure,
                            high-speed wireless communication without relying on traditional RF spectrum. Designed with mesh network
                            topology, Nav Ocular allows multiple nodes to seamlessly connect, route data intelligently, and self-heal
                            in case of link disruption.
                        </p>
                        <p className="text-lg lg:text-xl text-black max-w-4xl mx-auto leading-relaxed">
                            This innovative solution is perfect for EMI-sensitive environments, smart buildings, and applications
                            requiring secure, interference-free communication using visible light technology.
                        </p>
                    </div>
                </section>

                {/* Full Width Image Section */}
                <section className="w-full h-[300px] relative overflow-hidden">
                    <Image src="/images/navocular1.jpg" alt="NavOcular Technology" fill className="object-cover" sizes="100vw" />
                </section>

                {/* Light Panel Section */}
                <section className="py-20">
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-8 leading-tight">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 uppercase">VLC Transmitter</h2>
                            <h3 className="text-4xl lg:text-5xl font-bold text-black my-2">Light Panel</h3>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 uppercase">Ceiling Mounted</h2>
                        </div>

                        <div className="max-w-6xl mx-auto my-12 px-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                {/* Left Side - Bandwidth Buttons */}
                                <div className="space-y-4 flex flex-col items-center">
                                    {["75Mbps", "80Mbps"].map((speed, index) => (
                                        <div
                                            key={index}
                                            className="px-6 py-2 rounded-full shadow-md border border-white/30 bg-white/10 backdrop-blur-lg font-semibold text-sm text-center w-40"
                                        >
                      <span style={{ color: "#95C149" }}>
                        Upto <span className="font-bold">{speed}</span>
                      </span>
                                            <br />
                                            <span className="text-xs text-gray-100">Bandwidth</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Center - Device Image */}
                                <div className="flex justify-center">
                                    <div className="relative w-[200px] h-[300px]">
                                        <Image src="/images/light.png" alt="NavOcular Light Panel" fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Right Side - Range & Angle Buttons */}
                                <div className="space-y-4 flex flex-col items-center">
                                    {["4m", "60°"].map((spec, index) => (
                                        <div
                                            key={index}
                                            className="px-6 py-2 rounded-full shadow-md border border-white/30 bg-white/10 backdrop-blur-lg font-semibold text-sm text-center w-40"
                                        >
                      <span style={{ color: "#95C149" }} className="font-bold">
                        {spec}
                      </span>
                                            <br />
                                            <span className="text-xs text-gray-100">{index === 0 ? "Range" : "Angle"}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Light Panel Use Cases - Simple Horizontal Scroll */}
                        <div>
                            <h3 className="text-3xl font-bold text-black mb-8 text-center">USE CASES</h3>

                            <div
                                ref={lightScrollRef}
                                className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {lightUseCases.map((useCase, index) => (
                                    <div key={index} className="flex-shrink-0 w-80 text-center">
                                        <div className="relative h-48 mb-4 overflow-hidden">
                                            <Image
                                                src={useCase.image || "/placeholder.svg"}
                                                alt={useCase.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-3">{useCase.title}</h4>
                                        <p className="text-black text-sm leading-relaxed">{useCase.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Green Pagination Dots */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-full ${index === lightCurrentIndex ? "bg-green-500" : "bg-green-200"}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dongle Section */}
                <section className="py-20">
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-8 leading-tight">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 uppercase">VLC Receiver</h2>
                            <h3 className="text-4xl lg:text-5xl font-bold text-black my-2">Dongle</h3>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 uppercase">Portable Device</h2>
                        </div>

                        {/* Dongle Product Details */}
                        <div className="max-w-6xl mx-auto my-12 px-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                {/* Left Side - Reception Buttons */}
                                <div className="space-y-4 flex flex-col items-center">
                                    {["75Mbps", "80Mbps"].map((speed, index) => (
                                        <div
                                            key={index}
                                            className="px-6 py-2 rounded-full shadow-md border border-white/30 bg-white/10 backdrop-blur-lg font-semibold text-sm text-center w-40"
                                        >
                      <span style={{ color: "#95C149" }}>
                        Upto <span className="font-bold">{speed}</span>
                      </span>
                                            <br />
                                            <span className="text-xs text-gray-100">Reception</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Center - Device Image */}
                                <div className="flex justify-center">
                                    <div className="relative w-[200px] h-[300px]">
                                        <Image src="/images/dongle.png" alt="NavOcular Dongle" fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Right Side - Interface & Compatibility Buttons */}
                                <div className="space-y-4 flex flex-col items-center">
                                    {["USB", "Wireless"].map((connectionType, index) => (
                                        <div
                                            key={index}
                                            className="px-6 py-2 rounded-full shadow-md border border-white/30 bg-white/10 backdrop-blur-lg font-semibold text-sm text-center w-40"
                                        >
                      <span style={{ color: "#95C149" }} className="font-bold">
                        {connectionType}
                      </span>
                                            <br />
                                            <span className="text-xs text-gray-100">{index === 0 ? "Interface" : "Compatibility"}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Dongle Use Cases - Simple Horizontal Scroll */}
                        <div>
                            <h3 className="text-3xl font-bold text-black mb-8 text-center">USE CASES</h3>

                            <div
                                ref={dongleScrollRef}
                                className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {dongleUseCases.map((useCase, index) => (
                                    <div key={index} className="flex-shrink-0 w-80 text-center">
                                        <div className="relative h-48 mb-4 overflow-hidden">
                                            <Image
                                                src={useCase.image || "/placeholder.svg"}
                                                alt={useCase.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h4 className="text-xl font-bold text-black mb-3">{useCase.title}</h4>
                                        <p className="text-black text-sm leading-relaxed">{useCase.description}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Green Pagination Dots */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {[0, 1].map((index) => (
                                    <div
                                        key={index}
                                        className={`w-3 h-3 rounded-full ${index === dongleCurrentIndex ? "bg-green-500" : "bg-green-200"}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

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
