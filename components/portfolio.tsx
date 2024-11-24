"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

const activities = [
  { id: 1, name: "Certifications", color: "bg-purple-200" },
  { id: 2, name: "Recent Articles", color: "bg-purple-200" },
  { id: 3, name: "Coding Challenges", color: "bg-purple-200" },
  { id: 4, name: "Open Source Contributions", color: "bg-purple-200" },
  { id: 5, name: "Cloud Projects", color: "bg-purple-300" },
]

const timeline = [
  {
    id: 1,
    role: "Full Stack Web Developer",
    company: "Crown-X",
    date: "June 2024 – Present",
    description: "Built and optimized e-commerce platforms using the MERN stack, integrating advanced features to enhance user engagement and streamline transactions.",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Freelancer",
    date: "May 2024 – Present",
    description: "Designed and developed dynamic, user-friendly websites and web applications tailored to client needs using React.js, Node.js, and Tailwind CSS.",
  },

  {
    id: 3,
    role: "Front-end Web Developer",
    company: "Upwork",
    date: "March 2023 – May 2024",
    description: "Implemented dynamic, responsive user interfaces using React.js, HTML5, CSS3, and JavaScript for various clients, optimizing usability and performance.",
  },
]

const education = [
  {
    id: 1,
    degree: "B.Sc. in Software Engineering",
    institution: "Java Institute for Advanced Technology",
    date: "Ongoing",
  },
  {
    id: 2,
    degree: "Associate Degree in Full Stack Development",
    institution: "University of Moratuwa",
    date: "Completed",
  },
  {
    id: 3,
    degree: "Diploma in Information Technology",
    institution: "SITC Campus",
    date: "Completed",
  },
  {
    id: 4,
    degree: "Certificate in Computer Science",
    institution: "edX.org",
    date: "Completed",
  },
]

export default function Portfolio() {
  const [view, setView] = useState("experience") // Default view is experience

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* What I'm Up To Section */}



      {/* Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-center mb-8">MY JOURNEY SO FAR</h2>

        <div className="flex gap-4 justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setView("experience")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${view === "experience" ? "bg-purple-600 text-white" : "bg-purple-300"
              }`}
          >
            Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setView("education")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${view === "education" ? "bg-purple-600 text-white" : "bg-purple-300"
              }`}
          >
            Education
          </motion.button>
        </div>

        {/* Conditional Rendering */}
        {view === "experience" && (
          <div className="relative mb-12">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8"
                    }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg">{item.role}</h3>
                    <p className="text-purple-600 font-medium">{item.company}</p>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        )}

        {view === "education" && (
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-purple-200" />
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8"
                    }`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg">{item.degree}</h3>
                    <p className="text-purple-600 font-medium">{item.institution}</p>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  )
}

