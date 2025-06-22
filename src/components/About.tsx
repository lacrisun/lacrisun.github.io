import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Link, Instagram, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-dark-lighter/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Hello! I'm <span className="gradient-text">Gusti Panji Widodo</span>
            </h3>
            
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Also known as <span className="text-primary font-semibold">@lacri</span>! 👋 
                I'm an aspiring software engineer, web developer, and game developer. 
                I'm still relatively new to many things and always eager to learn whenever possible.
              </p>
              
              <p>
                In my spare time, I enjoy watching movies and picking up new knowledge every day. 
                My music taste is quite varied, but I'm particularly drawn to indie music, 
                with an occasional touch of rock.
              </p>
              
              <p>
                Currently pursuing a Bachelor's degree in Informatics Engineering at{' '}
                <a 
                  href="https://www.unri.ac.id" 
                  className="text-primary hover:text-primary-dark transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Universitas Riau
                </a>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card max-w-md mx-auto lg:mx-0"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://avatars.githubusercontent.com/u/73033092?s=400&u=7de4dc8251e2e5e0c35a442fc6e1314ea4dfe41b&v=4"
                alt="Gusti Panji Widodo"
                className="w-20 h-20 rounded-full border-2 border-gray-700 hover:border-primary transition-colors duration-300"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-lg font-semibold text-white">Gusti Panji Widodo</h4>
                <a 
                  href="https://github.com/lacrisun" 
                  className="text-primary hover:text-primary-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @lacrisun
                </a>
                <p className="text-gray-400 text-sm mt-1">currently into LLMs</p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users size={16} />
                <span>2 followers · 2 following</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span className="text-white">Pekanbaru, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Link size={16} />
                <a 
                  href="http://www.gustipanji.web.id" 
                  className="text-primary hover:text-primary-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gustipanji.web.id
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Instagram size={16} />
                <a 
                  href="https://www.instagram.com/heylacri" 
                  className="text-primary hover:text-primary-dark transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @heylacri
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About