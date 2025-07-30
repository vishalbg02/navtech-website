"use client";

import type React from "react";
import { useRef, useState } from "react";
import { Facebook, Twitter, Instagram, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlurText from "@/components/utils/BlurTextProps";
import { motion } from "framer-motion";

// Animation variants
const fadeInLeft = (delay: number) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: delay },
  },
});

const fadeInRight = (delay: number) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: delay },
  },
});

const fadeInUp = (delay: number) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: delay },
  },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function CareersPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, resume: selectedFile });
  };

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
            <BlurText
              text="CAREERS"
              delay={150}
              animateBy="words"
              direction="bottom"
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
            />
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
                <motion.div
                  className="w-[376px] flex flex-col gap-[40px]"
                  variants={fadeInLeft(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <h3 className="text-[28px] font-bold leading-[34px] text-black">
                    Let's stay connected! Follow our social media channels and
                    have a conversation with us.
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
                </motion.div>

                {/* Right Side - Life at Navtech */}
                <motion.div
                  className="w-[657px] h-[293px] bg-[#95C149] relative p-[23px]"
                  variants={fadeInRight(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
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
                    Here at Navtech, we aim to deliver efficiency in the given
                    frame with an easy mind. Here we have routines that allow us
                    to achieve work-life balance apart from peace of mind. Here
                    we strive to achieve a balanced life.
                  </p>
                </motion.div>
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
              <motion.div
                className="text-center mb-[57px]"
                variants={fadeInUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-[36px] font-bold leading-[44px] text-black capitalize mb-4">
                  Ready to be a part of our amazing team? <br />
                  Drop your resume here!
                </h2>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="max-w-[1099px] mx-auto space-y-[42px]"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* First Row */}
                <motion.div
                  className="flex gap-[39px]"
                  variants={fadeInUp(0.8)}
                >
                  <div className="flex-1">
                    <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">
                      Name
                    </label>
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
                    <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">
                      Email
                    </label>
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
                </motion.div>

                {/* Second Row */}
                <motion.div
                  className="flex gap-[39px]"
                  variants={fadeInUp(1.1)}
                >
                  <div className="flex-1">
                    <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">
                      Phone
                    </label>
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
                    <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">
                      Designation
                    </label>
                    <Input
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-[16px] font-light leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                      placeholder="Enter your job title"
                      required
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div variants={fadeInUp(1.3)}>
                  <label className="block text-[16px] font-normal leading-5 text-black mb-[11px]">
                    Message
                  </label>
                  <Input
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-[16px] font-light leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                    placeholder="Enter your message"
                    required
                  />
                </motion.div>

                {/* File Upload */}
                <motion.div className="space-y-[10px]" variants={fadeInUp(1.5)}>
                  <label className="block text-[16px] font-normal leading-5 text-black">
                    Drop your resume here
                  </label>
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
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  className="text-center pt-[47px]"
                  variants={fadeInUp(1.7)}
                >
                  <Button
                    type="submit"
                    className="w-[93px] h-[47px] border-[1.5px] border-[#95C149] bg-transparent text-black hover:bg-[#95C149] hover:text-white rounded-[30px] text-[14px] font-light"
                  >
                    Submit
                  </Button>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}
