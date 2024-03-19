'use client'

import { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import classNames from 'classnames'
import { ScreenBreakpoint, ScrollViewProps, SectionsGRBColor } from '@/types/common.types'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'
import { setTopInvert, setBotInvert } from '@/store/reducers/invert.slice'
import { setRoll as setLogoRoll } from '@/store/reducers/logo.slice'
import { setRoll as setLabelsRoll } from '@/store/reducers/labels.slice'
import { delay } from '@/utils/delay'
import { useScreenSize } from '@/hooks/use-screen-size'
import styles from '@/components/ScrollView/ScrollView.module.scss'

const ScrollView: FC<ScrollViewProps> = ({ children, isMain }) => {
  const dispatch = useTypedDispatch()
  const scrolling = useRef<HTMLDivElement>(null)
  const isMovingTop = useRef<boolean>(false)
  const screenSice = useScreenSize()

  const mainScrollingClass = isMain && 'main-scrolling'
  const scrollingClasses = classNames(styles.scrolling, 'scrolling', mainScrollingClass)
  const scrollingInnerClasses = classNames(styles.inner, 'scrolling-inner')
  
  useEffect(() => {
    if (!scrolling.current) {
      return
    }

    scrolling.current.scrollTop = 1
    
    const scrollHandle = (e: Event) => {
      const target = e.target as HTMLDivElement
      const { scrollTop } = target

      if (scrollTop === 0 && !isMovingTop.current) {
        gsap.to('#hero', 1.2, { y: 0, ease: 'Power2.easeInOut' })
        gsap.to('#scrolling', 1.2, { y: 0, ease: 'Power2.easeInOut' })

        target.scrollTop = 1

        isMovingTop.current = true
        delay(1200)?.then(() => {
          isMovingTop.current = false

          if (isMain && screenSice && screenSice.width > ScreenBreakpoint.TABLET) {
            target.scrollTop = 1
          }
        })
      }
    }

    scrolling.current?.addEventListener('scroll', scrollHandle)

    return () => {
      scrolling.current?.removeEventListener('scroll', scrollHandle)
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })
    ScrollTrigger.defaults({ scroller: scrolling.current })

    const sections: Element[] = gsap.utils.toArray(['section', 'footer'])

    sections.forEach((section) => {
      const invertTopTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: '-=15% top',
          onEnter: (target) => {
            const trigger = target.trigger
      
            if (!trigger) {
              return
            }
      
            const backgroundColor = window.getComputedStyle(trigger).backgroundColor

            dispatch(setTopInvert(backgroundColor === SectionsGRBColor.LIGHT))
          },
          onLeaveBack: (target) => {
            const trigger = target.trigger
            const prevElment = trigger?.previousElementSibling as HTMLElement

            if (!trigger || !prevElment) {
              return
            }

            const backgroundColor = window.getComputedStyle(prevElment).backgroundColor

            dispatch(setTopInvert(backgroundColor === SectionsGRBColor.LIGHT))
          }
        }
      })

      const invertBotTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          onEnter: (target) => {
            const trigger = target.trigger
      
            if (!trigger) {
              return
            }

            const backgroundColor = window.getComputedStyle(trigger).backgroundColor

            dispatch(setBotInvert(backgroundColor === SectionsGRBColor.LIGHT))
          },
          onLeaveBack: (target) => {
            const trigger = target.trigger
            const prevElment = trigger?.previousElementSibling as HTMLElement

            if (!trigger || !prevElment) {
              return
            }

            const backgroundColor = window.getComputedStyle(prevElment).backgroundColor

            dispatch(setBotInvert(backgroundColor === SectionsGRBColor.LIGHT))
          }
        }
      })
    })

    const rollLogoTl = gsap.timeline({
      scrollTrigger: {
        trigger: scrolling.current,
        start: '15% top',
        onEnter: () => {
          dispatch(setLogoRoll(true))
        },
        onLeaveBack: () => {
          dispatch(setLogoRoll(false))
        }
      }
    })

    const rollLabelsTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer',
        start: '85% bottom',
        onEnter: () => {
          dispatch(setLabelsRoll(true))
        },
        onLeaveBack: () => {
          dispatch(setLabelsRoll(false))
        }
      }
    })
  }, [])
  
  return (
    <div 
      id='scrolling' 
      className={scrollingClasses}
    >
      <div 
        className={scrollingInnerClasses}
        ref={scrolling}
      >
        {children}
      </div>
    </div>
  )
}

export default ScrollView