"use client";

import type React from "react";
import { useState } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BlurText from "@/components/utils/BlurTextProps";
import { motion } from "framer-motion";

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

const scaleIn = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: delay },
  },
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    designation: "",
    phone: "",
    message: "",
  });

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
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="relative z-10">
        <Navbar />
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
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="container mx-auto px-8 relative z-10">
            <div className="max-w-4xl">
              <BlurText
                text="CONTACT US"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-5xl lg:text-6xl xl:text-7xl font-anton leading-tight text-white"
              />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Contact Form Card */}
            <motion.div
              variants={scaleIn(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="rounded-lg shadow-lg overflow-hidden w-full border-[10px] border-white">
                <div className="flex flex-col md:flex-row">
                  {/* Contact Information Sidebar */}
                  <motion.div
                    className="bg-[#95C149] text-white p-8 md:w-1/3"
                    variants={fadeInLeft(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h2 className="text-xl font-semibold mb-8">
                      Contact Information
                    </h2>
                    <motion.div
                      className="space-y-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="flex items-start space-x-3"
                        variants={fadeInUp(0.2)}
                      >
                        <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span className="text-sm">+91 70484 21010</span>
                      </motion.div>
                      <motion.div
                        className="flex items-start space-x-3"
                        variants={fadeInUp(0.4)}
                      >
                        <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span className="text-sm">info@navtechno.in</span>
                      </motion.div>
                      <motion.div
                        className="flex items-start space-x-3"
                        variants={fadeInUp(0.6)}
                      >
                        <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                        <span className="text-sm">
                          C6 The First Residue ITC Narmada,
                          <br />
                          Near Keshav Baug, Ahmedabad,
                          <br />
                          Gujarat 380015
                        </span>
                      </motion.div>
                    </motion.div>
                    {/* Social Media Icons */}
                    <motion.div
                      className="flex space-x-4 mt-12"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                        variants={scaleIn(0.2)}
                      >
                        <Facebook className="w-4 h-4" />
                      </motion.div>
                      <motion.div
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                        variants={scaleIn(0.4)}
                      >
                        <Instagram className="w-4 h-4" />
                      </motion.div>
                      <motion.div
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                        variants={scaleIn(0.6)}
                      >
                        <Youtube className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                  {/* Contact Form */}
                  <motion.div
                    className="p-8 md:w-2/3"
                    variants={fadeInRight(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-anton text-gray-800 mb-8">
                      Send Us A Message
                    </h2>
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-10"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="grid md:grid-cols-2 gap-10"
                        variants={fadeInUp(0.3)}
                      >
                        <div>
                          <label className="text-base font-semibold text-gray-800 mb-2 block">
                            Name
                          </label>
                          <Input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-base font-semibold text-gray-800 mb-2 block">
                            Email
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0"
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        className="grid md:grid-cols-2 gap-10"
                        variants={fadeInUp(0.5)}
                      >
                        <div>
                          <label className="text-base font-semibold text-gray-800 mb-2 block">
                            Phone
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-base font-semibold text-gray-800 mb-2 block">
                            Designation
                          </label>
                          <Input
                            name="designation"
                            value={formData.designation}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0"
                            placeholder="Enter your job title"
                            required
                          />
                        </div>
                      </motion.div>
                      <motion.div variants={fadeInUp(0.7)}>
                        <label className="text-base font-semibold text-gray-800 mb-2 block">
                          Message
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0 min-h-[100px]"
                          placeholder="Enter your message"
                          required
                        />
                      </motion.div>
                      <motion.div className="pt-2" variants={fadeInUp(0.9)}>
                        <Button
                          type="submit"
                          className="border border-[#95C149] text-gray-800 px-8 py-2 rounded-full font-medium bg-white hover:bg-green-50"
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.form>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
