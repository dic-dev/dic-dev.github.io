import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'

export const generateStaticParams = async () => {
  const posts = allPosts.filter((post) => typeof post.tags !== 'undefined');
  const tagsCol = posts.map((post) => (post.tags));
  let tags = tagsCol.flat();
  tags = Array.from(new Set(tags));
  const paths = tags.map((tag) => ({ tag: tag }));

  return paths;
}

const Page = ({ params }: { params: { tag: string } }) => {
  const tag = params.tag;
  let posts = allPosts.filter((post) => typeof post.tags !== 'undefined' && post.tags.includes(tag));
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const currentPage = 1;
  const postsPerPage = 4;

  return (
    <PaginatedPage posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={`/tag/${tag}/page/`}/>
  )
}

export default Page

