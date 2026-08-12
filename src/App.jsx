import { Routes, Route } from 'react-router'
import { ReactLenis } from 'lenis/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import EducationalCertifications from './pages/EducationalCertifications'
import Aquarist from './pages/Aquarist'
import Cycling from './pages/Cycling'
import Achievements from './pages/Achievements'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'

export default function App() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <ReactLenis
      root
      options={{
        lerp: prefersReducedMotion ? 1 : 0.1,
        duration: prefersReducedMotion ? 0 : 1.2,
        smoothWheel: !prefersReducedMotion,
      }}
    >
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/education" element={<Education />} />
        <Route path="/about/experience" element={<Experience />} />
        <Route path="/about/educational-certifications" element={<EducationalCertifications />} />
        <Route path="/co-curricular/aquarist" element={<Aquarist />} />
        <Route path="/co-curricular/cycling" element={<Cycling />} />
        <Route path="/co-curricular/achievements" element={<Achievements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ReactLenis>
  )
}