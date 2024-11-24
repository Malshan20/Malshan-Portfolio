"use client"

import { useEffect } from "react"
import { gsap } from "gsap"

export default function AboutMe() {
  useEffect(() => {
    // Parallax Text Effect
    gsap.to(".parallax-text", {
      y: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: ".about-me-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    // Fade-in Animations for Text
    gsap.fromTo(
      ".fade-in-text",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-me-container",
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Hover Effect on Image
    gsap.fromTo(
      ".about-me-image",
      { scale: 1 },
      {
        scale: 1.1,
        ease: "power3.out",
        duration: 0.3,
        paused: true,
        scrollTrigger: {
          trigger: ".about-me-image",
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [])

  return (

    
    <section className="relative py-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-white overflow-hidden">
      {/* Parallax Text */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 parallax-text text-7xl font-extrabold text-center opacity-30">
        {/* <span>About Me</span> */}
      </div>

      <div className="about-me-container container mx-auto px-6">
        {/* Content */}
        <div className="lg:flex items-center space-x-12">
          {/* Text Section */}
          <div className="fade-in-text lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-semibold">Hello, I'm Malshan Dissanayaka</h2>
            <p className="text-lg">
              I'm a passionate full-stack developer with experience in building beautiful, functional, and
              scalable web applications. My expertise lies in building seamless user interfaces and powerful
              back-end systems.
            </p>
            <p className="text-lg">
              I am always excited to learn new technologies and improve my skills. With a strong foundation in
              problem-solving, I bring a keen attention to detail and a creative approach to development.
            </p>
            <button className="bg-purple-600 px-6 py-3 rounded-full text-lg hover:bg-purple-700 transition duration-300">
                <a href="http://linkedin.com/in/malshan-dissanayaka" 
                target="_blank">
              Contact Me
              </a>
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/me.png"
              alt="Malshan Dissanayaka"
              className="about-me-image rounded-full w-64 h-67 object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
