import { FC } from 'react'
import IntroSliderControls from '@/components/Intro/IntroSliderControls'
import IntroSlider from '@/components/Intro/IntroSlider'
import styles from '@/components/Intro/Intro.module.scss'

const IntroSliderWrapper: FC<any> = ({ slider }) => {
  return (
    <div className={styles.sliderWrapper}>
      <IntroSliderControls />
      <IntroSlider slider={slider} />
    </div>
  )
}

export default IntroSliderWrapper