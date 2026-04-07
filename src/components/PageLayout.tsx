import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  title: string
  align?: 'left' | 'center' | 'right'
  theme?: 'dark' | 'light'
}

export default function PageLayout({ children, title, align, theme }: PageLayoutProps) {
  const colors = {
    dark: "#0d0d0d",
    light: "#FFF"
  }

  return (
    <div className="page-layout" style={{ backgroundColor: colors[theme ?? 'light'] }}>
      <header className="page-header">
        <Link style={{ color: colors[theme === 'dark' ? 'light' : 'dark'] }} to="/" className="back-link" aria-label="Voltar para a estante">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Voltar à Estante</span>
        </Link>
      </header>

      <main className="page-content">
        <h1 className="page-title" style={{ textAlign: align ?? 'center', color: colors[theme === 'dark' ? 'light' : 'dark'] }}>{title}</h1>
        {children}
      </main>
    </div>
  )
}
