import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import SearchBox from 'components/SearchBox'
import styles from 'styles/Side.module.scss'
import { BiCategory } from 'react-icons/bi'
import { BiTag } from 'react-icons/bi'
import { ImProfile } from 'react-icons/im'

const Side = () => {
  const categorizedPosts = allPosts.filter((post) => typeof post.category !== 'undefined' && post.category !== '');
  const categoryCol = categorizedPosts.map((post) => (post.category));
  const categories = Array.from(new Set(categoryCol));
  const taggedPosts = allPosts.filter((post) => typeof post.tags !== 'undefined');
  const tagsCol = taggedPosts.map((post) => (post.tags));
  let tags = tagsCol.flat();
  tags = Array.from(new Set(tags));

  return (
    <nav className={styles.container}>
      <SearchBox />
      <div className={styles.profile}>
        <div className={styles.title}>
          <ImProfile size="26px" />
          <h3>Profile</h3>
        </div>
        <p>PC弄りが趣味のおじさんです。あいうえおカキクケコさしすせそ</p>
      </div>
      <div className={styles.category}>
        <div className={styles.title}>
          <BiCategory size="30px" />
          <h3>Category</h3>
        </div>
        <ul>
          {categories.map((category, idx) => {
            return (
              <li key={idx}><Link className={styles.link} href={`/category/${category}`}>{category}</Link></li>
            )
          })}
        </ul>
      </div>
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
    </nav>
  )
}

export default Side
