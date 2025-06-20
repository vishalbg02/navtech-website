"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Award, Users, Building2 } from "lucide-react"

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
            bgGradient: "from-slate-50 via-blue-50 to-indigo-50",
            primaryColor: "blue",
            icon: Award,
        },
        {
            title: "Research Coalition",
            data: research,
            bgGradient: "from-indigo-50 via-purple-50 to-violet-50",
            primaryColor: "purple",
            icon: Users,
        },
        {
            title: "Esteemed Clients",
            data: clients,
            bgGradient: "from-violet-50 via-pink-50 to-rose-50",
            primaryColor: "pink",
            icon: Building2,
        },
    ]

    useEffect(() => {
        const ctx = gsap.context(() => {
            sectionsRef.current.forEach((section, sectionIndex) => {
                const logos = section.querySelectorAll('.logo-card')

                // Staggered entrance animation for each section
                gsap.fromTo(
                    logos,
                    {
                        opacity: 0,
                        y: 100,
                        scale: 0.8,
                        rotation: 5,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotation: 0,
                        duration: 1.2,
                        ease: "elastic.out(1, 0.5)",
                        stagger: {
                            each: 0.15,
                            from: "center",
                            grid: "auto",
                            ease: "power2.out",
                        },
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none reset",
                        },
                    }
                )

                // Hover animation for logos
                logos.forEach((logo) => {
                    logo.addEventListener("mouseenter", () => {
                        gsap.to(logo, {
                            scale: 1.1,
                            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                            duration: 0.3,
                            ease: "power2.out",
                        })
                    })
                    logo.addEventListener("mouseleave", () => {
                        gsap.to(logo, {
                            scale: 1,
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            duration: 0.3,
                            ease: "power2.out",
                        })
                    })
                })

                // Continuous floating animation for logos
                gsap.to(logos, {
                    y: -10,
                    duration: 2,
                    yoyo: true,
                    repeat: -1,
                    ease: "sine.inOut",
                    stagger: {
                        each: 0.2,
                        from: "random",
                    },
                })
            })
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className="logos-container min-h-screen relative overflow-hidden"
            style={{
                backgroundImage: 'url(/images/nav-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay for better visibility */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-purple-200/10 rounded-full blur-3xl animate-float-delayed"></div>
            </div>

            <div className="relative z-10">
                {sections.map((section, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        ref={(el) => (sectionsRef.current[sectionIndex] = el)}
                        className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${section.bgGradient}/70 backdrop-blur-sm relative overflow-hidden`}
                    >
                        <div className="max-w-7xl mx-auto relative z-10">
                            {/* Section Header */}
                            <div className="text-center mb-12 sm:mb-16">
                                <div className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 ${
                                    section.primaryColor === 'blue' ? 'bg-blue-100/80 text-blue-700 border border-blue-200/50' :
                                        section.primaryColor === 'purple' ? 'bg-purple-100/80 text-purple-700 border border-purple-200/50' :
                                            'bg-pink-100/80 text-pink-700 border border-pink-200/50'
                                }`}>
                                    <section.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                    {section.title}
                                </div>
                            </div>

                            {/* Logos Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                                {section.data.map((logo, index) => (
                                    <div
                                        key={index}
                                        className="logo-card bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
                                    >
                                        <img
                                            src={logo}
                                            alt={`Logo ${index + 1}`}
                                            className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-xl"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom CSS for Additional Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(-20px);
                    }
                    50% {
                        transform: translateY(0);
                    }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 6s ease-in-out infinite;
                }

                .logo-card {
                    transition: all 0.3s ease;
                    transform-origin: center center;
                }
            `}</style>
        </div>
    )
}