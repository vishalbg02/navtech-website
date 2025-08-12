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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setSubmitStatus({
          type: 'error',
          message: 'File size must be less than 5MB'
        });
        return;
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setSubmitStatus({
          type: 'error',
          message: 'Please upload a PDF or Word document'
        });
        return;
      }

      setSelectedFile(file);
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      // Simulate file input change
      const input = fileInputRef.current;
      if (input) {
        const dt = new DataTransfer();
        dt.items.add(file);
        input.files = dt.files;
        handleFileSelect({ target: input } as React.ChangeEvent<HTMLInputElement>);
      }
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

  // Helper function to convert file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result as string;
        // Remove the data URL prefix (e.g., "data:application/pdf;base64,")
        const base64Data = base64.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Replace with your Google Apps Script web app URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzz-eOM55mYpqlEhOAO1NY3zKV6SX6joB9YxfyxS31KTtC9kq0trMk7wdsgGCPxhEL6/exec';

      let submitData = { ...formData };

      // Handle file upload if present
      if (selectedFile) {
        try {
          const base64Data = await fileToBase64(selectedFile);
          submitData = {
            ...submitData,
            resumeFile: base64Data,
            fileName: selectedFile.name
          };
        } catch (fileError) {
          console.error('File processing error:', fileError);
          setSubmitStatus({
            type: 'error',
            message: 'Error processing file. Please try again.'
          });
          setIsSubmitting(false);
          return;
        }
      }

      console.log('Submitting to:', GOOGLE_SCRIPT_URL);
      console.log('Form data:', { ...submitData, resumeFile: selectedFile ? '[FILE_DATA]' : 'No file' });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      // With no-cors mode, we assume success if no error is thrown
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your application has been submitted successfully. We will get back to you soon.',
      });

      // Reset form
      setFormData({
        fullName: "",
        designation: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedFile(null);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your application. Please try again.',
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
        <Navbar />
        {/* Hero Section - Full Page */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center">
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

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[120px] relative z-10">
            <div className="max-w-4xl">
              <BlurText
                  text="CAREERS"
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-oswald font-semibold leading-tight text-white"
              />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-bounce mx-auto" />
          </div>
        </section>

        {/* Social Media and Life at Navtech Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 lg:px-8 xl:px-[120px]">
          <div className="max-w-[1200px] mx-auto">
            <Card className="shadow-[0px_0px_60px_rgba(0,0,0,0.1)] border-0">
              <CardContent className="p-6 sm:p-8 lg:p-[45px]">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[71px]">
                  {/* Left Side - Social Media */}
                  <motion.div
                      className="w-full lg:w-[376px] flex flex-col gap-6 lg:gap-[40px] text-center lg:text-left order-2 lg:order-1"
                      variants={fadeInLeft(0.5)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-[28px] font-oswald font-semibold leading-tight lg:leading-[34px] text-black">
                      Let's stay connected! Follow our social media channels and
                      have a conversation with us.
                    </h3>
                    <div className="flex gap-4 lg:gap-5 justify-center lg:justify-start">
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
                      className="w-full lg:w-[657px] min-h-[250px] lg:h-[293px] bg-[#95C149] relative p-4 sm:p-6 lg:p-[23px] order-1 lg:order-2"
                      variants={fadeInRight(0.5)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 mb-4 lg:mb-5">
                      <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-oswald font-semibold leading-tight lg:leading-[68px] text-white">
                          Life At
                          <br />
                          Navtech
                        </h2>
                      </div>
                      <div className="w-full sm:w-[250px] lg:w-[350px] h-[120px] lg:h-[136px] relative mx-auto sm:mx-0">
                        <Image
                            src="/images/car2.png"
                            alt="Team Photo"
                            fill
                            className="object-cover rounded"
                        />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed lg:leading-[21px] text-white text-center sm:text-left">
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
        <section className="px-4 sm:px-6 lg:px-8 xl:px-[120px] pb-12 sm:pb-16 md:pb-20 lg:pb-[100px]">
          <div className="max-w-[1200px] mx-auto">
            {/* Status Message */}
            {submitStatus.type && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-6 p-4 rounded-lg ${
                        submitStatus.type === 'success'
                            ? 'bg-green-100 text-green-800 border border-green-200'
                            : 'bg-red-100 text-red-800 border border-red-200'
                    }`}
                >
                  {submitStatus.message}
                </motion.div>
            )}

            <Card className="shadow-[0px_0px_60px_rgba(0,0,0,0.1)] border-0">
              <CardContent className="p-6 sm:p-8 lg:p-[50px]">
                <motion.div
                    className="text-center mb-8 sm:mb-12 lg:mb-[57px]"
                    variants={fadeInUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-oswald font-semibold leading-tight lg:leading-[44px] text-black capitalize mb-4">
                    Ready to be a part of our amazing team? <br className="hidden sm:block" />
                    Drop your resume here!
                  </h2>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="max-w-[1099px] mx-auto space-y-6 sm:space-y-8 lg:space-y-[42px]"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                  {/* First Row */}
                  <motion.div
                      className="flex flex-col sm:flex-row gap-6 lg:gap-[39px]"
                      variants={fadeInUp(0.8)}
                  >
                    <div className="flex-1">
                      <label className="block text-sm sm:text-base lg:text-[16px] font-normal leading-5 text-black mb-2 lg:mb-[11px]">
                        Name
                      </label>
                      <Input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-sm sm:text-base lg:text-[16px] font-sans leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                          placeholder="Enter your full name"
                          required
                          disabled={isSubmitting}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm sm:text-base lg:text-[16px] font-normal leading-5 text-black mb-2 lg:mb-[11px]">
                        Email
                      </label>
                      <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-sm sm:text-base lg:text-[16px] font-sans leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                          placeholder="Enter your email address"
                          required
                          disabled={isSubmitting}
                      />
                    </div>
                  </motion.div>

                  {/* Second Row */}
                  <motion.div
                      className="flex flex-col sm:flex-row gap-6 lg:gap-[39px]"
                      variants={fadeInUp(1.1)}
                  >
                    <div className="flex-1">
                      <label className="block text-sm sm:text-base lg:text-[16px] font-normal leading-5 text-black mb-2 lg:mb-[11px]">
                        Phone
                      </label>
                      <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-sm sm:text-base lg:text-[16px] font-sans leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                          placeholder="Enter your phone number"
                          required
                          disabled={isSubmitting}
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm sm:text-base lg:text-[16px] font-normal leading-5 text-black mb-2 lg:mb-[11px]">
                        Designation
                      </label>
                      <Input
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-sm sm:text-base lg:text-[16px] font-sans leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                          placeholder="Enter your job title"
                          required
                          disabled={isSubmitting}
                      />
                    </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div variants={fadeInUp(1.3)}>
                    <label className="block text-sm sm:text-base lg:text-[16px] font-normal leading-5 text-black mb-2 lg:mb-[11px]">
                      Message
                    </label>
                    <Input
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-0 border-b border-[#8D8D8D] rounded-none bg-transparent px-0 pb-1 text-sm sm:text-base lg:text-[16px] font-sans leading-5 text-[#8D8D8D] focus-visible:ring-0 focus-visible:border-[#8D8D8D] h-auto"
                        placeholder="Enter your message"
                        required
                        disabled={isSubmitting}
                    />
                  </motion.div>

                  {/* File Upload */}
                  <motion.div className="space-y-2 lg:space-y-[10px]" variants={fadeInUp(1.5)}>
                    <label className="block text-sm sm:text-base lg:text-[16px] font-normal leading-5 text-black">
                      Drop your resume here (PDF or Word, max 5MB)
                    </label>
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className={`border border-dashed border-[#95C149] p-4 lg:p-[18px] cursor-pointer transition-colors ${
                            isSubmitting ? 'opacity-50 pointer-events-none' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => !isSubmitting && fileInputRef.current?.click()}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 lg:gap-[17px]">
                        <button
                            type="button"
                            className="w-full sm:w-[98px] h-8 bg-[#EAEAEA] border border-black text-xs sm:text-[14px] text-center flex items-center justify-center disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                          Choose File
                        </button>
                        <span className="text-sm sm:text-base lg:text-[16px] font-sans leading-5 text-[#8D8D8D] break-all">
                        {selectedFile ? selectedFile.name : "No File Chosen"}
                      </span>
                      </div>
                      <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileSelect}
                          className="hidden"
                          disabled={isSubmitting}
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                      className="text-center pt-8 lg:pt-[47px]"
                      variants={fadeInUp(1.7)}
                  >
                    <Button
                        type="submit"
                        className="w-[93px] h-[47px] border-[1.5px] border-[#95C149] bg-transparent text-black hover:bg-[#95C149] hover:text-white rounded-[30px] text-sm lg:text-[14px] font-sans transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
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