
import { FC } from 'react'
import styles from '@/components/Home/Tech/Tech.module.scss'
import { TechItemProps } from '@/types/tech.types'
import Image from 'next/image'

const TechItem: FC<TechItemProps> = ({ path, title }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemPhoto}>
        <Image 
          src={path}
          alt={title}
          width={80}
          height={80}
        />
      </div>
      <div className={styles.itemTitle}>{title}</div>
    </div>
  )
}

export default TechItem