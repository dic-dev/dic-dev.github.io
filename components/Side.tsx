import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import SearchBox from 'components/SearchBox'
import styles from 'styles/Side.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
      <div className={styles.search}>
        <SearchBox />
      </div>
      <div className={styles.profile}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faAddressCard} className={styles.icons} />
          <h3>Profile</h3>
        </div>
        <img src="/images/panda.png" alt="profile" />
        <p>趣味PC弄りのおじさんです。</p>
      </div>
      <div className={styles.category}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faFolder} className={styles.icons} />
          <h3>Category</h3>
        </div>
        <ul>
          {categories.map((category, idx) => {
            return (
              <li key={idx}><Link href={`/category/${category}`}>{category}</Link></li>
            )
          })}
        </ul>
      </div>
      <div className={styles.tag}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faTags} className={styles.icons} />
          <h3>Tag</h3>
        </div>
        <ul>
          {tags.map((tag, idx) => {
            return (
              <li key={idx}><Link href={`/tag/${tag}`}># {tag}</Link></li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Side
