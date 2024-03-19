
import { FC } from 'react'
import Glitch from '@/components/Glitch/Glitch'
import { GlitchTheme } from '@/types/common.types'
import { TechQuoteProps } from '@/types/tech.types'
import styles from '@/components/Home/Tech/Tech.module.scss'

const TechQuote: FC<TechQuoteProps> = ({ isSuptitleVisible }) => {
  return (
    <div className={styles.quote}>
      <div className={styles.quoteTitle}>Code the Extraordinary, achieve the</div>
      <div className={styles.quoteSubtitle}>
        Impossible
        <Glitch 
          countItems={1}
          countRectangles={50}
          widthElement={30} 
          heightElement={10}
          theme={GlitchTheme.LIGHT}
          trigger={isSuptitleVisible}
          delay={.5}
        />
      </div>
    </div>
  )
}

export default TechQuote