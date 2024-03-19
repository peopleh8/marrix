import { FC } from 'react'
import styles from '@/components/About/Quote/Quote.module.scss'
import Image from 'next/image'
import videoBg from '@/assets/images/video-bg.jpg'

const QuoteVideo: FC = () => {
  return (
    <div className={styles.video}>
      <Image
        src={videoBg}
        alt='Video'
        width={1920}
        height={940}
      />
    </div>
  )
}

export default QuoteVideo