"use client";

import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VerticalsSection() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const router = useRouter();

  const handleLearnMore = (title: string) => {
    const slug = title.toLowerCase().replace(/ /g, "-");
    router.push(`/verticals/${slug}`);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current as HTMLDivElement;
      const scrollAmount = 400;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const verticals = [
    {
      title: "Government",
      image: "/images/h1.jpg",
    },
    {
      title: "Defence",
      image: "/images/h2.jpg",
    },
    {
      title: "OEM/ODM",
      image: "/images/h3.jpg",
    },
    {
      title: "Consumer",
      image: "/images/h4.jpg",
    },
    {
      title: "Telecom",
      image: "/images/tele2.jpg",
    },
  ];

  return (
      <section
          ref={containerRef}
          className="relative min-h-screen flex flex-col bg-white"
      >
        <div className="relative z-10 container mx-auto px-5 mb-16 flex justify-start">
          <div className="text-left max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-oswald font-semibold text-black mb-6">
              Verticals
            </h2>
          </div>
        </div>

        {/* Left and Right Navigation Buttons */}
        <div className="relative z-10">
          <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-20 hover:bg-gray-100"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-20 hover:bg-gray-100"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Wrapper */}
          <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth px-20 no-scrollbar"
          >
            {verticals.map((vertical, index) => (
                <div
                    key={index}
                    className="group relative min-w-[280px] md:min-w-[300px] lg:min-w-[320px] h-[370px] flex-shrink-0 flex flex-col justify-end rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-200 bg-gray-100 hover:scale-[1.025]"
                    onClick={() => handleLearnMore(vertical.title)}
                >
                  <Image
                      src={vertical.image}
                      alt={vertical.title}
                      fill
                      className="object-cover w-full h-full"
                      priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <div className="relative z-10 flex items-center justify-between px-6 py-4">
                <span className="text-white text-xl font-oswald font-semibold drop-shadow">
                  {vertical.title}
                </span>
                    <span className="inline-block ml-4 w-7 h-7 rounded-full bg-[#95c149] flex items-center justify-center shadow hover:bg-[#7EA52B] transition-colors">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.2}
                        d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                  </div>
                </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
  );
}
