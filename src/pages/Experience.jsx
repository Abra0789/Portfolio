import Reveal from '../components/Reveal'

const experience = [
 {
  organization: 'eChithi',
  role: 'HR Intern — HR System Support Executive',
  type: 'Internship',
  period: 'Jan 2024 – May 2024',
  description:
    'Specialized in internet-centric retail sales as an HR System Support Executive, contributing to organizational growth.',
},
  {
    organization: 'National Skills Development Authority (NSDA)',
    role: 'Web Design & Development — Level-3 Competent',
    type: 'Certification',
    period: 'YYYY',
    description:
      'Completed a structured training and assessment in Web Design & Development, certified at Level-3 Competent by the National Skills Development Authority.',
  },
  {
    organization: 'Creative IT',
    role: 'Web Development Intern — HTML, CSS, Bootstrap & JavaScript',
    type: 'Internship',
    period: '3 months',
    description:
      'Completed a 3-month internship focused on front-end fundamentals — HTML, CSS, Bootstrap, and JavaScript — the foundation that led into the MERN Stack diploma at the same institute.',
  },
]

export default function Experience() {
  return (
    <div className="container page">
      <Reveal>
        <span className="eyebrow">About</span>
        <h1>Experience</h1>
      </Reveal>

      <div className="edu-list">
        {experience.map((item, i) => (
          <Reveal as="article" className="edu-card" delay={Math.min(i * 0.08, 0.25)} key={item.organization}>
            <div className="edu-card__photo-slot">{/* certificate photo pore ei-khane */}</div>
            <div className="edu-card__body">
              <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>{item.type}</span>
              <h2>{item.organization}</h2>
              <p className="edu-card__degree">{item.role}</p>
              <p className="edu-card__period">{item.period}</p>
              <p className="edu-card__desc">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}