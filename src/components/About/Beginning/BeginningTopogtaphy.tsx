import { FC } from 'react'
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle'
import Glitch from '@/components/Glitch/Glitch'
import { BlockTitleSizes, BlockTitleTheme, GlitchTheme } from '@/types/common.types'
import { BeginningTopographyProps } from '@/types/beginning.types'
import styles from '@/components/About/Beginning/Beginning.module.scss'

const BeginningTopogtaphy: FC<BeginningTopographyProps> = ({ isSubtitleVisible }) => {
  return (
    <div className={styles.topography}>
      <BlockTitle 
        text='ALL STARTED WITH A BIG DREAM AND A SMALL TEAM OF DEVELOPERS'
        size={BlockTitleSizes.BIG}
        theme={BlockTitleTheme.DEFAULT}
      />
      <div className={styles.subtitle}>
        2014
        <Glitch
          countItems={2}
          countRectangles={240}
          widthElement={60} 
          heightElement={15}
          theme={GlitchTheme.LIGHT}
          trigger={isSubtitleVisible}
          delay={7.5}
        />
      </div>
    </div>
  )
}

export default BeginningTopogtaphy