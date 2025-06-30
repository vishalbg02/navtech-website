"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        designation: "",
        phone: "",
        message: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

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
                        <Image src="/images/contact_bg.png" alt="Contact Background" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-white/20"></div>
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">CONTACT US</h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-black animate-bounce mx-auto" />
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-16 px-8">
                    <div className="container mx-auto max-w-4xl">
                        {/* Send a Message Section */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">SEND A MESSAGE</h2>
                        </div>

                        {/* Contact Form Card */}
                        <Card className="bg-white/80 backdrop-blur-sm border-white/30 shadow-lg mb-16">
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Input
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 h-12"
                                                placeholder="Your Full Name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 h-12"
                                                placeholder="Email Address"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Input
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleInputChange}
                                                className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 h-12"
                                                placeholder="Your Designation"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 h-12"
                                                placeholder="Phone"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 min-h-[150px]"
                                            placeholder="Your Message"
                                            required
                                        />
                                    </div>

                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium"
                                        >
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* For Further Inquiry Section */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-12">FOR FURTHER INQUIRY</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Mail Us On Card */}
                            <Card className="bg-white/80 backdrop-blur-sm border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4">Mail Us On</h3>
                                    <a
                                        href="mailto:info@navtechno.in"
                                        className="text-black hover:text-green-600 font-medium transition-colors duration-300"
                                    >
                                        info@navtechno.in
                                    </a>
                                </CardContent>
                            </Card>

                            {/* India Office Card */}
                            <Card className="bg-white/80 backdrop-blur-sm border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <MapPin className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4">India Office</h3>
                                    <div className="text-black">
                                        <p>C5 The First Besides ITC</p>
                                        <p>Narmada, near Keshav Baug,</p>
                                        <p>Ahmedabad, Gujarat 380015</p>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Call Us Card */}
                            <Card className="bg-white/80 backdrop-blur-sm border-white/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-8 text-center">
                                    <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Phone className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-4">Call Us</h3>
                                    <a
                                        href="tel:+917948421010"
                                        className="text-black hover:text-green-600 font-medium transition-colors duration-300"
                                    >
                                        +91 79484 21010
                                    </a>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
