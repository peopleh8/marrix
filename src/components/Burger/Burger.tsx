'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import classNames from 'classnames'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { useTypedSelector } from '@/hooks/use-types-selector'
import { setOpen } from '@/store/reducers/menu.slice'
import { setRoll } from '@/store/reducers/labels.slice'
import styles from '@/components/Burger/Burger.module.scss'

const Burger: FC = () => {
  const dispatch = useTypedDispatch()
  const { isOpen } = useTypedSelector(state => state.menu)

  const activeClass = isOpen && styles.active
  const classes = classNames(styles.burder, 'burger', activeClass)

  const toggleMenuHandler = () => {
    dispatch(setOpen(!isOpen))
    dispatch(setRoll(!isOpen))
  }

  useEffect(() => {
    let mm = gsap.matchMedia()
    
    mm.add('(min-width: 1025px)', () => {
      gsap.fromTo(`.hero-primary .${styles.text}`, .6, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, ease: 'Power2.easeInOut', delay: 6.5 })
      gsap.fromTo(`.hero-primary .${styles.icon}`, .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: 6.6 })
      gsap.fromTo(`.inner-page .${styles.text}`, .6, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, ease: 'Power2.easeInOut', delay: 6.5 })
      gsap.fromTo(`.inner-page .${styles.icon}`, .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: 6.6 })
    })

    mm.add('(max-width: 1024px)', () => {
      gsap.fromTo(`.${styles.text}`, .6, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, ease: 'Power2.easeInOut', delay: 6.5 })
      gsap.fromTo(`.${styles.icon}`, .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: 6.6 })
    })
  }, [])

  
  return (
    <div 
      className={classes}
      onClick={toggleMenuHandler}
    >
      <div className={`${styles.text} burger-text roll-btn`}>
        <span>MENU</span>
        <span>MENU</span>
      </div>
      <div className={`${styles.icon} burger-icon`}>
        <div className={styles.lines}>
          <div className={styles.linesItem}>
            <span />
            <span />
          </div>
          <div className={styles.linesItem}>
            <span />
            <span />
          </div>
          <div className={styles.linesItem}>
            <span />
            <span />
          </div>
        </div>
        <div className={styles.times}>
          <div className={styles.timesLineWrapper}>
            <span className={styles.timesLine} />
          </div>
          <div className={styles.timesLineWrapper}>
            <span className={styles.timesLine} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Burger