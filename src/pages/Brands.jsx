import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { partnerBrands } from '../data/products'
import PageTransition from '../components/PageTransition'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Brands() {
  const { t } = useLanguage()
  const bp = t.brands_page

  return (
    <PageTransition>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <p className="label">{bp.label}</p>
            <h1>OUR PARTNER <span>BRANDS</span></h1>
            <p>Partnering with the best names in the industry to bring you the finest products across Pakistan.</p>
          </div>
        </div>
      </section>

      {/* Brands Body */}
      <section className="brands-page-section">
        <div className="brands-page-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: 48 }}
          >
            <p className="section-label">{bp.label}</p>
            <h2 className="section-title">{bp.title}</h2>
            <div className="section-divider">
              <div className="line" /><div className="dot" /><div className="line" />
            </div>
          </motion.div>

          {/* Brand Cards */}
          <motion.div
            className="brands-page-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {partnerBrands.map((brand) => (
              <motion.div
                key={brand.id}
                className={`brand-page-card ${brand.className}`}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -6 }}
                id={`brand-card-${brand.className}`}
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    style={{ width: '100%', maxHeight: 90, objectFit: 'contain' }}
                  />
                ) : (
                  <div className="brand-name">{brand.name}</div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Why Partner */}
          <motion.div
            style={{ marginTop: 64 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title" style={{ marginBottom: 8 }}>
              Why <span style={{ color: 'var(--primary)' }}>Partner</span> with Munchies?
            </h2>
            <div className="section-divider" style={{ marginBottom: 36 }}>
              <div className="line" /><div className="dot" /><div className="line" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {[
                { title: 'Extensive Coverage', desc: 'Reach over 5000 retail outlets across half of Lahore with a single partnership.' },
                { title: 'Proven Track Record', desc: '2+ years of reliable, on-time distribution with zero compromise on quality.' },
                { title: 'Dedicated Team', desc: "Our sales and logistics team is fully committed to your brand's success." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{
                    background: 'var(--bg-light)',
                    border: '1.5px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '28px',
                    transition: 'var(--transition)',
                  }}
                  whileHover={{ borderColor: 'var(--primary)', y: -4, boxShadow: '0 8px 32px rgba(204,0,0,0.1)' }}
                >
                  <div style={{
                    width: 36,
                    height: 36,
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 900,
                    marginBottom: 16,
                  }}>
                    {i + 1}
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 8 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            className="brands-stats-bar"
            style={{ marginTop: 48 }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {bp.stats.map((stat, i) => (
              <div className="brand-stat" key={i}>
                <div className="number">{stat.number}</div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            style={{ textAlign: 'center', marginTop: 48 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '1.1rem', color: 'var(--text-medium)', marginBottom: 20 }}>
              Interested in partnering with Munchies?
            </p>
            <Link to="/contact" className="btn-primary" id="brands-partner-cta">
              Get in Touch <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
