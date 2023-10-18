import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useMediaQuery } from "react-responsive";

export default function Model({ url }: any) {
  const meshRef = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, "/halo_ring/scene.gltf");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useFrame(({ clock }) => {
    meshRef.current.rotation.z = clock.getElapsedTime() * 0.05;
  });
  return (
    <mesh
      ref={meshRef}
      scale={0.082}
      position={[-75, -50, -50]}
      rotation={[0, -0.2, 0]}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
}
