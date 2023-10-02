import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import Side from 'components/Side'
import PageInfo from 'components/category/PageInfo'

export const generateStaticParams = async () => {
  const categorizedPosts = allPosts.filter((post) => typeof post.category !== 'undefined' && post.category !== '');
  const categoryCol = categorizedPosts.map((post) => (post.category));
  const categories = Array.from(new Set(categoryCol));
  if (categories.length === 0) {
    return []
  }
  let staticParams: any = [];
  for (let i = 0; i <= categories.length - 1; i++) {
    const category = categories[i];
    const posts = allPosts.filter((post) => post.category === category);
    const totalPosts = posts.length;
    const postsPerPages = 1;
    const totalPages = Math.ceil(totalPosts / postsPerPages);
    const paramsArr = [...Array(totalPages)].map((_, i) => ({ category: category, page: String(i + 1), }));
    staticParams = [...staticParams, ...paramsArr];
  }

  return staticParams;
}

const Page = ({ params }: { params: { category: string, page: string } }) => {
  let posts = allPosts.filter((post) => post.category === params.category);
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const postsPerPage = 4;

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
      <main>
        <div className="lg:hidden">
          <PageInfo category={params.category} totalPosts={posts.length} />
        </div>
        <PaginatedPage posts={posts} currentPage={Number(params.page)} postsPerPage={postsPerPage} path={`/category/${params.category}/page/`} query="" />
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

