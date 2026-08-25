import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from '../components/PageTransition'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function Contact() {
  const { t } = useLanguage()
  const cp = t.contact_page
  const f = cp.form

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Name is required'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Valid email is required'
    if (!formData.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    // Build mailto link — sends to Munchies email
    const subject = encodeURIComponent(`Website Enquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    )
    window.open(`mailto:Munchiespk24@gmail.com?subject=${subject}&body=${body}`, '_blank')
    setSubmitted(true)
  }

  const contactItems = [
    { icon: <MapPin size={20} />, label: cp.address.label, value: cp.address.value },
    { icon: <Phone size={20} />, label: cp.phone.label, value: cp.phone.value },
    { icon: <Mail size={20} />, label: cp.email.label, value: cp.email.value },
    { icon: <Clock size={20} />, label: cp.hours.label, value: cp.hours.value },
  ]

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #111 60%, #8B0000 100%)' }}>
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <p className="label">{cp.label}</p>
            <h1>CONTACT <span>US</span></h1>
            <p>{cp.title}</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          {/* Contact Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUp} style={{ marginBottom: 32 }}>
              <p className="section-label">{cp.label}</p>
              <h2 className="section-title">{cp.title}</h2>
              <div className="section-divider">
                <div className="line" /><div className="dot" /><div className="line" />
              </div>
            </motion.div>

            {contactItems.map((item, i) => (
              <motion.div className="contact-info-item" key={i} variants={fadeUp}>
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <h4>{item.label}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Map embed placeholder */}
            <motion.div
              variants={fadeUp}
              style={{
                marginTop: 28,
                background: 'var(--bg-light)',
                border: '1.5px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <MapPin size={20} color="var(--primary)" />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.875rem' }}>
                  Find Us on the Map
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: 2 }}>
                  Lahore, Pakistan
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>{f.title}</h3>
            {submitted ? (
              <div className="form-success">
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8 }}>Message Ready to Send!</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                  Your email client has opened with your message pre-filled.<br />
                  Just hit <strong>Send</strong> to reach us at Munchiespk24@gmail.com
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="contact-name">{f.name}</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder={f.name}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={errors.name ? { borderColor: 'var(--primary)' } : {}}
                  />
                  {errors.name && <div style={{ color: 'var(--primary)', fontSize: '0.75rem', marginTop: 4 }}>{errors.name}</div>}
                </motion.div>

                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label htmlFor="contact-email">{f.email}</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder={f.email}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={errors.email ? { borderColor: 'var(--primary)' } : {}}
                  />
                  {errors.email && <div style={{ color: 'var(--primary)', fontSize: '0.75rem', marginTop: 4 }}>{errors.email}</div>}
                </motion.div>

                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="contact-phone">{f.phone}</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder={f.phone}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  />
                </motion.div>

                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <label htmlFor="contact-message">{f.message}</label>
                  <textarea
                    id="contact-message"
                    placeholder={f.message}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    style={errors.message ? { borderColor: 'var(--primary)' } : {}}
                  />
                  {errors.message && <div style={{ color: 'var(--primary)', fontSize: '0.75rem', marginTop: 4 }}>{errors.message}</div>}
                </motion.div>

                <motion.button
                  type="submit"
                  className="form-submit"
                  id="contact-submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={16} /> {f.submit}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
