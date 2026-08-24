import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Share2, Globe, MessageSquare } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import logoImg from '../assets/images/logo.png'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  const quickLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/distribution', label: t.nav.distribution },
    { to: '/products', label: t.nav.products },
    { to: '/brands', label: t.nav.brands },
    { to: '/careers', label: t.nav.careers },
    { to: '/contact', label: t.nav.contact },
  ]

  const productLinks = ['Chocolate', 'Wafer', 'Candy', 'Cereal & Bars', 'Cones']
  const networkLinks = ['Our Network', 'Retail Outlets', 'Coverage Area', 'Brands']

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <img src={logoImg} alt="Munchies" style={{ width: 36, height: 36, objectFit: 'contain' }} />
              <span className="navbar-logo-text">MUNCHIES</span>
            </Link>
            <p>{f.tagline}</p>
            <div className="social-links">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                className="social-link"
                whileHover={{ scale: 1.1 }}
                id="footer-facebook"
              >
              <Share2 size={16} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                className="social-link"
                whileHover={{ scale: 1.1 }}
                id="footer-instagram"
              >
              <Globe size={16} />
              </motion.a>
              <motion.a
                href="https://wa.me/923351497701"

                target="_blank"
                className="social-link"
                whileHover={{ scale: 1.1 }}
                id="footer-whatsapp"
              >
              <MessageSquare size={16} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}

          <div className="footer-col">
            <h4>{f.quickLinks}</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="footer-col">
            <h4>{f.ourProducts}</h4>
            <ul>
              {productLinks.map((item) => (
                <li key={item}>
                  <Link to="/products">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Network */}
          <div className="footer-col">
            <h4>{f.ourNetwork}</h4>
            <ul>
              {networkLinks.map((item) => (
                <li key={item}>
                  <Link to="/distribution">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>{f.contactInfo}</h4>
            <div className="footer-contact-item">
              <MapPin size={14} />
              <span>{f.address}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} />
              <a href={`tel:${f.phone}`} style={{ color: 'inherit' }}>{f.phone}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <a href={`mailto:${f.email}`} style={{ color: 'inherit' }}>{f.email}</a>
            </div>
            <div className="footer-contact-item">
              <Clock size={14} />
              <span>{f.hours}</span>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>{f.copyright}</p>
        <p>
          {f.designed} <span className="heart">❤️</span> {f.inPakistan}
        </p>
      </div>
    </footer>
  )
}
