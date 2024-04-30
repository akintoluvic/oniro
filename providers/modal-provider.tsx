'use client'

import { RenameModal } from '@/components/modals/rename-modal'
import { useEffect, useState } from 'react'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  // Ensures modals only renders when the client is mounted
  // to prevent hydration errors
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) return null
  
  return (
    <>
      <RenameModal />
    </>
  )
}
