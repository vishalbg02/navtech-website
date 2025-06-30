"use client"

import type React from "react"

import { useRef, useState } from "react"
import { ChevronDown, Upload, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function CareersPage() {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [formData, setFormData] = useState({
        fullName: "",
        designation: "",
        email: "",
        phone: "",
        message: "",
    })

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
        console.log("Form submitted:", { ...formData, resume: selectedFile })
    }

    const socialLinks = [
        { icon: <Facebook className="w-6 h-6" />, name: "Facebook", href: "#" },
        { icon: <Twitter className="w-6 h-6" />, name: "Twitter", href: "#" },
        { icon: <Linkedin className="w-6 h-6" />, name: "LinkedIn", href: "#" },
        { icon: <Instagram className="w-6 h-6" />, name: "Instagram", href: "#" },
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
                        <Image src="/images/careers_bg.png" alt="Careers Background" fill className="object-cover" priority />
                        <div className="absolute inset-0 bg-white/20"></div>
                    </div>

                    <div className="container mx-auto px-8 relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black">CAREERS</h1>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-black animate-bounce mx-auto" />
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="py-16 px-8">
                    <div className="container mx-auto max-w-6xl">
                        {/* Top Section - Social Media and Life at Navtech */}
                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            {/* Social Media Section */}
                            <Card
                                className="border-white/30 shadow-lg h-fit"
                                style={{
                                    backgroundImage: "url('/images/nav-bg.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="absolute inset-0 bg-white/60 rounded-lg"></div>
                                <CardContent className="p-8 relative z-10">
                                    <h3 className="text-2xl font-bold text-black mb-4">Let's stay connected!</h3>
                                    <p className="text-black mb-6">Follow our social media channels and have a conversation with us.</p>
                                    <div className="flex space-x-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                                            >
                                                <div className="text-white">{social.icon}</div>
                                            </a>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Life at Navtech Section */}
                            <Card
                                className="border-white/30 shadow-lg h-fit"
                                style={{
                                    backgroundImage: "url('/images/nav-bg.png')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="absolute inset-0 bg-white/60 rounded-lg"></div>
                                <CardContent className="p-8 relative z-10">
                                    <h3 className="text-2xl font-bold text-black mb-2">LIFE AT</h3>
                                    <h3 className="text-2xl font-bold text-green-600 mb-4">NAVTECH</h3>
                                    <p className="text-black">
                                        Here at Navtech, we aim to deliver efficiency in the given frame with an easy mind. Here we have
                                        routines that allow us to achieve work-life balance apart from peace of mind. Here we strive to
                                        achieve a balanced life.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Application Form Section */}
                        <div className="text-center mb-12">
                            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                                Ready to be a part of our amazing team?
                            </h2>
                            <p className="text-xl text-black">Drop your resume here!</p>
                        </div>

                        {/* Application Form Card */}
                        <Card
                            className="border-white/30 shadow-lg"
                            style={{
                                backgroundImage: "url('/images/nav-bg.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="absolute inset-0 bg-white/60 rounded-lg"></div>
                            <CardContent className="p-8 relative z-10">
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
                                            className="bg-white/90 border-gray-300 text-black placeholder:text-gray-500 focus:border-green-500 min-h-[120px]"
                                            placeholder="Your Message"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <div
                                            onDrop={handleDrop}
                                            onDragOver={handleDragOver}
                                            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors duration-300 cursor-pointer bg-white/90"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                            <p className="text-gray-600 mb-1">{selectedFile ? selectedFile.name : "No File Chosen"}</p>
                                            <p className="text-gray-500 text-sm">Drop your resume here</p>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileSelect}
                                                className="hidden"
                                            />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <Button
                                            type="submit"
                                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium"
                                        >
                                            Send Message <Send className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    )
}
