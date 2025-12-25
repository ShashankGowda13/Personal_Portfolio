import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

const Contact = ({ setActiveSection }) => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('contact')
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [setActiveSection])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Show confirmation dialog first
    setShowConfirmDialog(true)
  }

  const handleConfirmSend = async () => {
    setShowConfirmDialog(false)
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage(null)

    try {
      // Use Formspree (simple third-party service)
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xwvegkwj'

      // Send email using Formspree
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      setErrorMessage(error.message || 'Unknown error occurred')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus(null)
        setErrorMessage(null)
      }, 10000)
    }
  }

  const handleCancelSend = () => {
    setShowConfirmDialog(false)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'shashankgowdashash1317@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 9353243569',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Bangalore, Karnataka',
    },
  ]

  return (
    <section
      id="contact"
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
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all group"
                >
                  <div className="text-3xl text-purple-400 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
              <div className="mt-8 p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                <p className="text-gray-300">
                  I'm always open to discussing new projects, creative ideas, or opportunities
                  to be part of your visions. Feel free to reach out!
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-600/20 border border-green-500 rounded-lg text-green-400 flex items-center gap-2"
                >
                  <FaCheckCircle /> Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-600/20 border border-red-500 rounded-lg text-red-400 flex items-center gap-2"
                >
                  <FaTimesCircle /> Error sending message. Please try again or check Formspree configuration.
                </motion.div>
              )}
              {submitStatus === 'not-configured' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-yellow-600/20 border border-yellow-500 rounded-lg text-yellow-400"
                >
                  <div className="space-y-2">
                    <p className="font-semibold">⚠️ Formspree is not configured yet.</p>
                    <p className="text-sm">
                      To receive emails at <span className="font-semibold text-white">shashankgowdashash1317@gmail.com</span>, set up Formspree (takes 2 minutes):
                    </p>
                    <div className="mt-3 space-y-1 text-sm">
                      <ol className="list-decimal list-inside space-y-1 text-yellow-300">
                        <li>Sign up at <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">formspree.io</a> (free)</li>
                        <li>Create a new form and set your email: <span className="font-semibold text-white">shashankgowdashash1317@gmail.com</span></li>
                        <li>Copy your form endpoint URL (looks like: <code className="bg-yellow-900/50 px-1 rounded">https://formspree.io/f/YOUR_FORM_ID</code>)</li>
                        <li>Create a <code className="bg-yellow-900/50 px-1 rounded">.env</code> file in project root</li>
                        <li>Add: <code className="bg-yellow-900/50 px-1 rounded">VITE_FORMSPREE_ENDPOINT=your_endpoint_url</code></li>
                        <li>Restart your dev server</li>
                      </ol>
                    </div>
                  </div>
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </motion.button>
              {false && (
                <div className="p-4 bg-blue-600/20 border border-blue-500 rounded-lg">
                  <div className="space-y-2">
                    <p className="text-blue-400 font-semibold text-center">
                      💡 Setup Required (2 minutes)
                    </p>
                    <p className="text-blue-300 text-sm text-center">
                      To send emails to <span className="font-semibold text-white">shashankgowdashash1317@gmail.com</span>, set up Formspree:
                    </p>
                    <div className="text-center mt-2">
                      <a 
                        href="https://formspree.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors"
                      >
                        Get Started with Formspree →
                      </a>
                    </div>
                    <p className="text-blue-400 text-xs text-center mt-2">
                      Sign up → Create form → Add endpoint to <code className="bg-blue-900/50 px-1 rounded">.env</code> file
                    </p>
                  </div>
                </div>
              )}
            </motion.form>

            {/* Confirmation Dialog */}
            <AnimatePresence>
              {showConfirmDialog && (
                <>
                  {/* Backdrop */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleCancelSend}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  >
                    {/* Dialog */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-gray-800 rounded-xl border border-purple-500/30 p-6 max-w-md w-full shadow-2xl"
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Confirm Send Message
                      </h3>
                      <div className="space-y-3 mb-6">
                        <div>
                          <p className="text-gray-400 text-sm">Name:</p>
                          <p className="text-white">{formData.name}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Email:</p>
                          <p className="text-white">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Subject:</p>
                          <p className="text-white">{formData.subject}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">Message:</p>
                          <p className="text-white text-sm line-clamp-3">{formData.message}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-6">
                        Are you sure you want to send this message? It will be sent directly to{' '}
                        <span className="text-purple-400 font-semibold">shashankgowdashash1317@gmail.com</span>
                      </p>
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleCancelSend}
                          className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors"
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleConfirmSend}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium shadow-lg hover:shadow-purple-500/50 transition-all"
                        >
                          Confirm & Send
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

