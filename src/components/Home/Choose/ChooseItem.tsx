import { FC } from 'react'
import { ChooseItemProps } from '@/types/choose.types'
import styles from '@/components/Home/Choose/Choose.module.scss'
import { uniSans } from '@/fonts/fonts'

const ChooseItem: FC<ChooseItemProps> = ({ index, title, desc }) => {
  return (
    <div className={styles.item}>
      <div className={`${styles.itemConter} ${uniSans.className}`}>{(index + 1) < 10 ? `0${index + 1}` : `${index + 1}`}</div>
      <div className={styles.itemContent}>
        <div className={`${styles.itemTitle} ${uniSans.className}`}>{title}</div>
        <p className={styles.itemDesc} dangerouslySetInnerHTML={{ __html: desc }} />
      </div>
    </div>
  )
}

export default ChooseItem