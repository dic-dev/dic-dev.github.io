import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import styles from 'styles/Page.module.scss'

type CategoryPageProps = {
  category: string
  page: string
}

const CategoryPage = ({ category, page }: CategoryPageProps) => {
  let posts = allPosts.filter((post) => post.category === category);
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const currentPage = Number(page);
  const postsPerPage = 4;

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <p>Category : {category} ({posts.length} {posts.length === 1 ? ' post' : ' posts'})</p>
      </div>
      <PaginatedPage posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={`/category/${category}/page/`} query="" />
    </div>
  )
}

export default CategoryPage

