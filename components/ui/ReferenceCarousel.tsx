import { useState, useEffect, RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type ReferenceCarouselProps = {
  images: string[];
  referenceRef: RefObject<HTMLElement | null>;
  referenceInView: boolean;
};

export default function ReferenceCarousel({
  images,
  referenceRef,
  referenceInView,
}: ReferenceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      ref={referenceRef}
      className="relative h-[400px] lg:h-[542px] overflow-hidden bg-black"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      initial="hidden"
      animate={referenceInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Image Carousel */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Reference ${currentIndex + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            } transition-colors`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
}
