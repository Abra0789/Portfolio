import { Link } from 'react-router'

const shortcuts = [
  { to: '/', label: 'Home' },
  { to: '/about/education', label: 'Education' },
  { to: '/about/experience', label: 'Experience' },
  { to: '/co-curricular/aquarist', label: 'Aquarist' },
  { to: '/co-curricular/cycling', label: 'Cycling' },
  { to: '/co-curricular/achievements', label: 'Achievements' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__name">Abrar.Galib</p>
          <p className="site-footer__tag">Developer · Cyclist · Aquarist</p>
        </div>

        <div>
          <p className="site-footer__heading">Shortcuts</p>
          <ul className="site-footer__links">
            {shortcuts.map((s) => (
              <li key={s.to}>
                <Link to={s.to}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="site-footer__heading">Elsewhere</p>
          {/* TODO: tomar real link diye href update koro */}
          <div className="site-footer__social">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:you@example.com">Email</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      <p className="site-footer__copy">© {new Date().getFullYear()} Abrar Galib. All rights reserved.</p>
    </footer>
  )
}
