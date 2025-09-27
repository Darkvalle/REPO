export default function Upload() {
  return (
    <section className="section">
      <h2>Upload</h2>
      <p style={{ color: 'var(--muted)' }}>
        Faça upload dos seus materiais educacionais. Esta tela chamará o endpoint do Laravel conforme definido no back-end.
      </p>
      <button className="btn primary" disabled>Escolher arquivo (em breve)</button>
    </section>
  )
}
