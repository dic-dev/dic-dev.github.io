import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Post } from 'contentlayer/generated'
import styles from 'styles/PostInfo.module.scss'
import { BiSolidCategory } from 'react-icons/bi'
import { BiSolidTag } from 'react-icons/bi'
import { BiSolidTime } from 'react-icons/bi'
import { BiCategory } from 'react-icons/bi'
import { BiTag } from 'react-icons/bi'
import { BiCalendar } from 'react-icons/bi'

const PostInfo = (post: Post) => {
  const category = post.category;
  const tags = post.tags;
  return (
    <ul className={styles.container}>
      <li key={1}>
        <BiCalendar size="30px" />
      </li>
      <li key={2}>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'yyyy/M/d')}
        </time>
      </li>
      {typeof category !== 'undefined' &&
      <>
        <li key={3}>
          <BiCategory size="30px" />
        </li>
        <li key={4}>
          <Link className={styles.category} href={`/category/${category}/`}>{category}</Link>
        </li>
      </>
      }
      {typeof tags !== 'undefined' &&
      <>
        <li key={5}>
          <BiTag size="30px" />
        </li>
        {tags.map((tag, idx) => {
          return (
            <li key={idx + 6}>
              <Link className={styles.tag} href={`/tag/${tag}/`}>{tag}</Link>
            </li>
          )
        })}
      </>
      }
    </ul>
  )
}

export default PostInfo
