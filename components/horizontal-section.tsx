"use client"

import { useEffect, useRef, Suspense, memo, useMemo, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, Html, ContactShadows, Center, Bounds } from "@react-three/drei"

// Aggressive preloading with priority
useGLTF.preload("/glb/opticspectra.glb", { priority: 1 })
useGLTF.preload("/glb/navocular.glb", { priority: 2 })
useGLTF.preload("/glb/navocular1.glb", { priority: 2 })

// Memoized 3D Model Component with maximum optimization
const Model = memo(({ url, ...props }: { url: string } & any) => {
    const { scene } = useGLTF(url, true, true) // Enable draco compression and skip non-visible meshes

    // Memoize the cloned scene with aggressive optimization
    const clonedScene = useMemo(() => {
        const clone = scene.clone()
        clone.traverse((child: any) => {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
                if (child.material) {
                    child.material.needsUpdate = false
                    // Reduce texture memory
                    if (child.material.map) {
                        child.material.map.minFilter = 1003 // LinearFilter
                        child.material.map.magFilter = 1003 // LinearFilter
                        child.material.map.anisotropy = 1 // Minimum anisotropy
                    }
                }
            }
        })
        return clone
    }, [scene])

    return (
        <Center>
            <Bounds fit clip observe margin={1.2}> {/* Increased margin for larger models */}
                <primitive object={clonedScene} {...props} scale={[2.5, 2.5, 2.5]} />
            </Bounds>
        </Center>
    )
})

Model.displayName = "Model"

// Dual Model Component with optimized switching
const DualModel = memo(
    ({ urls, switchInterval = 5000, onModelChange, ...props }: { urls: string[]; switchInterval?: number; onModelChange?: (index: number) => void } & any) => {
        const [currentModelIndex, setCurrentModelIndex] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentModelIndex((prev) => {
                    const nextIndex = (prev + 1) % urls.length
                    onModelChange?.(nextIndex)
                    return nextIndex
                })
            }, switchInterval)

            return () => clearInterval(interval)
        }, [urls.length, switchInterval, onModelChange])

        return (
            <Center>
                <Bounds fit clip observe margin={1.2}>
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
    ({ modelUrl, index, isDual = false, onModelChange }: { modelUrl: string | string[]; index: number; isDual?: boolean; onModelChange?: (index: number) => void }) => {
        // Memoize camera settings
        const cameraSettings = useMemo(
            () => ({
                position: [0, 0, 5] as [number, number, number],
                fov: 35, // Reduced FOV for performance
            }),
            [],
        )

        // Memoize GL settings for maximum performance
        const glSettings = useMemo(
            () => ({
                antialias: false,
                alpha: true,
                powerPreference: "high-performance" as const,
                stencil: false,
                depth: true,
                logarithmicDepthBuffer: false,
                precision: "lowp" as const, // Lower precision for better mobile performance
            }),
            [],
        )

        return (
            <div className="relative w-full h-full">
                <Canvas
                    camera={cameraSettings}
                    style={{ width: "100%", height: "100%" }}
                    shadows={false}
                    gl={glSettings}
                    frameloop="demand"
                    dpr={[0.5, 1]} // Tighter DPR range for performance
                    performance={{ min: 0.7 }} // More aggressive performance scaling
                >
                    <Suspense
                        fallback={
                            <Html center>
                                <div className="flex flex-col items-center space-y-2">
                                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                                    <div className="text-gray-600 text-xs font-medium">Loading...</div>
                                </div>
                            </Html>
                        }
                    >
                        <ambientLight intensity={0.5} /> {/* Reduced intensity */}
                        <directionalLight position={[3, 3, 3]} intensity={0.7} />
                        <Environment preset="dawn" background={false} resolution={256} /> {/* Lower resolution */}
                        <ContactShadows
                            position={[0, -1.2, 0]}
                            opacity={0.15} // Reduced opacity
                            scale={8}
                            blur={1}
                            far={2}
                            resolution={64} // Even lower resolution
                        />
                        {isDual && Array.isArray(modelUrl) ? (
                            <DualModel urls={modelUrl} switchInterval={5000} onModelChange={onModelChange} />
                        ) : (
                            <Model url={typeof modelUrl === "string" ? modelUrl : modelUrl[0]} />
                        )}
                        <OrbitControls
                            enableZoom={true}
                            enablePan={false}
                            enableRotate={true}
                            autoRotate={true}
                            autoRotateSpeed={1.2} // Normal rotation speed
                            enableDamping={true}
                            dampingFactor={0.03} // Reduced for smoother motion
                            minDistance={3}
                            maxDistance={7}
                            rotateSpeed={0.4} // Slightly reduced
                            zoomSpeed={0.4}
                            target={[0, 0, 0]}
                            makeDefault
                            regress
                        />
                    </Suspense>
                </Canvas>
                {/* 360° Icon */}
                <div className="absolute bottom-4 right-4 text-gray-500 text-sm flex items-center space-x-2">
                    <svg
                        className="w-6 h-6 animate-spin" // Normal spin
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 12a8 8 0 0116 0 8 8 0 01-16 0zm8-8v2m0 12v2m8-8h-2m-12 0H4"
                        />
                    </svg>
                    <span>360° View</span>
                </div>
            </div>
        )
    },
)

Scene3D.displayName = "Scene3D"

