"use client"

import { useEffect, useRef, Suspense, memo, useMemo, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, Html, ContactShadows, Center, Bounds } from "@react-three/drei"

// Aggressive preloading for instant performance
useGLTF.preload("/glb/opticspectra.glb")
useGLTF.preload("/glb/navocular.glb")
useGLTF.preload("/glb/navocular1.glb")

// Memoized 3D Model Component for maximum performance
const Model = memo(({ url, ...props }: { url: string } & any) => {
    const { scene } = useGLTF(url)

    // Memoize the cloned scene to prevent unnecessary re-cloning
    const clonedScene = useMemo(() => {
        const clone = scene.clone()
        // Optimize materials for performance
        clone.traverse((child: any) => {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
                // Optimize material properties
                if (child.material) {
                    child.material.needsUpdate = false
                }
            }
        })
        return clone
    }, [scene])

    return (
        <Center>
            <Bounds fit clip observe margin={1.1}>
                <primitive object={clonedScene} {...props} />
            </Bounds>
        </Center>
    )
})

Model.displayName = "Model"

// Dual Model Component for NavOcular (switches between two models)
const DualModel = memo(
    ({ urls, switchInterval = 4000, ...props }: { urls: string[]; switchInterval?: number } & any) => {
        const [currentModelIndex, setCurrentModelIndex] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentModelIndex((prev) => (prev + 1) % urls.length)
            }, switchInterval)

            return () => clearInterval(interval)
        }, [urls.length, switchInterval])

        return (
            <Center>
                <Bounds fit clip observe margin={1.1}>
                    <group>
                        {urls.map((url, index) => (
                            <group key={url} visible={index === currentModelIndex} {...props}>
                                <Model url={url} />
                            </group>
                        ))}
                    </group>
                </Bounds>
            </Center>
        )
    },
)

DualModel.displayName = "DualModel"

// Ultra-optimized 3D Scene Component
const Scene3D = memo(
    ({ modelUrl, index, isDual = false }: { modelUrl: string | string[]; index: number; isDual?: boolean }) => {
        // Memoize camera settings
        const cameraSettings = useMemo(
            () => ({
                position: [0, 0, 4] as [number, number, number],
                fov: 40,
            }),
            [],
        )

        // Memoize GL settings for maximum performance
        const glSettings = useMemo(
            () => ({
                antialias: false, // Disabled for better performance
                alpha: true,
                powerPreference: "high-performance" as const,
                stencil: false,
                depth: true,
                logarithmicDepthBuffer: false, // Better performance
                precision: "mediump" as const, // Better performance on mobile
            }),
            [],
        )

        return (
            <Canvas
                camera={cameraSettings}
                style={{ width: "100%", height: "100%" }}
                shadows={false} // Disabled shadows for maximum performance
                gl={glSettings}
                frameloop="demand" // Only render when needed
                dpr={[0.5, 1.5]} // Reduced for better performance
                performance={{ min: 0.8 }} // Automatic performance scaling
            >
                <Suspense
                    fallback={
                        <Html center>
                            <div className="flex flex-col items-center space-y-3">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                                <div className="text-gray-600 text-sm font-medium">Loading...</div>
                            </div>
                        </Html>
                    }
                >
                    {/* Ultra-minimal lighting for best performance */}
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[3, 3, 3]} intensity={0.8} />

                    {/* Lightweight environment */}
                    <Environment preset="dawn" background={false} />

                    {/* Minimal contact shadows */}
                    <ContactShadows
                        position={[0, -1.2, 0]}
                        opacity={0.2}
                        scale={6}
                        blur={1}
                        far={2}
                        resolution={128} // Very low for performance
                    />

                    {/* Optimized 3D Model - Single or Dual */}
                    {isDual && Array.isArray(modelUrl) ? (
                        <DualModel urls={modelUrl} switchInterval={5000} />
                    ) : (
                        <Model url={typeof modelUrl === "string" ? modelUrl : modelUrl[0]} />
                    )}

                    {/* Performance-optimized controls */}
                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
                        enableRotate={true}
                        autoRotate={true}
                        autoRotateSpeed={0.8} // Reduced for smoother performance
                        enableDamping={true}
                        dampingFactor={0.05}
                        minDistance={2.5}
                        maxDistance={6}
                        rotateSpeed={0.5}
                        zoomSpeed={0.5}
                        target={[0, 0, 0]}
                        makeDefault
                        regress // Automatically reduce quality when interacting
                    />
                </Suspense>
            </Canvas>
        )
    },
)

Scene3D.displayName = "Scene3D"

