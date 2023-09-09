import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'

export const generateStaticParams = async () => {
  const taggedPosts = allPosts.filter((post) => typeof post.tags !== 'undefined');
  const tagsCol = taggedPosts.map((post) => (post.tags));
  let tags = tagsCol.flat();
  tags = Array.from(new Set(tags));
  if (tags.length === 0) {
    return []
  }
  let staticParams: any = [];
  for (let i = 0; i <= tags.length - 1; i++) {
    const tag = String(tags[i]);
    const posts = allPosts.filter((post) => typeof post.tags !== 'undefined' && post.tags.includes(tag));
    const totalPosts = posts.length;
    const postsPerPages = 1;
    const totalPages = Math.ceil(totalPosts / postsPerPages);
    const paramsArr = [...Array(totalPages)].map((_, i) => ({ tag: tag, page: String(i + 1), }));
    staticParams = [...staticParams, ...paramsArr];
  }

  return staticParams;
}

const Page = ({ params }: { params: { tag: string, page: string } }) => {
  const tag = params.tag;
  let posts = allPosts.filter((post) => typeof post.tags !== 'undefined' && post.tags.includes(tag));
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const currentPage = Number(params.page);
  const postsPerPage = 4;

  return (
    <PaginatedPage posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={`/tag/${tag}/page/`}/>
  )
}

export default Page

