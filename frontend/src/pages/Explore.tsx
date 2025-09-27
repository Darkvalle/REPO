import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchRepo } from '../lib/api'

type Result = { id: string; title: string; author?: string; type: string; year?: number }

export default function Explore() {
  const [params] = useSearchParams()
  const initialQ = params.get('q') ?? ''
  const tipo = useMemo(() => params.get('tipo') ?? undefined, [params])

  const [q, setQ] = useState(initialQ)
  const [results, setResults] = useState<Result[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!initialQ && !tipo) return
    setLoading(true)
    searchRepo(initialQ)
      .then(({ results }) => setResults(results as Result[]))
      .catch(() => setResults([]))
      .finally(() => setLoading(false))
  }, [initialQ, tipo])

  return (
    <section className="section" aria-labelledby="explorar-tit">
      <h2 id="explorar-tit">Explorar</h2>

      <form className="search" role="search" aria-label="Pesquisar novamente" onSubmit={(e) => { e.preventDefault(); window.location.href = `/explorar?q=${encodeURIComponent(q)}` }}>
        <input type="search" placeholder="Refinar busca..." value={q} onChange={e => setQ(e.target.value)} />
        <button className="btn">Buscar</button>
      </form>

      <div style={{ marginTop: 16, color: 'var(--muted)' }}>
        {loading ? 'Carregando…' : `${results.length} itens encontrados`}
      </div>

      <div className="grid" style={{ marginTop: 16 }}>
        {results.map(r => (
          <article className="card" key={r.id} aria-label={r.title}>
            <div className="title">{r.title}</div>
            <div className="desc">{r.author ?? 'Autor desconhecido'} · {r.year ?? 's/d'}</div>
            <div className="meta">{r.type}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
