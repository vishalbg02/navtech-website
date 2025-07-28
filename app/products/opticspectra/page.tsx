"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

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
            image: "/images/op2.jpg",
        },
        {
            title: "Event Connectivity",
            description:
                "Delivers instant gigabit wireless access for temporary setups like concerts or exhibitions, bypassing trenching delays and eliminating reliance on congested RF bands.",
            image: "/images/op3.jpg",
        },
        {
            title: "Urban Connectivity",
            description:
                "Serves as a scalable alternative to fiber in cities—linking rooftops and buildings without civil work, spectrum constraints, or interference issues.",
            image: "/images/op4.jpg",
        },
    ]

    const supremeUseCases = [
        {
            title: "Army",
            description:
                "Enables high-bandwidth, secure communication between mobile ground units, command posts, and surveillance assets. PAT-enabled optical links remain aligned in motion and undetectable by Electronic Warfare Systems (EWS).",
            image: "/images/op7.jpg",
        },
        {
            title: "Navy",
            description:
                "Provides ship-to-ship and ship-to-shore communication with zero RF signature. Integrated PAT ensures stable laser connectivity on moving vessels, delivering stealthy, interference-free operation beyond the reach of EWS.",
            image: "/images/op8.jpg",
        },
        {
            title: "Air Force",
            description:
                "Supports aircraft-to-aircraft and airborne-to-ground data exchange with real-time throughput. PAT integration compensates for speed and altitude shifts, ensuring continuity without RF traceable signals.",
            image: "/images/op9.jpg",
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
                {/* About OpticSpectra Section */}
                <section className="flex flex-col items-center gap-6 w-[1125px]">
                    <div className="flex flex-col items-center gap-[14px] w-full">
                        <div className="flex flex-col items-center">
                            <h2 className="text-[22px] font-bold leading-[23px] text-center uppercase text-black">
                                ABOUT
                            </h2>
                            <div className="relative mt-[5px] flex items-center justify-center w-[400px] h-[46px] bg-[#95C149]">
        <span className="text-[46px] font-bold text-white uppercase z-10 leading-[56px]">
          OPTICSPECTRA
        </span>
                            </div>
                        </div>
                        <p className="text-[20px] font-light leading-6 text-center text-black">
                            Intelligent Optical Links for Dynamic Network Demands
                        </p>
                    </div>
                    <p className="text-[18px] font-light leading-[22px] text-center text-[#565656]">
                        Nav Wireless Technologies offers Free Space Optics (FSO) solutions with adaptive bandwidth capabilities,
                        enabling optical links to automatically adjust data rates in response to changing environmental conditions
                        such as fog, rain, or signal degradation. This ensures continuous, optimized performance without
                        compromising link stability or security.<br/><br/> Ideal for mission-critical, high-availability applications,
                        adaptive FSO systems support real-time bandwidth scaling, making them suitable for smart cities, defense
                        networks, disaster zones, and enterprise backhaul where reliability and flexibility are essential.
                    </p>
                </section>

                {/* Neo Section */}
                <section className="flex flex-col items-center gap-12 w-full">
                    <div className="flex flex-col items-center w-full">
                        {/* Neo Product Diagram with Overlaid Text */}
                        <div className="relative w-[1200px] h-[1200px]">
                            {/* Overlaid Header Text */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center w-full z-10">
                                <h2
                                    className="text-[68px] font-bold leading-[70px] text-center uppercase text-transparent w-full mb-2"
                                    style={{ WebkitTextStroke: "1px #AFAFAF" }}
                                >
                                    DEPARTMENT OF TELECOMMUNICATIONS
                                </h2>

                                <h3 className="text-[52px] font-bold leading-[55px] text-center text-black mb-2">
                                    Versions - Neo
                                </h3>

                                <h2
                                    className="text-[68px] font-bold leading-[70px] text-center uppercase text-transparent w-[1199px] mb-4"
                                    style={{ WebkitTextStroke: "1px #AFAFAF" }}
                                >
                                    TEC CERTIFIED
                                </h2>
                            </div>
                            {/* Center Image */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[436px] h-[688px]">
                                <Image
                                    src="/images/op1.png?height=688&width=436&text=OpticSpectra+Neo+Device"
                                    alt="OpticSpectra Neo Device"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Left Side - Bandwidth Specs */}
                            <div className="absolute left-[120px] top-[329px] flex items-center gap-5">
                                <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                                    <div className="text-[20px] font-bold leading-6 text-center text-black">Upto 1Gbps</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Bandwidth</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[100px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                            </div>

                            <div className="absolute left-[120px] top-[479px] flex items-center gap-5">
                                <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                                    <div className="text-[20px] font-bold leading-6 text-center text-black">Upto 1Gbps</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Bandwidth</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[200px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                            </div>

                            <div className="absolute left-[120px] top-[638px] flex items-center gap-5">
                                <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                                    <div className="text-[20px] font-bold leading-6 text-center text-black">Upto 10Gbps</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Bandwidth</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[180px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                            </div>

                            <div className="absolute left-[120px] top-[815px] flex items-center gap-5">
                                <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                                    <div className="text-[20px] font-bold leading-6 text-center text-black">Upto 10Gbps</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Bandwidth</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[250px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                            </div>

                            {/* Right Side - Distance Specs */}
                            <div className="absolute right-[120px] top-[268px] flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-[260px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                                    <div className="text-[37.8294px] font-bold leading-[46px] text-center text-black">10km</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Distance</div>
                                </div>
                            </div>

                            <div className="absolute right-[120px] top-[407px] flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-[280px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                                    <div className="text-[37.8294px] font-bold leading-[46px] text-center text-black">5km</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Distance</div>
                                </div>
                            </div>

                            <div className="absolute right-[120px] top-[565px] flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-[223px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                                    <div className="text-[37.8294px] font-bold leading-[46px] text-center text-black">5km</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Distance</div>
                                </div>
                            </div>

                            <div className="absolute right-[120px] top-[723px] flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-[180px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                                    <div className="text-[37.8294px] font-bold leading-[46px] text-center text-black">3km</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Distance</div>
                                </div>
                            </div>
                        </div>

                        {/* Neo Use Cases */}
                        <div className="flex flex-col justify-center items-center gap-[34px] w-[1199px]">
                            <h3 className="text-[36px] font-bold leading-[44px] uppercase text-black">USE CASES</h3>
                            <div className="flex items-center gap-[61px] w-full">
                                {neoUseCases.map((useCase, index) => (
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

                    {/* Reference Image */}
                    <div className="w-full h-[436px] relative">
                        <Image
                            src="/images/op5.png?height=436&width=1440&text=Reference+Image+for+Govt"
                            alt="Reference Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* Supreme Section */}
                <section className="flex flex-col items-center gap-12 w-full">
                    <div className="flex flex-col items-center w-full">
                        {/* Supreme Product Diagram with Overlaid Text */}
                        <div className="relative w-[1200px] h-[910px]">
                            {/* Overlaid Header Text */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center w-full z-10">
                                <h2
                                    className="text-[68px] font-bold leading-[70px] text-center uppercase text-transparent w-full mb-2"
                                    style={{ WebkitTextStroke: "1px #AFAFAF" }}
                                >
                                    MIL GRADE
                                </h2>

                                <h3 className="text-[52px] font-bold leading-[55px] text-center text-black mb-2">Versions - Supreme</h3>
                                <h2
                                    className="text-[68px] font-bold leading-[70px] text-center uppercase text-transparent w-[1199px] mb-4"
                                    style={{ WebkitTextStroke: "1px #AFAFAF" }}
                                >
                                    JSS 55555 CERTIFIED
                                </h2>
                            </div>
                            {/* Center Device Image */}
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[764px] h-[611px]">
                                <Image
                                    src="/images/op6.png?height=611&width=764&text=OpticSpectra+Supreme+Device"
                                    alt="OpticSpectra Supreme Device"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Left Side - Bandwidth Specs */}
                            <div className="absolute left-[180px] top-[299px] flex items-center gap-5">
                                <div className="flex flex-col items-center gap-[0.88px] w-[140px]">
                                    <div className="text-[20px] font-bold leading-6 text-center text-black">Upto 1Gbps</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Bandwidth</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[176px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                            </div>

                            <div className="absolute left-[120px] top-[449px] flex items-center gap-5">
                                <div className="flex flex-col items-center gap-[0.88px] w-[140px]">
                                    <div className="text-[20px] font-bold leading-6 text-center text-black">Upto 1Gbps</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Bandwidth</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[267px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                            </div>

                            <div className="absolute left-[232px] top-[608px] flex items-center gap-5">
                                <div className="flex flex-col items-center gap-[0.88px] w-[158px]">
                                    <div className="text-[20px] font-bold leading-6 text-center text-black">Upto 40Gbps</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Bandwidth</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-[222px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                            </div>

                            {/* Right Side - Distance Specs */}
                            <div className="absolute right-[120px] top-[377px] flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-[290px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                                    <div className="text-[37.8294px] font-bold leading-[46px] text-center text-black">10km</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Distance</div>
                                </div>
                            </div>

                            <div className="absolute right-[120px] top-[535px] flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-[223px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                                    <div className="text-[37.8294px] font-bold leading-[46px] text-center text-black">20km</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Distance</div>
                                </div>
                            </div>

                            <div className="absolute right-[120px] top-[693px] flex items-center gap-5">
                                <div className="flex items-center gap-2">
                                    <div className="w-[206px] h-0 border-t border-dashed border-[#95C149]"></div>
                                    <div className="w-[10px] h-[10px] rounded-full bg-[#95C149]"></div>
                                </div>
                                <div className="flex flex-col items-center gap-[0.88px] w-[95.96px]">
                                    <div className="text-[37.8294px] font-bold leading-[46px] text-center text-black">1km</div>
                                    <div className="text-[21.279px] font-light leading-[26px] text-center text-black">Distance</div>
                                </div>
                            </div>

                        </div>

                        {/* Supreme Use Cases */}
                        <div className="flex flex-col justify-center items-center gap-[34px] w-[1199px]">
                            <h3 className="text-[36px] font-bold leading-[44px] uppercase text-black">USE CASES</h3>
                            <div className="flex items-start gap-[61px] w-full">
                                {supremeUseCases.map((useCase, index) => (
                                    <div key={index} className="flex flex-col gap-[17px] w-[359px] bg-white">
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
                                        className={`w-2 h-2 rounded-full ${index === supremeCurrentIndex ? "bg-[#95C149]" : "bg-[#D9D9D9]"}`}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Reference Image for Defense - No spacing */}
            <div className="w-full h-[700px] relative">
                <Image
                    src="/images/op10.jpg?height=659&width=1440&text=Reference+Image+for+Defense"
                    alt="Reference Image for Defense"
                    fill
                    className="object-cover"
                />
            </div>
        </div>
    )
}