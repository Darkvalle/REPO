import { NavLink as RRLink } from 'react-router-dom'

export default function NavLink(props: React.ComponentProps<typeof RRLink>) {
  return <RRLink {...props} className={({ isActive }) => (isActive ? 'active' : undefined)} />
}
