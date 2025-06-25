"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Model({ ...props }) {
    const { scene } = useGLTF("/glb/NavTech_Logo.glb");
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
        }
    });

    return <primitive object={scene} ref={modelRef} {...props} />;
}

export default function AboutSection() {
    const sectionRef = useRef(null);
    const modelRef = useRef(null);
    const leftTextContainerRef = useRef(null);
    const rightTextContainerRef = useRef(null);
    const titleRef = useRef(null);
    const paragraph1Ref = useRef(null);
    const paragraph2Ref = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Initial states
            gsap.set(modelRef.current, {
                width: "95vw",
                height: "115vh",
                left: "50%",
                top: "50%",
                xPercent: -50,
                yPercent: -50,
                opacity: 1,
                scale: 1,
            });

            gsap.set(leftTextContainerRef.current, {
                x: "-100%",
                opacity: 0,
                rotationY: 45,
                transformPerspective: 1000,
            });

            gsap.set(rightTextContainerRef.current, {
                x: "100%",
                opacity: 0,
                rotationY: -45,
                transformPerspective: 1000,
            });

            gsap.set(
                [titleRef.current, paragraph1Ref.current, paragraph2Ref.current, buttonRef.current],
                {
                    y: 50,
                    opacity: 0,
                }
            );

            // Animation timeline
            const textTL = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // Text containers slide in
            textTL.to(
                leftTextContainerRef.current,
                {
                    x: "0%",
                    opacity: 1,
                    rotationY: 0,
                    duration: 0.6,
                    ease: "power4.out",
                },
                0
            ).to(
                rightTextContainerRef.current,
                {
                    x: "0%",
                    opacity: 1,
                    rotationY: 0,
                    duration: 0.6,
                    ease: "power4.out",
                },
                0
            );

            // Text content fades and slides up
            textTL.to(
                titleRef.current,
                { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
                "-=0.4"
            )
                .to(
                    paragraph1Ref.current,
                    { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
                    "-=0.3"
                )
                .to(
                    paragraph2Ref.current,
                    { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
                    "-=0.3"
                )
                .to(
                    buttonRef.current,
                    { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
                    "-=0.3"
                );

            // Subtle hover effect for text containers
            gsap.to([leftTextContainerRef.current, rightTextContainerRef.current], {
                scale: 1.02,
                duration: 0.3,
                ease: "power1.out",
                paused: true,
                onStart: function () {
                    this.targets().forEach((el) => el.classList.add("shadow-lg"));
                },
                onReverseComplete: function () {
                    this.targets().forEach((el) => el.classList.remove("shadow-lg"));
                },
            }).eventCallback("onStart", function () {
                const targets = this.targets();
                targets.forEach((target) => {
                    target.addEventListener("mouseenter", () => this.play());
                    target.addEventListener("mouseleave", () => this.reverse());
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-white/20 to-white/15 backdrop-blur-md"></div>

            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-1/5 right-1/4 w-112 h-112 bg-green-200/10 rounded-full blur-4xl animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/5 w-96 h-96 bg-green-200/10 rounded-full blur-4xl animate-pulse delay-700"></div>
            </div>

            <div ref={modelRef} className="absolute z-10">
                <Canvas
                    camera={{ position: [0, 0, 9], fov: 50 }}
                    gl={{ antialias: true, powerPreference: "high-performance" }}
                >
                    <ambientLight intensity={0.7} />
                    <directionalLight position={[10, 10, 5]} intensity={1.3} castShadow={false} />
                    <Model scale={[2.5, 2.5, 2.5]} />
                    <OrbitControls enablePan={false} enableZoom={false} dampingFactor={0.1} />
                </Canvas>
            </div>

            <div
                ref={leftTextContainerRef}
                className="absolute left-0 top-0 w-1/3 h-full flex flex-col justify-center px-8 lg:px-16 bg-gradient-to-r from-white/97 via-white/92 to-transparent backdrop-blur-lg z-20 transition-shadow duration-300"
            >
                <div ref={titleRef} className="mb-8">
                    <h2 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black leading-tight tracking-tight">
                        ABOUT US
                    </h2>
                    <div className="w-32 h-1.5 bg-green-600 rounded-full mt-2"></div>
                </div>
                <p ref={paragraph1Ref} className="text-lg lg:text-xl text-black leading-relaxed font-medium">
                    <span className="font-bold text-xl lg:text-2xl">
                        Nav Wireless Technologies Pvt Ltd (NavTech)
                    </span>{" "}
                    is a global leader in wireless and information communication systems, with cutting-edge R&D facilities, a robust manufacturing base, and dedicated sales and service teams.
                </p>
                <div ref={buttonRef} className="pt-6">
                    <button className="group relative bg-gradient-to-r from-green-600 to-gray-800 hover:from-green-700 hover:to-gray-900 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-400 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden">
                        <span className="relative z-10 flex items-center">
                            Discover Our Journey
                            <span className="inline-block ml-3 transition-transform group-hover:translate-x-2">→</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                    </button>
                </div>
            </div>

            <div
                ref={rightTextContainerRef}
                className="absolute right-0 top-0 w-1/3 h-full flex flex-col justify-center px-8 lg:px-16 bg-gradient-to-l from-white/97 via-white/92 to-transparent backdrop-blur-lg z-20 transition-shadow duration-300"
            >
                <p ref={paragraph2Ref} className="text-base lg:text-lg text-black leading-relaxed font-medium">
                    The company delivers a comprehensive suite of innovative solutions, including{" "}
                    <span className="font-bold">Optical Wireless Communication Systems</span>,{" "}
                    <span className="font-bold">Wireless Electricity Transmission Systems</span>,{" "}
                    <span className="font-bold">Electronic Tattoos for Healthcare Monitoring</span>,{" "}
                    <span className="font-bold">Wireless Enhancement Products</span>, and advanced subsystems for global customers.
                </p>
            </div>
        </section>
    );
}