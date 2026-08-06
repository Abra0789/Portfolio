import Reveal from '../components/Reveal'

const education = [
  {
  institution: 'University of Asia Pacific',
  degree: 'B.Sc. in Computer Science & Engineering',
  period: '2021 – 2025',
  description:
    'Completed a B.Sc. in Computer Science and Engineering, served as President of the Robotics Club (CSE-UAP), and was recognized in programming contests, CTFs, and robotics idea competitions.',
  link: 'https://cse.uap-bd.edu/',   // general uap-bd.edu na, CSE department-er nijer site
  image: 'https://cse.uap-bd.edu/wp-content/uploads/2021/06/cse-uap-logo.png',
},
  {
    institution: 'Dhaka Imperial College',
    degree: 'Higher Secondary Certificate (HSC) in Science',
    period: '2018 – 2020',
    description:
      'Studied in the science stream with a focus on physics, chemistry, and mathematics — building the foundation for further studies in Computer Science and Engineering.',
    link: 'https://imperialcollege.edu.bd/',
  },
  {
    institution: 'National Ideal School',
    degree: 'Secondary School Certificate (SSC) in Science',
    period: '2016 – 2018',
    description:
      'Studied in the science stream, developing an early foundation in physics, chemistry, and mathematics.',
    link: 'https://nationalidealschool.edu.bd/',
  },
]

export default function Education() {
  return (
    <div className="container page">
      <Reveal>
        <span className="eyebrow">About</span>
        <h1>Education</h1>
      </Reveal>

      <div className="edu-list">
        {education.map((item, i) => (
          <Reveal as="article" className="edu-card" delay={Math.min(i * 0.08, 0.25)} key={item.institution}>
            <div className="edu-card__photo-slot">{/* certificate/campus photo pore ei-khane */}</div>
            <div className="edu-card__body">
              <h2>{item.institution}</h2>
              <p className="edu-card__degree">{item.degree}</p>
              <p className="edu-card__period">{item.period}</p>
              <p className="edu-card__desc">{item.description}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="btn">
                Visit Institute
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}