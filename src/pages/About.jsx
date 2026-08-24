import { motion } from 'framer-motion'
import { Target, Eye, Heart, CheckCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from '../components/PageTransition'
import truckImg from '../assets/images/distribution_truck.png'
import heroProducts from '../assets/images/hero_products.png'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

export default function About() {
  const { t } = useLanguage()
  const a = t.about

  const cards = [
    { icon: <Target size={22} />, title: a.mission.title, desc: a.mission.desc },
    { icon: <Eye size={22} />, title: a.vision.title, desc: a.vision.desc },
    { icon: <Heart size={22} />, title: a.values.title, desc: a.values.desc },
    { icon: <CheckCircle size={22} />, title: a.commitment.title, desc: a.commitment.desc },
  ]

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <p className="label">{a.label}</p>
            <h1>
              <span>ABOUT</span> MUNCHIES
            </h1>
            <p>{a.subtitle}</p>
          </div>
          <div className="page-hero-image">
            <motion.img
              src={heroProducts}
              alt="Munchies Products"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
          </div>
        </div>
      </section>

      {/* About Body */}
      <section className="about-section">
        <div className="about-inner">
          {/* Story Grid */}
          <div className="about-grid">
            <motion.div
              className="about-image-wrap"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src={truckImg} alt="Munchies Distribution" style={{ height: '100%', minHeight: 320 }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">{a.label}</p>
              <h2 className="section-title">{a.title}</h2>
              <div className="section-divider">
                <div className="line" /><div className="dot" /><div className="line" />
              </div>
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.8, fontSize: '1rem' }}>
                {a.subtitle}
              </p>
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.8, fontSize: '1rem', marginTop: 16 }}>
                Our team works tirelessly to ensure that every product reaches the right shelf at the right time, 
                maintaining quality and building trust with every delivery we make across Lahore and beyond.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            className="about-values"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {cards.map((card, i) => (
              <motion.div className="value-card" key={i} variants={fadeUp}>
                <div className="value-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dark Stats Banner */}
      <section style={{ background: 'var(--bg-dark)', padding: '60px 0' }}>
        <div className="container">
          <motion.div
            className="about-dark-stats"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { num: '2+', label: 'Years of Operation' },
              { num: '50+', label: 'Partner Brands' },
              { num: '5000+', label: 'Retail Outlets' },
              { num: '100%', label: 'Commitment to Quality' },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`about-dark-stat-item${i < 3 ? ' has-border' : ''}`}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary)' }}>
                  {s.num}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginTop: 6 }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </PageTransition>
  )
}
