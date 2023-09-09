import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'

export const generateStaticParams = async () => {
  const posts = allPosts.filter((post) => typeof post.category !== 'undefined' && post.category !== '');
  const categoryCol = posts.map((post) => (post.category));
  const categories = Array.from(new Set(categoryCol));
  const paths = categories.map((category) => ({ category: category }))

  return paths;
}

const Page = ({ params }: { params: { category: string } }) => {
  const category = params.category;
  let posts = allPosts.filter((post) => post.category === category);
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const currentPage = 1;
  const postsPerPage = 4;

  return (
    <PaginatedPage posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={`/category/${category}/page/`}/>
  )
}

export default Page

