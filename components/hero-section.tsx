"use client"

import { useEffect, useRef, useState, Suspense, memo, useMemo } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls, Environment, Html, ContactShadows, Center, Bounds, Float, Text3D, PresentationControls } from "@react-three/drei"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import * as THREE from "three"

// Model paths
const MODEL_PATHS = {
  light: "/glb/navocular.glb",
  dongle: "/glb/navocular1.glb",
  fso: "/glb/opticspectra.glb",
  // Add these for horizontal-section.tsx
  opticspectra: "/glb/opticspectra.glb",
  navocular: "/glb/navocular.glb",
  navocular1: "/glb/navocular1.glb"
}

// Optimize the scenes with performance enhancements
const optimizeScene = (scene: THREE.Scene) => {
  const clone = scene.clone()
  clone.traverse((child: any) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      if (child.material) {
        child.material.needsUpdate = false
        // Optimize textures
        if (child.material.map) {
          child.material.map.minFilter = 1003 // LinearFilter
          child.material.map.magFilter = 1003 // LinearFilter
          child.material.map.anisotropy = 1
        }
      }
    }
  })
  return clone
}

// Animated 3D Scene Component
const Scene3D = memo(({ activeModel, showIntro, ...props }: { activeModel: number, showIntro: boolean }) => {
  const modelContainerRef = useRef<THREE.Group>(null);
  const modelRefs = useRef<THREE.Object3D[]>([]);
  
  // Preload models for better performance
  useEffect(() => {
    useGLTF.preload(MODEL_PATHS.light);
    useGLTF.preload(MODEL_PATHS.dongle);
    useGLTF.preload(MODEL_PATHS.fso);
  }, []);
  
  // Load the 3D models
  const lightModel = useGLTF(MODEL_PATHS.light);
  const dongleModel = useGLTF(MODEL_PATHS.dongle);
  const fsoModel = useGLTF(MODEL_PATHS.fso);
  
  // Get the scene from each model
  const lightScene = Array.isArray(lightModel) ? lightModel[0].scene : lightModel.scene;
  const dongleScene = Array.isArray(dongleModel) ? dongleModel[0].scene : dongleModel.scene;
  const fsoScene = Array.isArray(fsoModel) ? fsoModel[0].scene : fsoModel.scene;
  
  // Optimize the scenes with useMemo for better performance
  const optimizedScenes = useMemo(() => {
    return [
      optimizeScene(lightScene),
      optimizeScene(dongleScene),
      optimizeScene(fsoScene)
    ];
  }, [lightScene, dongleScene, fsoScene]);
  
  // Define positions for intro animation - create a more interesting arrangement
  const introPositions = [
    [-2.5, 0.5, 0.5],  // Light - slightly elevated and forward
    [0, -0.3, -0.5],   // Dongle - slightly lower and back
    [2.5, 0.2, 0.2]    // FSO - slightly elevated and forward
  ];
  
  // Define rotations for intro animation
  const introRotations = [
    [0, -Math.PI / 6, 0],  // Light - slight turn inward
    [0, 0, 0],             // Dongle - centered
    [0, Math.PI / 6, 0]     // FSO - slight turn inward
  ];
  
  // Define scales for models
  const modelScales = [
    0.7,  // Light (increased size)
    0.65, // Dongle (slightly smaller)
    0.75  // FSO (slightly larger)
  ];
  
  // Camera and GL settings for performance
  const cameraSettings = useMemo(() => ({
    position: [0, 0, 5] as [number, number, number],
    fov: 35,
  }), [])

  const glSettings = useMemo(() => ({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance" as const,
    stencil: false,
    depth: true,
  }), [])

  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={cameraSettings}
        style={{ width: "100%", height: "100%" }}
        shadows
        gl={glSettings}
        dpr={[1, 2]}
      >
        <Suspense fallback={
          <Html center>
            <div className="flex flex-col items-center space-y-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <div className="text-white text-sm font-medium">Loading amazing experience...</div>
            </div>
          </Html>
        }>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
          <Environment preset="sunset" background={false} />
          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={3}
            resolution={256}
          />
          
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Float
              speed={2}
              rotationIntensity={0.5}
              floatIntensity={0.5}
              floatingRange={[0, 0.5]}
            >
              <group ref={modelContainerRef} position={[0, 0, 0]} userData={{ id: "model-container" }}>
                {optimizedScenes.map((scene, index) => {
                  // Only show the active model during normal operation, or all models during intro
                  const isVisible = showIntro || index === activeModel;
                  
                  // Position based on whether we're in intro mode or not
                  const position = showIntro ? introPositions[index] : [0, 0, 0];
                  
                  // Rotation based on whether we're in intro mode or not
                  const rotation = showIntro ? introRotations[index] : [0, 0, 0];
                  
                  // Apply different scales to each model
                  const scale = modelScales[index];
                  
                  return isVisible ? (
                    <primitive 
                      key={index}
                      object={scene} 
                      position={position as [number, number, number]}
                      scale={scale} 
                      rotation={rotation as [number, number, number]}
                      ref={(el: THREE.Object3D) => {
                        if (el) modelRefs.current[index] = el;
                      }}
                      className="primitive"
                    />
                  ) : null;
                })}
              </group>
            </Float>
          </PresentationControls>
        </Suspense>
      </Canvas>
      
      {/* Interactive indicator */}
      <div className="absolute bottom-4 right-4 text-white text-sm flex items-center space-x-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <svg
          className="w-5 h-5 animate-spin-slow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <span>Interactive 3D</span>
      </div>
    </div>
  )
})

