import { motion } from 'motion/react'
import { Link } from 'react-router'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact } from 'react-icons/fa'
import { SiRedux } from 'react-icons/si'
import { useTypewriter } from '../hooks/useTypewriter'
import FlowingLines from '../components/FlowingLines'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import profilePhoto from '../images/profile/profile.jpg'

const roles = ['Developer', 'Cyclist', 'Aquarist']
const easeOut = [0.16, 1, 0.3, 1]

const skills = [
  { name: 'HTML', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3' },
  { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
  { name: 'Context API', Icon: null, color: null },
]

export default function Home() {
  const typedRole = useTypewriter(roles)

  return (
    <>
      <section className="hero container">
        <FlowingLines />

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

      <section className="container about-teaser">
        <div className="about-teaser__grid">
          <Reveal direction="left" className="about-teaser__photo-wrap">
            <div className="about-teaser__photo-slot">
              <img src={profilePhoto} alt="Abrar Galib" />
            </div>
            <p className="about-teaser__caption">Every commit is XP. Every bug is a boss fight.</p>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <span className="eyebrow">About</span>
            <h2><TextReveal>CSE graduate, building things that move well.</TextReveal></h2>
            <p className="about-teaser__text">
              I'm a CSE graduate from the University of Asia Pacific, currently deepening my MERN
              stack skills through a diploma at Creative IT. Outside of code, I race bicycles and
              compete in international aquascaping contests — Developer, Cyclist, Aquarist isn't
              just a tagline, it's roughly how my week is split.
            </p>
            <Link to="/about/education" className="btn">More about me</Link>
          </Reveal>
        </div>
      </section>

      <section className="container skills-section">
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2>Tools I build with</h2>
        </Reveal>
        <Reveal delay={0.1} className="skills-grid">
          {skills.map(({ name, Icon, color }) => (
            <div className="skill-chip" key={name}>
              {Icon ? <Icon style={{ color }} size={22} /> : <span className="skill-chip__glyph">{'{ }'}</span>}
              <span>{name}</span>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  )
}