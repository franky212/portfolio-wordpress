import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";

import Internal from "@/components/common/Internal";

export default function Home(): JSX.Element {
  return (
    <Internal>
      <div className="absolute h-screen w-full top-0 left-0 scene">
        <Canvas
          shadows
          camera={{ position: [4, 2, 2] }}
        >
          <OrbitControls />
          <ambientLight intensity={0.1} />
          <directionalLight
            color="white"
            position={[0, 5, 5]}
          />
          <Plane args={[2, 2]} />
        </Canvas>
      </div>
    </Internal>
  );
}
