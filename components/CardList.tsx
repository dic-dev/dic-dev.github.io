import { allPosts } from 'contentlayer/generated'
import Card from 'components/Card'
import Pagination from 'components/Pagination'
import AltPagination from 'components/AltPagination'

type PageProps = {
  posts: typeof allPosts
  currentPage: number
  postsPerPage: number
  path: string
  query: string
}

const CardList = ({ posts, currentPage, postsPerPage, path, query = '' }: PageProps) => {
  const totalPosts = posts.length;
  const left = (currentPage - 1) * postsPerPage;
  const right = currentPage * postsPerPage < totalPosts ? currentPage * postsPerPage - 1 : totalPosts - 1;
  const items = posts.slice(left, right + 1);

  return (
    <>
      <div className="">
        {items.map((item, idx) => {
          return (
            <Card key={idx} {...item} />
          )
        })}
      </div>
      <div className="flex pt-2">
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

export default CardList
