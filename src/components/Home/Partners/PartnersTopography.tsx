import { FC } from 'react'
import Glitch from '@/components/Glitch/Glitch'
import { GlitchTheme } from '@/types/common.types'
import { PartnersTopographyProps } from '@/types/partners.types'
import styles from '@/components/Home/Partners/Partners.module.scss'

const PartnersTopography: FC<PartnersTopographyProps> = ({ isSuptitleVisible }) => {
  return (
    <div className={styles.topography}>
      <div className={styles.topographyInner}>
        <div className={styles.title}>Innovative Software Solutions: Where Ideas Transform into</div>
        <div className={styles.subtitle}>
          Reality
          <Glitch
            countItems={1}
            countRectangles={100}
            widthElement={40} 
            heightElement={10}
            theme={GlitchTheme.LIGHT}
            trigger={isSuptitleVisible}
            delay={.5}
          />
        </div>
      </div>
    </div>
  )
}

export default PartnersTopography