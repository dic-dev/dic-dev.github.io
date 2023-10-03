import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

const PostCard = (post: Post) => {
  return (
    <div
      className="w-full px-4 py-4 md:w-1/2"
    >
      <div
        className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded shadow-lg hover:shadow-2xl"
      >
        <Link
          href={post.url}
          className="md:flex-shrink-0"
        >
          <img
            src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png"
            alt="Blog Cover"
            className="object-fill w-full rounded rounded-b-none md:h-56"
          />
        </Link>
        <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
          <Link
            href={`/category/${post.category}/`}
            className="text-xs font-medium text-blue-600 uppercase"
          >
            {post.category}
          </Link>
          <div className="flex flex-row items-center">
            <time
              dateTime={post.date}
              className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2"
            >
              {format(parseISO(post.date), 'yyyy/M/d')}
            </time>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
          <Link href={post.url} className="hover:underline">
            <h2 className="text-2xl font-bold tracking-normal text-gray-800">
              {post.title}
            </h2>
          </Link>
        </div>
        {typeof post.description !== 'undefined' &&
          <>
            <hr className="border-gray-300" />
            <div
              className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.description.html }}
            >
            </div>
          </>
        }
        {typeof post.tags !== 'undefined' &&
          <>
            <hr className="border-gray-300" />
            <section className="px-4 py-2 mt-2">
              <div className="flex items-center flex-wrap gap-1">
                {post.tags.map((tag, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={`/tag/${tag}/`}
                      className="text-xs font-medium inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200"
                    >
                      {tag}
                    </Link>
                  )
                })}
              </div>
            </section>
          </>
        }
      </div>
    </div>
  )
}

export default PostCard
