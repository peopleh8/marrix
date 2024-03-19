'use client'

import { FC } from 'react'
import classNames from 'classnames'
import Logo from '@/components/Logo/Logo'
import Burger from '@/components/Burger/Burger'
import Switcher from '@/components/Switcher/Switcher'
import { useTypedSelector } from '@/hooks/use-types-selector'
import styles from '@/components/Header/Header.module.scss'

const Header: FC = () => {
  const { isOpen: isCallbackOpen } = useTypedSelector(state => state.callback)
  const { isOpen: isMenuOpen } = useTypedSelector(state => state.menu)
  const { isTopInverted } = useTypedSelector(state => state.invert)
  
  const hiddenClass = isCallbackOpen && styles.hidden
  const openClass = isMenuOpen && styles.open
  const invertClass = isTopInverted && styles.inverted
  const classes = classNames(styles.header, 'header', hiddenClass, openClass, invertClass)
  
  return (
    <header className={classes}>
      <div className={styles.inner}>
        <Logo />
        <Burger />
        <Switcher />
      </div>
    </header>
  )
}

export default Header