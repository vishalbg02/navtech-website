"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Model({ ...props }) {
    const { scene } = useGLTF("/glb/NavTech_Logo.glb");
    const modelRef = useRef();
    const [shouldRotate, setShouldRotate] = useState(true);

    // Expose setShouldRotate to parent via props
    useEffect(() => {
        if (props.onAnimationComplete) {
            props.onAnimationComplete(() => setShouldRotate(false));
        }
    }, [props.onAnimationComplete]);

    useFrame(() => {
        if (modelRef.current && shouldRotate) {
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
    const titleUnderlineRef = useRef(null);
    const paragraph1Ref = useRef(null);
    const paragraph2Ref = useRef(null);
    const buttonRef = useRef(null);
    const stopRotationRef = useRef(null);
    const orbitControlsRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Initial states for 3D model - start from distance
            gsap.set(modelRef.current, {
                width: "200vw",
                height: "200vh",
                left: "50%",
                top: "50%",
                xPercent: -50,
                yPercent: -50,
                opacity: 0,
                scale: 0.3,
                rotationX: 45,
                rotationY: 180,
                z: -1000,
            });

            // Initial states for text containers
            gsap.set(leftTextContainerRef.current, {
                x: "-120%",
                opacity: 0,
                rotationY: 60,
                transformPerspective: 1200,
                scale: 0.8,
            });

            gsap.set(rightTextContainerRef.current, {
                y: "120%",
                opacity: 0,
                rotationY: -60,
                transformPerspective: 1200,
                scale: 0.8,
            });

            // Initial states for text elements
            gsap.set(titleRef.current, {
                y: 80,
                opacity: 0,
                scale: 0.8,
                rotationX: 20,
            });

            gsap.set(titleUnderlineRef.current, {
                scaleX: 0,
                transformOrigin: "left center",
            });

            gsap.set([paragraph1Ref.current, paragraph2Ref.current], {
                y: 50,
                opacity: 0,
            });

            gsap.set(buttonRef.current, {
                y: 60,
                opacity: 0,
                scale: 0.8,
                rotationX: 15,
            });

            // Main animation timeline
            const mainTL = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=150%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    onStart: () => {
                        setIsAnimating(true);
                        // Completely disable OrbitControls during GSAP animation
                        if (orbitControlsRef.current) {
                            orbitControlsRef.current.enabled = false;
                            orbitControlsRef.current.enableRotate = false;
                            orbitControlsRef.current.enablePan = false;
                            orbitControlsRef.current.enableZoom = false;
                        }
                    },
                    onUpdate: () => {
                        // Ensure controls stay disabled during scrub animation
                        if (orbitControlsRef.current) {
                            orbitControlsRef.current.enabled = false;
                        }
                    },
                    onComplete: () => {
                        setIsAnimating(false);
                        // Re-enable OrbitControls after animation with a slight delay
                        setTimeout(() => {
                            if (orbitControlsRef.current) {
                                orbitControlsRef.current.enabled = true;
                                orbitControlsRef.current.enableRotate = true;
                                orbitControlsRef.current.reset();
                            }
                        }, 100);
                    },
                },
            });

            // Phase 1: 3D Model dramatic entrance (0-30%)
            mainTL.to(modelRef.current, {
                opacity: 1,
                scale: 1,
                rotationX: 0,
                rotationY: 0,
                z: 0,
                width: "95vw",
                height: "115vh",
                duration: 1.2,
                ease: "power4.out",
            }, 0);

            // Phase 2: Left text container entrance (20-40%)
            mainTL.to(leftTextContainerRef.current, {
                x: "0%",
                opacity: 1,
                rotationY: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
            }, 0.6);

            // Phase 3: Left side text content - reading flow (30-60%)
            mainTL.to(titleRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                duration: 0.5,
                ease: "power2.out",
            }, 1.0)
                .to(titleUnderlineRef.current, {
                    scaleX: 1,
                    duration: 0.4,
                    ease: "power2.out",
                }, 1.2)
                .to(paragraph1Ref.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                }, 1.8);

            // Phase 4: Right text container entrance (50-70%)
            mainTL.to(rightTextContainerRef.current, {
                y: "0%",
                opacity: 1,
                rotationY: 0,
                scale: 1,
                duration: 0.8,
                ease: "power3.out",
            }, 2.2);

            // Phase 5: Right side content (60-90%)
            mainTL.to(paragraph2Ref.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
            }, 2.6);

            // Phase 6: Button entrance (80-100%)
            mainTL.to(buttonRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                duration: 0.6,
                ease: "back.out(1.7)",
                onComplete: () => {
                    if (stopRotationRef.current) {
                        stopRotationRef.current();
                    }
                    setIsAnimating(false);
                    // Ensure OrbitControls are enabled after all animations with delay
                    setTimeout(() => {
                        if (orbitControlsRef.current) {
                            orbitControlsRef.current.enabled = true;
                            orbitControlsRef.current.enableRotate = true;
                            orbitControlsRef.current.reset();
                        }
                    }, 100);
                },
            }, 3.2);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
            {/* Background with enhanced gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/20 via-white/25 to-slate-100/20 backdrop-blur-lg"></div>

            {/* Animated background elements sized to match text containers */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-green-200/15 to-blue-200/15 blur-3xl animate-pulse"></div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-r from-green-200/10 to-emerald-200/10 blur-3xl animate-pulse delay-700"></div>
                <div className="absolute left-1/2 top-1/2 w-1/3 h-full bg-gradient-to-r from-blue-200/5 to-green-200/5 blur-2xl animate-pulse delay-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* 3D Model */}
            <div ref={modelRef} className="absolute z-10">
                <Canvas
                    camera={{ position: [0, 0, 9], fov: 50 }}
                    gl={{
                        antialias: true,
                        powerPreference: "high-performance",
                        preserveDrawingBuffer: false
                    }}
                >
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow={false} />
                    <pointLight position={[-10, -10, -5]} intensity={0.5} />
                    <Model scale={[2.3, 2.3, 2.3]} onAnimationComplete={(fn) => (stopRotationRef.current = fn)} />
                    <OrbitControls
                        ref={orbitControlsRef}
                        enablePan={false}
                        enableZoom={false}
                        enableRotate={!isAnimating}
                        dampingFactor={0.05}
                        enableDamping={true}
                        rotateSpeed={0.5}
                        enabled={false} // Start disabled, will be enabled after animation
                        makeDefault
                        target={[0, 0, 0]}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={3 * Math.PI / 4}
                    />
                </Canvas>
            </div>

            {/* Left Text */}
            <div
                ref={leftTextContainerRef}
                className="absolute left-0 top-0 w-1/3 h-full flex flex-col justify-center px-8 lg:px-16 z-20"
            >
                <div className="mb-8">
                    <h2
                        ref={titleRef}
                        className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight tracking-tight"
                        style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                    >
                        ABOUT NAV
                    </h2>
                </div>

                <div className="space-y-6">
                    <p
                        ref={paragraph1Ref}
                        className="text-base lg:text-lg text-gray-700 leading-relaxed font-light"
                        style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                    >
                        NavWireless Technologies Pvt Ltd (NavTech) is a global leading solutions and services provider of wireless and information communications systems with its own R&D facilities, manufacturing base, and sales and service teams.
                    </p>
                </div>

            </div>


            {/* Right Text and Button */}
            <div
                ref={rightTextContainerRef}
                className="absolute right-0 bottom-0 w-1/3 h-auto flex flex-col justify-start px-8 lg:px-16 z-20 pb-8"
            >
                <p
                    ref={paragraph2Ref}
                    className="text-base lg:text-lg text-gray-700 leading-relaxed font-light"
                    style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                >
                    The company offers a comprehensive suite of products and services including Optical Wireless Communication Systems, Wireless Electricity Transmission Systems, Electronic Tattoos for Healthcare Monitoring, Wireless Enhancement Products, and subsystems and customers.
                </p>
                <div ref={buttonRef} className="pt-4">
                    <button
                        className="group border-2 border-[#95c149] hover:bg-[#95c149] text-gray-700 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200 ease-out transform hover:scale-105"
                        style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                    >
      <span className="flex items-center">
        Discover Our Journey
        <span className="inline-block ml-3 transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
                    </button>
                </div>
            </div>

        </section>
    );
}