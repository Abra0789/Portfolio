import { Link } from 'react-router'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Reveal from './Reveal'

const shortcuts = [
  { to: '/', label: 'Home' },
  { to: '/about/education', label: 'Education' },
  { to: '/about/experience', label: 'Experience' },
  { to: '/about/educational-certifications', label: 'Educational Certifications' },
  { to: '/co-curricular/aquarist', label: 'Aquarist' },
  { to: '/co-curricular/cycling', label: 'Cycling' },
  { to: '/co-curricular/achievements', label: 'Achievements' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com/Abra0789', label: 'GitHub', Icon: FaGithub },
  { href: 'mailto:galibabrar06@gmail.com', label: 'Email', Icon: HiOutlineMail },
  { href: 'https://www.linkedin.com/in/abrar-galib-b30ab4268', label: 'LinkedIn', Icon: FaLinkedin },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <Reveal className="container">
        <Link to="/contact" className="site-footer__cta">
          Let&rsquo;s build<br />something together
        </Link>
      </Reveal>

      <Reveal delay={0.1} className="container site-footer__grid">
        <div>
          <p className="site-footer__name">Abrar.Galib</p>
          <p className="site-footer__tag">Developer · Cyclist · Aquarist</p>
        </div>

        <div>
          <p className="site-footer__heading">Shortcuts</p>
          <ul className="site-footer__links">
            {shortcuts.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="link-underline">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="site-footer__heading">Elsewhere</p>
          <div className="site-footer__social">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="site-footer__social-link"
              >
                <Icon size={18} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <p className="site-footer__copy">© {new Date().getFullYear()} Abrar Galib. All rights reserved.</p>
    </footer>
  )
}