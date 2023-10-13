import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Thumbnail from 'components/Thumbnail'
import Badge from 'components/blog/Badge'
import Category from 'icons/Category'
import Tag from 'icons/Tag'
import Time from 'icons/Time'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) notFound()
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article>
      <div className="border-b border-b-gray-300 dark:border-b-gray-600 pb-4 sm:pb-6 mb-4 sm:mb-6 flex flex-col gap-4">
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
          className="bg-gray-100 p-4 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <h3 className="text-2xl md:text-3xl font-semibold underline decoration-1">{post.title}</h3>
          <Thumbnail {...post} />
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

      <div
        className="markdown-body text-base"
      >
        <MDXContent />
      </div>
    </article>
  )
}

export default PostLayout
