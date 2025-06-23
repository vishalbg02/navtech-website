"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
    ArrowRight,
    Users,
    Heart,
    Coffee,
    Award,
    Upload,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    Send,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"

export default function CareersPage() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [formData, setFormData] = useState({
        fullName: "",
        designation: "",
        email: "",
        message: "",
    })

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

            // Social icons animation
            gsap.fromTo(
                ".social-icon",
                { scale: 0, rotation: -180 },
                {
                    scale: 1,
                    rotation: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".social-section",
                        start: "top 80%",
                    },
                },
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        const file = event.dataTransfer.files[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", { ...formData, resume: selectedFile })
    }

    const benefits = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Work-Life Balance",
            description: "We believe in maintaining a healthy balance between professional and personal life.",
        },
        {
            icon: <Coffee className="w-8 h-8" />,
            title: "Flexible Environment",
            description: "Enjoy a relaxed work environment that promotes creativity and innovation.",
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Growth Opportunities",
            description: "Continuous learning and career advancement opportunities for all team members.",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Amazing Team",
            description: "Work alongside passionate professionals who share your vision for innovation.",
        },
    ]

    const socialLinks = [
        { icon: <Facebook className="w-6 h-6" />, name: "Facebook", href: "#" },
        { icon: <Twitter className="w-6 h-6" />, name: "Twitter", href: "#" },
        { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", href: "#" },
        { icon: <Instagram className="w-6 h-6" />, name: "Instagram", href: "#" },
        { icon: <Youtube className="w-6 h-6" />, name: "YouTube", href: "#" },
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
                            <h1 className="hero-title text-6xl lg:text-8xl font-bold text-green-400 mb-6">Join Our Team</h1>
                            <h2 className="hero-subtitle text-3xl lg:text-4xl font-semibold text-green-100 mb-8">
                                Shape the Future of Optical Wireless Communication
                            </h2>
                            <p className="hero-description text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
                                Be part of a revolutionary team that's transforming how the world connects. At Nav Wireless
                                Technologies, we're not just building products – we're creating the future of communication technology.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Life at Navtech Section */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[0] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="animate-in text-4xl lg:text-5xl font-bold text-green-300 mb-8">Life at Navtech</h2>
                            <p className="animate-in text-xl text-green-100 leading-relaxed mb-8">
                                Here at Navtech, we aim to deliver efficiency in the given time frame with an easy mind. Here we have
                                routines that allow us to achieve work-life balance apart from peace of mind. Here we strive to achieve
                                a balanced life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <Card
                                    key={index}
                                    className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90"
                                >
                                    <CardContent className="p-8 text-center">
                                        <div className="text-green-400 mb-4">{benefit.icon}</div>
                                        <h3 className="text-lg font-bold text-green-200 mb-4">{benefit.title}</h3>
                                        <p className="text-green-100 text-sm">{benefit.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application Form Section */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[1] = el
                    }}
                    className="py-20"
                >
                    <div className="container mx-auto px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="animate-in text-4xl lg:text-5xl font-bold text-green-300 mb-6">
                                    Ready to be a part of our amazing team?
                                </h2>
                                <p className="animate-in text-xl text-green-100">Drop your resume here!</p>
                            </div>

                            <Card className="animate-in bg-black/70 backdrop-blur-xl border-green-500/30">
                                <CardContent className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="fullName" className="text-green-200">
                                                    Your Full Name
                                                </Label>
                                                <Input
                                                    id="fullName"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    className="bg-black/50 border-green-500/50 text-green-100 placeholder:text-green-300/50 focus:border-green-400"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="designation" className="text-green-200">
                                                    Your Designation
                                                </Label>
                                                <Input
                                                    id="designation"
                                                    name="designation"
                                                    value={formData.designation}
                                                    onChange={handleInputChange}
                                                    className="bg-black/50 border-green-500/50 text-green-100 placeholder:text-green-300/50 focus:border-green-400"
                                                    placeholder="Enter your desired position"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-green-200">
                                                Email Address
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="bg-black/50 border-green-500/50 text-green-100 placeholder:text-green-300/50 focus:border-green-400"
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="text-green-200">
                                                Your Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="bg-black/50 border-green-500/50 text-green-100 placeholder:text-green-300/50 focus:border-green-400 min-h-[120px]"
                                                placeholder="Tell us about yourself and why you want to join our team"
                                                required
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-green-200">Drop your resume here</Label>
                                            <div
                                                onDrop={handleDrop}
                                                onDragOver={handleDragOver}
                                                className="border-2 border-dashed border-green-500/50 rounded-lg p-8 text-center hover:border-green-400 transition-colors duration-300 cursor-pointer"
                                                onClick={() => fileInputRef.current?.click()}
                                            >
                                                <Upload className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                                <p className="text-green-100 mb-2">
                                                    {selectedFile ? selectedFile.name : "Click to upload or drag and drop your resume"}
                                                </p>
                                                <p className="text-green-200 text-sm">PDF, DOC, DOCX (Max 5MB)</p>
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileSelect}
                                                    className="hidden"
                                                />
                                            </div>
                                        </div>

                                        <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-black">
                                            Send Message <Send className="w-5 h-5 ml-2" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Social Media Section */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[2] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm social-section"
                >
                    <div className="container mx-auto px-8">
                        <div className="text-center mb-12">
                            <h2 className="animate-in text-4xl lg:text-5xl font-bold text-green-300 mb-6">Let's stay connected!</h2>
                            <p className="animate-in text-xl text-green-100 mb-8">
                                Follow our social media channels and have a conversation with us.
                            </p>
                        </div>

                        <div className="flex justify-center space-x-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="social-icon bg-black/70 backdrop-blur-xl border border-green-500/30 hover:border-green-400 p-4 rounded-full transition-all duration-300 hover:bg-black/90 group"
                                >
                                    <div className="text-green-400 group-hover:text-green-300 transition-colors duration-300">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-green-300 mb-8">Ready to Innovate with Us?</h2>
                        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
                            Join a team that's passionate about pushing the boundaries of optical wireless communication technology.
                            Your next career adventure starts here.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black px-8 py-4">
                                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-black text-green-200 border-green-500/50 hover:bg-gray-800 px-8 py-4"
                            >
                                Contact HR Team
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
