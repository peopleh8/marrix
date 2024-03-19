import { FC } from 'react'
import styles from '@/components/About/Quote/Quote.module.scss'
import { uniSans } from '@/fonts/fonts'

const QuoteTitle: FC = () => {
  return (
    <div className={`${styles.title} ${uniSans.className}`}>Code the future, change the world.</div>
  )
}

export default QuoteTitle