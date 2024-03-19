import { FC } from 'react'
import styles from '@/components/UI/PageDesc/PageDesc.module.scss'
import { PageDescProps } from '@/types/common.types'

const PageDesc: FC<PageDescProps> = ({ text }) => {
  return (
    <p className={`${styles.desc} page-desc`} dangerouslySetInnerHTML={{ __html: text }} />
  )
}

export default PageDesc