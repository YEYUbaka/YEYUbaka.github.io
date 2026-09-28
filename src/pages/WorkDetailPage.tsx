import { Link, useParams } from 'react-router-dom'
import { Tag } from '../components/Badge'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/projects'
import './WorkDetailPage.css'

export function WorkDetailPage() {
  const { id } = useParams<{ id: string }>()
  const index = projects.findIndex((project) => project.id === id)
  const project = index >= 0 ? projects[index] : undefined

  if (!project) {
    return (
      <div className="container work-detail work-detail--missing">
        <h1>没有找到这个项目</h1>
        <p>链接可能已失效，回到首页看看精选项目。</p>
        <Link to="/" className="hero-btn hero-btn--primary">← 返回首页</Link>
      </div>
    )
  }

  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]

  return (
    <div className="work-detail">
      <div className="work-detail-hero" style={{ background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})` }}>
        <div className="container">
          <Reveal>
            <Link to="/" className="work-detail-back mono">← 全部作品</Link>
            <p className="work-detail-category mono">{project.category}</p>
            <h1>{project.name}</h1>
            <p>{project.tagline}</p>
          </Reveal>
        </div>
      </div>

      <div className="container work-detail-body">
        <Reveal>
          <div className="work-detail-meta">
            <div className="work-detail-tags">{project.techStack.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
            <div className="work-detail-links">
              {project.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn--ghost">{link.label} ↗</a>)}
            </div>
          </div>
        </Reveal>

        <div className="work-detail-sections">
          <Reveal>
            <section className="card work-detail-section">
              <h2 className="work-detail-section-title mono">背景与定位</h2>
              <p>{project.background}</p>
            </section>
          </Reveal>
          <Reveal delay={60}>
            <section className="card work-detail-section">
              <h2 className="work-detail-section-title mono">技术与实现</h2>
              <p>{project.role}</p>
            </section>
          </Reveal>
          <Reveal delay={120}>
            <section className="card work-detail-section">
              <h2 className="work-detail-section-title mono">项目特点</h2>
              <ul className="work-detail-highlights">
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </section>
          </Reveal>
        </div>

        <nav className="work-detail-pager" aria-label="项目翻页">
          <Link to={`/works/${previous.id}`} className="work-detail-pager-link card"><span className="mono">← 上一个</span><strong>{previous.name}</strong></Link>
          <Link to={`/works/${next.id}`} className="work-detail-pager-link card is-next"><span className="mono">下一个 →</span><strong>{next.name}</strong></Link>
        </nav>
      </div>
    </div>
  )
}
