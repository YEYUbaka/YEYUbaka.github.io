import { focusItems } from '../data/profile'

export function FocusSection() {
  return (
    <section className="section" id="focus">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / FOCUS</p>
            <h2>把质量意识写进开发过程。</h2>
          </div>
          <p className="section-description">
            从测试开发切入，把 Python 工程和 AI 应用连接成可以运行、验证和持续改进的项目。
          </p>
        </div>

        <div className="focus-grid">
          {focusItems.map((item) => (
            <article className="focus-card card" key={item.index}>
              <span className="card-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

