import { FC } from 'react'
import QuoteVideo from '@/components/About/Quote/QuoteVideo'
import styles from '@/components/About/Quote/Quote.module.scss'
import QuoteTitle from './QuoteTitle'

const Quote: FC = () => {
  return (
    <section className={styles.quote}>
      <QuoteVideo />
      <QuoteTitle />
    </section>
  )
}

export default Quote