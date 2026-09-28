import type { ReactNode } from 'react'
import './Badge.css'

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag mono">{children}</span>
}

export function DotBadge({ children }: { children: ReactNode }) {
  return <span className="dot-badge mono"><span aria-hidden="true" />{children}</span>
}
