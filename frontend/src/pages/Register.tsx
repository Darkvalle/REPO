import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

export default function Register() {
  return (
    <div className="auth-form-container">
      <div className="auth-header">
        <UserPlus size={40} className="auth-icon" />
        <h2>Crie sua conta</h2>
        <p>Junte-se à comunidade para compartilhar e descobrir conhecimento.</p>
      </div>

      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Nome completo</label>
          <input type="text" id="name" name="name" required placeholder="Seu nome completo" />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required placeholder="seu@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required placeholder="••••••••" />
        </div>

        <button type="submit" className="btn primary auth-button">
          Criar conta
        </button>
      </form>

      <p className="auth-footer">
        Já tem uma conta? <Link to="/login">Entrar</Link>
      </p>
    </div>
  );
}