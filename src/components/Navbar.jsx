import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import AuthModal from './AuthModal'
import logoImg from '../assets/images/logo.png'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const { currentUser, logout } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [authModal, setAuthModal] = useState(null) /* 'login' | 'signup' | null */
  const [userDropdown, setUserDropdown] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close user dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/distribution', label: t.nav.distribution },
    { to: '/products', label: t.nav.products },
    { to: '/brands', label: t.nav.brands },
    { to: '/careers', label: t.nav.careers },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <motion.img
              src={logoImg}
              alt="Munchies Logo"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <span className="navbar-logo-text">MUNCHIES</span>
          </Link>

          {/* Desktop Nav */}
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: Lang Toggle + Auth + Hamburger */}
          <div className="navbar-actions">
            {/* Language toggle */}
            <div className="lang-toggle">
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
                id="lang-en"
              >
                EN
              </button>
              <button
                className={`lang-btn ${lang === 'ur' ? 'active' : ''}`}
                onClick={() => setLang('ur')}
                id="lang-ur"
              >
                اردو
              </button>
            </div>

            {/* Auth buttons (desktop) */}
            {currentUser ? (
              /* Logged-in user pill + dropdown */
              <div className="nav-user-wrap" ref={dropdownRef}>
                <button
                  className="nav-user-pill"
                  onClick={() => setUserDropdown(!userDropdown)}
                  id="nav-user-pill"
                >
                  <User size={14} />
                  <span>{currentUser.name.split(' ')[0]}</span>
                  <ChevronDown size={13} style={{ opacity: 0.7 }} />
                </button>
                <AnimatePresence>
                  {userDropdown && (
                    <motion.div
                      className="nav-user-dropdown"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                    >
                      <div className="nav-user-info">
                        <strong>{currentUser.name}</strong>
                        <small>{currentUser.email}</small>
                      </div>
                      <button
                        className="nav-logout-btn"
                        onClick={() => { logout(); setUserDropdown(false) }}
                        id="nav-logout-btn"
                      >
                        <LogOut size={14} /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              /* Login + Signup buttons */
              <div className="nav-auth-btns">
                <button
                  className="nav-login-btn"
                  onClick={() => setAuthModal('login')}
                  id="nav-login-btn"
                >
                  Login
                </button>
                <button
                  className="nav-signup-btn"
                  onClick={() => setAuthModal('signup')}
                  id="nav-signup-btn"
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              id="hamburger-btn"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              {/* Mobile lang toggle */}
              <li className="mobile-lang-row">
                <button
                  className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                  onClick={() => setLang('en')}
                >EN</button>
                <button
                  className={`lang-btn ${lang === 'ur' ? 'active' : ''}`}
                  onClick={() => setLang('ur')}
                >اردو</button>
              </li>
              {/* Mobile auth */}
              <li className="mobile-auth-row">
                {currentUser ? (
                  <button
                    className="nav-logout-btn mobile"
                    onClick={() => { logout(); setMenuOpen(false) }}
                  >
                    <LogOut size={14} /> Logout ({currentUser.name.split(' ')[0]})
                  </button>
                ) : (
                  <>
                    <button className="nav-login-btn" onClick={() => { setAuthModal('login'); setMenuOpen(false) }}>Login</button>
                    <button className="nav-signup-btn" onClick={() => { setAuthModal('signup'); setMenuOpen(false) }}>Sign Up</button>
                  </>
                )}
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Auth Modal */}
      <AnimatePresence>
        {authModal && (
          <AuthModal mode={authModal} onClose={() => setAuthModal(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
