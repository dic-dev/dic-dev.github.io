import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import ResultBar from 'components/ResultBar'

export const generateStaticParams = async () => {
  const posts = allPosts.filter((post) => typeof post.tags !== 'undefined');
  const tagsCol = posts.map((post) => (post.tags));
  let tags = tagsCol.flat();
  tags = Array.from(new Set(tags));
  const paths = tags.map((tag) => ({ tag: tag }));

  return paths;
}

const Page = ({ params }: { params: { tag: string } }) => {
  let posts = allPosts.filter((post) => typeof post.tags !== 'undefined' && post.tags.includes(params.tag));
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const postsPerPage = 4;

  return (
    <>
      <ResultBar totalPosts={posts.length} filter="Tag" value={params.tag} />
      <PaginatedPage posts={posts} currentPage={1} postsPerPage={postsPerPage} path={`/tag/${params.tag}/page/`} query="" />
    </>
  )
}

export default Page

