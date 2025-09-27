import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Collections from '../components/Collections'
import { fetchStats } from '../lib/api'

type Stat = { label: string; value: number; suffix?: string }

// Dados de fallback caso a API falhe
const fallback: Stat[] = [
  { label: 'Usuários', value: 0 },
  { label: 'Arquivos', value: 0 },
  { label: 'Livros & textos', value: 1400000 },
  { label: 'Áudio', value: 3200000 },
  { label: 'Software', value: 280000 }
];

export default function Home() {
  const [stats, setStats] = useState<Stat[]>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats()
      .then((s) => {
        setStats([
          { label: 'Usuários', value: s.users },
          { label: 'Arquivos', value: s.files },
          { label: 'Livros & textos', value: s.books },
          { label: 'Áudio', value: s.audio },
          { label: 'Software', value: s.software }
        ]);
      })
      .catch(() => {
        // Em caso de erro, mantém os dados de fallback
        console.error("Falha ao buscar estatísticas da API.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Hero stats={stats} />
      <section className="section">
        <Collections />
      </section>
    </>
  );
}