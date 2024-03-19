import { FC } from 'react'
import styles from '@/components/PageLoader/PageLoader.module.scss'

const PageLoader: FC = () => {
  return (
    <div 
      id='loader'
      className={styles.loader} 
    >
      <div className={styles.line} />
      <div className={styles.decorate}>
        <div className={`${styles.decorateLine} ${styles.decorateLineTop}`} />
        <div className={styles.squareSecondary} />
        <div className={styles.squarePrimary}>
          <div className={`${styles.squareInner} ${styles.squareInnerFirst}`} />
          <div className={`${styles.squareInner} ${styles.squareInnerSecond}`} />
          <div className={`${styles.squareInner} ${styles.squareInnerThird}`} />
        </div>
        <div className={`${styles.decorateLine} ${styles.decorateLineBot}`} />
      </div>
    </div>
  )
}

export default PageLoader