import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Result from 'components/Result'
import CardList from 'components/CardList'

export const generateStaticParams = async () => {
  const posts = allPosts.filter((post) => typeof post.category !== 'undefined' && post.category !== '');
  const categoryCol = posts.map((post) => (post.category));
  const categories = Array.from(new Set(categoryCol));
  const paths = categories.map((category) => ({ category: category }))

  return paths;
}

const Page = ({ params }: { params: { category: string } }) => {
  let posts = allPosts.filter((post) => post.category === params.category);
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const postsPerPage = 4;

  return (
    <div className="bg-white sm:rounded sm:shadow sm:m-4 p-4 sm:p-6">
      <div className="border-b border-b-gray-300 pb-4 sm:pb-6 mb-4 sm:mb-6 sm:px-4">
        <Result totalPosts={posts.length} filter="Category" value={params.category} />
      </div>
      <CardList posts={posts} currentPage={1} postsPerPage={postsPerPage} path={`/category/${params.category}/page/`} query="" />
    </div>
  )
}

export default Page

