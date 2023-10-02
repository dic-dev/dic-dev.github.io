import Link from 'next/link'

type PageInfoProps = {
  keyword: string
  totalPosts: number
}

export default function PageInfo({ keyword, totalPosts }: PageInfoProps) {
  return (
    <>
      <nav className="container mx-auto px-6 pt-12 space-y-12 w-full">
        <div className="relative mx-auto bg-white flex flex-col justify-center p-6 space-y-4 shadow-md rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center">
            <h2
              className="rounded-full mx-auto absolute -top-3 shadow-md px-4 bg-white text-md font-semibold"
            >
              Search Result
            </h2>
          </div>

          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1 flex justify-center items-center gap-6">
              <span className="text-xl font-semibold sm:text-xl">Category</span>
              <Link
                href={`/search/?q=${keyword}/`}
                className="text-sm font-medium inline-block py-1 px-2 uppercase rounded text-orange-600 bg-orange-200"
              >
                {keyword}
              </Link>
            </div>
            <div className="flex justify-center pt-4 space-x-4 align-center">
              <p>{totalPosts} {totalPosts === 1 ? ' post' : ' posts'}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
