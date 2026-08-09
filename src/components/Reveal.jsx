import { motion } from 'motion/react'

const directionOffsets = {
  up: { y: 28 },
  left: { x: -48 },
  right: { x: 48 },
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  direction = 'up',
  ...rest
}) {
  const Component = motion[as] ?? motion.div
  const offset = directionOffsets[direction] || directionOffsets.up

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 5.1, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Component>
  )
}