import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

import Thumbnail from 'components/Thumbnail'

import Category from 'icons/Category'
import Tag from 'icons/Tag'
import Time from 'icons/Time'

const Card = (post: Post) => {
  return (
    <>
      <div className="border-b border-b-gray-300 pb-4 sm:pb-6 mb-4 flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-1">
            <Time
              size={30}
              className="fill-gray-900"
            />
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'yyyy/M/d')}
            </time>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Category
              size={30}
              className="fill-gray-900"
            />
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

        <Link href={post.url}
          className="bg-gray-100 p-4"
        >
          <h3 className="text-2xl md:text-3xl font-semibold underline decoration-1">{post.title}</h3>
          <Thumbnail {...post} />
          {typeof post.description !== 'undefined' &&
            <div
              dangerouslySetInnerHTML={{ __html: post.description.html }}
              className="text-base line-clamp-3"
            />
          }
        </Link>

        {typeof post.tags !== 'undefined' &&
          <div className="flex justify-end items-center flex-wrap gap-1">
            <Tag
              size={30}
              className="fill-gray-900"
            />
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
