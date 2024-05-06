import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const COLORS = [
  '#DC2626',
  '#F59E0B',
  '#059669',
  '#7C3AED',
  '#DB2777',
  '#14B8A6',
  '#E11D48',
  '#84CC16',
  '#F97316',
  '#64748B',
  '#8B5CF6',
  '#EC4899',
  '#22C55E',
  '#EF4444',
  '#14B8A6',
  '#6B7280',
]

export function connectionIdToColor (connectionId: number): string {
  return COLORS[connectionId % COLORS.length]
}