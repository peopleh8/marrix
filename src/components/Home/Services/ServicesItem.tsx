import { FC } from 'react'
import Image from 'next/image'
import styles from '@/components/Home/Services/Services.module.scss'
import { ServicesHeroProps } from '@/types/services.types'

const ServicesItem: FC<ServicesHeroProps> = ({ title, desc, path }) => {
  return (
    <>
      <Image 
        src={path}
        alt={title}
        width={800}
        height={400}
      />
      <div className={styles.info}>
        <div className={`${styles.front} ${styles.frontRight} slider-front`}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={`${styles.front} ${styles.frontLeft} slider-front`}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={`${styles.back} slider-back`}>
          <div className={styles.title}>{title}</div>
          <p 
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </div>
    </>
  )
}

export default ServicesItem