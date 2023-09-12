import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import styles from 'styles/Page.module.scss'

type TagPageProps = {
  tag: string
  page: string
}

const TagPage = ({ tag, page }: TagPageProps) => {
  let posts = allPosts.filter((post) => typeof post.tags !== 'undefined' && post.tags.includes(tag));
  posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const currentPage = Number(page);
  const postsPerPage = 4;

  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <p>Tag : {tag} ({posts.length} {posts.length === 1 ? ' post' : ' posts'})</p>
      </div>
    <PaginatedPage posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={`/tag/${tag}/page/`} query="" />
    </div>
  )
}

export default TagPage

