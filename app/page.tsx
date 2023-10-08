import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import CardList from 'components/CardList'

export default function Home() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="bg-white md:rounded md:shadow md:m-4 px-4 sm:px-6 pt-2 pb-6 md:p-6">
      <CardList posts={posts} currentPage={1} postsPerPage={4} path="/page/" query="" />
    </div>
  )
}
