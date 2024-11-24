"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'

export default function AnimatedHeader() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm"
    >
      <div className="text-sm font-medium">© Coded by Malshan Dissanayaka</div>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Malshan20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <Button className="bg-black text-white hover:bg-gray-800">
          <a href="mailto:malshandissanayaka246@gmail.com"
          target="_blank">
          Get in touch
          </a>
        </Button>
      </div>
    </header>
  )
}

