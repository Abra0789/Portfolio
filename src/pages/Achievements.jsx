import Reveal from '../components/Reveal'
import treasureHuntImg from '../images/distinctions/treasure-hunt-2021.jpeg'
import techCarnivalImg from '../images/distinctions/cse-tech-carnival-2024.jpeg'
import cyclingChallengeImg from '../images/distinctions/hatirjheel-cycling-challenge-2026.jpeg'
import independenceDayRideImg from '../images/distinctions/independence-day-ride-2024.jpeg'
import programmingContestImg from '../images/distinctions/intra-programming-contest-2022.jpeg'
import ctfContestImg from '../images/distinctions/intra-ctf-contest-2022.jpeg'
import mlTrainingImg from '../images/distinctions/ml-training-2023.jpeg'
import cyberBootcampImg from '../images/distinctions/cyber-security-bootcamp-2023.jpeg'
import reactWorkshopImg from '../images/distinctions/react-workshop-2023.jpeg'
import dicCarnivalImg from '../images/distinctions/dic-mega-carnival-2019.jpeg'
import cyclingChallengeCertificateImg from '../images/distinctions/hatirjheel-cycling-challenge-certificate-2026.jpeg'
import treasureHuntcertificateImg from '../images/distinctions/treasure-hunt-certificate-2021.jpeg'
import culturalFestvolunteercertificateImg from '../images/distinctions/cse-cultural-fest-volunteering-2023.jpeg'

const medals = [
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
      'Completed a personal 53km cycling endurance challenge to mark Independence Day, organized by SDC — building stamina, strength, and self-discipline over the distance.',
    image: independenceDayRideImg,
  },
  {
    year: '2021',
    title: 'Treasure Hunt — 3rd Place',
    subtitle: 'CSE Cultural Fest Fall 2021, University of Asia Pacific',
    description: 'Secured 3rd place in the Treasure Hunt event at CSE Cultural Fest Fall 2021.',
    image: treasureHuntImg,
  },
]

const certificates = [
  {
    year: '2024',
    title: 'CSE Tech Carnival — Idea Competition',
    subtitle: 'Certificate of Achievement, held 25 Feb 2024',
    description:
      'Presented a firefighting robot with an Arduino project proposal, jointly organized by the Software & Hardware Club and Robotics Club, CSE-UAP.',
    image: techCarnivalImg,
  },
  {
    year: '2023',
    title: 'Introduction to Machine Learning Training',
    subtitle: 'University of Asia Pacific, 4 Jun – 2 Jul 2023',
    description: 'Completed hands-on ML projects, gaining practical experience with algorithms.',
    image: mlTrainingImg,
  },
  {
    year: '2023',
    title: 'Cyber Security Bootcamp',
    subtitle: 'University of Asia Pacific',
    description: 'Enhanced modern security awareness by applying techniques learned in intensive workshops.',
    image: cyberBootcampImg,
  },
  {
    year: '2023',
    title: 'Frontend Development with React',
    subtitle: 'Creative IT Institute, 5 & 14 Oct 2023',
    description:
      'Completed a 2-day exclusive workshop on Frontend Development with React at Creative IT Institute, in association with the Dept of CSE, UAP.',
    image: reactWorkshopImg,
  },
  {
    year: '2022',
    title: 'Intra University Programming Contest',
    subtitle: 'Certificate of Participation',
    description: 'Participated in algorithmic problem-solving under competitive conditions.',
    image: programmingContestImg,
  },
  {
    year: '2022',
    title: 'Intra Department CTF Contest',
    subtitle: 'Certificate of Participation, held 16 April 2022',
    description: 'Strengthened cybersecurity skills by identifying real-time vulnerabilities through teamwork and technical expertise.',
    image: ctfContestImg,
  },
  {
    year: '2019',
    title: '7th DIC Mega Carnival',
    subtitle: 'Multi-media Presentation, Dhaka Imperial College',
    description: 'Participated in the Multi-media Presentation event at the 7th DIC Mega Carnival.',
    image: dicCarnivalImg,
  },
  {
    year: '2026',
    title: 'Akij Bicycle Hatirjheel Cycling Challenge',
    position: 'Certificate of Completion — 15 km',
    description:
      'Successfully completed the 15 km Akij Bicycle Hatirjheel Cycling Challenge within the 60-minute time limit, finishing both 7.5 km laps in 37+ minutes overall.',
    image: cyclingChallengeCertificateImg,
  },
  {
    year: '2021',
    title: 'Treasure Hunt — 3rd Place',
    subtitle: 'CSE Cultural Fest Fall 2021, University of Asia Pacific',
    position: '3rd Place — Certificate of Achievement',
    description:
      'Secured 3rd place in the Treasure Hunt competition at CSE Cultural Fest Fall 2021 and received a certificate recognizing the achievement.',
    image: treasureHuntcertificateImg,
  },
  {
    year: '2023',
    title: 'CSE Cultural Fest Volunteering',
    subtitle: 'Event Coordination',
    description: 'Coordinated logistics and participant guidance, ensuring a smooth and successful event.',
    image: culturalFestvolunteercertificateImg,
  },
]

function Section({ title, items }) {
  return (
    <div className="distinctions-section">
      <Reveal as="h2" className="distinctions-section__title">
        {title}
      </Reveal>
      <div className="edu-list">
        {items.map((item, i) => (
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
              <h3>{item.title}</h3>
              <p className="edu-card__degree">{item.subtitle}</p>
              <p className="edu-card__desc">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function Achievements() {
  return (
    <div className="container page">
      <Reveal>
        <span className="eyebrow">Co-curricular</span>
        <h1>Achievements</h1>
      </Reveal>

      <Section title="Medals" items={medals} />
      <Section title="Certificates" items={certificates} />
    </div>
  )
}