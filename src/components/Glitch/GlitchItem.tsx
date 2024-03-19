'use client'

import { FC, useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import { isBrowser } from '@/utils/isBrowser'
import { GlitchItemProps, GlitchTheme } from '@/types/common.types'
import { delay as fakeDelay } from '@/utils/delay'
import styles from '@/components/Glitch/Glitch.module.scss'

const GlitchItem: FC<GlitchItemProps> = ({ 
  countRectangles, 
  widthElement, 
  heightElement,
  theme,
  trigger,
  delay
}) => {
  const part = useRef<HTMLDivElement>(null)
  const [ isHovered, setHovered ] = useState(false)

  const themeClass = theme === GlitchTheme.DARK ? styles.dark : styles.light
  const clasess = classNames(styles.item, themeClass)

  let intervalId: number = 0
  let interval = false

  const showGlitchHandler = () => {
    if (interval || !part.current || !isBrowser()) {
      return
    }

    interval = true

    setHovered(true)

    let iterationCount = 0

    intervalId = setInterval(() => {
      const glitch = Array.from(part.current?.children || []) as HTMLDivElement[]

      glitch.forEach((item) => {
        item.style.marginLeft = `${Math.floor(Math.random() * 45)}px`
        item.style.marginTop = `${Math.floor(Math.random() * 15)}px`
        item.style.width = `${Math.floor(widthElement)}px`;
        item.style.height = `${Math.floor(heightElement)}px`;
      })

      iterationCount++

      if (iterationCount === 16) {
        clearInterval(intervalId)
        interval = false
        setHovered(false)
      }
    }, 30) as unknown as number
  }

  useEffect(() => {
    if (trigger && delay) {
      fakeDelay(delay)?.then(() => {
        showGlitchHandler()
      })
    }
    
    return () => {
      clearInterval(intervalId)
    }
  }, [trigger])
  
  return (
    <div 
      className={clasess}
      ref={part}
      onMouseEnter={showGlitchHandler}
    >
      { isHovered && Array(countRectangles).fill(0).map((_, index) => (
        <div className={styles.rectangle} key={index} />
      ))}
    </div>
  )
}

export default GlitchItem