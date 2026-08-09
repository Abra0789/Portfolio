import { useEffect, useState } from 'react'

export function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')

    const handleChange = (event) => setPrefersReduced(event.matches)
    query.addEventListener('change', handleChange)
    handleChange(query)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return prefersReduced
}