import React, { Suspense, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";

interface GLBModelViewerProps {
  modelPath: string;
  className?: string;
  style?: React.CSSProperties;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath, true);
  React.useEffect(() => {
    return () => {
      scene.traverse((object: any) => {
        if (object.isMesh) {
          object.geometry.dispose();
          if (object.material.isMaterial) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach((m: any) => m.dispose());
          }
        }
      });
    };
  }, [scene]);
  return <primitive object={scene} dispose={null} />;
}

export default function GLBModelViewer({
  modelPath,
  className,
  style,
  autoRotate = false,
  autoRotateSpeed = 1,
}: GLBModelViewerProps) {
  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        ...style,
        minHeight: 300,
        minWidth: 300,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, preserveDrawingBuffer: false }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
        />
      </Canvas>
    </div>
  );
}

// Required for GLTF loader
useGLTF.preload = (url: string) => {
  useGLTF(url, true);
};
