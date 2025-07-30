"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

export default function OpticSpectraPage() {
    const [neoCurrentIndex, setNeoCurrentIndex] = useState(0)

    const navocularUseCases = [
        {
            title: "Smart Buildings",
            description:
                "Empowers seamless user experience by using existing lighting for high-speed indoor connectivity, reducing dependence on traditional networks and enhancing energy-efficient communication.",
            image: "/images/op2.jpg",
        },
        {
            title: "6G-Ready Optical Layer Integration",
            description:
                "Acts as a foundational layer for 6G architecture by enabling distributed, low-latency optical cells indoors leveraging visible and IR light for localized, energy-efficient, and ultra-secure mesh-based connectivity.",
            image: "/images/op3.jpg",
        },
        {
            title: "5G Indoor Offloading & Edge Zones",
            description:
                "Supports ultra-fast, short-range wireless links within high-density indoor zones (airports, malls, offices), offloading traffic from congested 5G small cells and enhancing network capacity with zero-spectrum use.",
            image: "/images/op4.jpg",
        },
    ]

    // Auto scroll functionality
    useEffect(() => {
        const neoInterval = setInterval(() => {
            setNeoCurrentIndex((prev) => (prev >= 2 ? 0 : prev + 1))
        }, 5000)

        const supremeInterval = setInterval(() => {
            setSupremeCurrentIndex((prev) => (prev >= 2 ? 0 : prev + 1))
        }, 5000)

        return () => {
            clearInterval(neoInterval)
            clearInterval(supremeInterval)
        }
    }, [])

    return (
        <div
            className="relative min-h-screen bg-white"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
            {/* Video Section */}
            <section className="relative w-full h-screen bg-[#E5E5E5] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-[64px] font-bold leading-[77px] text-black mb-6">Video of The product</h1>
                    <div className="relative w-[78px] h-[78px] mx-auto">
                        <div className="absolute inset-0 bg-white/40 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                </div>
            </section>

            {/* Main Content Container */}
            <div className="flex flex-col items-center gap-[120px] py-[120px]">
                {/* About NavOcular Section */}
                <section className="flex flex-col items-center gap-6 w-[1125px]">
                    <div className="flex flex-col items-center gap-[14px] w-full">
                        <div className="flex flex-col items-center">
                            <h2 className="text-[22px] font-bold leading-[23px] text-center uppercase text-black">
                                ABOUT
                            </h2>
                            <div className="relative mt-[5px] flex items-center justify-center w-[400px] h-[46px] bg-[#95C149]">
        <span className="text-[46px] font-bold text-white uppercase z-10 leading-[56px]">
          NavOcular
        </span>
                            </div>
                        </div>
                    </div>
                    <p className="text-[18px] font-light leading-[22px] text-center text-[#565656]">
                        Nav Ocular leverages Visible Light Communication (VLC) using invisible infrared (IR) light to enable secure, high-speed wireless communication without relying on traditional RF spectrum. Designed with a mesh network topology, Nav Ocular allows multiple IR nodes to seamlessly connect, route data intelligently, and self-heal in case of link disruption, ensuring reliable and scalable connectivity across complex environments.<br/><br/> Ideal for smart buildings, industrial floors, medical facilities, and EMI-sensitive zones, Nav Ocular delivers low-latency, interference-free communication with enhanced security, making it a future-ready solution for modern wireless infrastructure.
                    </p>
                </section>

                {/* Reference Image */}
                <div className="w-full h-[436px] relative">
                    <Image
                        src="/images/op5.png?height=436&width=1440&text=Reference+Image+for+Govt"
                        alt="Reference Image"
                        fill
                        className="object-cover"
                    />
                </div>

                <section className="py-[120px] relative bg-white">
                    <div className="max-w-[1440px] mx-auto relative h-[700px]">
                        {/* NavOcular Light Device - Top Center */}
                        <div className="absolute w-[400px] h-[200px] left-1/2 transform -translate-x-1/2 top-[20px]">
                            <img
                                src="/images/nav1.png"
                                alt="NavOcular Light Device"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* NavOcular Dongle - Bottom Left */}
                        <div className="absolute w-[300px] h-[200px] left-[-600px] top-[620px]">
                            <img
                                src="/images/nav2.png"
                                alt="NavOcular Dongle"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="absolute w-[200px] h-0 left-[220px] top-[130px] border-t border-dashed border-[#95C149]"></div>

                        {/* Vertical dashed line */}
                        <div className="absolute w-0 h-[200px] left-[420px] top-[130px] border-l border-dashed border-[#95C149]"></div>

                        {/* Dot at the bottom of the line */}
                        <div className="absolute w-[8px] h-[8px] rounded-full bg-[#95C149] left-[416px] top-[330px]"></div>

                        <div className="absolute w-[200px] h-0 left-[-450px] top-[130px] border-t border-dashed border-[#95C149]"></div>

                        {/* Vertical dashed line (left side) */}
                        <div className="absolute w-0 h-[200px] left-[-450px] top-[130px] border-l border-dashed border-[#95C149]"></div>

                        {/* Dot at the bottom of the line */}
                        <div className="absolute w-[8px] h-[8px] rounded-full bg-[#95C149] left-[-454px] top-[330px]"></div>



                        {/* Horizontal dashed line from dongle to right side */}
                        <div className="absolute w-[520px] h-0 left-[-230px] top-[700px] border-t border-dashed border-[#95C149]"></div>

                        {/* Small dot at end of line */}
                        <div className="absolute w-[8px] h-[8px] rounded-full bg-[#95C149] top-[696px] left-[290px]"></div>


                        {/* Bandwidth Specification - Left */}
                        <div className="absolute left-[330px] top-[350px] flex flex-col items-center gap-1 w-[170px]">
                            <div className="text-[38px] font-bold leading-[46px] text-center text-black">4 Meter</div>
                            <div className="text-[21px] font-light leading-[26px] text-center text-black">Distance</div>
                        </div>

                        {/* Distance Specification - Top Right */}
                        <div className="absolute right-[390px] top-[350px] flex flex-col items-center gap-1 w-[115px]">
                            <div className="text-[38px] font-bold leading-[46px] text-center text-black">75-80Mbps</div>
                            <div className="text-[21px] font-light leading-[26px] text-center text-black">Bandwidth</div>
                        </div>

                        {/* Transmission Angle Specification - Bottom Right */}
                        <div className="absolute right-[-550px] top-[650px] flex flex-col items-center gap-1 w-[177px]">
                            <div className="text-[38px] font-bold leading-[46px] text-center text-black">60 Degree</div>
                            <div className="text-[21px] font-light leading-[26px] text-center text-black">Transmission Angle</div>
                        </div>
                    </div>
                </section>










                {/* Navocular */}
                <section className="flex flex-col items-center gap-20 w-full">
                    <div className="flex flex-col items-center -gap-0 w-full">

                        {/* NavOcular Use Cases */}
                        <div className="flex flex-col justify-center items-center gap-[34px] w-[1199px]">
                            <h3 className="text-[36px] font-bold leading-[44px] uppercase text-black">USE CASES</h3>
                            <div className="flex items-center gap-[61px] w-full">
                                {navocularUseCases.map((useCase, index) => (
                                    <div key={index} className="flex flex-col gap-[17px] w-[359px]">
                                        <div className="w-full h-[259px] bg-[#D9D9D9] relative overflow-hidden">
                                            <Image
                                                src={useCase.image || "/placeholder.svg"}
                                                alt={useCase.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-[10px]">
                                            <h4 className="text-[24px] font-bold leading-[29px] text-black">{useCase.title}</h4>
                                            <p className="text-[18px] font-light leading-[22px] text-[#565656]">{useCase.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-[15px]">
                                {[0, 1, 2].map((index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full ${index === neoCurrentIndex ? "bg-[#95C149]" : "bg-[#D9D9D9]"}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}