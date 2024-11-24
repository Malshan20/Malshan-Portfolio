"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Skill {
  id: number
  name: string
  x: number
  y: number
  delay: number
}

const skills: Skill[] = [
  { id: 1, name: "Front-End Development", x: -300, y: -220, delay: 0.2 },
  { id: 2, name: "React.js, HTML5, CSS3, JavaScript", x: 100, y: -250, delay: 0.3 },
  { id: 3, name: "Bootstrap, Tailwind CSS, GSAP, Vite", x: 400, y: -200, delay: 0.4 },
  { id: 4, name: "Back-End Development", x: 500, y: 100, delay: 0.5 },
  { id: 5, name: "Node.js, Express.js, Next.js, PHP", x: 150, y: 210, delay: 0.6 },
  { id: 6, name: "Database Management", x: -100, y: 400, delay: 0.7 },
  { id: 7, name: "MySQL, MongoDB, Docker", x: -600, y: 50, delay: 0.8 },
  { id: 8, name: "MERN Stack, Python, RESTful API Development", x: -350, y: 250, delay: 1.0 },
]

export default function AnimatedSkills() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-50 overflow-hidden">
      <AnimatePresence>
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ 
              opacity: 0,
              x: 0,
              y: 0,
              scale: 0.5
            }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              x: isExpanded ? skill.x : 0,
              y: isExpanded ? skill.y : 0,
              scale: isExpanded ? 1 : 0.5,
            }}
            exit={{ 
              opacity: 0,
              x: 0,
              y: 0,
              scale: 0.5
            }}
            transition={{
              duration: 0.8,
              delay: skill.delay,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className="absolute flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: skill.delay,
              }}
              className="bg-white rounded-full shadow-lg p-6 w-40 h-40 flex items-center justify-center text-center"
            >
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute z-10 bg-purple-400 hover:bg-purple-500 text-white font-bold py-8 px-12 rounded-xl shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">
          {isExpanded ? "COLLAPSE MY SKILLS!" : "TAP HERE TO UNBOX MY SKILLS!"}
        </span>
      </motion.button>
    </div>
  )
}

