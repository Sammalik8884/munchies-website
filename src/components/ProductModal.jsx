import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Tag, Star, ShieldCheck, Link as LinkIcon } from 'lucide-react'

export default function ProductModal({ product, onClose }) {
  /* Lock scroll and close on Escape — only when modal is open */
  useEffect(() => {
    if (!product) return
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  const colorMap = {
    yellow: '#F59E0B',
    blue:   '#3B82F6',
    red:    '#CC0000',
    purple: '#7C3AED',
    green:  '#16A34A',
    brown:  '#92400E',
  }
  const accent = colorMap[product?.color] || '#CC0000'

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Full-screen flex centering wrapper */}
          <div className="modal-center-wrap" onClick={onClose}>
            <motion.div
              key="modal"
              className="product-modal"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button className="modal-close" onClick={onClose} aria-label="Close">
                <X size={20} />
              </button>

              <div className="product-modal-inner">
                {/* Left — image */}
                <div
                  className="product-modal-image-wrap"
                  style={{ background: `${accent}12` }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-modal-image"
                  />
                </div>

                {/* Right — details */}
                <div className="product-modal-details">
                  <span
                    className="product-modal-category"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    <Tag size={12} /> {product.category}
                  </span>

                  <h2 className="product-modal-name">{product.name}</h2>
                  <p className="product-modal-desc">{product.detailDesc}</p>

                  <ul className="product-modal-highlights">
                    <li><ShieldCheck size={15} style={{ color: accent }} /> Made with quality ingredients</li>
                    <li><Star size={15} style={{ color: accent }} /> Loved by thousands across Lahore</li>
                    <li><LinkIcon size={15} style={{ color: accent }} /> Available at 5000+ retail outlets</li>
                  </ul>

                  <div className="product-modal-cta">
                    <button
                      className="btn-primary"
                      style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
                      onClick={onClose}
                    >
                      Close
                    </button>
                    <a
                      href="https://wa.me/923351497701"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                      style={{ borderColor: accent, color: accent }}
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
