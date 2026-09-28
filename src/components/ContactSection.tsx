import { contactLinks } from '../data/profile'

export function ContactSection() {
  return (
    <section className="section section--contact" id="contact">
      <div className="container">
        <div className="contact-panel">
          <p className="section-index">04 / CONTACT</p>
          <h2>一起把问题变成可验证的结果。</h2>
          <p>
            如果你正在做测试开发、Python 或 AI 相关项目，欢迎通过 GitHub 或邮件联系我。
          </p>
          <div className="contact-links">
            {contactLinks.map((link) => (
              <a
                className="button button--ghost"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                key={link.label}
              >
                {link.label} <span>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

