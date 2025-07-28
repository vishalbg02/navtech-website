"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

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
                            src="/images/con1.jpg"
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
                                CONTACT US
                            </h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-16 px-8">
                    <div className="container mx-auto max-w-4xl">
                        {/* Contact Form Card */}
                        <Card className="rounded-lg shadow-lg overflow-hidden w-full">
                            <div className="flex flex-col md:flex-row">
                                {/* Contact Information Sidebar */}
                                <div className="bg-[#95C149] text-white p-8 md:w-1/3">
                                    <h2 className="text-xl font-semibold mb-8">Contact Information</h2>

                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-3">
                                            <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                                            <span className="text-sm">+91 70484 21010</span>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                                            <span className="text-sm">info@navtechno.in</span>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                            <span className="text-sm">
                        C6 The First Residue ITC Narmada,
                        <br />
                        Near Keshav Baug, Ahmedabad,
                        <br />
                        Gujarat 380015
                      </span>
                                        </div>
                                    </div>

                                    {/* Social Media Icons */}
                                    <div className="flex space-x-4 mt-12">
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                            <Facebook className="w-4 h-4" />
                                        </div>
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                            <Instagram className="w-4 h-4" />
                                        </div>
                                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                            <Youtube className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="p-8 md:w-2/3">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Send Us A Message</h2>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <Input
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 h-12"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                                <label className="text-xs text-gray-600 mt-1 block">Name</label>
                                            </div>
                                            <div>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 h-12"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                                <label className="text-xs text-gray-600 mt-1 block">Email</label>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <Input
                                                    name="phone"
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 h-12"
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                                <label className="text-xs text-gray-600 mt-1 block">Phone</label>
                                            </div>
                                            <div>
                                                <Input
                                                    name="designation"
                                                    value={formData.designation}
                                                    onChange={handleInputChange}
                                                    className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 h-12"
                                                    placeholder="Enter your job title"
                                                    required
                                                />
                                                <label className="text-xs text-gray-600 mt-1 block">Designation</label>
                                            </div>
                                        </div>

                                        <div>
                                            <Textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 min-h-[150px]"
                                                placeholder="Enter your message"
                                                required
                                            />
                                            <label className="text-xs text-gray-600 mt-1 block">Message</label>
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                className="bg-white border border-green-500 hover:bg-green-200 text-gray-800 px-8 py-2 rounded-full font-medium"
                                            >
                                                Send Message
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}
