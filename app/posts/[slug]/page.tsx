import 'github-markdown-css'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import Thumbnail from 'components/Thumbnail'
import Category from 'icons/Category'
import Tag from 'icons/Tag'
import Time from 'icons/Time'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <article className="pt-2 pb-12 md:p-4">
      <div className="bg-white md:rounded md:shadow px-4 sm:px-6 md:p-6">
        <div className="border-b border-b-gray-300 pb-4 sm:pb-6 mb-4 sm:mb-6 flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-1">
              <Time
                size={22}
                className="fill-gray-900"
              />
              <time dateTime={post.date}>
                {format(parseISO(post.date), 'yyyy/M/d')}
              </time>
            </div>

            <div className="flex flex-row items-center gap-1">
              <Category
                size={22}
                className="fill-gray-900"
              />
              {typeof post.category !== 'undefined'
                ?
                <Link
                  href={`/category/${post.category}/`}
                  className="text-sm font-medium inline-block py-1 px-3 uppercase rounded-full text-gray-900 bg-blue-200 shadow-sm hover:underline decoration-1"
                >
                  {post.category}
                </Link>
                :
                <span
                  className="text-sm font-medium inline-block py-1 px-3 uppercase rounded-full text-gray-900 bg-blue-200 shadow-sm"
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
          </Link>

          {typeof post.tags !== 'undefined' &&
            <div className="flex justify-end items-center flex-wrap gap-1">
              <Tag
                size={22}
                className="fill-gray-900"
              />
              {post.tags.map((tag, idx) => {
                return (
                  <Link
                    key={idx}
                    href={`/tag/${tag}/`}
                    className="text-sm font-medium inline-block py-1 px-2 uppercase rounded text-gray-900 bg-sky-200 shadow-sm hover:underline decoration-1"
                  >
                    {tag}
                  </Link>
                )
              })}
            </div>
          }
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.body.html }}
          className="markdown-body list-disc list-inside text-base"
        />
      </div>
    </article>
  )
}

export default PostLayout