export default function HorizontalSection() {
    const containerRef = useRef(null)
    const headerRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const sections = sectionsRef.current.filter(Boolean)

            if (sections.length > 0) {
                const scrollDistance = window.innerWidth * (sections.length - 1)

                // Header visibility animation
                gsap.set(headerRef.current, { opacity: 0, y: -20 })

                gsap.to(headerRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        toggleActions: "play none none reverse",
                        id: "header-visibility",
                    },
                    durationReverse: 0.3,
                })

                // Fade-out animation in the last 20% of horizontal scroll
                gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        scrub: 1,
                        id: "header-fade-out-end",
                        onUpdate: (self) => {
                            if (self.progress > 0.8) {
                                const fadeProgress = (self.progress - 0.8) / 0.2
                                gsap.set(headerRef.current, {
                                    opacity: 1 - fadeProgress,
                                    y: -20 * fadeProgress,
                                })
                            }
                        },
                    },
                })

                // Optimized horizontal scroll animation
                const horizontalTween = gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: true,
                        pinSpacing: true,
                        scrub: 0.8, // Slightly reduced for smoother scrolling
                        snap: {
                            snapTo: 1 / (sections.length - 1),
                            duration: { min: 0.15, max: 0.3 }, // Faster snapping
                            delay: 0.05,
                        },
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        refreshPriority: 10,
                        id: "horizontal-scroll",
                        onComplete: () => {
                            window.horizontalScrollComplete = true
                            ScrollTrigger.refresh()
                        },
                    },
                })

                // Optimized section animations
                sections.forEach((section, index) => {
                    const title = section.querySelector(".section-title")
                    const content = section.querySelector(".section-content")
                    const model3d = section.querySelector(".section-3d")

                    if (title) {
                        gsap.fromTo(
                            title,
                            { y: 40, opacity: 0, scale: 0.95 },
                            {
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                duration: 0.8,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: section,
                                    containerAnimation: horizontalTween,
                                    start: "left center",
                                    end: "center center",
                                    toggleActions: "play none none reverse",
                                },
                            },
                        )
                    }

                    if (content) {
                        gsap.fromTo(
                            content,
                            { y: 50, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                                delay: 0.15,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: section,
                                    containerAnimation: horizontalTween,
                                    start: "left center",
                                    end: "center center",
                                    toggleActions: "play none none reverse",
                                },
                            },
                        )
                    }

                    if (model3d) {
                        gsap.fromTo(
                            model3d,
                            { scale: 0.9, opacity: 0 },
                            {
                                scale: 1,
                                opacity: 1,
                                duration: 1.2,
                                delay: 0.3,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: section,
                                    containerAnimation: horizontalTween,
                                    start: "left center",
                                    end: "center center",
                                    toggleActions: "play none none reverse",
                                },
                            },
                        )
                    }
                })
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    // Memoized sections data with dual models for NavOcular
    const sections = useMemo(
        () => [
            {
                title: "OpticSpectra",
                subtitle: "Adaptive FSO Connectivity for Unstoppable Networks",
                description:
                    "Nav Wireless Technologies delivers adaptive Free Space Optics (FSO) solutions that dynamically adjust bandwidth based on environmental conditions like fog, rain, or interference. Ideal for mission-critical applications, these intelligent links ensure high availability and performance for smart cities, defense, disaster recovery, and enterprise backhaul.",
                model: "/glb/opticspectra.glb",
                isDual: false,
            },
            {
                title: "NavOcular",
                subtitle: "Infrared Intelligence for Interference-Free Connectivity",
                description:
                    "Nav Ocular uses invisible infrared (IR) light via Visible Light Communication (VLC) to provide secure, high-speed wireless communication without relying on RF spectrum. Its mesh network enables seamless data routing, self-healing, and scalability. Ideal for smart buildings, factories, hospitals, and EMI-sensitive areas, Nav Ocular ensures low-latency, interference-free, and secure connectivity for next-gen wireless infrastructure.",
                model: ["/glb/navocular.glb", "/glb/navocular1.glb"], // Both models for NavOcular
                isDual: true,
            },
        ],
        [],
    )

    return (
        <div className="relative">
            {/* Header */}
            <div ref={headerRef} className="fixed top-0 left-0 right-0 text-center py-8 z-20">
                <h1
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 uppercase tracking-wide"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                    OUR INNOVATIONS
                </h1>
            </div>

            {/* Horizontal Scrolling Container */}
            <div
                ref={containerRef}
                className="horizontal-container relative w-full h-screen flex"
                style={{
                    width: `${100 * sections.length}vw`,
                }}
            >
                {/* Minimal overlay for performance */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-white/5 to-white/3"></div>

                {sections.map((section, index) => {
                    return (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) sectionsRef.current[index] = el
                            }}
                            className="horizontal-section w-screen h-screen flex items-center flex-shrink-0 relative"
                        >
                            {/* Minimal background gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${
                                    index === 0 ? "from-blue-500/8 to-cyan-500/8" : "from-purple-500/8 to-pink-500/8"
                                } opacity-50`}
                            ></div>

                            <div className="container mx-auto px-8 flex flex-col items-center gap-8 relative z-10 pt-8">
                                <div className="w-full max-w-7xl">
                                    <div className="flex flex-col lg:flex-row items-center gap-16">
                                        {/* Content Side */}
                                        <div className="w-full lg:w-1/2 space-y-6">
                                            <div className="section-title">
                                                <h2
                                                    className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4"
                                                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                                >
                                                    {section.title}
                                                </h2>
                                                <h3
                                                    className="text-xl lg:text-2xl text-gray-700 font-normal leading-relaxed mb-6"
                                                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                                >
                                                    {section.subtitle}
                                                </h3>
                                            </div>

                                            <div className="section-content space-y-6">
                                                <p
                                                    className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg"
                                                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                                >
                                                    {section.description}
                                                </p>

                                                {/* Model indicator for NavOcular */}
                                                {section.isDual && (
                                                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                        <div className="flex space-x-1">
                                                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                                            <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-75"></div>
                                                        </div>
                                                        <span>Dual Model View</span>
                                                    </div>
                                                )}

                                                <div className="pt-4">
                                                    <button
                                                        className="group border-2 border-green-600 hover:bg-green-600 text-gray-700 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200 ease-out transform hover:scale-105"
                                                        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                                    >
                                                        <span>Learn More</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Ultra-optimized 3D Model Side */}
                                        <div className="w-full lg:w-1/2 section-content">
                                            <div className="section-3d relative w-full h-96 lg:h-[480px] max-w-lg mx-auto">
                                                <Scene3D modelUrl={section.model} index={index} isDual={section.isDual} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
