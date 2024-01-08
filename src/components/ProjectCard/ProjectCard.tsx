import './ProjectCard.css'

type Props = {
  src: string
  imgDescription: string
  title: string
  description: string
}

export default function ProjectCard({
  description,
  src,
  title,
  imgDescription,
}: Props) {
  return (
    <div className="project-card">
      <img src={src} alt={imgDescription} className="project-card--image" />
      <h3 className="project--title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  )
}
