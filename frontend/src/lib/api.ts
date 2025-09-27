const BASE = import.meta.env.VITE_API_URL

async function asJson<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json() as Promise<T>
}

export async function searchRepo(q: string) {
  const res = await fetch(`${BASE}/search?q=${encodeURIComponent(q)}`, {
    headers: { Accept: 'application/json' },
    credentials: 'include'
  })
  return asJson<{ results: any[] }>(res)
}

export async function fetchStats() {
  const res = await fetch(`${BASE}/stats`, { headers: { Accept: 'application/json' } });
  // A interface da resposta agora inclui 'users'
  return asJson<{ users: number; files: number; books: number; audio: number; software: number }>(res);
}