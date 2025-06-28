"use client"

import { useEffect, useRef, Suspense, memo, useMemo, useState, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, Html, ContactShadows, Center, Bounds } from "@react-three/drei"
import * as THREE from "three"

// Model paths for preloading
const MODEL_PATHS = {
  opticspectra: "/glb/opticspectra.glb",
  navocular: "/glb/navocular.glb",
  navocular1: "/glb/navocular1.glb"
}

// Preload models inside a component to avoid URL errors
const PreloadModels = () => {
    useEffect(() => {
        // Preload models with priority
        useGLTF.preload(MODEL_PATHS.opticspectra)
        useGLTF.preload(MODEL_PATHS.navocular)
        useGLTF.preload(MODEL_PATHS.navocular1)
    }, [])
    
    return null
}

// Memoized 3D Model Component with maximum optimization
const Model = memo(({ url, ...props }: { url: string } & any) => {
    const gltf = useGLTF(url, true, true) // Enable draco compression and skip non-visible meshes
    // Ensure we're working with a GLTF object that has a scene property
    const scene = (Array.isArray(gltf) ? gltf[0] : gltf).scene

    // Memoize the cloned scene with aggressive optimization
    const clonedScene = useMemo(() => {
        const clone = scene.clone()
        clone.traverse((child: THREE.Object3D) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh
                mesh.castShadow = true
                mesh.receiveShadow = true
                if (mesh.material) {
                    const material = mesh.material as THREE.Material
                    material.needsUpdate = false
                    // Reduce texture memory
                    if ((material as THREE.MeshStandardMaterial).map) {
                        const map = (material as THREE.MeshStandardMaterial).map
                        if (map) {
                            map.minFilter = THREE.LinearFilter
                            map.magFilter = THREE.LinearFilter
                            map.anisotropy = 1 // Minimum anisotropy
                        }
                    }
                }
            }
        })
        return clone
    }, [scene])

    return (
        <Center>
            <Bounds fit clip observe margin={1.5}> {/* Increased margin for larger models */}
                <primitive object={clonedScene} {...props} scale={[3.5, 3.5, 3.5]} />
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
                        {urls.map((url: string, index: number) => (
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
                            enableZoom={false} // Disable zooming to fix the 3D asset
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
    
    // Preload models to avoid URL errors
    useEffect(() => {
        // Preload models with priority
        useGLTF.preload(MODEL_PATHS.opticspectra)
        useGLTF.preload(MODEL_PATHS.navocular)
        useGLTF.preload(MODEL_PATHS.navocular1)
    }, [])

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
                    onComplete: () => {
                        // Add horizontalScrollComplete property to window object
                        (window as any).horizontalScrollComplete = true
                        ScrollTrigger.refresh()
                    },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: true,
                        pinSpacing: true,
                        scrub: 0.6,
                        snap: {
                            snapTo: 1 / (sections.length - 1),
                            duration: { min: 0.1, max: 0.2 },
                            delay: 0.03,
                        },
                        start: "top top",
                        end: () => `+=${scrollDistance}`,
                        refreshPriority: 10,
                        id: "horizontal-scroll",
                        // Remove fastRefresh property as it's not recognized
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
                                    // Remove fastRefresh property as it's not recognized
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
                                    // Remove fastRefresh property as it's not recognized
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
                                    // Remove fastRefresh property as it's not recognized
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
                model: MODEL_PATHS.opticspectra,
                isDual: false,
            },
            {
                title: "NavOcular",
                subtitle: "Infrared Intelligence for Interference-Free Connectivity",
                description:
                    "Nav Ocular uses invisible infrared (IR) light via Visible Light Communication (VLC) to provide secure, high-speed wireless communication without relying on RF spectrum. Its mesh network enables seamless data routing, self-healing, and scalability. Ideal for smart buildings, factories, hospitals, and EMI-sensitive areas, Nav Ocular ensures low-latency, interference-free, and secure connectivity for next-gen wireless infrastructure.",
                model: [MODEL_PATHS.navocular, MODEL_PATHS.navocular1],
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
                                                className="text-[2.0rem] lg:text-[2.5rem] xl:text-[2.5rem] font-bold text-gray-900 leading-tight mb-4"
                                                style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
                                            >
                                                {section.title}
                                            </h2>
                                            <h3
                                                className="text-xl lg:text-2xl text-gray-700 font-light leading-relaxed mb-6"
                                                style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
                                            >
                                                {section.subtitle}
                                            </h3>
                                        </div>

                                        <div className="section-content space-y-6">
                                            <p
                                                className="text-[1.0rem] lg:text-[1.0rem] text-gray-700 font-light leading-relaxed max-w-lg"
                                                style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
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
                                                    className="group border-2 border-[#95c149] hover:bg-[#95c149] text-gray-700 hover:text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-200 ease-out transform hover:scale-105"
                                                    style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}
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