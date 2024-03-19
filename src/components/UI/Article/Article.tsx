import { FC } from 'react'
import styles from '@/components/UI/Article/Article.module.scss'
import { ArticleProps } from '@/types/common.types'
import classNames from 'classnames'

const Article: FC<ArticleProps> = ({ children, isLight }) => {
  const themeClass = isLight && styles.light

  const classes = classNames(styles.article, 'article', themeClass)
  
  return (
    <article className={classes}>{children}</article>
  )
}

export default Article