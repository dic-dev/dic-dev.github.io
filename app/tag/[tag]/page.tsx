import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import Side from 'components/Side'
import PageInfo from 'components/tag/PageInfo'

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
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
      <main>
        <div className="lg:hidden">
          <PageInfo tag={params.tag} totalPosts={posts.length} />
        </div>
        <PaginatedPage posts={posts} currentPage={1} postsPerPage={postsPerPage} path={`/tag/${params.tag}/page/`} query="" />
      </main>

      <aside>
        <div className="hidden lg:block">
          <PageInfo tag={params.tag} totalPosts={posts.length} />
        </div>
        <Side />
      </aside>
    </div>
  )
}

export default Page

