import { Book, Music2, Video, Package, Image, GraduationCap, MessageSquare, Globe } from 'lucide-react'
import CollectionsCard from './CollectionsCard'

export default function CollectionsGrid() {
  const collections = [
    { key: 'livros', title: 'Livros & Textos', short: 'PDFs, e-books e materiais', itemsApprox: '750k+', description: 'Artigos, monografias e apostilas acadêmicas.', icon: <Book />, href: '/explorar?tipo=texto' },
    { key: 'audio',  title: 'Áudio', short: 'Podcasts e trilhas', itemsApprox: '900k+', description: 'Palestras, trilhas educacionais e entrevistas.', icon: <Music2 />, href: '/explorar?tipo=audio' },
    { key: 'video',  title: 'Vídeo', short: 'Aulas e demonstrações', itemsApprox: '1.1M+', description: 'Aulas gravadas e apresentações.', icon: <Video />, href: '/explorar?tipo=video' },
    { key: 'software', title: 'Software', short: 'Apps educacionais', itemsApprox: '280k+', description: 'Ferramentas e utilitários didáticos.', icon: <Package />, href: '/explorar?tipo=software' },
    { key: 'imagens', title: 'Imagens', short: 'Infográficos e diagramas', itemsApprox: '300k+', description: 'Materiais visuais para estudo.', icon: <Image />, href: '/explorar?tipo=imagem' },
    { key: 'cursos', title: 'Cursos', short: 'Conteúdos premium e gratuitos', itemsApprox: '5k+', description: 'Trilhas e cursos criados pela comunidade.', icon: <GraduationCap />, href: '/cursos' },
    { key: 'forum', title: 'Fórum', short: 'Perguntas e respostas', itemsApprox: 'discussões', description: 'Tire dúvidas e compartilhe conhecimento.', icon: <MessageSquare />, href: '/forum' },
    { key: 'web', title: 'Web', short: 'Páginas de referência', itemsApprox: 'capturas', description: 'Links e páginas espelhadas para estudo.', icon: <Globe />, href: '/explorar?tipo=web' }
  ] as const

  return (
    <div className="grid">
      {collections.map(c => <CollectionsCard key={c.key} {...c} />)}
    </div>
  )
}
