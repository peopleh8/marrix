import { FC } from 'react'
import styles from '@/components/Footer/Footer.module.scss'

const FooterContacts: FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.links}>
        <div className={`${styles.link} roll-btn`}>
          <span>Fiverr</span>
          <span>Fiverr</span>
        </div>
        <div className={`${styles.link} roll-btn`}>
          <span>Linkedin</span>
          <span>Linkedin</span>
        </div>
        <div className={`${styles.link} roll-btn`}>
          <span>Clutch</span>
          <span>Clutch</span>
        </div>
      </div>
      <div className={styles.phones}>
        <div className={`${styles.phone} roll-btn`}>
          <span>+1 (647)-210-8467</span>
          <span>+1 (647)-210-8467</span>
        </div>
        <div className={`${styles.phone} roll-btn`}>
          <span>+38 (099)-23-95-684</span>
          <span>+38 (099)-23-95-684</span>
        </div>
      </div>
      <div className={`${styles.email} roll-btn`}>
        <span>inquires@marrix-power.tech</span>
        <span>inquires@marrix-power.tech</span>
      </div>
    </div>
  )
}

export default FooterContacts