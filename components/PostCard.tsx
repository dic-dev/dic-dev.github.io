import Link from 'next/link'
import PostInfo from 'components/PostInfo'
import { Post } from 'contentlayer/generated'
import styles from 'styles/PostCard.module.scss'

const PostCard = (post: Post) => {
  return (
    <div className={styles.container}>
      <PostInfo {...post} />

      <Link className={styles.link} href={post.url}>
        <h2>{post.title}</h2>
        {typeof post.description !== 'undefined' &&
        <div className={styles.description}>
          <div> </div>
          <div dangerouslySetInnerHTML={{ __html: post.description.html }} />
        </div>
        }
      </Link>
    </div>
  )
}

export default PostCard
