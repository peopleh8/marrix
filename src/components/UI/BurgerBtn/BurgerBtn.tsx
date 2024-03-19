import { FC } from 'react'
import { uniSans } from '@/fonts/fonts'
import { BurgerBtnProps } from '@/types/common.types'
import styles from '@/components/UI/BurgerBtn/BurgerBtn.module.scss'

const BurgerBtn: FC<BurgerBtnProps> = ({ text, href, handler }) => {
  return (
    <>
      { !href ? (
        <button 
          className={styles.btn}
          onClick={handler}
        >
          <span className={`${styles.btnText} ${uniSans.className}`}>{text}</span>
          <span className={styles.btnLine} />
          <span className={styles.btnLine} />
          <span className={styles.btnLine} />
          <span className={styles.btnLine} />
        </button>
      ) : (
        <a 
          className={styles.btn}
          href={href}
          target='_blank'
        >
          <span className={`${styles.btnText} ${uniSans.className}`}>{text}</span>
          <span className={styles.btnLine} />
          <span className={styles.btnLine} />
          <span className={styles.btnLine} />
          <span className={styles.btnLine} />
        </a>
      ) }
    </>
    
  )
}

export default BurgerBtn