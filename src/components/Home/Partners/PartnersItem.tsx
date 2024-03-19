import { FC } from 'react'
import Image from 'next/image'
import styles from '@/components/Home/Partners/Partners.module.scss'
import { PartnersItemProps } from '@/types/partners.types'

const PartnersItem: FC<PartnersItemProps> = ({ path, title }) => {
  return (
    <div className={styles.item}>
      <Image
        src={path}
        alt={title}
        width={160}
        height={160}
      />
    </div>
  )
}

export default PartnersItem