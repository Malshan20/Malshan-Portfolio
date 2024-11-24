"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SiteReliability() {
  const textRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current?.innerText.split("") || [];

      // Clear the original text
      if (textRef.current) {
        textRef.current.innerHTML = "";
      }

      // Create a span for each character
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        textRef.current?.appendChild(span);
      });

      // Animate each character
      if (textRef.current) {
        gsap.to(Array.from(textRef.current.children), {
          opacity: 1,
          y: 0,
          duration: 0.05,
          stagger: 0.05,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Add 3D rotation for the ring
    if (ringRef.current) {
      gsap.to(ringRef.current, {
        rotationY: 360,
        duration: 10,
        repeat: -1,
        ease: "linear",
      });
    }

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-white text-gray-800 h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Rotating Ring */}
      <div
        ref={ringRef}
        className="absolute w-96 h-96 border-8 border-purple-500 rounded-full transform perspective-500"
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

      {/* Text Animation */}
      <div className="relative z-10 text-center px-4 sm:px-0 max-w-3xl">
      <h1 className="text-5xl font-extrabold text-center my-8 bg-gradient-to-r from-red-500 via-red-300 to-yellow-500 bg-clip-text text-transparent font-serif">
          Malshan Dissanayaka
        </h1>
        <div
          ref={textRef}
          className="text-4xl font-light tracking-wider text-gray-800"
          aria-label="Site Reliability"
        >
          Full-stack&nbsp;Web&nbsp;Developer
        </div>
        <div className="absolute top-0 -right-4 w-1 h-full bg-purple-600 animate-pulse"></div>
      </div>
    </div>
  );
}
