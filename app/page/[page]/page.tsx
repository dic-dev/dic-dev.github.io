import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import CardList from 'components/CardList'

export const generateStaticParams = async () => {
  const totalPosts = allPosts.length;
  const postsPerPages = 1;
  const totalPages = Math.ceil(totalPosts / postsPerPages);
  const paths = [...Array(totalPages)].map((_, i) => ({ page: String(i + 1), }));

  return paths;
}

const Page = ({ params }: { params: { page: string } }) => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const currentPage = Number(params.page);
  const postsPerPage = 4;

  return (
    <>
      <CardList posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path="/page/" query="" />
    </>
  )
}

export default Page
