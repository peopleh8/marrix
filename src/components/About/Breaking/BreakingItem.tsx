import { FC } from 'react'
import styles from '@/components/About/Breaking/Breaking.module.scss'
import { BreakingItemProps } from '@/types/breaking.types'
import { uniSans } from '@/fonts/fonts'

const BreakingItem: FC<BreakingItemProps> = ({ title, desc }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemTitleWrapper}>
        <div className={`${styles.itemTitle} ${uniSans.className}`}>{title}</div>
      </div>
      <p 
        className={styles.itemDesc}
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  )
}

export default BreakingItem