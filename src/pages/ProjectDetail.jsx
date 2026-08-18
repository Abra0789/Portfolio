import { useParams, Link, Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import Reveal from '../components/Reveal'
import { selectAllProjects } from '../store/projectsSlice'

export default function ProjectDetail() {
  const { slug } = useParams()
  const projects = useSelector(selectAllProjects)
  const index = projects.findIndex((project) => project.slug === slug)

  if (index === -1) {
    return <Navigate to="/projects" replace />
  }

  const project = projects[index]
  const prev = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <div className="container page">
      <Reveal className="detail-head">
        <span className="eyebrow">{project.role}</span>
        <h1>{project.title}</h1>
        <div className="detail-meta">
          <span>{project.year}</span>
          <span>{project.tags.join(' · ')}</span>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="detail-body">
        {project.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </Reveal>

      {(project.demoLink || project.repoLink) && (
  <Reveal delay={0.15} className="detail-links">
    {project.demoLink && (
      <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn btn--solid">
        Live Demo
      </a>
    )}
    {project.repoLink && (
      <a href={project.repoLink} target="_blank" rel="noreferrer" className="btn">
        View Code
      </a>
    )}
  </Reveal>
)}

      <div className="detail-nav">
        <Link to={`/projects/${prev.slug}`} className="link-underline">← {prev.title}</Link>
        <Link to="/projects" className="link-underline">All projects</Link>
        <Link to={`/projects/${next.slug}`} className="link-underline">{next.title} →</Link>
      </div>
    </div>
  )
}