import { FC } from 'react'
import styles from '@/components/Menu/Menu.module.scss'

const MenuSocial: FC = () => {
  return (
    <ul className={styles.social}>
      <li className={styles.socialItem}>
        <a className={`${styles.socialLink} roll-btn`} href="#">
          <span>Fiverr</span>
          <span>Fiverr</span>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a className={`${styles.socialLink} roll-btn`} href="#">
          <span>Linkedin</span>
          <span>Linkedin</span>
        </a>
      </li>
      <li className={styles.socialItem}>
        <a className={`${styles.socialLink} roll-btn`} href="#">
          <span>Clutch</span>
          <span>Clutch</span>
        </a>
      </li>
    </ul>
  )
}

export default MenuSocial