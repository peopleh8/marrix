import { FC } from 'react'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle'
import styles from '@/components/Footer/Footer.module.scss'
import { BlockTitleSizes, BlockTitleTheme } from '@/types/common.types'

const FooterHeader: FC = () => {
  return (
    <div className={styles.header}>
      <SectionTitle text='LET’S GET DOWN TO BUSINESS' isLight/>
      <BlockTitle 
        text='FAN OF DEVELOPMENT?'
        size={BlockTitleSizes.BIG}
        theme={BlockTitleTheme.GRADIENT}
      />
    </div>
  )
}

export default FooterHeader