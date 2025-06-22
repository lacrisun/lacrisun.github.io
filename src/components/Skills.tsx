import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Server, Gamepad2 } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'HTML5', icon: '/img/icons8-html-5-250.png' },
    { name: 'CSS3', icon: '/img/icons8-css-150.png' },
    { name: 'JavaScript', icon: '/img/icons8-javascript-250.png' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Python', icon: '/img/icons8-python-250.png' },
    { name: 'Node.js', icon: '/img/node-js.png' },
    { name: 'Tailwind', icon: '/img/icons8-tailwind-css-192.png' },
    { name: 'MongoDB', icon: '/img/MDB_BIG.D-96d632a9.png' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Next.js', icon: '/img/Nextjs-logo.png' },
    { name: 'Vite.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'C#', icon: '/img/icons8-c-sharp-logo-150.png' },
    { name: 'C++', icon: '/img/icons8-c++-150.png' },
    { name: 'Godot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg' },
  ]

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React & Next.js', 'Vite.js', 'Tailwind CSS', 'Responsive Design'],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'MongoDB', 'MySQL', 'RESTful APIs', 'Database Design'],
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      skills: ['C# & Unity', 'C++ Programming', 'Godot Engine', 'Game Design', '2D/3D Graphics', 'Game Logic'],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
        </motion.div>

        {/* Animated Skills Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden mb-16 mask-gradient"
        >
          <div className="flex animate-slide gap-8">
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-3 min-w-[120px] p-4 bg-dark-card border border-gray-700 rounded-xl hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <category.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-400 relative pl-4">
                    <span className="absolute left-0 text-primary">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills