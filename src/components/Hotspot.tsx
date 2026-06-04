import { Link } from 'react-router-dom'

interface HotspotProps {
  to: string
  label: string
  top: string
  left: string
  width: string
  height: string
  show: boolean
}

export default function Hotspot({ to, label, top, left, width, height, show }: HotspotProps) {
  const isExternal = /^https?:\/\//.test(to)

  const style: React.CSSProperties = {
    position: 'absolute',
    top,
    left,
    width,
    height,
  }
  const className = `hotspot ${show ? 'visible' : ''}`
  const ariaLabel = `Ir para ${label}`
  const children = <span className="hotspot-tooltip">{label}</span>

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
        style={style}
      >
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={className} aria-label={ariaLabel} style={style}>
      {children}
    </Link>
  )
}
