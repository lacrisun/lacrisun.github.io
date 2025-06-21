import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, ExternalLink } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = 'gusti.me()'

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="container-custom px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="text-primary ml-1"
              >
                |
              </motion.span>
            </h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-400 mb-4"
            >
              Gusti Panji Widodo
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto"
            >
              Software Engineer, Web Developer & Game Developer
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/lacrisun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="http://www.gustipanji.web.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary transition-colors duration-300 animate-bounce-slow"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}

export default Hero