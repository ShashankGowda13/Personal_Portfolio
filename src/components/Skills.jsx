import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = ({ setActiveSection }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('skills')
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [setActiveSection])

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 85 },
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Express', icon: <SiExpress />, level: 80 },
        { name: 'Python', icon: <FaPython />, level: 75 },
        { name: 'Java', icon: <FaJava />, level: 70 },
      ],
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
        { name: 'SQL', icon: <FaDatabase />, level: 75 },
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
      ],
    },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 relative"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all"
                  >
                    <div className="text-4xl text-purple-400 mb-4 flex justify-center">
                      {skill.icon}
                    </div>
                    <h4 className="text-center text-white font-semibold mb-2">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      />
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-2">{skill.level}%</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills




