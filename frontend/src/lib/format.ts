export function compact(n: number): string {
  return Intl.NumberFormat('pt-BR', { notation: 'compact' }).format(n)
}