export default function HorizontalSection() {
    const containerRef = useRef(null)
    const headerRef = useRef(null)
    const sectionsRef = useRef<HTMLDivElement[]>([])
    const [currentNavOcularModel, setCurrentNavOcularModel] = useState(0)

    // Optimize GSAP animations with useCallback
    const animateSections = useCallback(() => {
        if (typeof window === "undefined") return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            const sections = sectionsRef.current.filter(Boolean)

            if (sections.length > 0) {
                const scrollDistance = window.innerWidth * (sections.length - 1)

                gsap.set(headerRef.current, { opacity: 0, y: -20 })
                gsap.to(headerRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4, // Faster animation
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        toggleActions: "play none none reverse",
                        id: "header-visibility",
                    },
                })

                gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        scrub: 0.6, // Faster scrub
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

                const horizontalTween = gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: true,
                        pinSpacing: true,
                        scrub: 0.6,
                        snapbygg: {
                            snapTo: 1 / (sections.length - 1),
                            duration: { min: 0.1, max: 0.2 },
                            delay: 0.03,
                        },
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        refreshPriority: 10,
                        id: "horizontal-scroll",
                        fastRefresh: true, // Optimize ScrollTrigger refresh
                        onComplete: () => {
                            window.horizontalScrollComplete = true
                            ScrollTrigger.refresh()
                        },
                    },
                })

                sections.forEach((section, index) => {
                    const title = section.querySelector(".section-title")
                    const content = section.querySelector(".section-content")
                    const model3d = section.querySelector(".section-3d")

                    if (title) {
                        gsap.fromTo(
                            title,
                            { y: 30, opacity: 0, scale: 0.97 },
                            {
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                duration: 0.6, // Faster animation
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: section,
                                    containerAnimation: horizontalTween,
                                    start: "left center",
                                    end: "center center",
                                    toggleActions: "play none none reverse",
                                    fastRefresh: true,
                                },
                            },
                        )
                    }

                    if (content) {
                        gsap.fromTo(
                            content,
                            { y: 40, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.8,
                                delay: 0.1,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: section,
                                    containerAnimation: horizontalTween,
                                    start: "left center",
                                    end: "center center",
                                    toggleActions: "play none none reverse",
                                    fastRefresh: true,
                                },
                            },
                        )
                    }

                    if (model3d) {
                        gsap.fromTo(
                            model3d,
                            { scale: 0.95, opacity: 0 },
                            {
                                scale: 1,
                                opacity: 1,
                                duration: 1,
                                delay: 0.2,
                                ease: "power2.out",
                                scrollTrigger: {
                                    trigger: section,
                                    containerAnimation: horizontalTween,
                                    start: "left center",
                                    end: "center center",
                                    toggleActions: "play none none reverse",
                                    fastRefresh: true,
                                },
                            },
                        )
                    }
                })
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    useEffect(() => {
        animateSections()
    }, [animateSections])

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
                model: ["/glb/navocular.glb", "/glb/navocular1.glb"],
                isDual: true,
            },
        ],
        [],
    )

    const handleModelSwitch = useCallback((index: number) => {
        setCurrentNavOcularModel(index)
    }, [])

    return (
        <div className="relative">
            <div ref={headerRef} className="fixed top-0 left-0 right-0 text-center py-8 z-20">
                <h1
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 uppercase tracking-wide"
                    style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                >
                    OUR INNOVATIONS
                </h1>
            </div>

            <div
                ref={containerRef}
                className="horizontal-container relative w-full h-screen flex"
                style={{
                    width: `${100 * sections.length}vw`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/3 via-white/5 to-white/3"></div>

                {sections.map((section, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) sectionsRef.current[index] = el
                        }}
                        className="horizontal-section w-screen h-screen flex items-center flex-shrink-0 relative"
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${
                                index === 0 ? "from-blue-500/8 to-cyan-500/8" : "from-purple-500/8 to-pink-500/8"
                            } opacity-50`}
                        ></div>

                        <div className="container mx-auto px-8 flex flex-col items-center gap-8 relative z-10 pt-8">
                            <div className="w-full max-w-7xl">
                                <div className="flex flex-col lg:flex-row items-center gap-16">
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

                                            {section.isDual && (
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex space-x-1">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                                                        <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-75"></div>
                                                    </div>
                                                    <span className="text-sm text-gray-500">Dual Model View</span>
                                                    <div className="flex space-x-2">
                                                        <button
                                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                                currentNavOcularModel === 0
                                                                    ? "bg-purple-500 text-white"
                                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                            }`}
                                                            onClick={() => handleModelSwitch(0)}
                                                        >
                                                            Model 1
                                                        </button>
                                                        <button
                                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                                                                currentNavOcularModel === 1
                                                                    ? "bg-purple-500 text-white"
                                                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                                            }`}
                                                            onClick={() => handleModelSwitch(1)}
                                                        >
                                                            Model 2
                                                        </button>
                                                    </div>
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

                                    <div className="w-full lg:w-1/2 section-content">
                                        <div className="section-3d relative w-full h-[480px] lg:h-[600px] max-w-xl mx-auto">
                                            <Scene3D
                                                modelUrl={section.model}
                                                index={index}
                                                isDual={section.isDual}
                                                onModelChange={section.isDual ? setCurrentNavOcularModel : undefined}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}




