import { allPosts } from 'contentlayer/generated'
import PostCard from 'components/PostCard'
import Pagination from 'components/Pagination'
import AltPagination from 'components/AltPagination'

type PageProps = {
  posts: typeof allPosts
  currentPage: number
  postsPerPage: number
  path: string
  query: string
}

const PaginatedPage = ({ posts, currentPage, postsPerPage, path, query = '' }: PageProps) => {
  const totalPosts = posts.length;
  const left = (currentPage - 1) * postsPerPage;
  const right = currentPage * postsPerPage < totalPosts ? currentPage * postsPerPage - 1 : totalPosts - 1;
  const items = posts.slice(left, right + 1);

  return (
    <>
      <section className="flex flex-row flex-wrap w-full">
        {items.map((item, idx) => {
          return (
            <PostCard key={idx} {...item} />
          )
        })}
      </section>
      <div className="flex pt-4 pb-8">
        {path === '/search/'
          ?
          <AltPagination posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={path} query={query} />
          :
          <Pagination posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={path} query={query} />
        }
      </div>
    </>
  )
}

export default PaginatedPage
