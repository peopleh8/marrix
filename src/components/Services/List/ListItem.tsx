import { FC } from 'react'
import styles from '@/components/Services/List/List.module.scss'
import { ServicesItemProps } from '@/types/services.types'

const ListItem: FC<ServicesItemProps> = ({ title, desc }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <div className={styles.itemTitle}>{title}</div>
        <p className={styles.itemDesc}>{desc}</p>
      </div>
      <div className={styles.itemBtn}>LET'S DISCUSS</div>
    </div>
  )
}

export default ListItem