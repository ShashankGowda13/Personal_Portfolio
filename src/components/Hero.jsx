import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { FaDownload, FaArrowDown } from 'react-icons/fa'
import DeveloperScene from './DeveloperScene'

const Hero = ({ setActiveSection }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('home')
        }
      },
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [setActiveSection])

  const handleDownloadResume = () => {
    // Download resume PDF from public folder
    // Make sure to place your resume PDF file in the public folder
    const resumePath = '/SHASHANK H N.pdf'
    const encodedPath = resumePath.replace(/ /g, '%20')
    const link = document.createElement('a')
    link.href = encodedPath
    link.download = 'Shashank_HN_Resume.pdf'
    link.target = '_blank'
    
    // Check if file exists, if not show a message
    fetch(encodedPath, { method: 'HEAD' })
      .then((response) => {
        if (response.ok) {
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          alert('Resume file not found. Please add SHASHANK H N.pdf to the public folder.')
        }
      })
      .catch(() => {
        // If fetch fails, try to download anyway
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Hi, I'm Shashank H N
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Full Stack Developer & Creative Problem Solver
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-400 mb-8 max-w-xl"
            >
              Welcome to my portfolio! I'm passionate about creating innovative
              solutions and bringing ideas to life through code.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <FaDownload /> Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-3 border-2 border-purple-500 rounded-lg font-semibold text-purple-400 hover:bg-purple-500/10 transition-all"
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Developer Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[500px] md:h-[600px] w-full relative"
          >
            <Canvas
              camera={{ position: [3, 2, 5], fov: 50 }}
              gl={{ antialias: true }}
            >
              <DeveloperScene />
            </Canvas>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-gray-400 cursor-pointer"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <FaArrowDown className="text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

