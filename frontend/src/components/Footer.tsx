export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div>© {new Date().getFullYear()} REPO — biblioteca digital aberta.</div>
        <nav aria-label="Links do rodapé" style={{ display: 'flex', gap: 14 }}>
          <a href="/repositorio">Repositório</a>
          <a href="/pagina-inicial">Mapa do site</a>
          <a href="/sobre">Sobre</a>
          <a href="/sobre#privacidade">Privacidade</a>
        </nav>
      </div>
    </footer>
  )
}
