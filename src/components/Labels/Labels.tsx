'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import classNames from 'classnames'
import { useTypedSelector } from '@/hooks/use-types-selector'
import styles from '@/components/Labels/Labels.module.scss'
import { uniSans } from '@/fonts/fonts'

const Labels: FC = () => {
  const { isOpen: isCallbackOpen } = useTypedSelector(state => state.callback)
  const { isOpen: isMenuOpen } = useTypedSelector(state => state.menu)
  const { isBotInverted } = useTypedSelector(state => state.invert)
  const { isRolled } = useTypedSelector(state => state.labels)
  
  const hiddenClass = isCallbackOpen && styles.hidden
  const openClass = isMenuOpen && styles.open
  const invertClass = isBotInverted && styles.inverted
  const rolledClass = isRolled && styles.rolled
  const classes = classNames(styles.labels, 'labels', hiddenClass, openClass, invertClass, rolledClass)

  useEffect(() => {
    let mm = gsap.matchMedia()
    
    mm.add('(min-width: 1025px)', () => {
      gsap.fromTo(`.hero-primary .${styles.frontLabel}`, .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: 6.5 })
      gsap.fromTo(`.hero-primary .${styles.backLabel}`, .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: 6.5 })
      gsap.fromTo(`.inner-page .${styles.frontLabel}`, .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: 6.5 })
      gsap.fromTo(`.inner-page .${styles.backLabel}`, .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: 6.5 })
    })

    mm.add('(max-width: 1024px)', () => {
      gsap.fromTo(`.${styles.frontLabel}`, .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: 6.5 })
      gsap.fromTo(`.${styles.backLabel}`, .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: 6.5 })
    })
  }, [])
  
  return (
    <div className={classes}>
      <div className={styles.front}>
        <div className={`${styles.frontLabel} front-label`}>
          <div className={styles.frontText}>WEB</div>
        </div>
        <div className={`${styles.frontLabel} front-label`}>
          <div className={styles.frontText}>Product</div>
        </div>
        <div className={`${styles.frontLabel} front-label`}>
          <div className={styles.frontText}>Marrix Power</div>
        </div>
      </div>
      <div className={styles.back}>
        <div className={`${styles.backLabel} back-label`}>
          <div className={`${styles.backText} ${uniSans.className}`}>All you</div>
        </div>
        <div className={`${styles.backLabel} back-label`}>
          <div className={`${styles.backText} ${uniSans.className}`}>need is</div>
        </div>
        <div className={`${styles.backLabel} back-label`}>
          <div className={`${styles.backText} ${uniSans.className}`}>M</div>
        </div>
      </div>
    </div>
  )
}

export default Labels