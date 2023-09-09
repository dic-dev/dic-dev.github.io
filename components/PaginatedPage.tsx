import { allPosts } from 'contentlayer/generated'
import PostCard from 'components/PostCard'
import Pagination from 'components/Pagination'
import styles from 'styles/PaginatedPage.module.scss'

type PageProps = {
  posts: typeof allPosts
  currentPage: number
  postsPerPage: number
  path: string
}

const PaginatedPage = ({posts, currentPage, postsPerPage, path}: PageProps) => {
  const totalPosts = posts.length;
  const left = (currentPage - 1) * postsPerPage;
  const right = currentPage * postsPerPage < totalPosts ? currentPage * postsPerPage - 1 : totalPosts - 1;
  const items = posts.slice(left, right + 1);

  return (
    <div className={styles.container}>
      <div className={styles.postcard}>
      {items.map((item, idx) => (
        <PostCard key={idx} {...item} />
      ))}
      </div>
      <Pagination posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={path} />
    </div>
  )
}

export default PaginatedPage
