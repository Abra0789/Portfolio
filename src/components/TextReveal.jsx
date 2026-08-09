import { motion } from 'motion/react'

export default function TextReveal({ children, delay = 0, className = '' }) {
  return (
    <span className={`text-reveal-mask ${className}`}>
      <motion.span
        className="text-reveal-mask__inner"
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}