import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  title: string
  align?: 'left' | 'center' | 'right'
  theme?: 'dark' | 'light'
  variant?: 'default' | 'swiss'
  description?: ReactNode
  titleClassName?: string
}

export default function PageLayout({ children, title, align, theme, variant, description, titleClassName }: PageLayoutProps) {
  const colors = {
    dark: "#0d0d0d",
    light: "#FFF"
  }

  const backgrounds = {
    dark: "linear-gradient(180deg, #262329 0%, #1c1a20 55%, #161419 100%)",
    light: "#FFF"
  }

  const isSwiss = variant === 'swiss'
  const textColor = colors[theme === 'dark' ? 'light' : 'dark']

  return (
    <div className="page-layout" style={{ background: backgrounds[theme ?? 'light'] }}>
      <header className={`page-header ${isSwiss ? 'page-header--swiss' : ''}`}>
        <Link style={{ color: textColor }} to="/" className="back-link" aria-label="Voltar para a estante">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Voltar à Estante</span>
        </Link>
      </header>

      <main className="page-content">
        <h1
          className={`page-title ${isSwiss ? 'page-title--swiss' : ''} ${titleClassName ?? ''}`}
          style={{ textAlign: isSwiss ? 'left' : (align ?? 'center'), color: textColor }}
        >
          {title}
        </h1>
        {description && (
          <p className="page-description" style={{ color: textColor, borderBottomColor: textColor }}>
            {description}
          </p>
        )}
        {children}
      </main>
    </div>
  )
}
