import { FC } from 'react'
import { IntroBenefitsItemProps } from '@/types/common.types'
import styles from '@/components/Intro/Intro.module.scss'

const IntroBenefitsItem: FC<IntroBenefitsItemProps> = ({ title, desc }) => {
  return (
    <div className={styles.benefitsItem}>
      <span className={`${styles.benefitsItemLine} intro-benefits-line`} />
      <span className={`${styles.benefitsItemLine} intro-benefits-line`} />
      <div className={`${styles.benefitsItemTitle} intro-benefits-title`}>
        <span>{title}</span>+
      </div>
      <div 
        className={`${styles.benefitsItemDesc} intro-benefits-desc`} 
        dangerouslySetInnerHTML={{ __html: desc }} 
      />
    </div>
  )
}

export default IntroBenefitsItem