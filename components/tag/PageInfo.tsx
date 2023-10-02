import Link from 'next/link'

type PageInfoProps = {
  tag: string
  totalPosts: number
}

export default function PageInfo({ tag, totalPosts }: PageInfoProps) {
  return (
    <>
      <nav className="container mx-auto px-6 pt-12 space-y-12 w-full">
        <div className="relative mx-auto bg-white flex flex-col justify-center p-6 space-y-4 shadow-md rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center">
            <h2
              className="rounded-full mx-auto absolute -top-3 shadow-md px-4 bg-white text-xl font-semibold"
            >
              Tag
            </h2>
          </div>

          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1 flex justify-center items-center gap-6">
              <Link
                href={`/tag/${tag}/`}
                className="text-lg font-medium inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200"
              >
                {tag}
              </Link>
              <span className="text-lg font-medium">{totalPosts} {totalPosts === 1 ? ' post' : ' posts'}</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

