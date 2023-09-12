import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import styles from 'styles/CategoryBox.module.scss'
import { BiCategory } from 'react-icons/bi'

const CategoryBox = () => {
  const categorizedPosts = allPosts.filter((post) => typeof post.category !== 'undefined' && post.category !== '');
  const categoryCol = categorizedPosts.map((post) => (post.category));
  const categories = Array.from(new Set(categoryCol));

  return (
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
  )
}

export default CategoryBox

