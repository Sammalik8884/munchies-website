import { motion } from 'framer-motion'
import { Truck, Store, Zap, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from '../components/PageTransition'
import truckImg from '../assets/images/distribution_truck.png'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

/* Lahore SVG Map representation */
function LahoreMap() {
  return (
    <div className="lahore-map">
      <div className="map-placeholder">
        <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 200, height: 240 }}>
          {/* Simple Lahore district silhouette */}
          <path
            d="M80 20 L220 20 L260 80 L280 160 L270 240 L220 300 L160 340 L100 320 L50 260 L30 180 L40 100 Z"
            fill="#DDDDDD"
            stroke="#BBBBBB"
            strokeWidth="2"
          />
          {/* Covered half - highlighted in red */}
          <path
            d="M80 20 L160 20 L160 340 L100 320 L50 260 L30 180 L40 100 Z"
            fill="#CC0000"
            opacity="0.8"
          />
          {/* Map pin */}
          <circle cx="120" cy="160" r="12" fill="#FFFFFF" />
          <circle cx="120" cy="160" r="7" fill="#CC0000" />
          {/* Grid lines */}
          <line x1="0" y1="120" x2="300" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="0" y1="200" x2="300" y2="200" strokeDasharray="4" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <line x1="160" y1="0" x2="160" y2="360" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        </svg>
        <div className="map-pin-label">
          <MapPin size={14} /> LAHORE
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textAlign: 'center', marginTop: 8 }}>
          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>■</span> Half of Lahore Covered
        </div>
      </div>
    </div>
  )
}

export default function Distribution() {
  const { t } = useLanguage()
  const d = t.distribution

  const statIcons = [<Store size={32} />, <Truck size={32} />, <Zap size={32} />]

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <p className="label">{d.label}</p>
            <h1>DISTRIBUTION</h1>
            <p>{d.subtitle}</p>
          </div>
          <div className="page-hero-image">
            <motion.img
              src={truckImg}
              alt="Munchies Distribution Truck"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            />
          </div>
        </div>
      </section>

      {/* Distribution Body */}
      <section className="distribution-section">
        <div className="distribution-inner">
          <div className="distribution-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label">{d.label}</p>
              <h2 className="section-title">{d.title}</h2>
              <div className="section-divider">
                <div className="line" /><div className="dot" /><div className="line" />
              </div>
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.8, marginBottom: 24 }}>
                {d.subtitle}
              </p>
              <p style={{ color: 'var(--text-medium)', lineHeight: 1.8 }}>
                Our distribution network is built on speed, reliability, and trust. 
                We operate a fleet of vehicles to ensure that every product reaches 
                retail shelves fresh and on time — every single delivery, every single day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <LahoreMap />
            </motion.div>
          </div>

          {/* Distribution Stats */}
          <motion.div
            className="distribution-stats"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {d.stats.map((stat, i) => (
              <motion.div className="dist-stat-card" key={i} variants={fadeUp}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>{statIcons[i]}</div>
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process steps */}
          <motion.div
            style={{ marginTop: 64 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 40 }}>
              How Our Distribution Works
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
              {[
                { step: '01', title: 'Order Placement', desc: 'Retailers place orders through our sales team or directly.' },
                { step: '02', title: 'Warehouse Processing', desc: 'Orders are picked, packed and verified at our central warehouse.' },
                { step: '03', title: 'Fleet Dispatch', desc: 'Our fleet dispatches orders across Lahore routes.' },
                { step: '04', title: 'On-Time Delivery', desc: 'Products delivered fresh and on schedule to every outlet.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  style={{
                    background: 'var(--bg-light)',
                    border: '1.5px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '28px 24px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  whileHover={{ borderColor: 'var(--primary)', y: -4 }}
                  transition={{ duration: 0.25 }}
                >
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3rem',
                    fontWeight: 900,
                    color: 'rgba(204,0,0,0.08)',
                    position: 'absolute',
                    top: 8,
                    right: 16,
                    lineHeight: 1,
                  }}>
                    {step.step}
                  </div>
                  <div style={{
                    width: 36,
                    height: 36,
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    color: 'white',
                    fontSize: '0.875rem',
                    marginBottom: 16,
                  }}>
                    {step.step}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 8 }}>{step.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
