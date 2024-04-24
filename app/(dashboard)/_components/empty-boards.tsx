import { Button } from "@/components/ui/button";
import Image from "next/image";


export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        alt='Empty'
        src='/empty-boards.svg'
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No boards yet</h2>
      <p className="mt-2 text-muted-foreground text-sm">
        Start by creating a board
      </p>
      <div className="mt-6">
        <Button size='lg'>
          Create board
        </Button>
      </div>
    </div>
  )
}
