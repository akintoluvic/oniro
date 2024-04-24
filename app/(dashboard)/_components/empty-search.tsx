import Image from "next/image";


export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        alt='Empty'
        src='/empty-search.svg'
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No results found</h2>
      <p className="mt-2 text-muted-foreground text-sm">
        Try searching something else
      </p>
    </div>
  )
}
