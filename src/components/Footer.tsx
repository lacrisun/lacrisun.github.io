import { motion } from 'framer-motion'
import { Github, Instagram, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/lacrisun',
      label: 'GitHub',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/heylacri',
      label: 'Instagram',
    },
    {
      icon: ExternalLink,
      href: 'http://www.gustipanji.web.id',
      label: 'Website',
    },
  ]

  return (
    <footer className="py-8 border-t border-gray-800/50">
      <div className="container-custom px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-primary"
          >
            © {currentYear} lacrisun limited. All rights reserved.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer