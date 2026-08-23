import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { TrendingUp, Smile, BookOpen, Users, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from '../components/PageTransition'
import teamImg from '../assets/images/careers_team.png'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Careers() {
  const { t } = useLanguage()
  const cp = t.careers_page

  const valueIcons = [
    <TrendingUp size={34} />,
    <Smile size={34} />,
    <BookOpen size={34} />,
    <Users size={34} />,
  ]

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <p className="label">{cp.label}</p>
            <h1>CAREERS AT <span>MUNCHIES</span></h1>
            <p>{cp.subtitle}</p>
          </div>
          <div className="page-hero-image">
            <motion.img
              src={teamImg}
              alt="Munchies Team"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />
          </div>
        </div>
      </section>

      <section className="careers-section">
        <div className="careers-inner">
          {/* Intro Grid */}
          <div className="careers-intro">
            <motion.div
              className="careers-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={teamImg} alt="Our Team" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">{cp.label}</p>
              <h2 className="section-title">{cp.title}</h2>
              <div className="section-divider">
                <div className="line" /><div className="dot" /><div className="line" />
              </div>
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.8, marginBottom: 16 }}>
                {cp.subtitle}
              </p>
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.8, marginBottom: 28 }}>
                At Munchies, we believe our people are our greatest asset. We foster a culture of growth, 
                learning, and collaboration where every team member can thrive and make a real impact.
              </p>
              <Link to="/contact" className="btn-primary" id="careers-apply-btn">
                Apply Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            className="careers-values"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {cp.values.map((val, i) => (
              <motion.div className="career-value-card" key={i} variants={fadeUp}>
                <div style={{ color: 'var(--primary)', marginBottom: 12 }}>{valueIcons[i]}</div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Open Positions */}
          <motion.div
            style={{ marginTop: 64 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title" style={{ marginBottom: 32 }}>Open Positions</h2>
            {[
              { role: 'Sales Executive', dept: 'Sales & Distribution', type: 'Full Time', location: 'Lahore' },
              { role: 'Delivery Driver', dept: 'Logistics', type: 'Full Time', location: 'Lahore' },
              { role: 'Brand Manager', dept: 'Marketing', type: 'Full Time', location: 'Lahore' },
              { role: 'Warehouse Associate', dept: 'Operations', type: 'Full Time', location: 'Lahore' },
            ].map((job, i) => (
              <motion.div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  border: '1.5px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: 12,
                  background: 'var(--bg-light)',
                  gap: 16,
                  flexWrap: 'wrap',
                }}
                whileHover={{ borderColor: 'var(--primary)', x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem' }}>{job.role}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginTop: 2 }}>{job.dept}</div>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{
                    background: 'rgba(204,0,0,0.1)', color: 'var(--primary)',
                    padding: '4px 12px', borderRadius: 20, fontSize: '0.8rem', fontWeight: 600
                  }}>{job.type}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-medium)' }}>📍 {job.location}</span>
                  <Link
                    to="/contact"
                    className="btn-primary"
                    id={`job-apply-${i}`}
                    style={{ padding: '8px 20px', fontSize: '0.8rem' }}
                  >
                    Apply
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Bar */}
          <motion.div
            className="careers-cta-bar"
            style={{ marginTop: 40 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3>{cp.ctaTitle}</h3>
              <p>Join Pakistan's fastest growing confectionery brand.</p>
            </div>
            <div className="cta-btns">
              <Link to="/about" className="btn-outline-white" id="careers-cta-journey">
                {cp.ctaBtn1}
              </Link>
              <Link to="/contact" className="btn-primary" id="careers-cta-positions">
                {cp.ctaBtn2} <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
