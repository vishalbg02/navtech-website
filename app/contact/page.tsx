"use client";

import type React from "react";
import { useState } from "react";
import {
    ChevronDown,
    Mail,
    MapPin,
    Phone,
    Instagram,
    Linkedin
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
        phone: "+91",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    // Add validation state
    const [formErrors, setFormErrors] = useState<{
        fullName?: string;
        email?: string;
        designation?: string;
        phone?: string;
        message?: string;
    }>({});

    const [touched, setTouched] = useState<{
        fullName?: boolean;
        email?: boolean;
        designation?: boolean;
        phone?: boolean;
        message?: boolean;
    }>({});

    // Validation functions
    const validateEmail = (email: string): string | undefined => {
        if (!email.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return "Please enter a valid email address";
        return undefined;
    };

    const validatePhone = (phone: string): string | undefined => {
        if (!phone.trim()) return "Phone number is required";

        // Check if it starts with +91
        if (!phone.startsWith('+91')) {
            return "Phone number must start with +91";
        }

        // Extract the number part after +91
        const numberPart = phone.substring(3).trim();

        // Check if it's exactly 10 digits
        const digitRegex = /^\d{10}$/;
        if (!digitRegex.test(numberPart)) {
            return "Please enter exactly 10 digits after +91";
        }

        // Check if first digit is valid (Indian mobile numbers start with 6-9)
        const firstDigit = numberPart[0];
        if (!['6', '7', '8', '9'].includes(firstDigit)) {
            return "Indian mobile numbers must start with 6, 7, 8, or 9";
        }

        return undefined;
    };

    const validateFullName = (name: string): string | undefined => {
        if (!name.trim()) return "Full name is required";
        if (name.trim().length < 2) return "Name must be at least 2 characters long";
        if (name.trim().length > 50) return "Name must be less than 50 characters";
        return undefined;
    };

    const validateDesignation = (designation: string): string | undefined => {
        if (!designation.trim()) return "Designation is required";
        if (designation.trim().length < 2) return "Designation must be at least 2 characters long";
        return undefined;
    };

    const validateMessage = (message: string): string | undefined => {
        if (!message.trim()) return "Message is required";
        if (message.trim().length < 10) return "Message must be at least 10 characters long";
        if (message.trim().length > 1000) return "Message must be less than 1000 characters";
        return undefined;
    };

    const validateForm = () => {
        const errors: typeof formErrors = {};

        errors.fullName = validateFullName(formData.fullName);
        errors.email = validateEmail(formData.email);
        errors.phone = validatePhone(formData.phone);
        errors.designation = validateDesignation(formData.designation);
        errors.message = validateMessage(formData.message);

        setFormErrors(errors);

        // Return true if no errors
        return !Object.values(errors).some(error => error !== undefined);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (formErrors[name as keyof typeof formErrors]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));

        // Validate individual field on blur
        const fieldValue = formData[name as keyof typeof formData];
        let error: string | undefined;

        switch (name) {
            case 'fullName':
                error = validateFullName(fieldValue);
                break;
            case 'email':
                error = validateEmail(fieldValue);
                break;
            case 'phone':
                error = validatePhone(fieldValue);
                break;
            case 'designation':
                error = validateDesignation(fieldValue);
                break;
            case 'message':
                error = validateMessage(fieldValue);
                break;
        }

        setFormErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        // Mark all fields as touched
        setTouched({
            fullName: true,
            email: true,
            designation: true,
            phone: true,
            message: true,
        });

        // Validate form before submission
        if (!validateForm()) {
            setSubmitStatus({
                type: 'error',
                message: 'Please fix the errors below and try again.',
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/api/Contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`Failed to send email: ${errorData}`);
            }

            setSubmitStatus({
                type: "success",
                message: "Thank you! Your message has been sent successfully.",
            });

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                designation: "",
                phone: "+91",
                message: "",
            });
            setFormErrors({});
            setTouched({});
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus({
                type: "error",
                message:
                    "Sorry, there was an error sending your message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
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
                                className="text-5xl lg:text-6xl xl:text-7xl font-oswald font-semibold leading-tight text-white"
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
                        {/* Status Message */}
                        {submitStatus.type && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mb-6 p-4 rounded-lg ${
                                    submitStatus.type === "success"
                                        ? "bg-green-100 text-green-800 border border-green-200"
                                        : "bg-red-100 text-red-800 border border-red-200"
                                }`}
                            >
                                {submitStatus.message}
                            </motion.div>
                        )}

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
                                                <span className="text-sm">info@navwireless.com</span>
                                            </motion.div>
                                            <motion.div
                                                className="flex items-start space-x-3"
                                                variants={fadeInUp(0.6)}
                                            >
                                                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                                                <span className="text-sm">
                          C5 The First Residue ITC Narmada,
                          <br />
                          Near Keshav Baug, Ahmedabad,
                          <br />
                          Gujarat 380015,
                          <br />
                          India
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
                                            {/* X (Twitter) */}
                                            <motion.a
                                                href="https://x.com/navwireless?s=21&t=GaxhmeT9odhWNwL_KLMe7A"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                                                variants={scaleIn(0.2)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    shapeRendering="geometricPrecision"
                                                    textRendering="geometricPrecision"
                                                    imageRendering="optimizeQuality"
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    viewBox="0 0 512 462.799"
                                                    className="w-4 h-4"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="nonzero"
                                                        d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                                                    />
                                                </svg>
                                            </motion.a>


                                            {/* Instagram */}
                                            <motion.a
                                                href="https://www.instagram.com/nav_wireless_techno?igsh=NTc4MTIwNjQ2YQ=="
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                                                variants={scaleIn(0.4)}
                                            >
                                                <Instagram className="w-4 h-4" />
                                            </motion.a>

                                            {/* LinkedIn */}
                                            <motion.a
                                                href="https://www.linkedin.com/company/nav-wireless-technologies-pvt-ltd/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition"
                                                variants={scaleIn(0.6)}
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </motion.a>
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
                                        <h2 className="text-2xl font-oswald font-semibold text-gray-800 mb-8">
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
                                                        onBlur={handleInputBlur}
                                                        className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0"
                                                        placeholder="Enter your full name"
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    {touched.fullName && formErrors.fullName && (
                                                        <p className="mt-2 text-sm text-red-600">
                                                            {formErrors.fullName}
                                                        </p>
                                                    )}
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
                                                        onBlur={handleInputBlur}
                                                        className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0"
                                                        placeholder="Enter your email address"
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    {touched.email && formErrors.email && (
                                                        <p className="mt-2 text-sm text-red-600">
                                                            {formErrors.email}
                                                        </p>
                                                    )}
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
                                                        onBlur={handleInputBlur}
                                                        className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0"
                                                        placeholder="Enter your phone number"
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    {touched.phone && formErrors.phone && (
                                                        <p className="mt-2 text-sm text-red-600">
                                                            {formErrors.phone}
                                                        </p>
                                                    )}
                                                </div>
                                                <div>
                                                    <label className="text-base font-semibold text-gray-800 mb-2 block">
                                                        Designation
                                                    </label>
                                                    <Input
                                                        name="designation"
                                                        value={formData.designation}
                                                        onChange={handleInputChange}
                                                        onBlur={handleInputBlur}
                                                        className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0"
                                                        placeholder="Enter your job title"
                                                        required
                                                        disabled={isSubmitting}
                                                    />
                                                    {touched.designation && formErrors.designation && (
                                                        <p className="mt-2 text-sm text-red-600">
                                                            {formErrors.designation}
                                                        </p>
                                                    )}
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
                                                    onBlur={handleInputBlur}
                                                    className="w-full bg-transparent border-0 border-b border-gray-400 rounded-none px-0 py-3 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:ring-0 min-h-[100px]"
                                                    placeholder="Enter your message"
                                                    required
                                                    disabled={isSubmitting}
                                                />
                                                {touched.message && formErrors.message && (
                                                    <p className="mt-2 text-sm text-red-600">
                                                        {formErrors.message}
                                                    </p>
                                                )}
                                            </motion.div>
                                            <motion.div className="pt-2" variants={fadeInUp(0.9)}>
                                                <Button
                                                    type="submit"
                                                    className="border border-[#95C149] text-gray-800 px-8 py-2 rounded-full font-medium bg-white hover:bg-green-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    disabled={isSubmitting}
                                                >
                                                    {isSubmitting ? "Sending..." : "Send Message"}
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