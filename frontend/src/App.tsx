import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Forum from './pages/Forum'
import Login from './pages/Login'
import Register from './pages/Register' 
import NotFound from './pages/NotFound'
import PaginaInicial from './pages/PaginaInicial'
import Repositorio from './pages/Repositorio'
import Upload from './pages/Upload'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main role="main" id="conteudo" className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explore />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* <-- 2. Adicione a nova rota */}
          <Route path="/repositorio" element={<Repositorio />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/pagina-inicial" element={<PaginaInicial />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}