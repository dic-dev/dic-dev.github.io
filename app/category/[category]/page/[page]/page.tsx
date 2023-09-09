import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'

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
  const category = params.category;
  let posts = allPosts.filter((post) => post.category === category);
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const currentPage = Number(params.page);
  const postsPerPage = 4;

  return (
    <PaginatedPage posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={`/category/${category}/page/`}/>
  )
}

export default Page

