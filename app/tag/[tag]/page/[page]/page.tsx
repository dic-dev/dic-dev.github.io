import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Result from 'components/Result'
import CardList from 'components/CardList'

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
  let posts = allPosts.filter((post) => typeof post.tags !== 'undefined' && post.tags.includes(params.tag));
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const postsPerPage = 4;

  return (
    <div className="bg-white rounded shadow m-4 p-6">
      <div className="border-b border-b-gray-300 pb-6 mb-6 px-4">
        <Result totalPosts={posts.length} filter="Tag" value={params.tag} />
      </div>
      <CardList posts={posts} currentPage={Number(params.page)} postsPerPage={postsPerPage} path={`/tag/${params.tag}/page/`} query="" />
    </div>
  )
}

export default Page

