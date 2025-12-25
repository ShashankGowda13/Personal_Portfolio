import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa'
import cer1Image from '../img/cer1/cer1.jpg'
import cer2Image from '../img/cer1/cer2.jpg'
import cer3Image from '../img/cer1/cer3.jpg'
import cer4Image from '../img/cer1/cer4.jpg'

const Certificates = ({ setActiveSection }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('certificates')
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [setActiveSection])

  const certificates = [
    {
      title: 'Cyber Security',
      issuer: 'YHills',
      date: '2023',
      description: 'Comprehensive course covering cybersecurity fundamentals, network security, and ethical hacking practices.',
      link: cer1Image,
      image: cer1Image,
    },
    {
      title: 'Backend Development Intern',
      issuer: 'Healthletic Lifestyles',
      date: '2025',
      description: 'Hands-on experience in backend development, building RESTful APIs, database management, and server-side programming using modern technologies.',
      link: cer2Image,
      image: cer2Image,
    },
    {
      title: 'Data Operations',
      issuer: 'Infosys',
      date: '2024',
      description: 'Expertise in data management, data processing operations, data quality assurance, and efficient data handling workflows.',
      link: cer3Image,
      image: cer3Image,
    },
    {
      title: 'Oracle Cloud Infrastructure Foundations',
      issuer: 'Oracle',
      date: '2025',
      description: 'Foundational knowledge of Oracle Cloud Infrastructure (OCI), cloud computing principles, infrastructure services, and cloud deployment strategies.',
      link: cer4Image,
      image: cer4Image,
    },
  ]

  return (
    <section
      id="certificates"
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
              Certificates & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my certifications and achievements. Click on any certificate to view details.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all overflow-hidden group"
              >
                {cert.image ? (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                    <FaCertificate className="text-6xl text-purple-400/50" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <FaCertificate className="text-purple-400 text-2xl flex-shrink-0 ml-2" />
                  </div>
                  <p className="text-purple-300 mb-2 font-medium">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FaCalendarAlt />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Certificate <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates




