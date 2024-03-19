import { FC } from 'react'
import GlitchItem from './GlitchItem'
import { GlitchProps } from '@/types/common.types'
import styles from '@/components/Glitch/Glitch.module.scss'

const Glitch: FC<GlitchProps> = ({ 
  countItems, 
  countRectangles, 
  widthElement, 
  heightElement,
  theme,
  trigger,
  delay
}) => {
  return (
    <div className={styles.glitch}>
      { Array(countItems).fill(0).map((_, index) => (
        <GlitchItem 
          key={index}
          countRectangles={countRectangles}
          widthElement={widthElement}
          heightElement={heightElement}
          theme={theme}
          trigger={trigger}
          delay={delay}
        />
      )) }
    </div>
  )
}

export default Glitch