import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchRepo } from '../lib/api'

export default function SearchHero() {
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!q.trim()) return
    setLoading(true)
    try {
      await searchRepo(q).catch(() => ({ results: [] }))
      navigate(`/explorar?q=${encodeURIComponent(q)}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <form className="search" role="search" aria-label="Pesquisar no acervo" onSubmit={onSubmit}>
        <input
          type="search"
          placeholder="Buscar por título, autor, tag..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Pesquisar no REPO"
        />
        <button className="btn primary" type="submit" disabled={loading}>
          {loading ? 'Pesquisando…' : 'Pesquisar'}
        </button>
      </form>

      {/* ÁREA CORRIGIDA ABAIXO */}
      <div className="search-links">
        <a href="/explorar?avancada=1">Busca avançada</a>
        <span className="link-separator"></span>
        <a href="/upload">Fazer upload</a>
        <span className="link-separator"></span>
        <a href="/repositorio">Navegar coleções</a>
      </div>
    </>
  )
}