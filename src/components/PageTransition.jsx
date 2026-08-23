import { motion } from 'framer-motion'

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}

const pageTransition = {
  duration: 0.4,
  ease: [0.4, 0, 0.2, 1],
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page-transition-wrapper"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}
