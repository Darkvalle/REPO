import { Link, useLocation } from 'react-router-dom'
import NavLink from './NavLink'
import logo from '../assets/repo-logo.svg'
import { Upload, LogIn, UserPlus } from 'lucide-react'
import AppsMenu from './AppsMenu'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="header" role="banner" aria-label="Topo do REPO">
      <div className="header-inner">
        <a href="/" className="logo" aria-label="REPO — ir para a página inicial">
          <img src={logo} alt="" aria-hidden="true" />
          <span>REPO</span>
        </a>

        <nav className="nav" aria-label="Navegação principal">
          <NavLink to="/" aria-current={pathname === '/' ? 'page' : undefined}>Início</NavLink>
          <NavLink to="/explorar">Explorar</NavLink>
        </nav>

        <div className="header-cta">
          <AppsMenu />

          {/* 1. Botão de Upload com o novo estilo "clean" */}
          <Link to="/upload" className="btn btn-clean" aria-label="Fazer upload">
            <Upload size={18} />
            <span>Upload</span>
          </Link>

          {/* 2. Grupo para Entrar e Criar Conta com um separador */}
          <div className="auth-links">
            <Link to="/login" className="btn btn-clean" aria-label="Entrar">
              <LogIn size={18} />
              <span>Entrar</span>
            </Link>
            <Link to="/register" className="btn btn-clean primary" aria-label="Criar conta">
              <UserPlus size={18} />
              <span>Criar conta</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}