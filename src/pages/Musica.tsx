import { useState } from 'react'
import PageLayout from '../components/PageLayout'

interface Album {
  title: string
  artist: string
  cover: string
  spotifyUrl: string
  category: string
}

const albums: Album[] = [
  {
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    cover: 'https://i.scdn.co/image/ab67616d0000b273ea7caaff71dea1051d49b2fe',
    spotifyUrl: 'https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv',
    category: 'Rock Clássico',
  },
  {
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    cover: 'https://i.scdn.co/image/ab67616d0000b273e52a59a28efa4773dd2bfe1b',
    spotifyUrl: 'https://open.spotify.com/album/1bt6q2SruMsBtcerNVtpZB',
    category: 'Rock Clássico',
  },
  {
    title: 'The White Album',
    artist: 'The Beatles',
    cover: 'https://i.scdn.co/image/ab67616d0000b273b263c2c6d6e8b1744ecab464',
    spotifyUrl: 'https://open.spotify.com/album/1klALx0u4AavZNEvC4LrTL',
    category: 'Rock Clássico',
  },
  {
    title: 'Back in Black',
    artist: 'AC/DC',
    cover: 'https://i.scdn.co/image/ab67616d0000b2734a0b23be1d6a94f42bf97413',
    spotifyUrl: 'https://open.spotify.com/album/6mUdeDZCsEXnRjoFnSaE7d',
    category: 'Rock Clássico',
  },
  {
    title: 'The Wall',
    artist: 'Pink Floyd',
    cover: 'https://i.scdn.co/image/ab67616d0000b2735d48e2f56d691f9a4e4b0bdf',
    spotifyUrl: 'https://open.spotify.com/album/5Dbax7G8SYXbyjKFSFlbCC',
    category: 'Rock Clássico',
  },
  {
    title: 'Thriller',
    artist: 'Michael Jackson',
    cover: 'https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be',
    spotifyUrl: 'https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ',
    category: 'Pop',
  },
  {
    title: 'Hotel California',
    artist: 'Eagles',
    cover: 'https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778',
    spotifyUrl: 'https://open.spotify.com/album/2widuo17g5CEC66IbzveRu',
    category: 'Rock Clássico',
  },
  {
    title: 'Abbey Road',
    artist: 'The Beatles',
    cover: 'https://i.scdn.co/image/ab67616d0000b273dc30583ba717007b00cceb25',
    spotifyUrl: 'https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN',
    category: 'Rock Clássico',
  },
  {
    title: 'Purple Rain',
    artist: 'Prince',
    cover: 'https://i.scdn.co/image/ab67616d0000b2733368e12b9e4d6073c44f3c3c',
    spotifyUrl: 'https://open.spotify.com/album/7nXJ5k4XgRj5OLg9m8V3zc',
    category: 'Pop',
  },
  {
    title: 'Joshua Tree',
    artist: 'U2',
    cover: 'https://i.scdn.co/image/ab67616d0000b273b72a4e04d60ac60be39002b8',
    spotifyUrl: 'https://open.spotify.com/album/5GjKGhRma1bM4BkvkGgaHm',
    category: 'Rock Alternativo',
  },
  {
    title: 'Nevermind',
    artist: 'Nirvana',
    cover: 'https://i.scdn.co/image/ab67616d0000b2739aee004a23097316385bea50',
    spotifyUrl: 'https://open.spotify.com/album/2UJcKiJxNryhL050F5Z1Fk',
    category: 'Rock Alternativo',
  },
  {
    title: 'OK Computer',
    artist: 'Radiohead',
    cover: 'https://i.scdn.co/image/ab67616d0000b273c8b444df094c181e82392c85',
    spotifyUrl: 'https://open.spotify.com/album/6dVIqQ8qmQ5GBnJ9shOYGE',
    category: 'Rock Alternativo',
  },
  {
    title: 'The Velvet Underground & Nico',
    artist: 'The Velvet Underground',
    cover: 'https://i.scdn.co/image/ab67616d0000b27341aa6776dc15fbd71a2b4557',
    spotifyUrl: 'https://open.spotify.com/album/4xwx0x7k6c5VuThz5qVqmV',
    category: 'Rock Alternativo',
  },
  {
    title: "What's Going On",
    artist: 'Marvin Gaye',
    cover: 'https://i.scdn.co/image/ab67616d0000b273922a314bae4080dc03e268ad',
    spotifyUrl: 'https://open.spotify.com/album/2v6ANhBYAXra8EEhJkGHHD',
    category: 'Soul / R&B',
  },
  {
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    cover: 'https://i.scdn.co/image/ab67616d0000b2734b29272dcdc8b0f4bae08025',
    spotifyUrl: 'https://open.spotify.com/album/1weenld61qoidwYuZ1GESA',
    category: 'Jazz',
  },
  {
    title: 'A Love Supreme',
    artist: 'John Coltrane',
    cover: 'https://i.scdn.co/image/ab67616d0000b27377df1e11aa15809a7a4c267d',
    spotifyUrl: 'https://open.spotify.com/album/6dyGjocXhEN3BuNRCxbPOQ',
    category: 'Jazz',
  },
]

type Tab = 'todos' | 'categorias'

export default function Musica() {
  const [activeTab, setActiveTab] = useState<Tab>('todos')
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null)

  const categories = albums.reduce<Record<string, Album[]>>((acc, album) => {
    if (!acc[album.category]) acc[album.category] = []
    acc[album.category].push(album)
    return acc
  }, {})

  return (
    <PageLayout
      title="Collection"
      theme="dark"
    >
      {/* Tabs */}
      <div className="vinyl-tabs">
        <button
          className={`vinyl-tab ${activeTab === 'todos' ? 'vinyl-tab--active' : ''}`}
          onClick={() => setActiveTab('todos')}
        >
          Todos
        </button>
        <button
          className={`vinyl-tab ${activeTab === 'categorias' ? 'vinyl-tab--active' : ''}`}
          onClick={() => setActiveTab('categorias')}
        >
          Por Categoria
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

          {Object.entries(categories).map(([category, catAlbums]) => (
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
