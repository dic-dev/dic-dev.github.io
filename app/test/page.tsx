import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Result from 'components/Result'
import CardList from 'components/CardList'

export default function Page() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="bg-white rounded shadow m-4 p-6">
      <div className="border-b border-b-gray-200 pb-6 mb-6 px-4">
        <Result totalPosts={posts.length} filter="Keyword" value="s" />
      </div>
      <CardList posts={posts} currentPage={1} postsPerPage={4} path="/page/" query="" />
    </div>
  )
}
