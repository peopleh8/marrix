import { FC } from 'react'
import styles from '@/components/Home/Services/Services.module.scss'

const SevicesContols: FC = () => {
  return (
    <div className={styles.controls}>
      <div className={`${styles.btn} ${styles.btnPrev} icon`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.4775 13.557H2.92383V10.443H15.4775L10.6628 5.31595L12.7306 3.11401L21.0752 12L12.7306 20.886L10.6628 18.6841L15.4775 13.557Z" fill="#121212"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.4775 13.557H2.92383V10.443H15.4775L10.6628 5.31595L12.7306 3.11401L21.0752 12L12.7306 20.886L10.6628 18.6841L15.4775 13.557Z" fill="#121212"/>
        </svg>
      </div>
      <div className={styles.pagination} />
      <div className={`${styles.btn} ${styles.btnNext} icon`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.4775 13.557H2.92383V10.443H15.4775L10.6628 5.31595L12.7306 3.11401L21.0752 12L12.7306 20.886L10.6628 18.6841L15.4775 13.557Z" fill="#121212"/>
        </svg>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M15.4775 13.557H2.92383V10.443H15.4775L10.6628 5.31595L12.7306 3.11401L21.0752 12L12.7306 20.886L10.6628 18.6841L15.4775 13.557Z" fill="#121212"/>
        </svg>
      </div>
    </div>
  )
}

export default SevicesContols