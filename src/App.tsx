import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Livros from './pages/Livros'
import Musica from './pages/Musica'
import './App.css'
import Test from './pages/test'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/livros" element={<Livros />} />
      <Route path="/musica" element={<Musica />} />
      <Route path="/test" element={<Test />} />

    </Routes>
  )
}

export default App
