import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'
import styles from 'styles/PostInfo.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const PostInfo = (post: Post) => {
  const category = post.category;
  const tags = post.tags;
  return (
    <ul className={styles.container}>
      <li className={styles.iconbox} key={1}>
        <FontAwesomeIcon icon={faClock} className={styles.icons} />
      </li>
      <li key={2}>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'yyyy/M/d')}
        </time>
      </li>
      {typeof category !== 'undefined' &&
      <>
        <li className={styles.iconbox} key={3}>
          <FontAwesomeIcon icon={faFolder} className={styles.icons} />
        </li>
        <li key={4}>
          <Link className={styles.button} href={`/category/${category}/`}>{category}</Link>
        </li>
      </>
      }
      {typeof tags !== 'undefined' &&
      <>
        <li className={styles.iconbox} key={5}>
          <FontAwesomeIcon icon={faTags} className={styles.icons} />
        </li>
        {tags.map((tag, idx) => {
          return (
            <li key={idx + 6}>
              <Link className={styles.button} href={`/tag/${tag}/`}>{tag}</Link>
            </li>
          )
        })}
      </>
      }
    </ul>
  )
}

export default PostInfo
