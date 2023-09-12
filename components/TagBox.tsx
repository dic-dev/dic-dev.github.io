import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import styles from 'styles/TagBox.module.scss'
import { BiTag } from 'react-icons/bi'

const TagBox = () => {
  const taggedPosts = allPosts.filter((post) => typeof post.tags !== 'undefined');
  const tagsCol = taggedPosts.map((post) => (post.tags));
  let tags = tagsCol.flat();
  tags = Array.from(new Set(tags));

  return (
    <div className={styles.tag}>
      <div className={styles.title}>
        <BiTag size="30px" />
        <h3>Tag</h3>
      </div>
      <ul>
        {tags.map((tag, idx) => {
          return (
            <li key={idx}><Link className={styles.link} href={`/tag/${tag}`}>{tag}</Link></li>
          )
        })}
      </ul>
    </div>
  )
}

export default TagBox

