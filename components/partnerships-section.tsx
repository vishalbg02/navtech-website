"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function LogosSection() {
    const containerRef = useRef(null)
    const sectionsRef = useRef([])

    const members = [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    ]

    const research = [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop",
    ]

    const clients = [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
    ]

    const sections = [
        {
            title: "Professional Members",
            data: members,
        },
        {
            title: "Research Coalition",
            data: research,
        },
        {
            title: "Esteemed Clients",
            data: clients,
        },
    ]

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            sectionsRef.current.forEach((section, sectionIndex) => {
                const logosContainer = section.querySelector('.logos-container-grid')
                const logos = section.querySelectorAll('.logo-item')
                const logoWidth = logos[0]?.offsetWidth || 200
                const totalWidth = logos.length * logoWidth

                // Duplicate logos for seamless looping
                logosContainer.innerHTML += logosContainer.innerHTML

                // Horizontal scrolling animation
                gsap.to(logosContainer, {
                    x: -totalWidth,
                    duration: logos.length * 2.5,
                    ease: "none",
                    repeat: -1,
                    modifiers: {
                        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
                    }
                })

                // Fade-in/fade-out effect for logos at edges
                logos.forEach((logo, index) => {
                    gsap.to(logo, {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: logo,
                            start: "left right",
                            end: "right left",
                            containerAnimation: gsap.getById(`scroll-${sectionIndex}`),
                            scrub: true,
                            onEnter: () => gsap.to(logo, { opacity: 1, duration: 0.5 }),
                            onLeave: () => gsap.to(logo, { opacity: 0, duration: 0.5 }),
                            onEnterBack: () => gsap.to(logo, { opacity: 1, duration: 0.5 }),
                            onLeaveBack: () => gsap.to(logo, { opacity: 0, duration: 0.5 }),
                        }
                    })

                    // Hover animation
                    logo.addEventListener("mouseenter", () => {
                        gsap.to(logo, {
                            scale: 1.15,
                            y: -10,
                            duration: 0.3,
                            ease: "power2.out",
                        })
                    })
                    logo.addEventListener("mouseleave", () => {
                        gsap.to(logo, {
                            scale: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                        })
                    })
                })

                // Entrance animation for section header
                gsap.from(section.querySelector('.section-header'), {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reset",
                    }
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className="logos-container py-16 relative overflow-hidden bg-gray-100"
        >
            {/* Subtle Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/5 left-1/5 w-48 h-48 bg-green-200/10 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-1/5 right-1/5 w-64 h-64 bg-gray-200/10 rounded-full blur-2xl animate-float delay-500"></div>
            </div>

            <div className="relative z-10">
                {sections.map((section, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        ref={(el) => (sectionsRef.current[sectionIndex] = el)}
                        className="py-12 px-4 sm:px-6 lg:px-8"
                    >
                        <div className="max-w-7xl mx-auto">
                            {/* Section Header */}
                            <div className="section-header text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-black">{section.title}</h2>
                            </div>

                            {/* Logos Scroller */}
                            <div className="overflow-hidden relative">
                                {/* Gradient overlays for fade effect */}
                                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>

                                <div className="logos-container-grid flex flex-row gap-4 sm:gap-6 whitespace-nowrap">
                                    {section.data.map((logo, index) => (
                                        <div
                                            key={index}
                                            className="logo-item inline-block"
                                            style={{ minWidth: '200px' }}
                                        >
                                            <img
                                                src={logo}
                                                alt={`Logo ${index + 1}`}
                                                className="w-full h-24 sm:h-28 lg:h-32 object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom CSS for Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }

                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }

                .delay-500 {
                    animation-delay: 0.5s;
                }

                .logo-item {
                    transition: all 0.3s ease;
                    transform-origin: center center;
                }

                .logos-container-grid {
                    will-change: transform;
                }
            `}</style>
        </div>
    )
}