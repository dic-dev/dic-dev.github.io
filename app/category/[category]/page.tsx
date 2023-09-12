import { allPosts } from 'contentlayer/generated'
import CategoryPage from 'components/CategoryPage'

export const generateStaticParams = async () => {
  const posts = allPosts.filter((post) => typeof post.category !== 'undefined' && post.category !== '');
  const categoryCol = posts.map((post) => (post.category));
  const categories = Array.from(new Set(categoryCol));
  const paths = categories.map((category) => ({ category: category }))

  return paths;
}

const Page = ({ params }: { params: { category: string } }) => {

  return (
    <CategoryPage category={params.category} page="1" />
  )
}

export default Page

