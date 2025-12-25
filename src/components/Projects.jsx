import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa'
import movieProjectImage from '../img/movie_project.png'
import brainTumorDetectionImage from '../img/Brain.png'
import portfolioWebsiteImage from '../img/port.png'
import weatherDashboardImage from '../img/Weather.png'
import androidImage from '../img/android.png'




const Projects = ({ setActiveSection }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('projects')
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [setActiveSection])

  const projects = [
    {
      title: 'E-Commerce Platform Movie Ticket Booking System',
      description: 'A full-stack e-commerce solution with A modern movie ticket booking platform that lets users explore movies, view trailers, select seats in real time, and book tickets seamlessly through a visually engaging and user-friendly interface. authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js',  'Express', 'Stripe'],
      githubUrl: 'https://github.com/ShashankGowda13/Project-FullStack',
      liveUrl: 'https://project-full-stack-ten.vercel.app/',
      image: movieProjectImage
    },
    {
      title: 'Brain Tumor Detection System',
      description: 'A brain tumor detection system that uses deep learning to analyze MRI images, accurately classify tumor types, and assist doctors with early diagnosis through an intuitive and efficient interface.',
      technologies: ['Python', 'TypeScript', 'Firebase', 'TensorFlow','Keras','OpenCV'],
      githubUrl: 'https://github.com/ShashankGowda13/Brain-Tumor-Detection',
      liveUrl: 'https://brain-tumor-detection-r45q.vercel.app/dashboard',
      image: brainTumorDetectionImage,
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts using weather API integration.',
      technologies: ['React', 'JavaScript', 'API Integration', 'CSS3'],
      githubUrl: 'https://github.com/ShashankGowda13/internArmy_weather',
      liveUrl: 'https://intern-army-weather.vercel.app/',
      image: weatherDashboardImage
    },
    {
      title: 'Note Save',
      description: 'Analytics dashboard for social media metrics with data visualization, reporting, and insights for multiple platforms.',
      technologies: ['Java', 'Firebase', 'Android Studio'],
      githubUrl: 'https://github.com/ShashankGowda13/internArmy_weather',
      liveUrl: 'https://yourproject.com',
      image: androidImage
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and achievements with smooth animations and 3D elements.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/ShashankGowda13/Portfolio1',
      liveUrl: 'https://note-save.vercel.app/',
      image: portfolioWebsiteImage
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, and emoji support. Built with Socket.io for real-time communication.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/yourusername/chat',
      liveUrl: 'https://yourproject.com',
      image: null,
    },
  ]

  return (
    <section
      id="projects"
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
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a learning journey and a solution to a real-world problem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all overflow-hidden"
            >
              {/* Project Image Placeholder */}
              {project.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <FaCode className="text-6xl text-purple-400/30" />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-purple-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-white transition-colors group/link"
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-lg text-white transition-all group/link"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add More Projects Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects



