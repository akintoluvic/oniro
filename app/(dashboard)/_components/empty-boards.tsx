'use client'

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";
import { toast } from "sonner";

export const EmptyBoards = () => {
  
  const router = useRouter()
  const { organization } = useOrganization()
  const { pending, mutate } = useApiMutation(api.board.create)

  const onClick = () => {
    if(!organization) return

    mutate({
      orgId: organization?.id,
      title: 'Untitled'
    })
      .then(id => {
        toast.success('Board created')
        router.push(`/board/${id}`)
      })
      .catch(() => toast.error('Failed to create board'))
  }

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
        <Button size='lg' disabled={pending} onClick={onClick}>
          Create board
        </Button>
      </div>
    </div>
  )
}
