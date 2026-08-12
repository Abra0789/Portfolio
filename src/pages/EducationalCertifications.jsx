import Reveal from '../components/Reveal'
import uapDegreeImg from '../images/distinctions/uap-degree-certificate.jpeg'
import hscCertImg from '../images/distinctions/hsc-certificate.jpeg'
import sscCertImg from '../images/distinctions/ssc-certificate.jpeg'

const certificates = [
  {
    year: '2025',
    title: 'B.Sc. in Computer Science & Engineering',
    subtitle: 'University of Asia Pacific — Provisional Certificate',
    description: 'Fulfilled the prescribed requirements for a B.Sc. in CSE, Fall 2024, with a CGPA of 3.30 out of 4.00.',
    image: uapDegreeImg,
  },
  {
    year: '2020',
    title: 'Higher Secondary Certificate (HSC)',
    subtitle: 'Dhaka Imperial College — Science',
    description: 'Passed the HSC Examination in the Science group with a GPA of 5.00 out of 5.00.',
    image: hscCertImg,
  },
  {
    year: '2018',
    title: 'Secondary School Certificate (SSC)',
    subtitle: 'National Ideal College — Science',
    description: 'Passed the SSC Examination in the Science group with a GPA of 4.72 out of 5.00.',
    image: sscCertImg,
  },
]

export default function EducationalCertifications() {
  return (
    <div className="container page">
      <Reveal>
        <span className="eyebrow">About</span>
        <h1>Educational Certifications</h1>
      </Reveal>

      <div className="edu-list">
        {certificates.map((item, i) => (
          <Reveal
            as="article"
            className="edu-card"
            direction={i % 2 === 0 ? 'left' : 'right'}
            key={item.title}
          >
            <div className="edu-card__photo-slot">
              {item.image && <img src={item.image} alt={item.title} />}
            </div>
            <div className="edu-card__body">
              <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>{item.year}</span>
              <h2>{item.title}</h2>
              <p className="edu-card__degree">{item.subtitle}</p>
              <p className="edu-card__desc">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}