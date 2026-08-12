import Reveal from '../components/Reveal'
import cyclingChallengeImg from '../images/distinctions/hatirjheel-cycling-2026.jpeg'
import km53ChallengeImg from '../images/distinctions/independence-day-ride.jpeg'

const entries = [
  {
    year: '2026',
    title: 'Akij Bicycle Hatirjheel Cycling Challenge',
    position: '15 km — 37+ minutes',
    description:
      'Completed the 15 km cycling challenge within the 60-minute limit, recording 17+ minutes on the first 7.5 km lap and 19+ minutes on the second — demonstrating endurance, pacing, and consistency.',
    image: cyclingChallengeImg,
  },
  {
    year: '2024',
    title: 'SDC 53km Independence Day Virtual Ride',
    position: 'Completed — 53 km',
    description:
      'Completed a personal 53 km cycling endurance challenge to mark Independence Day, organized by SDC — building stamina, strength, and self-discipline over the distance.',
    image: km53ChallengeImg,
  },
]

export default function Cycling() {
  return (
    <div className="container page">
      <Reveal>
        <span className="eyebrow">Co-curricular</span>
        <h1>Cycling</h1>
      </Reveal>

      <div className="edu-list">
        {entries.map((item, i) => (
          <Reveal
            as="article"
            className="edu-card"
            direction={i % 2 === 0 ? 'left' : 'right'}
            key={item.title}
          >
            <div className="edu-card__photo-slot">
              <img
                src={item.image}
                alt={item.title}
                className="edu-card__image"
              />
            </div>

            <div className="edu-card__body">
              <span
                className="eyebrow"
                style={{ marginBottom: '0.5rem' }}
              >
                {item.year}
              </span>

              <h2>{item.title}</h2>

              <p className="edu-card__degree">
                {item.position}
              </p>

              <p className="edu-card__desc">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}