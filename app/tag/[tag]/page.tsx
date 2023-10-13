import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Result from 'components/Result'
import CardList from 'components/CardList'

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
      <div className="border-b border-b-gray-300 pb-4 mb-4">
        <Result totalPosts={posts.length} filter="Tag" value={params.tag} />
      </div>
      <CardList posts={posts} currentPage={1} postsPerPage={postsPerPage} path={`/tag/${params.tag}/page/`} query="" />
    </>
  )
}

export default Page

