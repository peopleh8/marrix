import { FC } from 'react'
import { SectionTitleProps } from '@/types/common.types'
import styles from '@/components/UI/SectionTitle/SectionTitle.module.scss'
import classNames from 'classnames'

const SectionTitle: FC<SectionTitleProps> = ({ text, isLight }) => {
  const themeClass = isLight ? styles.titleLight : styles.titleDark
  const classnames = classNames(styles.title, 'section-title', themeClass)
  
  return (
    <div className={classnames}>
      <span className={`${styles.line} section-line`}>
        <div className={`${styles.rectangle} section-rectangle`}>
          <div className={`${styles.rectangleInner} section-rectangle-inner`} />
        </div>
      </span>
      <span className={`${styles.text} section-title`}>{text}</span>
    </div>
  )
}

export default SectionTitle