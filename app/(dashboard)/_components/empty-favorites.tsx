import Image from "next/image";


export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        alt='Empty'
        src='/empty-favorites.svg'
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No favorites boards</h2>
      <p className="mt-2 text-muted-foreground text-sm">
        Try favoriting a board
      </p>
    </div>
  )
}
