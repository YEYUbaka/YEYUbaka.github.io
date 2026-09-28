import { learningItems } from '../data/profile'

export function LearningSection() {
  return (
    <section className="section" id="learning">
      <div className="container">
        <div className="learning-panel card">
          <div>
            <p className="section-index">03 / CURRENTLY</p>
            <h2>保持学习，也保持交付。</h2>
            <p className="learning-intro">
              目前把学习重点放在能转化为项目能力的基础设施上。
            </p>
          </div>
          <ol className="learning-list">
            {learningItems.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

