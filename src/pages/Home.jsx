import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import {
  Award, Truck, MapPin, Trophy, ArrowRight,
  Network, ShieldCheck, Clock, Users,
  ChevronRight, Sparkles, Star
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { products, partnerBrands } from '../data/products'
import PageTransition from '../components/PageTransition'
import heroProducts from '../assets/images/hero_products.png'

/* ── Animated Counter ──────────────────────────────── */
function Counter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const numeric = parseInt(target.replace(/\D/g, ''), 10)
    if (isNaN(numeric)) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(numeric / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= numeric) { setCount(numeric); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  const numeric = parseInt(target.replace(/\D/g, ''), 10)
  const displaySuffix = isNaN(numeric) ? '' : target.replace(/[0-9]/g, '')
  return <span ref={ref}>{isNaN(numeric) ? target : `${count}${displaySuffix}`}</span>
}

/* ── Animation Variants ──────────────────────────────── */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } }
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  const { t } = useLanguage()
  const h = t.hero
  const stats = t.stats
  const p = t.products
  const pb = t.partnerBrands
  const ann = t.anniversary
  const why = t.why

  const statsRef = useRef()
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' })

  const statItems = [
    { icon: <Award size={24} />, number: '50+', label: stats.brands },
    { icon: <Truck size={24} />, number: '5000+', label: stats.outlets },
    { icon: <MapPin size={24} />, number: 'Lahore', label: 'Covered' },

    { icon: <Trophy size={24} />, number: '2+', label: stats.trust },
  ]

  const whyIcons = [<Network size={20} />, <ShieldCheck size={20} />, <Clock size={20} />, <Users size={20} />]

  return (
    <PageTransition>
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-dots" />

        <div className="hero-inner">
          {/* LEFT */}
          <motion.div className="hero-content" initial="hidden" animate="show" variants={container}>
            <motion.div className="hero-eyebrow" variants={fadeUp}>
              <div className="hero-eyebrow-dot">
                <Sparkles size={12} />
              </div>
              <span>Pakistan's Fastest Growing Snack Brand</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp}>
              {h.line1}<br />
              {h.line2}<br />
              <span className="highlight">{h.line3}</span>
              <span className="highlight">{h.line4}</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeUp}>
              {h.subtitle}
            </motion.p>

            <motion.div className="hero-cta" variants={fadeUp}>
              <Link to="/products" className="btn-primary" id="hero-cta-products">
                {h.cta1} <ChevronRight size={16} />
              </Link>
              <Link to="/distribution" className="btn-outline" id="hero-cta-distribution">
                <MapPin size={15} /> {h.cta2}
              </Link>
            </motion.div>

          </motion.div>

          {/* RIGHT — Image with floating badges */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="hero-image-bg" />

            {/* Floating Badge Left */}
            <motion.div
              className="hero-badge hero-badge-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="hero-badge-icon"><Award size={18} /></div>
              <div className="hero-badge-text">
                <strong>50+ Brands</strong>
                <span>Distributed</span>
              </div>
            </motion.div>

            {/* Floating Badge Right */}
            <motion.div
              className="hero-badge hero-badge-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <div className="hero-badge-icon" style={{ background: 'rgba(255,184,0,0.12)' }}>
                <Star size={18} style={{ color: '#FFB800' }} />
              </div>
              <div className="hero-badge-text">
                <strong>2+ Years</strong>
                <span>of Trust</span>
              </div>
            </motion.div>

            <img src={heroProducts} alt="Munchies Delicious Products" />
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────── */}
      <section className="stats-bar" ref={statsRef}>
        <motion.div
          className="stats-inner"
          variants={container}
          initial="hidden"
          animate={statsInView ? 'show' : 'hidden'}
        >
          {statItems.map((item, i) => (
            <motion.div className="stat-item" key={i} variants={fadeUp}>
              <div className="stat-icon">{item.icon}</div>
              <div className="stat-text">
                <div className="number"><Counter target={item.number} /></div>
                <div className="label">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── TRUST WIDGET — after stats bar ─────────────── */}
      <motion.div
        className="hero-trust-bar"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="hero-trust">
          <div className="hero-trust-avatars">
            {['AR', 'MK', 'SF', 'ZA'].map((initials, i) => (
              <div
                key={i}
                className="hero-trust-avatar"
                style={{ background: `hsl(${i * 40}, 70%, 40%)` }}
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="hero-trust-text">
            <strong>5000+ Retail Partners</strong>
            <span>Trust us across Lahore ⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </motion.div>

      {/* ── OUR CONFECTIONERY ─────────────────────────── */}
      <section className="products-section">
        <div className="container">
          <motion.div
            className="products-header"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">{p.label}</p>
            <h2 className="section-title">{p.title}</h2>
            <div className="section-divider">
              <div className="line" /><div className="dot" /><div className="line" />
            </div>
          </motion.div>

          <motion.div
            className="products-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {products.map((product) => (
              <motion.div
                className="product-card"
                key={product.id}
                data-color={product.color}
                variants={fadeIn}
              >
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-name">{product.name}</h3>
                  <p className="product-card-desc">{product.desc}</p>
                  <Link
                    to="/products"
                    className="btn-primary"
                    id={`home-view-${product.name.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {p.viewDetails}
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="products-cta"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/products" className="btn-outline" id="home-view-all-products">
              {p.viewAll} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNER BRANDS ────────────────────────────── */}
      <section className="brands-section">
        <div className="brands-inner">
          <motion.div
            className="brands-left"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="label">{pb.label}</p>
            <div className="brands-logos">
              {partnerBrands.map((brand) => (
                <motion.div
                  key={brand.id}
                  className={`brand-logo-card ${brand.className}`}
                  whileHover={{ scale: 1.06, y: -5 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  id={`home-brand-${brand.className}`}
                >
                  {brand.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="brands-right"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h3>{pb.distributor}</h3>
            <Link to="/distribution" className="btn-primary" id="home-explore-distribution">
              {pb.explore} <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── ANNIVERSARY + WHY CHOOSE ──────────────────── */}
      <div className="bottom-split">
        {/* Anniversary Card */}
        <motion.div
          className="anniversary-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="anniversary-card-grid" />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="anniversary-label">{ann.celebrating}</p>
            <div className="anniversary-years">{ann.years}</div>
            <h2 className="anniversary-title">{ann.title}</h2>
            <p className="anniversary-subtitle">{ann.subtitle}</p>
            <Link to="/about" className="btn-outline-white" id="home-anniversary-journey">
              {ann.journey} <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Why Choose Munchies */}
        <motion.div
          className="why-choose"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>{why.title}</h2>
          <div className="why-grid">
            {why.items.map((item, i) => (
              <motion.div
                key={i}
                className="why-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
              >
                <div className="why-icon">{whyIcons[i]}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  )
}
