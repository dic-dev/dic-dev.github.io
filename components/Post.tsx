import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'
import PostInfo from 'components/PostInfo'
import styles from 'styles/Post.module.scss'

const Post = (post: Post) => {
  return (
    <div className={styles.container}>
      <PostInfo {...post} />
      <article className={styles.content}>
        <div className={styles.title}>
          <time dateTime={post.date}>
            {format(parseISO(post.date), 'yyyy/M/d')}
          </time>
          <h1>{post.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </article>
    </div>
  )
}

export default Post
