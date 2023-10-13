import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'

import Thumbnail from 'components/Thumbnail'
import Badge from 'components/blog/Badge'

import Category from 'icons/Category'
import Tag from 'icons/Tag'
import Time from 'icons/Time'

const Card = (post: Post) => {
  return (
    <>
      <div className="border-b border-b-gray-300 pb-4 sm:pb-6 mb-4 flex flex-col gap-4 dark:border-b-gray-600">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-1">
            <Time
              size={20}
              className="fill-gray-900 dark:fill-white"
            />
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'yyyy/M/d')}
            </time>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Category
              size={20}
              className="fill-gray-900 dark:fill-white"
            />
            {typeof post.category !== 'undefined'
              ?
              <Badge
                name={post.category}
                href={`/category/${post.category}/`}
              />
              :
              <Badge
                name="undefined"
              />
            }
          </div>
        </div>

        <Link href={post.url}
          className="bg-gray-100 hover:bg-gray-200 p-4 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <h3 className="text-2xl md:text-3xl font-semibold underline decoration-1 dark:text-white">{post.title}</h3>
          <Thumbnail {...post} />
          {typeof post.description !== 'undefined' &&
            <div
              dangerouslySetInnerHTML={{ __html: post.description.html }}
              className="text-base line-clamp-3 dark:text-white"
            />
          }
        </Link>

        {typeof post.tags !== 'undefined' &&
          <div className="flex justify-end items-center flex-wrap gap-1 [&>*:last-child]:hidden">
            <Tag
              size={20}
              className="fill-gray-900 dark:fill-white"
            />
            {post.tags.map((tag, idx) => {
              return (
                <>
                  <Badge
                    name={tag}
                    key={idx}
                    href={`/tag/${tag}/`}
                  />
                  <span>,</span>
                </>
              )
            })}
          </div>
        }
      </div>
    </>
  )
}

export default Card
