import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
    />
  )
}
