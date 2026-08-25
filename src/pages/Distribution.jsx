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

/* Real Pakistan SVG Map with Lahore fully highlighted */
function LahoreMap() {
  return (
    <div className="lahore-map">
      <div className="map-placeholder">
        <svg
          viewBox="0 0 500 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', maxWidth: 300, height: 'auto' }}
        >
          {/* ── Pakistan outline (simplified paths per province) ── */}

          {/* Balochistan — largest, bottom-left */}
          <path
            d="M 60 200 L 30 220 L 20 260 L 25 310 L 40 350 L 70 390 L 110 420 L 160 440 L 200 450 L 230 445 L 250 430 L 255 400 L 240 370 L 235 340 L 245 310 L 240 280 L 220 260 L 200 240 L 175 225 L 150 215 L 120 210 L 90 205 Z"
            fill="#E8E8E8" stroke="#BDBDBD" strokeWidth="1.5"
          />

          {/* Sindh — bottom-right */}
          <path
            d="M 240 280 L 245 310 L 235 340 L 240 370 L 255 400 L 270 430 L 300 450 L 330 460 L 360 455 L 380 440 L 390 420 L 385 395 L 370 375 L 355 350 L 345 320 L 340 290 L 330 270 L 310 255 L 285 250 L 265 255 Z"
            fill="#E0E0E0" stroke="#BDBDBD" strokeWidth="1.5"
          />

          {/* KPK — top-left */}
          <path
            d="M 70 60 L 55 80 L 45 110 L 50 140 L 60 160 L 80 175 L 100 180 L 120 175 L 140 165 L 155 148 L 160 130 L 155 110 L 145 90 L 130 72 L 110 62 Z"
            fill="#DADADA" stroke="#BDBDBD" strokeWidth="1.5"
          />

          {/* FATA/GB area — very top */}
          <path
            d="M 80 20 L 60 40 L 60 60 L 80 65 L 110 62 L 140 55 L 165 45 L 175 30 L 165 18 L 140 12 L 110 15 Z"
            fill="#D0D0D0" stroke="#BDBDBD" strokeWidth="1.5"
          />

          {/* AJK — top-right of KPK */}
          <path
            d="M 155 90 L 170 80 L 190 75 L 205 85 L 210 105 L 200 120 L 185 130 L 170 128 L 158 115 Z"
            fill="#CFCFCF" stroke="#BDBDBD" strokeWidth="1.5"
          />

          {/* Punjab (excluding Lahore highlight) */}
          <path
            d="M 120 175 L 140 165 L 165 148 L 185 130 L 200 120 L 220 115 L 245 120 L 265 130 L 280 148 L 285 170 L 280 195 L 265 215 L 245 230 L 220 240 L 200 240 L 175 225 L 150 215 L 130 205 L 115 195 Z"
            fill="#D5D5D5" stroke="#BDBDBD" strokeWidth="1.5"
          />

          {/* Lahore district — FULLY highlighted in red */}
          <path
            d="M 195 148 L 215 142 L 235 148 L 248 162 L 252 178 L 248 194 L 235 205 L 218 210 L 200 207 L 186 196 L 181 180 L 185 165 Z"
            fill="#CC0000"
            opacity="0.92"
            stroke="#990000"
            strokeWidth="1.5"
          />

          {/* Lahore pulsing dot */}
          <circle cx="216" cy="178" r="6" fill="#FFFFFF" opacity="0.95" />
          <circle cx="216" cy="178" r="3.5" fill="#CC0000" />

          {/* LAHORE label */}
          <rect x="175" y="215" width="82" height="22" rx="11" fill="#CC0000" />
          <text x="216" y="230" textAnchor="middle" fill="white"
            fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="10">
            LAHORE
          </text>

          {/* Arabian Sea label */}
          <text x="330" y="490" textAnchor="middle" fill="#AAAAAA"
            fontFamily="'Poppins', sans-serif" fontSize="8" fontStyle="italic">
            Arabian Sea
          </text>

          {/* India border dashes */}
          <line x1="285" y1="130" x2="390" y2="300" stroke="#CCCCCC" strokeWidth="1" strokeDasharray="5,3" />
          <line x1="390" y1="300" x2="385" y2="395" stroke="#CCCCCC" strokeWidth="1" strokeDasharray="5,3" />
        </svg>

        <div className="map-pin-label">
          <MapPin size={14} /> LAHORE
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', textAlign: 'center', marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <span style={{ color: 'var(--primary)', fontWeight: 700 }}>■</span> Lahore Covered
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
