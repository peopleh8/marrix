'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Devider from '@/components/Devider/Devider'
import QuoteContent from '@/components/Blog/Quote/QuoteContent'
import styles from '@/components/Blog/Quote/Quote.module.scss'

const Quote: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const titleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.title}`,
        start: 'center bottom'
      }
    })

    const controlsTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.controls}`,
        start: 'center bottom'
      }
    })

    titleTl
      .to(`.${styles.titleSvgItemStroke}`, 4, { strokeDashoffset: 0, ease: 'Power2.easeInOut' })
      .to(`.${styles.titleSvgItemStroke}`, .6, { opacity: 0, ease: 'Power2.easeInOut' }, '-=1.4')
      .to(`.${styles.titleSvgItemFill}`, .6, { opacity: 1, ease: 'Power2.easeInOut' }, '-=1.4')

    controlsTl.fromTo(`.${styles.controls} > *`, .6, { opacity: 0, y: '20%' }, { opacity: 1, stagger: .1, y: 0 })
  }, [])
  
  return (
    <section className={styles.quote}>
      <Devider />
      <QuoteContent />
    </section>
  )
}

export default Quote