'use client'

import { Hint } from "@/components/hint"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel"
import { cn } from "@/lib/utils"
import { useRenameModal } from "@/store/use-rename-modal"
import { useQuery } from "convex/react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

interface InfoProps {
  boardId: string
}

const font = Poppins({
  subsets: ['latin'],
  weight:['600']
})

const TabSeparator = () => {
  return (
    <div className="px-1.5 text-neutral-300">
      |
    </div>
  )
}

export const Info = ({
  boardId
}: InfoProps) => {

  const { onOpen } = useRenameModal()

  const data = useQuery(api.board.get, {
    id: boardId as Id<'boards'>
  })

  if (!data) {
    return <InfoSkeleton />
  }

  return (
    <div
      className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md"
    >
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button variant='board' className="px-2">
          <Link href="/" className="flex items-center">
            <Image
              src='/logo.svg'
              alt="Board logo"
              height={30}
              width={30}
              
            />
            <span className={cn(
              "font-semibold text-xl ml-2 text-black",
              font.className
            )}>
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint label="Edit board title" side="bottom" sideOffset={10}>
        <Button
          variant="board" 
          onClick={() =>onOpen(data._id, data.title)}
          className="text-base font-normal px-2"
        >
          {data.title}
        </Button>
      </Hint>
    </div>
  )
}

export const InfoSkeleton = () => {
  return (
    <div
      className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"
    />
  )
}
