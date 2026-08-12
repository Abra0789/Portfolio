import Reveal from '../components/Reveal'
import iaplc2024 from '../images/aquarist/iaplc-2024.jpeg'
import iaplc2021 from '../images/aquarist/iaplc-2021.jpeg'

const entries = [
  {
    year: '2024',
    title: 'IAPLC 2024 — "Bangladesh Layout"',
    position: 'World Ranking: 1195',
    description:
      'Entered the International Aquatic Plants Layout Contest (IAPLC) 2024 with a nature-style aquascape titled "Bangladesh Layout," placing 1195th among thousands of entries worldwide.',
    image: iaplc2024,
  },
  {
    year: '2021',
    title: 'IAPLC 2021 — "Bangladesh"',
    position: 'World Ranking: 1373',
    description:
      'First entry into the IAPLC, submitting a layout titled "Bangladesh" for international judging — placing 1373rd on the global leaderboard.',
    image: iaplc2021,
  },
]

export default function Aquarist() {
  return (
    <div className="container page">
      <Reveal>
        <span className="eyebrow">Co-curricular</span>
        <h1>Aquarist</h1>
      </Reveal>

      <div className="edu-list">
        {entries.map((item, i) => (
          <Reveal
            as="article"
            className="edu-card"
            direction={i % 2 === 0 ? 'left' : 'right'}
            key={item.year}
          >
            <div className="edu-card__photo-slot">
              {item.image && <img src={item.image} alt={item.title} />}
            </div>
            <div className="edu-card__body">
              <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>{item.year}</span>
              <h2>{item.title}</h2>
              <p className="edu-card__degree">{item.position}</p>
              <p className="edu-card__desc">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}