import { profile } from '../data/profile'

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">PORTFOLIO / 2026</p>
          <h1>
            {profile.name}
            <span>{profile.title}</span>
          </h1>
          <p className="hero__roles">TEST DEVELOPMENT · PYTHON · AI</p>
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              查看项目 <span>↓</span>
            </a>
            <a
              className="button button--ghost"
              href="https://github.com/YEYUbaka"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>
          </div>
        </div>

        <div className="hero__signal" aria-hidden="true">
          <div className="signal-orbit signal-orbit--outer" />
          <div className="signal-orbit signal-orbit--inner" />
          <div className="signal-core">
            <span>YE</span>
          </div>
          <span className="signal-label signal-label--top">BUILD</span>
          <span className="signal-label signal-label--right">VERIFY</span>
          <span className="signal-label signal-label--bottom">LEARN</span>
        </div>
      </div>
    </section>
  )
}

