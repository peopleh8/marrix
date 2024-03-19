import { FC } from 'react'
import Image from 'next/image'
import styles from '@/components/Footer/Footer.module.scss'
import footerPartner1 from '@/assets/images/footer-partner-1.svg'
import footerPartner2 from '@/assets/images/footer-partner-2.svg'
import footerPartner3 from '@/assets/images/footer-partner-3.svg'

const FooterPartners: FC = () => {
  return (
    <div className={styles.partners}>
      <div className={styles.partner}>
        <Image
          src={footerPartner1}
          alt=''
          width={169}
          height={66}
        />
      </div>
      <div className={styles.partner}>
        <Image
          src={footerPartner2}
          alt=''
          width={169}
          height={66}
        />
      </div>
      <div className={styles.partner}>
        <Image
          src={footerPartner3}
          alt=''
          width={169}
          height={66}
        />
      </div>
    </div>
  )
}

export default FooterPartners