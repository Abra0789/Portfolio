import { motion } from 'motion/react'
import { Link } from 'react-router'
import { useTypewriter } from '../hooks/useTypewriter'

const roles = ['Developer', 'Cyclist', 'Aquarist']
const easeOut = [0.16, 1, 0.3, 1]

export default function Home() {
  const typedRole = useTypewriter(roles)

  return (
    <section className="hero container">
      <motion.p
        className="hero__greeting"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        Hi, I'm
      </motion.p>

      <motion.h1
        className="hero__title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
      >
        Abrar Galib
      </motion.h1>

      <motion.p
        className="hero__role"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
      >
        A {typedRole}
        <span className="hero__cursor" />
      </motion.p>

      <motion.p
        className="hero__lede"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
      >
        CSE graduate specializing in Web Development — building fast, animated interfaces with React.
      </motion.p>

      <motion.div
        className="hero__actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
      >
        <Link to="/projects" className="btn btn--solid">View work</Link>
        <Link to="/contact" className="btn">Get in touch</Link>
      </motion.div>
    </section>
  )
}