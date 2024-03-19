'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import classNames from 'classnames'
import ActionBtn from '@/components/UI/ActionBtn/ActionBtn'
import { useTypedSelector } from '@/hooks/use-types-selector'
import { ActionProps } from '@/types/common.types'
import styles from '@/components/Action/Action.module.scss'

const Action: FC<ActionProps> = ({ disabledPortfolio }) => {
  const { isOpen: isCallbackOpen } = useTypedSelector(state => state.callback)
  const { isOpen: isMenuOpen } = useTypedSelector(state => state.menu)
  const { isBotInverted } = useTypedSelector(state => state.invert)
  
  const hiddenClass = isCallbackOpen && styles.hidden
  const openClass = isMenuOpen && styles.open
  const invertClass = isBotInverted && styles.inverted
  const classes = classNames(styles.action, 'action', hiddenClass, openClass, invertClass)

  useEffect(() => {
    let mm = gsap.matchMedia()
    
    mm.add('(min-width: 1025px)', () => {
      gsap.fromTo(`.hero-primary .${styles.action}`, .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: 6.5 })
      gsap.fromTo(`.inner-page .${styles.action}`, .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: 6.5 })
    })

    mm.add('(max-width: 1024px)', () => {
      gsap.fromTo(`.${styles.action}`, .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: 6.5 })
    })
  }, [])
  
  return (
    <div className={classes}>
      <ActionBtn text='Get a Free Quote' />
      { !disabledPortfolio && (
        <Link 
          className={`${styles.link} roll-btn`}
          href='/portfolio'
        >
          <span>Portfolio</span>
          <span>Portfolio</span>
        </Link>
      ) }
    </div>
  )
}

export default Action