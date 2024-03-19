import { FC } from 'react'
import styles from '@/components/UI/PageTitle/PageTitle.module.scss'
import { PageTitleProps } from '@/types/common.types'
import { uniSans } from '@/fonts/fonts'

const PageTitle: FC<PageTitleProps> = ({ 
  text, 
  titleSvgFill,
  titleSvgStroke
}) => {
  return (
    <div className={`${styles.title} ${uniSans.className}`}>
      <div className={styles.titleTxt}>{text}</div>
      <div className={styles.titleSvg}>
        <div className={`${styles.titleSvgItem} ${styles.titleSvgItemFill} title-fill`} dangerouslySetInnerHTML={{ __html: titleSvgFill }} />
        <div className={`${styles.titleSvgItem} ${styles.titleSvgItemStroke} title-stroke`} dangerouslySetInnerHTML={{ __html: titleSvgStroke }} />
      </div>
    </div>
  )
}

export default PageTitle