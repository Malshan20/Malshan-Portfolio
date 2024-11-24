"use client"; // Required for GSAP in Next.js

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(CSSPlugin);

export default function Hero() {
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3D Rotation Animation for the Ring
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        rotationY: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }

    // Fade and slide animation for the Hero Text
    if (textRef.current?.children) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <div className="relative bg-white text-gray-800 h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Rotating Ring */}
      <div
        ref={ringRef}
        className="absolute w-96 h-96 border-8 border-purple-500 rounded-full animate-spin-slow transform perspective-500"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="absolute w-full h-full border-8 border-purple-300 rounded-full"
          style={{
            transform: "rotateX(60deg)",
          }}
        ></div>
        <div
          className="absolute w-full h-full border-8 border-purple-300 rounded-full"
          style={{
            transform: "rotateY(60deg)",
          }}
        ></div>
      </div>

      {/* Hero Text */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-4 sm:px-0 max-w-3xl"
      >
        <h1 className="text-5xl font-bold text-gray-800">
          Transform Your <span className="text-purple-600">Vision</span> into
          Reality
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the power of innovation and elevate your digital presence.
        </p>
        <a
          href="#"
          className="mt-8 inline-block bg-purple-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-lg hover:bg-purple-700 hover:scale-105 transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
