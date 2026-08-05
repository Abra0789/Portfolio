import { useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu, closeMenu } from '../store/uiSlice'

const navStructure = [
  { to: '/', label: 'Home' },
  {
    label: 'About',
    children: [
      { to: '/about/education', label: 'Education' },
      { to: '/about/experience', label: 'Experience' },
    ],
  },
  {
    label: 'Co-curricular',
    children: [
      { to: '/co-curricular/aquarist', label: 'Aquarist' },
      { to: '/co-curricular/cycling', label: 'Cycling' },
      { to: '/co-curricular/distinctions', label: 'Distinctions' },
    ],
  },
  { to: '/projects', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const dispatch = useDispatch()
  const menuOpen = useSelector((state) => state.ui.menuOpen)
  const [openGroups, setOpenGroups] = useState({})
  const { pathname } = useLocation()

  function toggleGroup(label) {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" onClick={() => dispatch(closeMenu())}>
          Abrar<span>.Galib</span>
        </NavLink>

        <nav className="navbar__links">
          {navStructure.map((item) =>
            item.children ? (
              <div className="navbar__group" key={item.label}>
                <span className={item.children.some((c) => c.to === pathname) ? 'active' : ''}>
                  {item.label}
                </span>
                <div className="navbar__dropdown">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => dispatch(toggleMenu())}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navStructure.map((item) =>
              item.children ? (
                <div className="mobile-menu__group" key={item.label}>
                  <button
                    className={`mobile-menu__group-toggle ${openGroups[item.label] ? 'open' : ''}`}
                    onClick={() => toggleGroup(item.label)}
                  >
                    {item.label}
                    <span className="chevron">⌃</span>
                  </button>
                  <AnimatePresence>
                    {openGroups[item.label] && (
                      <motion.div
                        className="mobile-menu__submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {item.children.map((child) => (
                          <NavLink key={child.to} to={child.to} onClick={() => dispatch(closeMenu())}>
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={item.to} to={item.to} onClick={() => dispatch(closeMenu())}>
                  {item.label}
                </NavLink>
              )
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}