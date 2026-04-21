import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import { albums, type Album } from '../data/albuns'

type Tab = 'todos' | 'categorias'

export default function Musica() {
  const [activeTab, setActiveTab] = useState<Tab>('categorias')
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null)

  const categories = albums.reduce<Record<string, Album[]>>((acc, album) => {
    if (!acc[album.category]) acc[album.category] = []
    acc[album.category].push(album)
    return acc
  }, {})

  const sortedCategoryEntries = Object.entries(categories).sort(([catA, albumsA], [catB, albumsB]) => {
    const priority = ['Jazz', 'Rock', 'MPB']
    const idxA = priority.indexOf(catA)
    const idxB = priority.indexOf(catB)

    if (idxA !== -1 && idxB !== -1) return idxA - idxB
    if (idxA !== -1) return -1
    if (idxB !== -1) return 1

    return albumsB.length - albumsA.length
  })

  return (
    <PageLayout
      title="Collection"
      theme="dark"
    >
      {/* Tabs */}
      <div className="vinyl-tabs">
        <button
          className={`vinyl-tab ${activeTab === 'categorias' ? 'vinyl-tab--active' : ''}`}
          onClick={() => setActiveTab('categorias')}
        >
          Por Categoria
        </button>
        <button
          className={`vinyl-tab ${activeTab === 'todos' ? 'vinyl-tab--active' : ''}`}
          onClick={() => setActiveTab('todos')}
        >
          Todos
        </button>
      </div>

      {/* "Todos" view – flat grid */}
      {activeTab === 'todos' && (
        <div className="vinyl-grid">
          {albums.map((album) => (
            <a
              key={album.title}
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`vinyl-card ${activeAlbum === album.title ? 'active' : ''}`}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  if (activeAlbum !== album.title) {
                    e.preventDefault()
                    setActiveAlbum(album.title)
                  }
                }
              }}
            >
              <div className="vinyl-cover-wrapper">
                <img
                  className="vinyl-cover"
                  src={album.cover}
                  alt={`Capa de ${album.title}`}
                  loading="lazy"
                />
                <div className="vinyl-overlay">
                  <span className="vinyl-album-name">{album.title}</span>
                  <span className="vinyl-artist-name">{album.artist}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* "Por Categoria" view – stacked sections */}
      {activeTab === 'categorias' && (
        <div className="vinyl-categories">

          {sortedCategoryEntries.map(([category, catAlbums]) => (
            <div key={category} className="vinyl-category-section">
              <h3 className="vinyl-category-title">{category}</h3>
              <div className="vinyl-stack">
                {catAlbums.map((album, idx) => {
                  const stackOrder = catAlbums.length - idx;

                  return <a
                    key={album.title}
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`vinyl-stack-item ${activeAlbum === album.title ? 'active' : ''}`}
                    style={{ '--stack-index': stackOrder } as React.CSSProperties}
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        if (activeAlbum !== album.title) {
                          e.preventDefault()
                          setActiveAlbum(album.title)
                        }
                      }
                    }}
                  >
                    <img
                      className="vinyl-stack-cover"
                      src={album.cover}
                      alt={`Capa de ${album.title}`}
                      loading="lazy"
                    />
                    <div className="vinyl-stack-overlay">
                      <span className="vinyl-album-name">{album.title}</span>
                      <span className="vinyl-artist-name">{album.artist}</span>
                    </div>
                  </a>
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </PageLayout>
  )
}
