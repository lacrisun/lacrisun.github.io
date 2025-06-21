import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Code, Gamepad2, Database } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Web Portfolio',
      description: 'A responsive portfolio website built with HTML, CSS, and JavaScript featuring modern design and smooth animations.',
      icon: Code,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: '2D Platformer Game',
      description: 'A 2D platformer game developed in Unity with C#, featuring character movement, collectibles, and level progression.',
      icon: Gamepad2,
      technologies: ['Unity', 'C#', '2D Graphics'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management built with Node.js and MongoDB, featuring user authentication and CRUD operations.',
      icon: Database,
      technologies: ['Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-dark-lighter/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary-dark/20 transition-all duration-300">
                <project.icon size={48} className="text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300 font-medium"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/lacrisun"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects