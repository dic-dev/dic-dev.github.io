import React from 'react'
import Link from 'next/link'
import styles from 'styles/Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li className={styles.li}>
            <Link className={styles.link} href="/">
              <FontAwesomeIcon icon={faHouse} className={styles.icons} />
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/about">
              <FontAwesomeIcon icon={faCircleInfo} className={styles.icons} />
              About
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/link">
              <FontAwesomeIcon icon={faLink} className={styles.icons} />
              Link
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} href="/contact">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icons} />
              Contact
            </Link>
          </li>
          <li className={styles.dammy}></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
