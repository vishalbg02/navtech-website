"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function InsightsPage() {
    const [activeTab, setActiveTab] = useState<"media" | "blogs">("media")

    const mediaArticles = [
        {
            title: "LiFi Technology powers internet at Nadabet along Indo-Pak border",
            source: "Indianexpress | DivyaBhaskar | Divyabhaskar",
            images: [
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
            ],
        },
        {
            title: "Gotri hospital equipped with Li-Fi",
            source: "Gujarat Samachar | Times of India",
            images: [
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
                "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=200&fit=crop",
            ],
        },
    ]

    const blogPosts = [
        {
            title: "Data Transmission Using Visible Light In Li-Fi Technology",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "In today's digital world, internet speed and secure data transfer are more important than ever. Li-Fi is an...",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        },
        {
            title: "How LiFi Is Transforming Smart Homes",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "Smart homes are no longer a thing of the future—they're here, and they're evolving fast. From voice assistants...",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        },
        {
            title: "The Future Of Li-Fi Technology: Key Trends And Predictions For 2025",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "As we step further into the digital age, wireless communication is evolving rapidly. One of the most exciting...",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        },
        {
            title: "Data Transmission Using Visible Light In Li-Fi Technology",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "In today's digital world, internet speed and secure data transfer are more important than ever. Li-Fi is an...",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        },
        {
            title: "How LiFi Is Transforming Smart Homes",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "Smart homes are no longer a thing of the future—they're here, and they're evolving fast. From voice assistants...",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        },
        {
            title: "The Future Of Li-Fi Technology: Key Trends And Predictions For 2025",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "As we step further into the digital age, wireless communication is evolving rapidly. One of the most exciting...",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
        },
    ]

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
                        <Image src="/images/insights_bg.png" alt="Insights Background" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-white/20"></div>
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">INSIGHTS</h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-black animate-bounce mx-auto" />
                    </div>
                </section>

                {/* Main Content Section with Full Page Background */}
                <section
                    className="min-h-screen py-16 px-8 relative"
                    style={{
                        backgroundImage: "url('/images/nav-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Background overlay for content area */}
                    <div className="absolute inset-0 bg-white/85"></div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        {/* Toggle Buttons */}
                        <div className="flex justify-center mb-12">
                            <div className="flex bg-gray-200 rounded-full p-1">
                                <Button
                                    onClick={() => setActiveTab("media")}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === "media"
                                            ? "bg-green-500 text-white shadow-md"
                                            : "bg-transparent text-gray-600 hover:text-gray-800"
                                    }`}
                                >
                                    Media
                                </Button>
                                <Button
                                    onClick={() => setActiveTab("blogs")}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === "blogs"
                                            ? "bg-green-500 text-white shadow-md"
                                            : "bg-transparent text-gray-600 hover:text-gray-800"
                                    }`}
                                >
                                    Blogs
                                </Button>
                            </div>
                        </div>

                        {/* Media Content */}
                        {activeTab === "media" && (
                            <div className="animate-in">
                                <h2 className="text-5xl font-bold text-black text-center mb-16">MEDIA</h2>
                                <div className="space-y-20">
                                    {mediaArticles.map((article, index) => (
                                        <div key={index} className="max-w-4xl mx-auto">
                                            <h3 className="text-3xl font-bold text-black mb-3">{article.title}</h3>
                                            <p className="text-gray-600 mb-8 text-lg">{article.source}</p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {article.images.map((image, imgIndex) => (
                                                    <div
                                                        key={imgIndex}
                                                        className="relative h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md"
                                                    >
                                                        <Image
                                                            src={image || "/placeholder.svg"}
                                                            alt={`Media ${index + 1}-${imgIndex + 1}`}
                                                            fill
                                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Blogs Content */}
                        {activeTab === "blogs" && (
                            <div className="animate-in">
                                <h2 className="text-5xl font-bold text-black text-center mb-16">BLOGS</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    {blogPosts.map((post, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <div className="relative h-48 bg-gray-200">
                                                <Image
                                                    src={post.image || "/placeholder.svg"}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 leading-tight">{post.title}</h3>
                                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                                    <span>{post.date}</span>
                                                    <span className="mx-2">|</span>
                                                    <span>{post.comments}</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                                                <button className="text-green-500 font-medium text-sm hover:text-green-600 transition-colors duration-200">
                                                    Read More
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>

            <style jsx global>{`
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
                .animate-in {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    )
}
