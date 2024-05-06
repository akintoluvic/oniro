'use client'

import { Hint } from "@/components/hint"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface ToolButtonProps {
  label: string
  icon: LucideIcon
  onClick: () => void
  isActive?: boolean
  isDiabled?: boolean
}

export const ToolButton = ({
  label,
  icon: Icon, // aliased so it can be used as a component
  onClick,
  isActive,
  isDiabled
}: ToolButtonProps) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDiabled}
        onClick={onClick}
        variant={isActive ? 'boardActive' : 'board'}
        size='icon'
      >
        <Icon/>
      </Button>
    </Hint>
  )
}
