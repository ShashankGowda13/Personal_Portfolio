import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      url: 'https://github.com/ShashankGowda13/', 
      label: 'GitHub',
      gradient: 'from-gray-700 to-gray-900',
      hoverGradient: 'from-purple-600 to-pink-600'
    },
    { 
      icon: <FaLinkedin />, 
      url: 'https://linkedin.com/in/shashank-h-n-8b8247298/', 
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-800',
      hoverGradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:shashankgowdashash1317@gmail.com',
      label: 'Email',
      gradient: 'from-purple-600 to-pink-600',
      hoverGradient: 'from-purple-500 to-pink-500'
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative pt-16 pb-4 overflow-hidden w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="w-full relative z-10 px-4 md:px-6">
        {/* Single Unified Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group w-full"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
          
          {/* Main Box - Full Width with rounded corners */}
          <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-purple-500/50 p-8 md:p-12 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 w-full">
            
            {/* Top Section - Brand and Links */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 pb-8 border-b border-purple-500/30 px-4 md:px-8">
              {/* Brand Section */}
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  Shashank H N
                </h3>
                <div className="h-1.5 w-20 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mb-4"></div>
                <p className="text-gray-300 mb-2 text-base font-medium">
                  Full Stack Developer
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Creative Problem Solver building innovative solutions with cutting-edge technologies
                </p>
              </div>

              {/* Quick Links Section */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-3 group/link"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover/link:scale-150 group-hover/link:shadow-lg group-hover/link:shadow-purple-500/50 transition-all"></span>
                        <span className="group-hover/link:font-medium transition-all">{link.name}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Social Links Section */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative group/social bg-gradient-to-br ${social.gradient} p-4 rounded-2xl border-2 border-transparent hover:border-white/30 transition-all shadow-lg hover:shadow-2xl`}
                      aria-label={social.label}
                    >
                      <span className="text-2xl text-white relative z-10">{social.icon}</span>
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.hoverGradient} opacity-0 group-hover/social:opacity-100 rounded-2xl transition-opacity duration-300`}></div>
                      <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap bg-gray-900 px-3 py-1.5 rounded-lg border border-purple-500/30 shadow-lg z-20">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright and Back to Top */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-8">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">Shashank H N</span>. All rights reserved.
              </p>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-xl text-white font-medium shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <span className="text-sm">Back to Top</span>
                <FaArrowUp className="text-sm" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
