"use client"

import type React from "react"
import { useRef, useState } from "react"
import {Facebook, Twitter, Instagram, ChevronDown} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"

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

    return (
        <div
            className="relative min-h-screen"
            style={{
                backgroundColor: "white",
            }}
        >
                <Navbar />
            {/* Hero Section - Full Page */}
            <section className="relative h-screen flex items-center justify-center">

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/car1.jpg"
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
                            CAREERS
                        </h1>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
                </div>
            </section>

            {/* Social Media and Life at Navtech Section */}
            <section className="py-[100px] px-[120px]">
                <div className="max-w-[1200px] mx-auto">
                    <Card className="shadow-[0px_0px_60px_rgba(0,0,0,0.1)] border-0">
                        <CardContent className="p-[45px]">
                            <div className="flex items-center gap-[71px]">
                                {/* Left Side - Social Media */}
                                <div className="w-[376px] flex flex-col gap-[40px]">
                                    <h3 className="text-[28px] font-bold leading-[34px] text-black">
                                        Let's stay connected! Follow our social media channels and have a conversation with us.
                                    </h3>
                                    <div className="flex gap-5">
                                        <div className="w-7 h-7 bg-[#95C149] rounded-full flex items-center justify-center">
                                            <Facebook className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="w-7 h-7 bg-[#95C149] rounded-full flex items-center justify-center">
                                            <Instagram className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="w-7 h-7 bg-[#95C149] rounded-full flex items-center justify-center">
                                            <Twitter className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Life at Navtech */}
                                <div className="w-[657px] h-[293px] bg-[#95C149] relative p-[23px]">
                                    <div className="flex gap-5 mb-5">
                                        <div className="flex-1">
                                            <h2 className="text-[56px] font-bold leading-[68px] text-white">
                                                Life At
                                                <br />
                                                Navtech
                                            </h2>
                                        </div>
                                        <div className="w-[350px] h-[136px] relative">
                                            <Image
                                                src="/images/car2.png"
                                                alt="Team Photo"
                                                fill
                                                className="object-cover rounded"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-[18px] font-normal leading-[21px] text-white">
                                        Here at Navtech, we aim to deliver efficiency in the given frame with an easy mind. Here we have
                                        routines that allow us to achieve work-life balance apart from peace of mind. Here we strive to
                                        achieve a balanced life.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Form Section */}
            <section className="px-[120px] pb-[100px]">
                <div className="max-w-[1200px] mx-auto">
                    <Card className="shadow-[0px_0px_60px_rgba(0,0,0,0.1)] border-0">
                        <CardContent className="p-[50px]">
                            <div className="text-center mb-[57px]">
                                <h2 className="text-[36px] font-bold leading-[44px] text-black capitalize mb-4">
                                    Ready to be a part of our amazing team? <br />
                                    Drop your <span className="inline-block">
    resume
<svg width="150" height="12" viewBox="0 0 579 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 13
           Q 200 5, 350 12
           T 561 20
           L 561 30
           Q 350 25, 18 25
           Z"
        fill="#A4C55F"/>
</svg>

  </span>{" "}
                                    here!
                                </h2>

                            </div>

                            <form onSubmit={handleSubmit} className="max-w-[1099px] mx-auto space-y-[42px]">
                                {/* First Row */}
                                <div className="flex gap-[39px]">
                                    <div className="flex-1">
                                        <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">Name</label>
                                        <Input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-[16px] font-light leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">Email</label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-[16px] font-light leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="flex gap-[39px]">
                                    <div className="flex-1">
                                        <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">Phone</label>
                                        <Input
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-[16px] font-light leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">Designation</label>
                                        <Input
                                            name="designation"
                                            value={formData.designation}
                                            onChange={handleInputChange}
                                            className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-[16px] font-light leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                                            placeholder="Enter your job title"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">Message</label>
                                    <Input
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-[16px] font-light leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                                        placeholder="Enter your message"
                                        required
                                    />
                                </div>

                                {/* File Upload */}
                                <div className="space-y-[10px]">
                                    <label className="block text-[16px] font-normal leading-5 text-black">Drop your resume here</label>
                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        className="border border-dashed border-[#95C149] p-[18px] cursor-pointer"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <div className="flex items-center gap-[17px]">
                                            <button
                                                type="button"
                                                className="w-[98px] h-8 bg-[#EAEAEA] border border-black text-[14px] text-center"
                                            >
                                                Choose File
                                            </button>
                                            <span className="text-[16px] font-light leading-5 text-[#8D8D8D]">
                        {selectedFile ? selectedFile.name : "No File Chosen"}
                      </span>
                                        </div>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileSelect}
                                            className="hidden"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-[47px]">
                                    <Button
                                        type="submit"
                                        className="w-[93px] h-[47px] border-[1.5px] border-[#95C149] bg-transparent text-black hover:bg-[#95C149] hover:text-white rounded-[30px] text-[14px] font-light"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer />
        </div>
    )
}
