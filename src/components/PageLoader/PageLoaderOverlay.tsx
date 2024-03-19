import { FC } from 'react'
import styles from '@/components/PageLoader/PageLoader.module.scss'

const PageLoaderOverlay: FC = () => {
  return (
    <div
      id='loader-overlay'
      className={styles.overlay}
    >
      <div className={styles.overlayLine} />
    </div>
  )
}

export default PageLoaderOverlay