"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontImage: string;
  title: string;
  backContent: string;
}

export default function FlipCard({
  frontImage,
  title,
  backContent,
}: FlipCardProps) {
  return (
    <div className="relative h-[400px] w-full group">
      <div className="relative h-full w-full rounded-lg overflow-hidden">
        <Image src={frontImage} alt={title} fill className="object-cover" />

        {/* Title always visible */}
        <h3 className="absolute top-4 left-4 text-3xl font-normal text-white z-10 group-hover:text-yellow-200">
          {title}
        </h3>

        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300" />

        {/* Content that appears on hover */}
        <div className="absolute inset-0 flex flex-col items-start justify-start mt-10 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full h-[1px] bg-[#95C149] mb-4" />{" "}
          {/* Horizontal line */}
          <p className="text-white text-lg text-left font-light">
            {backContent}
          </p>
        </div>
      </div>
    </div>
  );
}
