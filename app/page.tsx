import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import Side from 'components/Side'

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
      <main>
        <PaginatedPage posts={posts} currentPage={1} postsPerPage={4} path="/page/" query="" />
      </main>

      <aside>
        <Side />
      </aside>
    </div>
  )
}
