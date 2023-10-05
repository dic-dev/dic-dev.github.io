import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Result from 'components/Result'
import CardList from 'components/CardList'

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
    <div className="bg-white rounded shadow m-4 p-6">
      <div className="border-b border-b-gray-300 pb-6 mb-6 px-4">
        <Result totalPosts={posts.length} filter="Category" value={params.category} />
      </div>
      <CardList posts={posts} currentPage={Number(params.page)} postsPerPage={postsPerPage} path={`/category/${params.category}/page/`} query="" />
    </div>
  )
}

export default Page

