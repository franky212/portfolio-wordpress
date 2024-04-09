'use client';
import type { ReactElement } from 'react';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Link from 'next/link';

import Internal from '@/components/common/Internal';
import { Button } from '@/components/ui/button';
import Model from '@/components/common/Model';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function Home(): ReactElement {
  return (
    <Internal hideFooter>
      <div className="flex flex-col justify-center w-full h-screen relative">
        <div className="container relative z-10">
          <h1 className="text-4xl md:text-[64px] mt-24 md:mt-0 text-primary font-sans font-bold leading-none">
            Front End <br />
            Software Engineer
            <br />
            and Web Designer
          </h1>
          <p className="md:w-1/2 text-white my-2">
            Looking to hire a developer, or to get a custom website made?
          </p>
          <Button asChild className="font-bold mr-4 mb-4 min-[384px]:mb-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://bold.pro/my/frank-delaguila?vsid=18199fb7-7d38-44da-92bf-b6f2b37c5fd5"
            >
              Online Resume
            </Link>
          </Button>
          <Button variant={'secondary'} asChild className="font-bold">
            <Link href="/freelance">I need a website made!</Link>
          </Button>
          <div className="flex align-center">
            <Link
              href="https://github.com/franky212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                aria-label="My Github Profile"
                title="My Github Profile"
                className="cusor-pointer p-4 hover:text-primary transition-colors"
                icon={faGithub}
                size="2xl"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/frank-delaguila/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                aria-label="My LinkedIn Profile"
                title="My LinkedIn Profile"
                className="cusor-pointer p-4 hover:text-primary transition-colors"
                icon={faLinkedin}
                size="2xl"
              />
            </Link>
            <a
              href="./Frank_Delaguila_Resume.pdf"
              download="frankdelaguila.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                aria-label="Download my resume!"
                title="Frank Delaguilas Resume"
                className="cusor-pointer p-4 hover:text-primary transition-colors"
                icon={faFileArrowDown}
                size="2xl"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          <Canvas shadows camera={{ position: [4, 2, 2] }}>
            <ambientLight />
            <directionalLight color="white" />
            <Model />
          </Canvas>
        </div>
      </div>
    </Internal>
  );
}
