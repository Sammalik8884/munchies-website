import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 350 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const dotSpringX = useSpring(dotX, { damping: 20, stiffness: 600 })
  const dotSpringY = useSpring(dotY, { damping: 20, stiffness: 600 })

  const cursorRef = useRef(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 20)
      cursorY.set(e.clientY - 20)
      dotX.set(e.clientX - 4)
      dotY.set(e.clientY - 4)
    }

    const handleEnter = () => {
      isHovering.current = true
      if (cursorRef.current) {
        cursorRef.current.style.transform += ' scale(1.6)'
        cursorRef.current.style.background = 'rgba(204,0,0,0.15)'
        cursorRef.current.style.borderColor = 'rgba(204,0,0,0.8)'
      }
    }
    const handleLeave = () => {
      isHovering.current = false
      if (cursorRef.current) {
        cursorRef.current.style.background = 'transparent'
        cursorRef.current.style.borderColor = 'rgba(204,0,0,0.6)'
      }
    }

    const interactEls = document.querySelectorAll('a, button, [role="button"], .product-card, .brand-logo-card')
    interactEls.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      interactEls.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [cursorX, cursorY, dotX, dotY])

  /* Hide on touch devices */
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        style={{ x: springX, y: springY }}
        className="cursor-ring"
      />
      {/* Inner dot */}
      <motion.div
        style={{ x: dotSpringX, y: dotSpringY }}
        className="cursor-dot"
      />
    </>
  )
}
