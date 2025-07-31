"use client"

import { useRef } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function VerticalsSection() {
    const containerRef = useRef(null)
    const router = useRouter()

    const handleLearnMore = (title) => {
        const slug = title.toLowerCase().replace(/ /g, "-")
        router.push(`/verticals/${slug}`)
    }

    const verticals = [
        {
            title: "Government",
            image: "/images/h1.jpg",
        },
        {
            title: "Defence",
            image: "/images/h2.jpg",
        },
        {
            title: "OEM/ODM",
            image: "/images/h3.jpg",
        },
        {
            title: "Consumer",
            image: "/images/h4.jpg",
        },
    ]

    return (
        <section
            ref={containerRef}
            className="relative py-24 min-h-screen flex flex-col bg-white"
        >
            <div className="relative z-10 container mx-auto px-5 mb-16 flex justify-start">
                <div className="text-left max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                        Verticals
                    </h2>
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-stretch">
                    {verticals.map((vertical, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col justify-end rounded-lg overflow-hidden shadow-md h-[370px] cursor-pointer transition-all duration-200 bg-gray-100 hover:scale-[1.025]"
                            onClick={() => handleLearnMore(vertical.title)}
                        >
                            <Image
                                src={vertical.image}
                                alt={vertical.title}
                                fill
                                className="object-cover w-full h-full"
                                priority
                            />
                            {/* gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            <div className="relative z-10 flex items-center justify-between px-6 py-4">
                                <span className="text-white text-xl font-semibold drop-shadow">{vertical.title}</span>
                                <span className="inline-block ml-4 w-7 h-7 rounded-full bg-[#95c149] flex items-center justify-center shadow hover:bg-[#7EA52B] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="white">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7"/>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                /* Custom scrollbar & removal of background elements for card simplicity */
                section {
                    background: #fff;
                }
            `}</style>
        </section>
    )
}