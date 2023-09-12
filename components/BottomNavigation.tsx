import styles from 'styles/BottomNavigation.module.scss'
import Link from 'next/link'
import { BiSearch } from 'react-icons/bi'
import { BiHome } from 'react-icons/bi'
import { BiInfoCircle } from 'react-icons/bi'
import { BiLink } from 'react-icons/bi'

const BottomNavigation = () => {
  return (
    <ul className={styles.container}>
      <li>
        <Link className={styles.link} href="/">
          <BiHome size="27px" />
          <span>
            Home
          </span>
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/about/">
          <BiInfoCircle size="27px" />
          <span>
            About
          </span>
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/link/">
          <BiLink size="27px" />
          <span>
            Link
          </span>
        </Link>
      </li>
      <li>
        <Link className={styles.link} href="/search">
          <BiSearch size="27px" />
          <span>
            Search
          </span>
          </Link>
      </li>
    </ul>
  )
}

export default BottomNavigation
