import React from 'react'
import Link from 'next/link'
import styles from 'styles/Header.module.scss'
import { BiSearch } from 'react-icons/bi'
import { BiHome } from 'react-icons/bi'
import { BiInfoCircle } from 'react-icons/bi'
import { BiLink } from 'react-icons/bi'

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.item}>
        <Link className={styles.link} href="/">
          <BiHome size="35px" />
          <span>
            Home
          </span>
        </Link>
      </div>
      <div className={styles.item}>
        <Link className={styles.link} href="/about/">
          <BiInfoCircle size="35px" />
          <span>
            About
          </span>
        </Link>
      </div>
      <div className={styles.item}>
        <Link className={styles.link} href="/link/">
          <BiLink size="35px" />
          <span>
            Link
          </span>
        </Link>
      </div>
      <div className={styles.search}>
        <Link className={styles.link} href="/search">
          <BiSearch size="35px" />
          <span>
            Search
          </span>
        </Link>
      </div>
    </header>
  )
}

export default Header

// const Header = ({ title }: HeaderProps) => {
//   return (
//     <header className={styles.container}>
//       <h1 className={styles.title}>{title}</h1>
//       <nav>
//         <h1 className={styles.title_bar}>{title}</h1>
//         <ul>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/">
//               <BiHome />
//               Home
//             </Link>
//           </li>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/about/">
//               <BiInfoCircle />
//               About
//             </Link>
//           </li>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/link/">
//               <BiLink />
//               Link
//             </Link>
//           </li>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/search">
//               <BiSearch />
//               Search
//             </Link>
//           </li>
//           <li className={styles.dammy}></li>
//         </ul>
//       </nav>
//     </header>
//   )
// }

// export default Header
// const Header = ({ title }: HeaderProps) => {
//   return (
//     <header className={styles.container}>
//       <h1>{title}</h1>
//       <nav>
//         <ul>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/">
//               <BiHome />
//               Home
//             </Link>
//           </li>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/about/">
//               <BiInfoCircle />
//               About
//             </Link>
//           </li>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/link/">
//               <BiLink />
//               Link
//             </Link>
//           </li>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/contact/">
//               <BiMailSend />
//               Contact
//             </Link>
//           </li>
//           <li className={styles.li}>
//             <Link className={styles.link} href="/search">
//               <BiSearch />
//               Search
//             </Link>
//           </li>
//           <li className={styles.dammy}></li>
//         </ul>
//         <SearchBox />
//       </nav>
//     </header>
//   )
// }

// export default Header
