import { FC } from 'react'
import classNames from 'classnames'
import { BlockTitleProps, BlockTitleSizes, BlockTitleTheme } from '@/types/common.types'
import styles from '@/components/UI/BlockTitle/BlockTitle.module.scss'

const BlockTitle: FC<BlockTitleProps> = ({ text, size, theme, centered }) => {
  const sizeClass = size === BlockTitleSizes.BIG ? styles.big : styles.small
  const themeClass = theme === BlockTitleTheme.DEFAULT ? styles.default : theme === BlockTitleTheme.LIGHT ? styles.light : styles.gradient
  const centeredCLass = centered && styles.centered

  const classes = classNames(styles.title, 'block-title', sizeClass, themeClass, centeredCLass)
  
  return (
    <div className={classes}>{text}</div>
  )
}

export default BlockTitle