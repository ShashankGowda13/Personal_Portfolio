import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = ({ setActiveSection }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('education')
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [setActiveSection])

  const educationData = [
    {
      degree: 'Master Of Computer Application',
      field: 'Computer Science ',
      institution: 'Presidency University Bangalore',
      location: 'Bangalore, Karnataka',
      period: '2025 - 2026',
      description: 'Focused on software development, algorithms, and data structures. Completed various projects in web development and mobile applications.',
      gpa: 'CGPA: 8.1/10',
    },
    {
      degree: 'B.Voc Computer Application',
      field: 'Computer Application',
      institution: 'SDM College Ujire',
      location: 'Ujire, Mangalore',
      period: '2021 - 2024',
      description: 'Completed with focus on Mathematics, Physics, and Chemistry. Active participation in technical competitions.',
      percentage: 'Percentage: 85%',
    },
    {
      degree: 'Secondary Education',
      field: 'PCMC',
      institution: 'BGS PU College',
      location: 'Mudigere, Karnataka',
      period: '2019 - 2021',
      description: 'Strong foundation in mathematics and science. Participated in various extracurricular activities.',
      percentage: 'Percentage: 80%',
    },
  ]

  return (
    <section
      id="education"
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
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-1/2" />

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 z-10" />

                <div
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <FaGraduationCap />
                      <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    </div>
                    <p className="text-xl text-purple-300 mb-4">{edu.field}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaMapMarkerAlt className="text-purple-400" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaMapMarkerAlt className="text-purple-400" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaCalendarAlt className="text-purple-400" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">{edu.description}</p>
                    {(edu.gpa || edu.percentage) && (
                      <p className="text-purple-400 font-semibold">
                        {edu.gpa || edu.percentage}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education




