"use client"

import { useEffect, useRef } from "react"
import { Award, Users, Building2, ArrowRight, Globe, Zap } from "lucide-react"

export default function PartnershipsSection() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const statsRef = useRef([])
    const sectionsRef = useRef([])
    const cardsRef = useRef([])

    useEffect(() => {
        // Mock GSAP functionality with advanced CSS animations and Intersection Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target

                    // Different animation types based on element class
                    if (element.classList.contains('hero-element')) {
                        element.style.animation = 'heroFadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    } else if (element.classList.contains('stat-card')) {
                        const delay = element.dataset.delay || 0
                        element.style.animation = `statCardAnimation 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`
                    } else if (element.classList.contains('section-header')) {
                        element.style.animation = 'sectionHeaderAnimation 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                    } else if (element.classList.contains('partner-card')) {
                        const delay = element.dataset.delay || 0
                        element.style.animation = `cardSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms forwards`
                    }

                    // Remove observer after animation
                    observer.unobserve(element)
                }
            })
        }, observerOptions)

        // Observe all animated elements
        const animatedElements = containerRef.current?.querySelectorAll(
            '.hero-element, .stat-card, .section-header, .partner-card'
        )
        animatedElements?.forEach(el => observer.observe(el))

        // Continuous floating animations
        const floatingElements = containerRef.current?.querySelectorAll('.floating-element')
        floatingElements?.forEach((el, index) => {
            el.style.animation = `floating ${3 + index * 0.5}s ease-in-out infinite`
            el.style.animationDelay = `${index * 0.2}s`
        })

        // Parallax effect on scroll
        const handleScroll = () => {
            const scrolled = window.pageYOffset
            const parallaxElements = containerRef.current?.querySelectorAll('.parallax-element')

            parallaxElements?.forEach((el, index) => {
                const speed = 0.5 + (index * 0.1)
                el.style.transform = `translateY(${scrolled * speed}px)`
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const members = [
        {
            name: "IEEE Photonics Society",
            logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
            description: "Leading photonics research and innovation with cutting-edge solutions",
            category: "Standards",
            tier: "Premium"
        },
        {
            name: "IEEE Nano",
            logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
            description: "Nanotechnology advancement and international standards development",
            category: "Technology",
            tier: "Premium"
        },
        {
            name: "IEEE Standards",
            logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
            description: "Global technology standards development and certification",
            category: "Standards",
            tier: "Enterprise"
        },
        {
            name: "Bharat 6G",
            logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
            description: "Next-generation wireless technology and infrastructure",
            category: "Innovation",
            tier: "Premium"
        },
        {
            name: "ITU-T",
            logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
            description: "International telecommunication standards and protocols",
            category: "Global",
            tier: "Premium"
        },
    ]

    const research = [
        {
            name: "C-DOT",
            logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
            description: "Telecom technology development and research excellence",
            category: "R&D",
            tier: "Premium"
        },
        {
            name: "IIT Delhi",
            logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop",
            description: "Premier engineering research institute and innovation hub",
            category: "Academic",
            tier: "Premium"
        },
        {
            name: "IIT Guwahati",
            logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop",
            description: "Advanced technology research and development center",
            category: "Academic",
            tier: "Premium"
        },
        {
            name: "AOL",
            logo: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
            description: "Applied optics laboratory and photonics research",
            category: "Research",
            tier: "Enterprise"
        },
        {
            name: "IIT Madras",
            logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
            description: "Innovation and research excellence in technology",
            category: "Academic",
            tier: "Premium"
        },
        {
            name: "C-DAC",
            logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
            description: "Advanced computing development and high-performance solutions",
            category: "Technology",
            tier: "Premium"
        },
        {
            name: "CPPICS",
            logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop",
            description: "Photonics and communication systems research",
            category: "Research",
            tier: "Enterprise"
        },
        {
            name: "ISRO",
            logo: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop",
            description: "Space research organization and satellite technology",
            category: "Space",
            tier: "Premium"
        },
    ]

    const clients = [
        {
            name: "Indian Army",
            logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop",
            description: "Defense communication systems and secure networks",
            category: "Defense",
            tier: "Premium"
        },
        {
            name: "GFGNL",
            logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
            description: "Gas pipeline network solutions and infrastructure",
            category: "Infrastructure",
            tier: "Enterprise"
        },
        {
            name: "Indian Navy",
            logo: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=200&fit=crop",
            description: "Naval communication technology and maritime systems",
            category: "Defense",
            tier: "Premium"
        },
        {
            name: "ITI Limited",
            logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
            description: "Telecommunications equipment and network solutions",
            category: "Telecom",
            tier: "Premium"
        },
        {
            name: "BSNL",
            logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
            description: "National telecom services and digital infrastructure",
            category: "Telecom",
            tier: "Enterprise"
        },
        {
            name: "Indian Railway",
            logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
            description: "Railway communication systems and transport technology",
            category: "Transport",
            tier: "Premium"
        },
        {
            name: "Indian Air Force",
            logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
            description: "Aerospace communication solutions and aviation technology",
            category: "Defense",
            tier: "Premium"
        },
    ]

    const sections = [
        {
            title: "Professional Members",
            subtitle: "Industry-leading organizations driving innovation and setting global standards in technology advancement",
            data: members,
            bgGradient: "from-slate-50 via-blue-50 to-indigo-50",
            primaryColor: "blue",
            icon: Award,
            stats: { count: 5, label: "Professional Partners", growth: "+23%" },
        },
        {
            title: "Research Coalition",
            subtitle: "Academic partnerships fostering breakthrough discoveries and technological advancement across multiple domains",
            data: research,
            bgGradient: "from-indigo-50 via-purple-50 to-violet-50",
            primaryColor: "purple",
            icon: Users,
            stats: { count: 8, label: "Research Partners", growth: "+18%" },
        },
        {
            title: "Esteemed Clients",
            subtitle: "Trusted partners in mission-critical applications across defense, telecommunications, and infrastructure sectors",
            data: clients,
            bgGradient: "from-violet-50 via-pink-50 to-rose-50",
            primaryColor: "pink",
            icon: Building2,
            stats: { count: 7, label: "Enterprise Clients", growth: "+31%" },
        },
    ]

    const getTierColor = (tier) => {
        switch (tier) {
            case 'Premium': return 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
            case 'Enterprise': return 'bg-gradient-to-r from-gray-600 to-gray-700 text-white'
            default: return 'bg-gray-200 text-gray-700'
        }
    }

    return (
        <div
            ref={containerRef}
            className="partnerships-container min-h-screen overflow-hidden relative"
            style={{
                backgroundImage: 'url(/images/nav-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="parallax-element absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200/10 rounded-full blur-3xl floating-element"></div>
                <div className="parallax-element absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-purple-200/10 rounded-full blur-3xl floating-element"></div>
                <div className="parallax-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-pink-200/5 to-indigo-200/5 rounded-full blur-3xl floating-element"></div>
            </div>

            <div className="relative z-10">
                {/* Sections */}
                {sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className={`py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br ${section.bgGradient}/70 backdrop-blur-sm relative overflow-hidden`}>
                        {/* Section Background Animation */}
                        <div className="absolute inset-0 opacity-20">
                            <div className={`floating-element absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 ${
                                section.primaryColor === 'blue' ? 'bg-blue-300/20' :
                                    section.primaryColor === 'purple' ? 'bg-purple-300/20' :
                                        'bg-pink-300/20'
                            } rounded-full blur-2xl`}></div>
                            <div className={`floating-element absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 ${
                                section.primaryColor === 'blue' ? 'bg-blue-400/15' :
                                    section.primaryColor === 'purple' ? 'bg-purple-400/15' :
                                        'bg-pink-400/15'
                            } rounded-full blur-2xl`}></div>
                        </div>

                        <div className="max-w-7xl mx-auto relative z-10">
                            {/* Section Header */}
                            <div className="text-center mb-12 sm:mb-16 section-header opacity-0 transform translate-y-8">
                                <div className={`inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 ${
                                    section.primaryColor === 'blue' ? 'bg-blue-100/80 text-blue-700 border border-blue-200/50' :
                                        section.primaryColor === 'purple' ? 'bg-purple-100/80 text-purple-700 border border-purple-200/50' :
                                            'bg-pink-100/80 text-pink-700 border border-pink-200/50'
                                }`}>
                                    <section.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                                    {section.title}
                                </div>

                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                                    {section.title}
                                </h2>

                                <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
                                    {section.subtitle}
                                </p>
                            </div>

                            {/* Cards Grid - Fully Responsive */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                                {section.data.map((item, index) => (
                                    <div
                                        key={index}
                                        className="partner-card opacity-0 transform translate-y-8 group bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                                        data-delay={index * 100}
                                    >
                                        {/* Tier Badge */}
                                        <div className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-bold mb-3 sm:mb-4 ${getTierColor(item.tier)}`}>
                                            <Zap className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                                            {item.tier}
                                        </div>

                                        {/* Logo */}
                                        <div className="relative w-full h-24 sm:h-28 lg:h-32 mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl bg-gray-50">
                                            <img
                                                src={item.logo}
                                                alt={item.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 flex-1">
                                                    {item.name}
                                                </h3>
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                                            </div>

                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                                                {item.description}
                                            </p>

                                            <div className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                                                section.primaryColor === 'blue' ? 'bg-blue-50/80 text-blue-700' :
                                                    section.primaryColor === 'purple' ? 'bg-purple-50/80 text-purple-700' :
                                                        'bg-pink-50/80 text-pink-700'
                                            }`}>
                                                {item.category}
                                            </div>
                                        </div>

                                        {/* Hover Effect Overlay */}
                                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Section Footer */}
                            <div className="text-center mt-8 sm:mt-12">
                                <div className="text-gray-600 text-xs sm:text-sm">
                                    {section.data.length} active partnerships and growing
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom CSS Animations */}
            <style jsx>{`
                @keyframes heroFadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(2rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes statCardAnimation {
                    from {
                        opacity: 0;
                        transform: translateY(2rem) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                @keyframes sectionHeaderAnimation {
                    from {
                        opacity: 0;
                        transform: translateY(3rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes cardSlideUp {
                    from {
                        opacity: 0;
                        transform: translateY(2rem) rotateX(10deg);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) rotateX(0deg);
                    }
                }

                @keyframes floating {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-10px) rotate(1deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(0deg);
                    }
                    75% {
                        transform: translateY(-10px) rotate(-1deg);
                    }
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                @media (max-width: 640px) {
                    .partnerships-container {
                        overflow-x: hidden;
                    }
                }
            `}</style>
        </div>
    )
}