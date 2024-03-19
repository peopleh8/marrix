'use client'

import { FC } from 'react'
import BurgerBtn from '@/components/UI/BurgerBtn/BurgerBtn'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { setOpen } from '@/store/reducers/callback.slice'
import styles from '@/components/Footer/Footer.module.scss'

const FooterBtns: FC = () => {
  const dispatch = useTypedDispatch()
  
  const openCallbackHandler = () => {
    dispatch(setOpen(true))
  }
  
  return (
    <div className={styles.btns}>
      <div className={styles.btn}>
        <BurgerBtn 
          text='Joining our team'
        />
      </div>
      <div className={styles.btn}>
        <BurgerBtn 
          text='SEND A REQUEST'
          handler={openCallbackHandler}
        />
      </div>
      <div className={styles.btn}>
        <BurgerBtn 
          text='SEE presentation'
          href='https://google.com'
        />
      </div>
    </div>
  )
}

export default FooterBtns