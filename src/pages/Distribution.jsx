import { motion } from 'framer-motion'
import { Truck, Store, Zap, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import PageTransition from '../components/PageTransition'
import truckImg from '../assets/images/distribution_truck.png'
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

/* Lahore district real boundary coordinates [lat, lng] */
const LAHORE_BOUNDARY = [
  [31.7285, 74.0070],
  [31.7289, 74.1600],
  [31.7100, 74.3200],
  [31.6750, 74.4600],
  [31.6200, 74.5700],
  [31.5500, 74.6400],
  [31.4700, 74.6350],
  [31.4000, 74.5800],
  [31.3300, 74.5000],
  [31.2700, 74.3800],
  [31.2500, 74.2200],
  [31.2600, 74.0600],
  [31.3200, 73.9500],
  [31.4100, 73.9000],
  [31.5000, 73.8900],
  [31.6000, 73.9200],
  [31.6800, 73.9700],
]

/* Real Leaflet Map Component */
function LahoreMap() {
  return (
    <div className="lahore-map">
      <div style={{
        width: '100%',
        height: 380,
        borderRadius: 16,
        overflow: 'hidden',
        border: '2px solid var(--border-light)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        position: 'relative',
      }}>
        <MapContainer
          center={[31.5204, 74.3587]}
          zoom={10}
          style={{ width: '100%', height: '100%' }}
          scrollWheelZoom={false}
          zoomControl={true}
          attributionControl={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Polygon
            positions={LAHORE_BOUNDARY}
            pathOptions={{
              color: '#CC0000',
              weight: 2.5,
              fillColor: '#CC0000',
              fillOpacity: 0.30,
            }}
          >
            <Tooltip permanent direction="center" className="lahore-tooltip">
              <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>📍 Lahore</span>
            </Tooltip>
          </Polygon>
        </MapContainer>

        {/* Overlay badge */}
        <div style={{
          position: 'absolute', bottom: 12, left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(204,0,0,0.92)',
          color: 'white',
          padding: '6px 18px',
          borderRadius: 50,
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.78rem',
          letterSpacing: '0.05em',
          display: 'flex', alignItems: 'center', gap: 6,
          zIndex: 1000,
          pointerEvents: 'none',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        }}>
          <MapPin size={13} /> Lahore Covered
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
            <div className="dist-steps-grid">
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
