import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import ResultBar from 'components/ResultBar'

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
    <>
      <ResultBar totalPosts={posts.length} filter="Category" value={params.category} />
      <PaginatedPage posts={posts} currentPage={1} postsPerPage={postsPerPage} path={`/category/${params.category}/page/`} query="" />
    </>
  )
}

export default Page

