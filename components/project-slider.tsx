"use client"

import { useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import { gsap } from "gsap"
import { useEffect } from "react"

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const projects = [
    {
      title: "Valorant Game",
      description: "A Web Site For Valorant Game as a Best Fan Of Valorant Game",
      image: "/project1.png",
      githubLink: "https://github.com/Malshan20/Valorant.git", // GitHub link
    },
    {
      title: "Tesla Clone",
      description: "A nice eye-catching Tesla Clone",
      image: "/project2.png",
      githubLink: "https://github.com/Malshan20/Tesla-clone.git",
    },
    {
      title: "Twitchie",
      description: "A Full-stack youtube clone with paypal payment,metamask integration",
      image: "/project3.png",
      githubLink: "https://github.com/Malshan20/twitchie.git",
    },
  ]

  // GSAP for fade-in effect
  useEffect(() => {
    gsap.fromTo(
      ".project-slide",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
  }, [])

  // React Spring for smooth slide transitions
  const slideProps = useSpring({
    transform: `translateX(-${currentIndex * 100}%)`,
    config: { tension: 200, friction: 20 },
  })

  // Functions to navigate between slides
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full overflow-hidden h-[100vh]">
      <animated.div
        className="flex transition-all duration-1000 ease-in-out"
        style={slideProps}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex-shrink-0 project-slide relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[100vh] object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center">
              <div className="text-center text-white px-6 py-4">
                <h2 className="text-4xl font-semibold mb-4">{project.title}</h2>
                <p className="text-lg">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </animated.div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl z-10 hover:bg-purple-500 transition duration-300 ease-in-out"
      >
        &#60;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-xl z-10 hover:bg-purple-500 transition duration-300 ease-in-out"
      >
        &#62;
      </button>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-purple-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
