import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DotBadge, Tag } from '../components/Badge'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { contactLinks, focusItems, learningItems, profile } from '../data/profile'
import { projectCategories, projects, type ProjectCategory } from '../data/projects'
import './HomePage.css'

export function HomePage() {
  const [filter, setFilter] = useState<ProjectCategory | '全部'>('全部')
  const visibleProjects = filter === '全部' ? projects : projects.filter((project) => project.category === filter)

  return (
    <>
      <section className="hero">
        <div className="container">
          <Reveal>
            <div className="hero-head">
              <img className="hero-avatar" src={profile.avatar} alt="YEYUbaka 的头像" width="72" height="72" />
              <div>
                <p className="hero-eyebrow mono">PORTFOLIO — 2026</p>
                <h1 className="hero-title">
                  {profile.name}
                  <span className="hero-title-sub">{profile.roles}</span>
                </h1>
              </div>
            </div>
            <p className="hero-roles mono">TEST DEVELOPMENT / PYTHON / AI</p>
            <p className="hero-intro">{profile.intro}</p>
            <p className="hero-stats">
              <span><strong className="mono">3</strong> 个精选项目</span>
              <span className="hero-stat-sep">·</span>
              <span><strong className="mono">AI</strong> 应用实践</span>
              <span className="hero-stat-sep">·</span>
              <span><strong className="mono">Python</strong> 工程</span>
            </p>
            <div className="hero-actions">
              <a className="hero-btn hero-btn--primary" href="#works">查看作品</a>
              <a className="hero-btn hero-btn--ghost" href="https://github.com/YEYUbaka" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <Link className="hero-btn hero-btn--ghost" to="/resume">方向 →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="works">
        <div className="container">
          <SectionHeader index="01" title="精选项目" description="只展示真实公开项目。每张卡片都保留项目定位、技术关键词和详情入口。" />
          <Reveal>
            <div className="works-filter" role="tablist" aria-label="项目分类筛选">
              {(['全部', ...projectCategories] as const).map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={filter === category}
                  className={`works-filter-btn mono ${filter === category ? 'is-active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="works-grid">
            {visibleProjects.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 60}>
                <ProjectCard project={project} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="focus">
        <div className="container">
          <SectionHeader index="02" title="实践方向" description="从测试开发切入，把 Python 工程和 AI 应用连接成可以运行、验证和持续改进的项目。" />
          <div className="focus-grid">
            {focusItems.map((item, index) => (
              <Reveal key={item.index} delay={index * 60}>
                <article className="focus-card card">
                  <span className="focus-index mono">{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="focus-arrow" aria-hidden="true">↗</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="home-bridge card">
              <div>
                <p className="section-index mono">03 / CURRENTLY</p>
                <h2>保持学习，也保持交付。</h2>
                <p className="home-bridge-desc">目前把学习重点放在能转化为项目能力的基础设施上。</p>
              </div>
              <ol className="learning-list">
                {learningItems.map((item, index) => (
                  <li key={item}><span className="mono">0{index + 1}</span>{item}</li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="container">
          <Reveal>
            <div className="contact-panel">
              <p className="section-index mono">04 / CONTACT</p>
              <h2>一起把问题变成可验证的结果。</h2>
              <p>如果你正在做测试开发、Python 或 AI 相关项目，欢迎通过 GitHub 或邮件联系我。</p>
              <div className="contact-links">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="hero-btn hero-btn--ghost">
                    {link.label} ↗
                  </a>
                ))}
              </div>
              <div className="contact-badges">
                <DotBadge>OPEN TO LEARNING</DotBadge>
                <Tag>TEST DEVELOPMENT</Tag>
                <Tag>AI / PYTHON</Tag>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
