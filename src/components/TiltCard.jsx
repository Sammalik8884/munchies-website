import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * TiltCard — wraps children in a 3D perspective tilt container.
 * Usage: <TiltCard className="product-card">…</TiltCard>
 */
export default function TiltCard({ children, className = '', style = {}, maxTilt = 12, scale = 1.04, ...props }) {
  const ref = useRef(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springConfig = { stiffness: 280, damping: 24 }
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig)
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig)
  const scaleSpring = useSpring(1, { stiffness: 280, damping: 24 })

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    rawX.set(x)
    rawY.set(y)
  }
  const onMouseEnter = () => scaleSpring.set(scale)
  const onMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
    scaleSpring.set(1)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        rotateX,
        rotateY,
        scale: scaleSpring,
        transformStyle: 'preserve-3d',
        perspective: 900,
        willChange: 'transform',
      }}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  )
}
