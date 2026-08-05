import { useParams } from 'react-router'

export default function ProjectDetail() {
  const { slug } = useParams()
  return (
    <div className="container" style={{ paddingTop: '8rem' }}>
      <h1>Project: {slug}</h1>
    </div>
  )
}