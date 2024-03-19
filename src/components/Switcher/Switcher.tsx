'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import classNames from 'classnames'
import { useTypedSelector } from '@/hooks/use-types-selector'
import styles from '@/components/Switcher/Switcher.module.scss'

const Switcher: FC = () => {
  const { isOpen } = useTypedSelector(state => state.menu)

  const openClass = isOpen && styles.open
  const classes = classNames(styles.switcher, 'switcher', openClass)

  useEffect(() => {
    let mm = gsap.matchMedia()
    
    mm.add('(min-width: 1025px)', () => {
      gsap.fromTo(`.hero-primary .${styles.text}`, .7, { opacity: 0 }, { opacity: 1, stagger: .05, delay: 6.7 })
      gsap.fromTo(`.inner-page .${styles.text}`, .7, { opacity: 0 }, { opacity: 1, stagger: .05, delay: 6.7 })
    })

    mm.add('(max-width: 1024px)', () => {
      gsap.fromTo(`.${styles.text}`, .7, { opacity: 0 }, { opacity: 1, stagger: .05, delay: 6.7 })
    })
  }, [])
  
  return (
    <div className={classes}>
      <div className={`${styles.text} switcher-text roll-btn`}>
        <span>UA</span>
        <span>UA</span>
      </div>
      <div className={`${styles.text} switcher-text roll-btn`}>
        <span>RU</span>
        <span>RU</span>
      </div>
      <div className={`${styles.text} switcher-text roll-btn`}>
        <span>EN</span>
        <span>EN</span>
      </div>
    </div>
  )
}

export default Switcher