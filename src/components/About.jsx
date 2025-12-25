import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaCode, FaRocket } from 'react-icons/fa'

const About = ({ setActiveSection }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('about')
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [setActiveSection])

  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: <FaRocket />,
      title: 'Fast Delivery',
      description: 'Efficient development process ensuring timely project completion',
    },
    {
      icon: <FaUser />,
      title: 'Team Player',
      description: 'Collaborative approach with excellent communication skills',
    },
  ]

  return (
    <section
      id="about"
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Hello! I'm Shashank H N</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate developer with a strong foundation in modern web technologies.
              I love creating innovative solutions and turning complex problems into simple,
              beautiful, and intuitive designs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or working on personal projects that challenge me to
              grow as a developer.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="px-4 py-2 bg-purple-600/20 border border-purple-500 rounded-full text-purple-300">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-pink-600/20 border border-pink-500 rounded-full text-pink-300">
                Creative Thinker
              </span>
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500 rounded-full text-blue-300">
                Tech Enthusiast
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all"
              >
                <div className="text-4xl text-purple-400 mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About




