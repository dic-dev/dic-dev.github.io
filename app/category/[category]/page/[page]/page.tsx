import { allPosts } from 'contentlayer/generated'
import CategoryPage from '@/components/CategoryPage';

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

  return (
    <CategoryPage category={params.category} page={params.page} />
  )
}

export default Page

