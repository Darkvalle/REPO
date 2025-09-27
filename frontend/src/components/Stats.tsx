import { compact } from '../lib/format'

type Stat = { label: string; value: number; suffix?: string }

type Props = { stats: Stat[] }

export default function Stats({ stats }: Props) {
  return (
    <div className="stats" aria-label="Números do acervo">
      {stats.map((s) => (
        <div key={s.label} className="stat" aria-live="polite">
          <div className="k">{compact(s.value)}{s.suffix ?? ''}</div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
