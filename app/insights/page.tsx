"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import CTASection from "@/components/CTASection";
import Footer from "@/components/footer";

export default function InsightsPage() {
    const [activeTab, setActiveTab] = useState<"media" | "blogs">("media")

    const mediaArticles = [
        {
            title: "LiFi Technology powers internet at Nadabet along Indo-Pak border",
            source: "Indianexpress | DivyaBhaskar | Divyabhaskar",
            images: [
                "/images/ins_m1.png",
                "/images/ins_m2.png",
                "/images/ins_m3.png",
            ],
        },
        {
            title: "Gotri hospital equipped with Li-Fi",
            source: "Gujarat Samachar | Times of India",
            images: [
                "/images/ins_m4.png",
                "/images/ins_m5.png",
                "/images/ins_m6.png",
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
            image: "/images/ins_b1.jpg",
        },
        {
            title: "How LiFi Is Transforming Smart Homes",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "Smart homes are no longer a thing of the future—they're here, and they're evolving fast. From voice assistants...",
            image: "/images/ins_b2.jpg",
        },
        {
            title: "The Future Of Li-Fi Technology: Key Trends And Predictions For 2025",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "As we step further into the digital age, wireless communication is evolving rapidly. One of the most exciting...",
            image: "/images/ins_b3.jpg",
        },
        {
            title: "Data Transmission Using Visible Light In Li-Fi Technology",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "In today's digital world, internet speed and secure data transfer are more important than ever. Li-Fi is an...",
            image: "/images/ins_b4.jpg",
        },
        {
            title: "How LiFi Is Transforming Smart Homes",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "Smart homes are no longer a thing of the future—they're here, and they're evolving fast. From voice assistants...",
            image: "/images/ins_b5.jpg",
        },
        {
            title: "The Future Of Li-Fi Technology: Key Trends And Predictions For 2025",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "As we step further into the digital age, wireless communication is evolving rapidly. One of the most exciting...",
            image: "/images/ins_b6.jpg",
        },
        {
            title: "Data Transmission Using Visible Light In Li-Fi Technology",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "In today's digital world, internet speed and secure data transfer are more important than ever. Li-Fi is an...",
            image: "/images/ins_b7.jpg",
        },
        {
            title: "How LiFi Is Transforming Smart Homes",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "Smart homes are no longer a thing of the future-they're here, and they're evolving fast. From voice assistants...",
            image: "/images/ins_b8.jpg",
        },
        {
            title: "The Future Of Li-Fi Technology: Key Trends And Predictions For 2025",
            date: "June 30, 2025",
            comments: "3 Comments",
            excerpt:
                "As we step further into the digital age, wireless communication is evolving rapidly. One of the most exciting...",
            image: "/images/ins_b9.jpg",
        },
    ]

    return (
        <div
            className="relative min-h-screen"
            style={{
                backgroundColor: "white",
            }}
        >

            <div className="relative z-10">
                <Navbar />

                {/* Hero Section - Full Page */}
                <section className="relative h-screen flex items-center justify-center">

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/ins1.jpg"
                            alt="Hands typing on laptop"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Lightened overlay to make gradient more visible */}
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl">
                            {/* Main title - positioned top left like in the image */}
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                                Insights
                            </h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
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
                                            ? "text-white shadow-md"
                                            : "bg-transparent text-gray-600 hover:text-gray-800"
                                    }`}
                                    style={{
                                        backgroundColor: activeTab === "media" ? "#95C149" : "transparent"
                                    }}
                                >
                                    Media
                                </Button>
                                <Button
                                    onClick={() => setActiveTab("blogs")}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                        activeTab === "blogs"
                                            ? "text-white shadow-md"
                                            : "bg-transparent text-gray-600 hover:text-gray-800"
                                    }`}
                                    style={{
                                        backgroundColor: activeTab === "blogs" ? "#95C149" : "transparent"
                                    }}
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
                                                    <Image
                                                        key={imgIndex}
                                                        src={image || "/placeholder.svg"}
                                                        alt={`Media ${index + 1}-${imgIndex + 1}`}
                                                        width={400}
                                                        height={300}
                                                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 rounded-lg shadow-md"
                                                    />
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
                                        <div key={index} className="overflow-hidden">
                                            <div className="relative h-48 bg-gray-200 rounded-lg overflow-hidden">
                                                <Image
                                                    src={post.image || "/placeholder.svg"}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="pt-6">
                                                <h3 className="text-lg font-bold text-black mb-3 line-clamp-2 leading-tight">{post.title}</h3>
                                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                                    <span>{post.date}</span>
                                                    <span className="mx-2">|</span>
                                                    <span>{post.comments}</span>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                                                <button
                                                    className="font-medium text-sm hover:opacity-80 transition-opacity duration-200"
                                                    style={{ color: "#95C149" }}
                                                >
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
                <CTASection/>
                <Footer/>
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