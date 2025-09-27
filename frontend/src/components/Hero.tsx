import { Link } from 'react-router-dom'
import SearchHero from './SearchHero'
import Stats from './Stats'
import { MessageSquare } from 'lucide-react'

type Stat = { label: string; value: number; suffix?: string }
type Props = { stats: Stat[] }

export default function Hero({ stats }: Props) {
  return (
    <div className="hero-main">
      <p id="hero-title" className="hero-description">
        Nossa missão é criar um ecossistema digital para a preservação e o compartilhamento de conhecimento. O REPO é uma plataforma dedicada a organizar, proteger e distribuir recursos educacionais, culturais e profissionais para comunidades e indivíduos.
      </p>
      
      <Stats stats={stats} />
      
      <SearchHero />

      <aside className="hero-aside" aria-labelledby="forum-cta-title">
        <div className="cta-icon">
          <MessageSquare size={24} />
        </div>
        <h3 id="forum-cta-title">Repo Newsletter</h3>
        <p>Tire dúvidas, compartilhe ideias e colabore com outros membros da nossa comunidade no Fórum de Discussão.</p>
        <Link to="/forum" className="btn primary">
          Acessar o Fórum
        </Link>
      </aside>
    </div>
  )
}