import './ProjectCard.css'

type Props = {
  src: string
  imgDescription: string
  title: string
  description: string
  url: string
}

export default function ProjectCard({
  description,
  src,
  title,
  imgDescription,
  url,
}: Props) {
  return (
    <a target="_blank" href={url} className="project-card">
      <img src={src} alt={imgDescription} className="project-card--image" />
      <h3 className="project--title">{title}</h3>
      <p className="project-description">{description}</p>
    </a>
  )
}
