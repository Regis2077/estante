import { Link } from 'react-router-dom'
import Hotspot from '../components/Hotspot'
// import estanteImg from '../assets/estante-04.jpg'
import { hotspots } from '../data'
import { cards } from '../data/cards'
import { useState } from 'react'


export default function HomePage() {
  const [showHotspots, setShowHotspots] = useState(false)

  return (
    <div className="home">
      <header className="home-header">
        <div>
          <span className="home-label">CASA ABERTA</span>
          <h1 className="home-tagline">Uma estante como mapa pessoal.</h1>
        </div>
        <p className="home-header-aside">
          Passe o mouse para revelar os items.
        </p>
      </header>

      <div className="home-hero">
        <div className="shelf-scene">
          <button onClick={() => { setShowHotspots(!showHotspots) }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          </button>
          <img
            src={"https://placehold.co/1920x1080"}
            alt="Estante pessoal com livros, fotos e objetos de coleção"
            className="shelf-image"
          />
          {hotspots.map((spot) => (
            <Hotspot key={spot.to} {...spot} show={showHotspots} />
          ))}
        </div>
      </div>

      <section className="home-explore">
        <div className="explore-text">
          <span className="home-label">EXPLORE SEM PRESSA</span>
          <h2 className="explore-heading">
            Passe o cursor,<br />
            descubra<br />
            uma história.
          </h2>
          <p className="explore-body">
            Cada objeto uma parte da minha vida.
          </p>
        </div>

        <div className="explore-grid">
          {cards.map((s) => (
            <Link key={s.to} to={s.to} className="explore-card">
              <span className="explore-card-num">{s.num}</span>
              <h3 className="explore-card-title">{s.title}</h3>
              <p className="explore-card-desc">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
