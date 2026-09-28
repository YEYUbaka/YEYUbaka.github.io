import './SectionHeader.css'

interface SectionHeaderProps {
  index: string
  title: string
  description?: string
}

export function SectionHeader({ index, title, description }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <span className="section-header-index mono">{index}</span>
      <div>
        <h2 className="section-header-title">{title}</h2>
        {description && <p className="section-header-desc">{description}</p>}
      </div>
    </header>
  )
}
