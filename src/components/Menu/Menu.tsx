'use client'

import { FC, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { useTypedSelector } from '@/hooks/use-types-selector'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import MenuList from '@/components/Menu/MenuList'
import MenuSocial from '@/components/Menu/MenuSocial'
import MenuDecorate from '@/components/Menu/MenuDecorate'
import { setOpen } from '@/store/reducers/menu.slice'
import { setRoll as setLogoRoll } from '@/store/reducers/logo.slice'
import { setRoll as setLabelsRoll } from '@/store/reducers/labels.slice'
import styles from '@/components/Menu/Menu.module.scss'

const Menu: FC = () => {
  const dispatch = useTypedDispatch()
  const { isOpen } = useTypedSelector(state => state.menu)
  const pathname = usePathname()

  const openClass = isOpen && styles.open
  const classes = classNames(styles.menu, openClass)

  useEffect(() => {
    dispatch(setOpen(false))
    dispatch(setLogoRoll(false))
    dispatch(setLabelsRoll(false))
  }, [pathname])
  
  return (
    <div className={classes}>
      <div className={styles.inner}>
        <MenuDecorate />
        <div className={styles.info}>
          <div className={styles.infoInner}>
            <MenuList />
            <MenuSocial />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu