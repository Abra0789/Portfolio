import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import Reveal from '../components/Reveal'
import {
  selectFilteredProjects,
  selectActiveFilter,
  selectFilterTags,
  setFilter,
} from '../store/projectsSlice'

export default function Projects() {
  const dispatch = useDispatch()
  const projects = useSelector(selectFilteredProjects)
  const activeFilter = useSelector(selectActiveFilter)
  const tags = useSelector(selectFilterTags)

  return (
    <div className="container page">
      <Reveal>
        <span className="eyebrow">Work</span>
        <h1>Projects</h1>
      </Reveal>

      <Reveal delay={0.1} className="filter-bar">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
            onClick={() => dispatch(setFilter(tag))}
            aria-pressed={activeFilter === tag}
          >
            {tag}
          </button>
        ))}
      </Reveal>

      <div className="project-grid">
        {projects.map((project, i) => (
          <Reveal delay={Math.min(i * 0.08, 0.25)} key={project.slug}>
            <Link to={`/projects/${project.slug}`} className="project-card">
              <div className="project-card__top">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{project.year}</span>
              </div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}