import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import PostCard from 'components/Test'

export default function Page() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <>
      <section className="flex flex-row flex-wrap mx-auto">
        {posts.map((post, idx) => {
          return (
            <PostCard key={idx} {...post} />
          )
        })}
      </section>
      <div className="rounded-full border-b-8"></div>
    </>
  )
}
