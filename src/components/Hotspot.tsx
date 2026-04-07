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

  return (
    <Link
      to={to}
      className={`hotspot ${show ? 'visible' : ''}`}
      aria-label={`Ir para ${label}`}
      style={{
        position: 'absolute',
        top,
        left,
        width,
        height,
      }}
    >
      <span className="hotspot-tooltip">{label}</span>
    </Link>
  )
}
