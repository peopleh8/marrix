import { FC } from 'react'
import Link from 'next/link'
import { uniSans } from '@/fonts/fonts'
import styles from '@/components/Menu/Menu.module.scss'

const MenuList: FC = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link 
          className={styles.listLink}
          href='/'
        >
          <span className={`${styles.listCounter} ${uniSans.className}`}>00</span>
          <span className={styles.listText}>Main page</span>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link 
          className={styles.listLink}
          href='/about'
        >
          <span className={`${styles.listCounter} ${uniSans.className}`}>01</span>
          <span className={styles.listText}>About us</span>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link 
          className={styles.listLink}
          href='/portfolio'
        >
          <span className={`${styles.listCounter} ${uniSans.className}`}>02</span>
          <span className={styles.listText}>Portfolio</span>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link 
          className={styles.listLink}
          href='/services'
        >
          <span className={`${styles.listCounter} ${uniSans.className}`}>03</span>
          <span className={styles.listText}>Services and prices</span>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link 
          className={styles.listLink}
          href='/blog'
        >
          <span className={`${styles.listCounter} ${uniSans.className}`}>04</span>
          <span className={styles.listText}>Blog</span>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link 
          className={styles.listLink}
          href='#'
        >
          <span className={`${styles.listCounter} ${uniSans.className}`}>05</span>
          <span className={styles.listText}>Contacts</span>
        </Link>
      </li>
    </ul>
  )
}

export default MenuList