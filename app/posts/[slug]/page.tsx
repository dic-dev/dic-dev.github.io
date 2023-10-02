import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Side from 'components/Side'
import PageInfo from 'components/post/PageInfo'

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
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
      <main>
        <article className="">
          <div className="">
            <time dateTime={post.date}>
              {format(parseISO(post.date), 'yyyy/M/d')}
            </time>
            <h1>{post.title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
        </article>
      </main>

      <aside>
        <PageInfo post={post} />
        <Side />
      </aside>
    </div>
  )
}

export default PostLayout
