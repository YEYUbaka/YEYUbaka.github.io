import { contactLinks, profile } from '../data/profile'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-channels">
          {contactLinks.map((channel) => (
            <a key={channel.label} href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="footer-channel">
              <span className="footer-channel-name">{channel.label}</span>
              <span className="footer-channel-detail mono">{channel.detail}</span>
            </a>
          ))}
        </div>
        <p className="footer-copy mono">
          &copy; {profile.name} 2026 · Built with React &amp; Vite ·{' '}
          <a href="https://github.com/YEYUbaka/YEYUbaka.github.io" target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </p>
      </div>
    </footer>
  )
}
