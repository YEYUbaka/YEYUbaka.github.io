import { useEffect, useState } from 'react'

const navItems = [
  { label: '方向', href: '#focus' },
  { label: '项目', href: '#projects' },
  { label: '学习', href: '#learning' },
  { label: '联系', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`site-header ${open ? 'is-open' : ''}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#top" onClick={closeMenu}>
          YEYUbaka<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? '关闭导航菜单' : '打开导航菜单'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav ${open ? 'is-open' : ''}`}
          aria-label="主导航"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-github"
            href="https://github.com/YEYUbaka"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            GitHub <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

