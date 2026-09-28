import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { Tag } from './Badge'
import './ProjectCard.css'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link to={`/works/${project.id}`} className="project-card card" data-featured={index === 0}>
      <div
        className="project-card-cover"
        style={{ background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}
        aria-hidden="true"
      >
        <span className="project-card-cover-name mono">{project.name}</span>
      </div>
      <div className="project-card-body">
        <div className="project-card-head">
          <div>
            <span className="project-card-number mono">0{index + 1}</span>
            <h3 className="project-card-name">{project.name}</h3>
          </div>
          <span className="project-card-category mono">{project.category}</span>
        </div>
        <p className="project-card-tagline">{project.tagline}</p>
        <div className="project-card-footer">
          <div className="project-card-tags" aria-label={`${project.name} 技术标签`}>
            {project.techStack.slice(0, 4).map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
          <span className="project-card-link mono">View detail ↗</span>
        </div>
      </div>
    </Link>
  )
}
