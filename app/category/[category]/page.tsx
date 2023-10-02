import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import Side from 'components/Side'
import PageInfo from 'components/category/PageInfo'

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
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
      <main>
        <div className="lg:hidden">
          <PageInfo category={params.category} totalPosts={posts.length} />
        </div>
        <PaginatedPage posts={posts} currentPage={1} postsPerPage={postsPerPage} path={`/category/${params.category}/page/`} query="" />
      </main>

      <aside>
        <div className="hidden lg:block">
          <PageInfo category={params.category} totalPosts={posts.length} />
        </div>
        <Side />
      </aside>
    </div>
  )
}

export default Page

