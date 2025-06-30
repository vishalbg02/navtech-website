"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"

export default function OpticSpectraPage() {
    const neoScrollRef = useRef<HTMLDivElement>(null)
    const supremeScrollRef = useRef<HTMLDivElement>(null)
    const [neoCurrentIndex, setNeoCurrentIndex] = useState(0)
    const [supremeCurrentIndex, setSupremeCurrentIndex] = useState(0)

    const neoUseCases = [
        {
            title: "Rail Network",
            description:
                "Enables high-speed, interference-free links between stations and onboard systems—perfect for tunnels, trackside monitoring, and secure data relay without physical cables.",
            image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
        },
        {
            title: "Event Connectivity",
            description:
                "Delivers instant gigabit wireless access for temporary setups like concerts or exhibitions, bypassing trenching delays and eliminating reliance on congested RF bands.",
            image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop",
        },
        {
            title: "Private Mobile Network",
            description:
                "Ensures low-latency, secure optical backhaul for enterprise 4G/5G networks, in closed-loop industrial or campus environments.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            title: "Mines Connectivity",
            description:
                "Offers robust, dust-tolerant optical links for mining pits and processing facilities where cabling is hazardous and RF signals are often unreliable.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
            title: "EMI Sensitive Restricted Area",
            description:
                "Ideal for electromagnetic-sensitive environments like atomic energy plants and chemical manufacturing units, enabling high-speed communication without generating radio frequency interference.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
        },
        {
            title: "Rural Connectivity",
            description:
                "Bridges the last-mile gap with fiber-grade performance over challenging terrain where laying cables is difficult or economically unviable.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        },
        {
            title: "4G/5G Deployment",
            description:
                "Speeds up backhaul integration in urban and suburban rollouts, reducing spectrum costs and setup times for dense base station networks.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            title: "SWAN Connectivity",
            description:
                "Strengthens statewide digital infrastructure by connecting government sites quickly, with high bandwidth and enhanced data security.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
        },
        {
            title: "Urban Connectivity",
            description:
                "Serves as a scalable alternative to fiber in cities—linking rooftops and buildings without civil work, spectrum constraints, or interference issues.",
            image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
        },
    ]

    const supremeUseCases = [
        {
            title: "Army",
            description:
                "Enables high-bandwidth, secure communication between mobile ground units, command posts, and surveillance assets. PAT-enabled optical links remain aligned in motion and undetectable by Electronic Warfare Systems (EWS).",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
        {
            title: "Navy",
            description:
                "Provides ship-to-ship and ship-to-shore communication with zero RF signature. Integrated PAT ensures stable laser connectivity on moving vessels, delivering stealthy, interference-free operation beyond the reach of EWS.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
        },
        {
            title: "Air Force",
            description:
                "Supports aircraft-to-aircraft and airborne-to-ground data exchange with real-time throughput. PAT integration compensates for speed and altitude shifts, ensuring continuity without RF traceable signals.",
            image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=400&h=300&fit=crop",
        },
        {
            title: "Tactical Communication",
            description:
                "Delivers mobile, jam-proof links for field operations, UAVs, and armored platforms. PAT-enabled FSO ensures real-time, directional communication immune to detection or disruption by EWS.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        },
    ]

    // Auto scroll functionality
    useEffect(() => {
        const neoInterval = setInterval(() => {
            if (neoScrollRef.current) {
                const maxIndex = Math.ceil(neoUseCases.length / 3) - 1
                const nextIndex = neoCurrentIndex >= maxIndex ? 0 : neoCurrentIndex + 1
                setNeoCurrentIndex(nextIndex)
                neoScrollRef.current.scrollTo({
                    left: nextIndex * 400 * 3,
                    behavior: "smooth",
                })
            }
        }, 5000)

        const supremeInterval = setInterval(() => {
            if (supremeScrollRef.current) {
                const maxIndex = Math.ceil(supremeUseCases.length / 3) - 1
                const nextIndex = supremeCurrentIndex >= maxIndex ? 0 : supremeCurrentIndex + 1
                setSupremeCurrentIndex(nextIndex)
                supremeScrollRef.current.scrollTo({
                    left: nextIndex * 400 * 3,
                    behavior: "smooth",
                })
            }
        }, 5000)

        return () => {
            clearInterval(neoInterval)
            clearInterval(supremeInterval)
        }
    }, [neoCurrentIndex, supremeCurrentIndex, neoUseCases.length, supremeUseCases.length])

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
                        <Image src="/images/optic_bg.png" alt="OpticSpectra Background" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-white/20"></div>
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">OPTICSPECTRA</h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-black animate-bounce mx-auto" />
                    </div>
                </section>

                {/* About OpticSpectra Section */}
                <section className="py-16 px-8">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-8">ABOUT OPTICSPECTRA</h2>
                        <p className="text-lg lg:text-xl text-black max-w-4xl mx-auto leading-relaxed mb-8">
                            Nav Wireless Technologies offers Free Space Optics (FSO) solutions with adaptive bandwidth capabilities,
                            enabling optical links to automatically adjust data in response to changing environmental conditions such
                            as fog, rain, or signal degradation.
                        </p>
                        <p className="text-lg lg:text-xl text-black max-w-4xl mx-auto leading-relaxed">
                            This ensures continuous, optimized performance without compromising reliability or security, making
                            OpticSpectra ideal for mission-critical applications across civilian and defense sectors.
                        </p>
                    </div>
                </section>

                {/* Full Width Image Section */}
                <section className="w-full h-[300px] relative overflow-hidden">
                    <Image src="/images/optic1.jpg" alt="OpticSpectra Technology" fill className="object-cover" sizes="100vw" />
                </section>

                {/* OpticSpectra Neo Section */}
                <section className="py-20">
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-8 leading-tight">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 uppercase">
                                Department of Telecommunications
                            </h2>
                            <h3 className="text-4xl lg:text-5xl font-bold text-black my-2">Versions - Neo</h3>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 uppercase">TEC Certified</h2>
                        </div>

                        <div className="max-w-6xl mx-auto my-12 px-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                {/* Left Side - Bandwidth Buttons */}
                                <div className="space-y-4 flex flex-col items-center">
                                    {["1Gbps", "1Gbps", "10Gbps", "10Gbps"].map((speed, index) => (
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
                                        <Image src="/images/optic_neo.png" alt="OpticSpectra Neo Device" fill className="object-contain" />
                                    </div>
                                </div>

                                {/* Right Side - Distance Buttons */}
                                <div className="space-y-4 flex flex-col items-center">
                                    {["10km", "5km", "5km", "3km"].map((range, index) => (
                                        <div
                                            key={index}
                                            className="px-6 py-2 rounded-full shadow-md border border-white/30 bg-white/10 backdrop-blur-lg font-semibold text-sm text-center w-40"
                                        >
                      <span style={{ color: "#95C149" }} className="font-bold">
                        {range}
                      </span>
                                            <br />
                                            <span className="text-xs text-gray-100">Distance</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Neo Use Cases - Simple Horizontal Scroll */}
                        <div>
                            <h3 className="text-3xl font-bold text-black mb-8 text-center">USE CASES</h3>

                            <div
                                ref={neoScrollRef}
                                className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {neoUseCases.map((useCase, index) => (
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
                                        className={`w-3 h-3 rounded-full ${index === neoCurrentIndex ? "bg-green-500" : "bg-green-200"}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* OpticSpectra Supreme Section */}
                <section className="py-20">
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-8 leading-tight">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 uppercase">MIL Grade</h2>
                            <h3 className="text-4xl lg:text-5xl font-bold text-black my-2">Versions - Supreme</h3>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-400 uppercase">JSS 55555 certified</h2>
                        </div>

                        {/* Supreme Product Details */}
                        <div className="max-w-6xl mx-auto my-12 px-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                                {/* Left Side - Bandwidth Buttons */}
                                <div className="space-y-4 flex flex-col items-center">
                                    {["1Gbps", "40Gbps"].map((speed, index) => (
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
                                        <Image
                                            src="/images/optic_supreme.png"
                                            alt="OpticSpectra Supreme Device"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Right Side - Distance Buttons */}
                                <div className="space-y-4 flex flex-col items-center">
                                    {["10km", "20km"].map((range, index) => (
                                        <div
                                            key={index}
                                            className="px-6 py-2 rounded-full shadow-md border border-white/30 bg-white/10 backdrop-blur-lg font-semibold text-sm text-center w-40"
                                        >
                      <span style={{ color: "#95C149" }} className="font-bold">
                        {range}
                      </span>
                                            <br />
                                            <span className="text-xs text-gray-100">Distance</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Supreme Use Cases - Simple Horizontal Scroll */}
                        <div>
                            <h3 className="text-3xl font-bold text-black mb-8 text-center">USE CASES</h3>

                            <div
                                ref={supremeScrollRef}
                                className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {supremeUseCases.map((useCase, index) => (
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
                                        className={`w-3 h-3 rounded-full ${
                                            index === supremeCurrentIndex ? "bg-green-500" : "bg-green-200"
                                        }`}
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
