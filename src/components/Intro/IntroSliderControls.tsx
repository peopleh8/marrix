import { FC } from 'react'
import styles from '@/components/Intro/Intro.module.scss'

const IntroSliderControls: FC = () => {
  return (
    <div className={`${styles.sliderControls} portfolio-slider-controls`}>
      <div className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`}>
        <span className={styles.sliderBtnLine} />
        <span className={styles.sliderBtnTriangle} />
      </div>
      <p className={styles.sliderDesc}>Let us create the best product for your business</p>
      <div className={`${styles.sliderBtn} ${styles.sliderBtnNext}`}>
        <span className={styles.sliderBtnLine} />
        <span className={styles.sliderBtnTriangle} />
      </div>
    </div>
  )
}

export default IntroSliderControls