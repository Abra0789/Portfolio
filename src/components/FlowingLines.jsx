import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FlowingLines() {
  const containerRef = useRef(null)
  const pathRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ambient floating — protita line dhire dhire up-down bhashe, alada timing
      pathRefs.current.forEach((path, i) => {
        gsap.to(path, {
          y: i % 2 === 0 ? 18 : -18,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })

      // Scroll-linked parallax — protita line alada rate-e move kore scroll-e
      pathRefs.current.forEach((path, i) => {
        gsap.to(path, {
          y: (i + 1) * -60,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="flowing-lines" ref={containerRef} aria-hidden="true">
      <svg viewBox="0 0 1200 500" preserveAspectRatio="none">
        <path
          ref={(el) => (pathRefs.current[0] = el)}
          d="M-100,250 C200,100 400,400 600,250 S1000,100 1300,250"
          className="flowing-lines__path flowing-lines__path--1"
        />
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          d="M-100,280 C250,150 450,380 650,260 S1050,150 1300,280"
          className="flowing-lines__path flowing-lines__path--2"
        />
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          d="M-100,220 C220,350 420,120 620,240 S1020,350 1300,220"
          className="flowing-lines__path flowing-lines__path--3"
        />
      </svg>
    </div>
  )
}