Scene3D.displayName = "Scene3D"

export default function HeroSection() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const modelContainerRef = useRef(null)
  const [activeModel, setActiveModel] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  // Handle model switching with animation
  const switchModel = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    
    gsap.to(modelContainerRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setActiveModel(index)
        gsap.to(modelContainerRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          onComplete: () => setIsAnimating(false)
        })
      }
    })
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

    // Auto-switch models every 8 seconds, but only after intro animation is complete
    let interval: NodeJS.Timeout | null = null;
    
    if (!showIntro) {
      interval = setInterval(() => {
        if (!isAnimating) {
          switchModel((activeModel + 1) % 3)
        }
      }, 8000)
    }

    // Initial animations
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { 
        y: 100, 
        opacity: 0 
      })
      
      gsap.set(modelContainerRef.current, { 
        scale: 0.5, 
        opacity: 0,
        y: 50
      })

      // Entrance animation
      const tl = gsap.timeline({ delay: 0.5 })
      
      // Text animations
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.7")
      
      // Model container reveal
      .to(modelContainerRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out"
      }, "-=0.8")
      
      // CTA buttons
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      
      // Intro animation sequence
      if (showIntro) {
        // Create a more dramatic intro with all models
        tl.add("intro")
          // Add a dramatic background pulse
          .to(".bg-gradient-to-br", {
            opacity: 0.8,
            background: "linear-gradient(to bottom right, #000066, #000033, #000000)",
            duration: 2,
            ease: "power2.inOut"
          }, "intro")
          
          // Rotate and scale the model container
          .to(modelContainerRef.current, {
            rotateY: 360,
            scale: 1.2,
            duration: 6,
            ease: "power1.inOut"
          }, "intro")
          
          // Add dramatic particle effects
          .to(".particle", {
            opacity: 0.9,
            scale: 4,
            duration: 0.7,
            stagger: 0.05,
            repeat: 5,
            yoyo: true,
            ease: "power2.inOut"
          }, "intro+=0.5")
          
          // Add text glow effect
          .to(titleRef.current, {
            textShadow: "0 0 15px rgba(0, 150, 255, 0.8)",
            duration: 1,
            repeat: 3,
            yoyo: true,
            ease: "power2.inOut"
          }, "intro+=1")
          
          // Add some model movement
          .to("#model-container .primitive", {
            y: "-=0.5",
            duration: 2,
            stagger: 0.3,
            repeat: 2,
            yoyo: true,
            ease: "power1.inOut"
          }, "intro+=1.5")
          
          // Add a dramatic flash before transition
          .to(".bg-gradient-to-br", {
            opacity: 1,
            background: "white",
            duration: 0.2,
            ease: "power4.in"
          }, "intro+=5.5")
          .to(".bg-gradient-to-br", {
            opacity: 0.7,
            background: "linear-gradient(to bottom right, #000000, #000033, #000000)",
            duration: 0.5,
            ease: "power2.out"
          }, "intro+=5.7")
          
          // End intro and transition to regular slideshow
          .to(modelContainerRef.current, {
            opacity: 0,
            scale: 0.7,
            duration: 0.8,
            ease: "power3.in",
            onComplete: () => {
              setShowIntro(false);
              setActiveModel(0);
            }
          }, "intro+=6")
          .to(modelContainerRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)"
          }, "intro+=7")
      }

      // Scroll animation
      gsap.to(heroRef.current, {
        opacity: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })

      // Parallax effect on model
      gsap.to(modelContainerRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
    }, heroRef)

    return () => {
      if (interval) clearInterval(interval)
      ctx.revert()
    }
  }, [activeModel, isAnimating, showIntro])

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Dynamic background with gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/30 to-black/90 z-0" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Revolutionary</span> Optical Wireless Communication
          </h1>
          
          <p 
            ref={subtitleRef} 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            Experience the future of connectivity with NavTech's cutting-edge LiFi and Free Space Optical Communication solutions.
          </p>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Explore Products
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
          
          {/* Model selector */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            {["NavOcular Light", "NavOcular Dongle", "OpticSpectra"].map((name, index) => (
              <button
                key={index}
                onClick={() => switchModel(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeModel === index ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
        
        {/* 3D Model container */}
        <div 
          ref={modelContainerRef} 
          className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <Scene3D activeModel={activeModel} showIntro={showIntro} />
        </div>
      </div>
    </section>
  )
}
