import type { Project } from '../data/projects'

type ProjectGridProps = {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="section section--projects" id="projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-index">02 / SELECTED WORK</p>
            <h2>正在做，也正在验证。</h2>
          </div>
          <p className="section-description">
            只展示真实公开项目。每一张卡片都保留项目定位、关键技术和源代码入口。
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className="project-card card"
              data-featured={index === 0}
              key={project.slug}
            >
              <div className="project-card__topline">
                <span className="project-number">0{index + 1}</span>
                <span className="project-status">
                  {index === 0 ? 'CORE PROJECT' : 'OPEN SOURCE'}
                </span>
              </div>
              <div className="project-card__body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-card__footer">
                <div className="tag-list" aria-label={`${project.name} 技术标签`}>
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`打开 ${project.name} GitHub 仓库`}
                >
                  View repo <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

