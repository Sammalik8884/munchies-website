import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Leaf, Star, Heart, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { products } from '../data/products'
import PageTransition from '../components/PageTransition'
import ProductModal from '../components/ProductModal'
import heroProducts from '../assets/images/hero_products.png'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
}
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function Products() {
  const { t } = useLanguage()
  const pp = t.products_page
  const [activeFilter, setActiveFilter] = useState(pp.filters[0])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filtered = activeFilter === pp.filters[0]
    ? products
    : products.filter(p => p.category === activeFilter)

  const badges = [
    { icon: <ShieldCheck size={20} />, label: pp.badges[0] },
    { icon: <Leaf size={20} />, label: pp.badges[1] },
    { icon: <Star size={20} />, label: pp.badges[2] },
    { icon: <Heart size={20} />, label: pp.badges[3] },
  ]

  return (
    <PageTransition>
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      {/* Page Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #1A1A1A 60%, #8B0000 100%)' }}>
        <div className="page-hero-inner">
          <div className="page-hero-content">
            <p className="label">{pp.label}</p>
            <h1>OUR <span>CONFECTIONERY</span></h1>
            <p>{pp.subtitle}</p>
          </div>
          <div className="page-hero-image">
            <motion.img
              src={heroProducts}
              alt="Munchies Products"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              style={{ maxHeight: 300 }}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-page-section">
        <div className="products-page-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">{pp.label}</p>
            <h2 className="section-title" style={{ marginBottom: 8 }}>{pp.title}</h2>
            <div className="section-divider">
              <div className="line" /><div className="dot" /><div className="line" />
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {pp.filters.map((filter) => (
              <button
                key={filter}
                className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
                id={`filter-${filter.toLowerCase().replace(/\s/g, '-')}`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="products-full-grid"
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
            >
              {filtered.map((product) => (
                <motion.div
                  className="product-card"
                  key={product.id}
                  data-color={product.color}
                  variants={fadeUp}
                  whileHover={{ scale: 1.03, y: -6 }}
                >
                  <div className="product-card-image" style={{ aspectRatio: '4/3' }}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-card-name">{product.name}</h3>
                    <p className="product-card-desc">{product.detailDesc}</p>
                    <button
                      className="btn-primary"
                      id={`product-view-${product.id}`}
                      style={{ fontSize: '0.75rem', padding: '8px 16px' }}
                      onClick={() => setSelectedProduct(product)}
                    >
                      {t.products.viewDetails}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More CTA */}
          <motion.div
            style={{ textAlign: 'center', marginTop: 40 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn-outline" id="products-view-more">
              {pp.viewMore} <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Quality Badges */}
          <motion.div
            className="quality-badges"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {badges.map((badge, i) => (
              <div className="quality-badge" key={i}>
                <div className="quality-badge-icon">{badge.icon}</div>
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
