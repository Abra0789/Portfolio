import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaBootstrap,
  FaGithub,
  FaLinux,
  FaWindows,
} from 'react-icons/fa'
import { SiRedux, SiDjango, SiMysql, SiFirebase } from 'react-icons/si'
import { useTypewriter } from '../hooks/useTypewriter'
import FlowingLines from '../components/FlowingLines'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import profilePhoto from '../images/profile/profile.jpg'

gsap.registerPlugin(ScrollTrigger)

const roles = ['Developer', 'Cyclist', 'Aquarist']
const easeOut = [0.16, 1, 0.3, 1]

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', Icon: null },
      { name: 'C++', Icon: null },
      { name: 'Java', Icon: FaJava, color: '#007396' },
      { name: 'Python', Icon: FaPython, color: '#3776AB' },
      { name: 'JavaScript', Icon: FaJs, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952B3' },
      { name: 'React', Icon: FaReact, color: '#61DAFB' },
      { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
      { name: 'Context API', Icon: null },
      { name: 'TanStack Query', Icon: null },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Django', Icon: SiDjango, color: '#092E20' },
      { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'Firestore', Icon: null },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', Icon: null },
      { name: 'GitHub', Icon: FaGithub, color: '#181717' },
      { name: 'VS Code', Icon: null },
      { name: 'PyCharm', Icon: null },
      { name: 'Google Colab', Icon: null },
      { name: 'Arduino', Icon: null },
      { name: 'Linux', Icon: FaLinux, color: '#FCC624' },
      { name: 'Windows', Icon: FaWindows, color: '#0078D6' },
      { name: 'Eclipse', Icon: null },
    ],
  },
  {
    title: 'Design',
    skills: [{ name: 'Canva', Icon: null }],
  },
]

export default function Home() {
  const typedRole = useTypewriter(roles)
  const skillsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const categories = gsap.utils.toArray('.skills-category')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      categories.forEach((category, i) => {
        // Absolute position: protita category timeline-er i*0.25s-e shuru
        // hoy — ager tween-er "tail"-er shathe overlap kore, ekta strict
        // one-by-one na, ekta cascading "wave" feel dey.
        tl.fromTo(
          category,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          i * 0.25
        )
      })
    }, skillsRef)

    return () => ctx.revert()
  }, [])

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

      <section className="container skills-section" ref={skillsRef}>
        <Reveal>
          <span className="eyebrow">Skills</span>
          <h2>Tools I build with</h2>
        </Reveal>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills-category">
              <h3 className="skills-category__title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map(({ name, Icon, color }) => (
                  <div className="skill-chip" key={name}>
                    {Icon ? (
                      <Icon style={{ color }} size={20} />
                    ) : (
                      <span className="skill-chip__glyph">{'{ }'}</span>
                    )}
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}