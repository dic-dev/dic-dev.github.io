import Link from 'next/link'
import styles from 'styles/Pagination.module.scss'

type PaginationProps = {
  posts: any
  currentPage: number
  postsPerPage: number
  path: string
  query: string
}

function pagination(c: number, m: number) {
  var current = c,
      last = m,
      delta = 2,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || i >= left && i < right) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

const Pagination = ({posts, currentPage, postsPerPage, path, query = ''}: PaginationProps) => {
  const totalPosts = posts.length;
  const lastPage = Math.ceil(totalPosts / postsPerPage);
  const rangeWithDots = pagination(currentPage, lastPage);
  return (
    <nav className={styles.container}>
      <ul>
      {rangeWithDots.map((value: any, idx: number) => {
          if (value === '...') {
            return (
              <li key={idx} className={styles.dots}>
                ...
              </li>
            )
          } else if (value === currentPage) {
            return (
              <li key={idx} className={styles.current}>
                <Link className={styles.link} href={path + String(value) + query}>{value}</Link>
              </li>
            )
          } else {
            return (
              <li key={idx} className={styles.other}>
                <Link className={styles.link} href={path + String(value) + query}>{value}</Link>
              </li>
            )
          }
      })}
      </ul>
    </nav>
  )
}

export default Pagination
