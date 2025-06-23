"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import {
    ArrowRight,
    Calendar,
    Eye,
    MessageCircle,
    Newspaper,
    Award,
    Globe,
    Users,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"

export default function InsightsPage() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])
    const blogScrollRef = useRef<HTMLDivElement>(null)
    const newsScrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            // Hero animations
            const heroTl = gsap.timeline({ delay: 0.5 })

            heroTl
                .fromTo(".hero-title", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
                .fromTo(".hero-subtitle", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8")
                .fromTo(
                    ".hero-description",
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                    "-=0.6",
                )

            // Section animations
            sectionsRef.current.forEach((section, index) => {
                if (!section) return

                gsap.fromTo(
                    section.querySelectorAll(".animate-in"),
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    },
                )
            })

            // Floating animations
            gsap.to(".floating-element", {
                y: "+=15",
                duration: 4,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.3,
            })

            // Stats counter animation
            gsap.fromTo(
                ".stat-number",
                { textContent: 0 },
                {
                    textContent: (i, target) => target.getAttribute("data-value"),
                    duration: 2,
                    ease: "power2.out",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: ".stats-section",
                        start: "top 80%",
                    },
                },
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -400, behavior: "smooth" })
        }
    }

    const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 400, behavior: "smooth" })
        }
    }

    const blogPosts = [
        {
            title: "Data Transmission Using Visible Light in Li-Fi Technology",
            excerpt:
                "In today's digital world, internet speed and secure data transfer are more important than ever. Li-Fi is an emerging technology that promises to revolutionize how we connect.",
            date: "June 10, 2025",
            readTime: "5 min read",
            comments: 0,
            category: "Technology",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            title: "How LiFi Is Transforming Smart Homes",
            excerpt:
                "Smart homes are no longer a thing of the future—they're here, and they're evolving fast. From voice assistants to automated lighting systems, the integration of technology into our living spaces is becoming seamless.",
            date: "May 21, 2025",
            readTime: "7 min read",
            comments: 0,
            category: "Smart Homes",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            title: "The Future Of Li-Fi Technology: Key Trends And Predictions For 2025",
            excerpt:
                "As we step further into the digital age, wireless communication is evolving rapidly. One of the most exciting developments in this space is Li-Fi technology.",
            date: "May 19, 2025",
            readTime: "6 min read",
            comments: 0,
            category: "Future Tech",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            title: "LiFi vs WiFi: The Ultimate Comparison Guide",
            excerpt:
                "Understanding the key differences between LiFi and WiFi technologies, their advantages, limitations, and ideal use cases for modern connectivity solutions.",
            date: "April 15, 2025",
            readTime: "8 min read",
            comments: 12,
            category: "Comparison",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
        {
            title: "Industrial Applications of Visible Light Communication",
            excerpt:
                "Exploring how VLC technology is revolutionizing industrial automation, manufacturing processes, and creating safer work environments.",
            date: "March 28, 2025",
            readTime: "9 min read",
            comments: 8,
            category: "Industrial",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        },
    ]

    const newsHighlights = [
        {
            title: "LiFi Technology Powers Internet at Nadabet Along Indo-Pak Border",
            source: "Indian Express, Divya Bhaskar",
            date: "May 23, 2022",
            description:
                "Nav Wireless Technologies successfully deploys LiFi infrastructure at strategic border locations, providing secure and reliable internet connectivity.",
            category: "Border Security",
        },
        {
            title: "Gotri Hospital Equipped with Li-Fi Technology",
            source: "Gujarat Samachar, Times of India",
            date: "April 18, 2022",
            description:
                "Revolutionary healthcare connectivity solution implemented at Gotri Hospital, enabling interference-free medical device communication.",
            category: "Healthcare",
        },
        {
            title: "Ahmedabad Firm Powers Internet with LiFi at Nadabet",
            source: "Avinashnair",
            date: "May 20, 2022",
            description:
                "Local innovation makes global impact as Nav Wireless Technologies brings cutting-edge LiFi solutions to critical infrastructure.",
            category: "Innovation",
        },
    ]

    const stats = [
        { label: "Media Mentions", value: 50, suffix: "+" },
        { label: "Successful Deployments", value: 25, suffix: "+" },
        { label: "Industry Awards", value: 8, suffix: "" },
        { label: "Research Papers", value: 15, suffix: "+" },
    ]

    return (
        <div
            ref={containerRef}
            className="min-h-screen relative"
            style={{
                backgroundImage: "url('/images/nav-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            <Navbar />

            {/* Background Effects */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-900/10 to-black/20"></div>
                <div className="floating-element absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"></div>
                <div className="floating-element absolute bottom-1/3 left-1/4 w-80 h-80 bg-gray-500/15 rounded-full blur-3xl"></div>
                <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-700/10 rounded-full blur-3xl"></div>
            </div>

            <main className="relative z-10">
                {/* Hero Section */}
                <section ref={heroRef} className="pt-32 pb-20">
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-16">
                            <h1 className="hero-title text-6xl lg:text-8xl font-bold text-green-400 mb-6">Insights & Media</h1>
                            <h2 className="hero-subtitle text-3xl lg:text-4xl font-semibold text-white mb-8">
                                Leading the Future of Optical Wireless Communication
                            </h2>
                            <p className="hero-description text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                                Discover the latest insights, industry recognition, and media coverage showcasing Nav Wireless
                                Technologies' pioneering work in LiFi and optical wireless communication solutions across India and
                                beyond.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[0] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm stats-section"
                >
                    <div className="container mx-auto px-8">
                        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {stats.map((stat, index) => (
                                <Card
                                    key={index}
                                    className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300"
                                >
                                    <CardContent className="p-8 text-center">
                                        <div className="text-4xl font-bold text-green-400 mb-2">
                      <span className="stat-number" data-value={stat.value}>
                        0
                      </span>
                                            <span>{stat.suffix}</span>
                                        </div>
                                        <p className="text-white font-semibold">{stat.label}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Media Coverage Section */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[1] = el
                    }}
                    className="py-20"
                >
                    <div className="container mx-auto px-8">
                        <div className="animate-in mb-16">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white">Media Coverage</h2>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollLeft(newsScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollRight(newsScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div
                                ref={newsScrollRef}
                                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {newsHighlights.map((news, index) => (
                                    <Card
                                        key={index}
                                        className="flex-shrink-0 w-96 bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/50">
                                                    {news.category}
                                                </Badge>
                                                <Newspaper className="w-5 h-5 text-green-400" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{news.title}</h3>
                                            <p className="text-green-100 text-sm mb-4 line-clamp-3">{news.description}</p>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-green-200">{news.source}</span>
                                                <span className="text-green-300">{news.date}</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Newspaper Clippings */}
                        <div className="animate-in grid md:grid-cols-2 gap-8 mb-16">
                            <Card className="bg-black/70 backdrop-blur-xl border-green-500/30 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative h-96">
                                        <Image
                                            src="/images/media-coverage-1.png"
                                            alt="Media Coverage - LiFi Technology at Nadabet Border"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-white font-bold text-lg mb-2">Border Security Implementation</h3>
                                            <p className="text-green-100 text-sm">
                                                LiFi technology deployed at strategic Indo-Pak border locations
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-black/70 backdrop-blur-xl border-green-500/30 overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="relative h-96">
                                        <Image
                                            src="/images/media-coverage-2.png"
                                            alt="Media Coverage - Gotri Hospital LiFi Implementation"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-white font-bold text-lg mb-2">Healthcare Innovation</h3>
                                            <p className="text-green-100 text-sm">Revolutionary LiFi deployment in medical facilities</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Latest Insights & Blog Posts */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[2] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <div className="animate-in">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white">Latest Insights</h2>
                                <div className="flex space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollLeft(blogScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => scrollRight(blogScrollRef)}
                                        className="bg-black/80 border-green-500/50 text-white hover:bg-black/90 hover:border-green-400"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            <div
                                ref={blogScrollRef}
                                className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {blogPosts.map((post, index) => (
                                    <Card
                                        key={index}
                                        className="flex-shrink-0 w-80 bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 overflow-hidden group hover:bg-black/90"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={post.image || "/placeholder.svg"}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/50">
                                                    {post.category}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                                            <p className="text-green-100 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                            <div className="flex items-center justify-between text-sm text-green-200 mb-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{post.date}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <Eye className="w-4 h-4" />
                                                        <span>{post.readTime}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <MessageCircle className="w-4 h-4" />
                                                    <span>{post.comments}</span>
                                                </div>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full bg-transparent border-green-500/50 text-green-400 hover:bg-green-500/10"
                                            >
                                                Read More <ExternalLink className="w-4 h-4 ml-2" />
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industry Recognition */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[3] = el
                    }}
                    className="py-20"
                >
                    <div className="container mx-auto px-8">
                        <h2 className="animate-in text-4xl lg:text-5xl font-bold text-center text-white mb-16">
                            Industry Recognition
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-4">Innovation Awards</h3>
                                    <p className="text-green-100">
                                        Recognized for pioneering LiFi technology implementations in critical infrastructure and healthcare
                                        sectors
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
                                    <p className="text-green-100">
                                        Contributing to international standards and best practices in optical wireless communication
                                        technology
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-4">Industry Leadership</h3>
                                    <p className="text-green-100">
                                        Leading industry forums and collaborations to advance the adoption of LiFi technology across sectors
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-black/20 backdrop-blur-sm">
                    <div className="container mx-auto px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Stay Updated with Our Latest Insights</h2>
                        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
                            Subscribe to our newsletter and follow our journey as we continue to innovate and lead the optical
                            wireless communication revolution across industries and applications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4">
                                Subscribe to Newsletter <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-black text-white border-green-500/50 hover:bg-gray-800 px-8 py-4"
                            >
                                View All Insights
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
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
      `}</style>
        </div>
    )
}
