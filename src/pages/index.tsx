"use client";

import { Canvas } from "@react-three/fiber";
import Link from "next/link";

import Internal from "@/components/common/Internal";
import { Button } from "@/components/ui/button";
import Model from "@/components/common/Model";

export default function Home(): JSX.Element {
  return (
    <Internal hideFooter>
      <div className="flex flex-col justify-center w-full h-screen relative">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-[64px] mt-24 md:mt-0 text-primary font-sans font-bold leading-none">
            Software Engineer
            <br />
            and Web Designer
          </h1>
          <p className="md:w-1/2 opacity-60 text-white my-2">
            Need a custom website? Let&apos;s talk!
          </p>
          <Button asChild>
            <Link href="/freelance">Hiring a freelancer?</Link>
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          <Canvas
            shadows
            camera={{ position: [4, 2, 2] }}
          >
            <ambientLight intensity={0.1} />
            <directionalLight
              color="white"
              position={[0, 5, 5]}
            />
            <Model />
          </Canvas>
        </div>
      </div>
    </Internal>
  );
}
