import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Livros from './pages/Livros'
import Musica from './pages/Musica'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<Livros />} />
      <Route path="/music" element={<Musica />} />
    </Routes>
  )
}

export default App
