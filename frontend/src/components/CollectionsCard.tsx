import { ReactNode } from 'react'

type Props = {
  title: string
  short: string
  itemsApprox: string
  description: string
  icon: ReactNode
  href: string
}

export default function CollectionsCard({ title, short, itemsApprox, description, icon, href }: Props) {
  return (
    <a className="card" href={href} aria-label={`${title}: ${description}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span aria-hidden="true">{icon}</span>
        <div className="title">{title}</div>
      </div>
      <div className="desc">{description}</div>
      <div className="meta">{itemsApprox} · {short}</div>
    </a>
  )
}
