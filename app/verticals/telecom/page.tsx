"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TelecomPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section
                className="h-screen relative flex items-center pt-0"
                style={{
                    backgroundImage:
                        "url('/images/tele1.jpg?height=1080&width=1920&text=Industrial+Equipment')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-75" />
                <div className="relative z-10 max-w-[1440px] mx-auto px-4 lg:px-[120px] w-full">
                    <div className="max-w-2xl">
                        <h1 className="text-6xl lg:text-8xl font-bold uppercase leading-tight text-white mb-4">
                            Telecom
                        </h1>
                        <p className="text-xl lg:text-2xl font-light text-white">
                            Connecting Enterprises, Homes, and Cities with <br/>Light Speed Precision.
                        </p>
                    </div>
                </div>
            </section>


            {/* Next-Gen Optical Wireless Section */}
            <section className="py-16 px-8">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-black mb-6 font-manrope">
                        Next-Gen Optical Wireless
                    </h2>
                    <p className="text-lg font-light text-gray-600 leading-[22px] font-anton">
                        Revolutionizing telecommunications with cutting-edge FSO and LiFi technologies.
                        Ultra-fast, license-free, fiberless solutions for the 5G and 6G era.
                    </p>
                </div>
            </section>


            {/* OpticSpectra Section */}
            <section className="py-10 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left Content */}
                        <div className="lg:w-1/2">
                            <div className="mb-6">
                                <p className="text-base font-light text-black mb-3">Ultra Fast • License-Free • Fiberless</p>
                                <h3 className="text-3xl font-bold text-black mb-4">OpticSpectra</h3>
                                <p className="text-base font-light text-gray-600 leading-[22px]">
                                    Conventional FSO systems have long been limited by environmental sensitivity and link instability.
                                    NavTech's advanced FSO architecture redefines this paradigm, delivering a deterministic optical
                                    wireless transport layer with guaranteed performance.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: 'Phase Correction', desc: 'Real-time compensation technology' },
                                    { title: 'Beam Steering', desc: 'Adaptive environmental adjustment' },
                                    { title: 'Sub-ms Response', desc: 'Lightning-fast alignment correction' },
                                    { title: 'Weather Proof', desc: 'No performance loss in conditions' },
                                    { title: '5G/6G Ready', desc: 'Built for next-gen backhaul' },
                                    { title: 'Zero Infrastructure', desc: 'No fiber or trenching required' }
                                ].map((item, i) => (
                                    <div key={i} className="border border-[#95C149] bg-[#95C149]/10 p-5 rounded h-[100px] flex flex-col justify-between">
                                        <h4 className="text-base font-bold text-black">{item.title}</h4>
                                        <p className="text-sm font-light text-gray-600 leading-[20px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2">
                            <div className="w-full h-[650px] bg-gray-300 rounded">
                                <Image
                                    src="/images/tele2.jpg?height=680&width=519"
                                    alt="Telecom towers"
                                    width={519}
                                    height={680}
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NavOcular Section */}
            <section className="py-10 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Left Image */}
                        <div className="lg:w-1/2">
                            <div className="w-full h-[680px] bg-gray-300 rounded">
                                <Image
                                    src="/images/tele3.jpg?height=680&width=519"
                                    alt="Satellite dishes"
                                    width={519}
                                    height={650}
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2">
                            <div className="mb-6">
                                <p className="text-base font-light text-black mb-3">
                                    Light Fidelity • Seamless Indoor Telecom
                                </p>
                                <h3 className="text-3xl font-bold text-black mb-4">NavOcular</h3>
                                <p className="text-base font-light text-gray-600 leading-[22px]">
                                    Groundbreaking VLC technology using LED light for high-speed, secure wireless data transmission.
                                    Perfect for dense environments where WiFi is congested or RF is restricted, offering uninterrupted
                                    high-capacity data layers.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: 'VLC Technology', desc: 'Visible Light Communication' },
                                    { title: 'High Security', desc: 'Light-contained data transmission' },
                                    { title: 'RF-Free Zones', desc: 'Perfect for restricted environments' },
                                    { title: 'Dual Purpose', desc: 'Lighting + data infrastructure' },
                                    { title: 'Mission Critical', desc: 'Defense, healthcare, aviation ready' },
                                    { title: '6G Zones', desc: 'Future-ready optical wireless' }
                                ].map((item, i) => (
                                    <div key={i} className="border border-[#95C149] bg-[#95C149]/10 p-5 rounded h-[100px] flex flex-col justify-between">
                                        <h4 className="text-base font-bold text-black">{item.title}</h4>
                                        <p className="text-sm font-light text-gray-600 leading-[20px]">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
