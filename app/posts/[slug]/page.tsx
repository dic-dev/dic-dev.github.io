import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

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
    <article className="p-4">
      <div className="bg-white rounded shadow p-6">
        <div className="border-b border-b-gray-200 pb-6 mb-6 flex flex-col gap-3">
          <h3 className="text-3xl font-semibold underline decoration-1">{post.title}</h3>

          <div className="flex flex-row justify-between">
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

            <time dateTime={post.date}>
              {format(parseISO(post.date), 'yyyy/M/d')}
            </time>
          </div>

          <img
            src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png"
            alt="Blog Cover"
            className="object-fill w-full rounded rounded-b-none md:h-56 shadow-sm"
          />

          {typeof post.tags !== 'undefined' &&
            <div className="flex justify-end items-center flex-wrap gap-1">
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
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </div>
    </article>
  )
}

export default PostLayout
