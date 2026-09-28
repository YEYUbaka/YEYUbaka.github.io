import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Nav.css'

export function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const goSection = (id: string) => {
    close()
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand mono" onClick={close}>
          YEYUbaka<span className="nav-brand-dot">.</span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`nav-toggle-bar ${open ? 'is-open' : ''}`} />
        </button>

        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          <button className="nav-link nav-link-btn" onClick={() => goSection('works')}>
            作品
          </button>
          <NavLink to="/resume" className="nav-link" onClick={close}>
            方向
          </NavLink>
          <a
            href="https://github.com/YEYUbaka"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta mono"
            onClick={close}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  )
}
