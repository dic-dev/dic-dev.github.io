import Link from 'next/link'
import { Post } from 'contentlayer/generated'

type PageInfoProps = {
  post: Post
}

export default function PageInfo({ post }: PageInfoProps) {

  return (
    <>
      <nav className="container mx-auto px-6 pt-12 space-y-12 w-full">
        <div className="relative mx-auto bg-white flex flex-col justify-center p-6 space-y-4 shadow-md rounded-xl dark:bg-gray-900 dark:text-gray-100">
          <div className="flex justify-center">
            <h2
              className="rounded-full mx-auto absolute -top-3 shadow-md px-4 bg-white text-xl font-semibold"
            >
              Post
            </h2>
          </div>

          <div className="space-y-4">
            <dl>
              <dt>Title</dt>
              <dd>{post.title}</dd>
            </dl>

            <dl>
              <dt>Category</dt>
              <dd>{post.category}</dd>
            </dl>

            {typeof post.tags !== 'undefined' &&
              <dl>
                <dt>Tags</dt>
                <dd>
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
                </dd>
              </dl>
            }
          </div>
        </div>
      </nav>
    </>
  )
}
