"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, MapPin, Mail, Phone, Send, Building, Clock, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"

export default function ContactPage() {
    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
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

            // Contact cards animation
            gsap.fromTo(
                ".contact-card",
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: ".contact-info-section",
                        start: "top 80%",
                    },
                },
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

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
        console.log("Form submitted:", formData)
    }

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
                            <h1 className="hero-title text-6xl lg:text-8xl font-bold text-green-400 mb-6">Contact Us</h1>
                            <h2 className="hero-subtitle text-3xl lg:text-4xl font-semibold text-green-100 mb-8">
                                Let's Connect and Innovate Together
                            </h2>
                            <p className="hero-description text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
                                Ready to transform your communication infrastructure with cutting-edge optical wireless technology? Get
                                in touch with our team of experts and discover how Nav Wireless Technologies can revolutionize your
                                connectivity solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[0] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm contact-info-section"
                >
                    <div className="container mx-auto px-8">
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Office Location */}
                            <Card className="contact-card bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Building className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-300 mb-4">INDIA Office</h3>
                                    <div className="space-y-2 text-green-100">
                                        <p>C5 - Lift, The First. Behind</p>
                                        <p>ITC Narmada Judges</p>
                                        <p>Bunglow Road, Satellite,</p>
                                        <p>Ahmedabad - 380015</p>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-green-500/30">
                                        <div className="flex items-center justify-center text-green-200">
                                            <MapPin className="w-4 h-4 mr-2" />
                                            <span className="text-sm">Gujarat, India</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Email Contact */}
                            <Card className="contact-card bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Mail className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-300 mb-4">Email Address</h3>
                                    <p className="text-green-100 mb-6">For further inquiry, mail us on</p>
                                    <a
                                        href="mailto:info@navtechno.in"
                                        className="text-green-400 hover:text-green-300 font-semibold text-lg transition-colors duration-300"
                                    >
                                        info@navtechno.in
                                    </a>
                                    <div className="mt-6 pt-6 border-t border-green-500/30">
                                        <div className="flex items-center justify-center text-green-200">
                                            <Clock className="w-4 h-4 mr-2" />
                                            <span className="text-sm">24/7 Support</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Phone Contact */}
                            <Card className="contact-card bg-black/70 backdrop-blur-xl border-green-500/30 hover:border-green-400 transition-all duration-300 hover:bg-black/90">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Phone className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-green-300 mb-4">Call Us</h3>
                                    <p className="text-green-100 mb-6">Speak directly with our experts</p>
                                    <a
                                        href="tel:+917948421010"
                                        className="text-green-400 hover:text-green-300 font-semibold text-lg transition-colors duration-300"
                                    >
                                        +91 79484 21010
                                    </a>
                                    <div className="mt-6 pt-6 border-t border-green-500/30">
                                        <div className="flex items-center justify-center text-green-200">
                                            <Globe className="w-4 h-4 mr-2" />
                                            <span className="text-sm">Business Hours</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[1] = el
                    }}
                    className="py-20"
                >
                    <div className="container mx-auto px-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="animate-in text-4xl lg:text-5xl font-bold text-green-300 mb-6">Send a Message</h2>
                                <p className="animate-in text-xl text-green-100">
                                    Have a specific question or project in mind? Drop us a message and we'll get back to you promptly.
                                </p>
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
                                                <Label htmlFor="email" className="text-green-200">
                                                    Your Email
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
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="text-green-200">
                                                Subject
                                            </Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="bg-black/50 border-green-500/50 text-green-100 placeholder:text-green-300/50 focus:border-green-400"
                                                placeholder="What's this about?"
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
                                                className="bg-black/50 border-green-500/50 text-green-100 placeholder:text-green-300/50 focus:border-green-400 min-h-[150px]"
                                                placeholder="Tell us about your project, requirements, or any questions you have..."
                                                required
                                            />
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

                {/* Additional Info Section */}
                <section
                    ref={(el) => {
                        if (el) sectionsRef.current[2] = el
                    }}
                    className="py-20 bg-black/20 backdrop-blur-sm"
                >
                    <div className="container mx-auto px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="animate-in text-4xl lg:text-5xl font-bold text-green-300 mb-8">
                                Why Choose Nav Wireless Technologies?
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="animate-in">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Building className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-green-200 mb-3">Expert Team</h3>
                                    <p className="text-green-100 text-sm">
                                        Experienced professionals in optical wireless communication technology
                                    </p>
                                </div>
                                <div className="animate-in">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-green-200 mb-3">Proven Solutions</h3>
                                    <p className="text-green-100 text-sm">
                                        Successfully deployed across critical infrastructure and healthcare sectors
                                    </p>
                                </div>
                                <div className="animate-in">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-green-200 mb-3">24/7 Support</h3>
                                    <p className="text-green-100 text-sm">Round-the-clock technical support and customer service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold text-green-300 mb-8">Ready to Get Started?</h2>
                        <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
                            Transform your communication infrastructure with our innovative optical wireless solutions. Contact us
                            today to discuss your specific requirements and discover the possibilities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black px-8 py-4">
                                Schedule Consultation <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-black text-green-200 border-green-500/50 hover:bg-gray-800 px-8 py-4"
                            >
                                Download Brochure
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
