import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

import Category from 'icons/Category'
import Tag from 'icons/Tag'
import Time from 'icons/Time'

const Card = (post: Post) => {
  return (
    <>
      <div className="border-b border-b-gray-300 pb-4 sm:pb-6 mb-4 sm:mb-6 flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-1">
            <Time />
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'yyyy/M/d')}
            </time>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Category />
            {typeof post.category !== 'undefined'
              ?
              <Link
                href={`/category/${post.category}/`}
                className="text-sm font-medium inline-block py-1 px-2 uppercase rounded text-gray-900 bg-purple-200 shadow-sm"
              >
                {post.category}
              </Link>
              :
              <span
                className="text-sm font-medium inline-block py-1 px-2 uppercase rounded text-gray-900 bg-purple-200 shadow-sm"
              >
                undefined
              </span>
            }
          </div>
        </div>

        <Link href={post.url}>
          <h3 className="text-3xl font-semibold underline decoration-1">{post.title}</h3>
        </Link>

        <Link href={post.url}>
          <img
            src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png"
            alt="Blog Cover"
            className="object-fill w-full rounded rounded-b-none md:h-56 shadow-sm"
          />
        </Link>

        {typeof post.tags !== 'undefined' &&
          <div className="flex justify-end items-center flex-wrap gap-1">
            <Tag />
            {post.tags.map((tag, idx) => {
              return (
                <Link
                  key={idx}
                  href={`/tag/${tag}/`}
                  className="text-sm font-medium inline-block py-1 px-2 uppercase rounded text-gray-900 bg-sky-200 shadow-sm"
                >
                  {tag}
                </Link>
              )
            })}
          </div>
        }
      </div>
    </>
  )
}

export default Card
