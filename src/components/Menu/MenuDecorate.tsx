'use client'

import { FC } from 'react'
import { uniSans } from '@/fonts/fonts'
import styles from '@/components/Menu/Menu.module.scss'
import Glitch from '@/components/Glitch/Glitch'
import { useTypedSelector } from '@/hooks/use-types-selector'
import { GlitchTheme } from '@/types/common.types'

const MenuDecorate: FC = () => {
  const { isOpen } = useTypedSelector(state => state.menu)
  
  return (
    <div className={styles.content}>
      <div className={styles.lines}>
        <span />
        <span />
        <span />
      </div>
      <div className={`${styles.title} ${uniSans.className}`}>
        <div className={`${styles.titlePart}`}>
          <p>Me</p>
        </div>
        <div className={`${styles.titlePart}`}>
          <p>nu</p>
        </div>
        <Glitch
          countItems={2}
          countRectangles={200}
          widthElement={60} 
          heightElement={15}
          theme={GlitchTheme.DARK}
          trigger={isOpen}
          delay={2300}
        />
      </div>
    </div>
  )
}

export default MenuDecorate