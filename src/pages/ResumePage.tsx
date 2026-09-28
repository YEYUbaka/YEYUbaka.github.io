import { Link } from 'react-router-dom'
import { Tag } from '../components/Badge'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { directionItems, learningItems, profile, stackGroups } from '../data/profile'
import './ResumePage.css'

export function ResumePage() {
  return (
    <div className="resume">
      <section className="section resume-hero">
        <div className="container">
          <Reveal>
            <p className="hero-eyebrow mono">DIRECTION</p>
            <h1 className="resume-title">{profile.name}<span>{profile.title}</span></h1>
            <p className="resume-intro">{profile.intro}</p>
            <Link to="/" className="hero-btn hero-btn--ghost">← 回到作品</Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader index="01" title="我在做什么" description="把质量意识、Python 工程和 AI 应用放在同一条实践路径上。" />
          <div className="direction-grid">
            {directionItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="card direction-card">
                  <span className="direction-card-index mono">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader index="02" title="技术栈" />
          <div className="stack-grid">
            {stackGroups.map((group, index) => (
              <Reveal key={group.name} delay={index * 60}>
                <section className="card stack-card">
                  <h3 className="mono">{group.name}</h3>
                  <div className="stack-items">{group.items.map((item) => <Tag key={item}>{item}</Tag>)}</div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader index="03" title="当前学习" />
          <ol className="direction-learning card">
            {learningItems.map((item, index) => <li key={item}><span className="mono">0{index + 1}</span>{item}</li>)}
          </ol>
        </div>
      </section>
    </div>
  )
}
