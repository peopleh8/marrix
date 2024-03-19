'use client'

import { FC, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '@/components/About/Beginning/Beginning.module.scss'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import BeginningTopogtaphy from './BeginningTopogtaphy'
import BeginningArticle from './BeginningArticle'

const Beginning: FC = () => {
  const [ isSubtitleVisible, setIsSubtitleVisible ] = useState<boolean>(false)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })
    ScrollTrigger.defaults({ scroller: '.scrolling-inner' })

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.beginning} .section-title`,
        start: 'bottom bottom'
      }
    })

    const blockTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.beginning} .block-title`,
        start: 'bottom bottom'
      }
    })

    const articleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.beginning} .article`,
        start: '+=40% bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.beginning} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.beginning} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.beginning} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.beginning} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    blockTitleTl
      .fromTo(`.${styles.beginning} .block-title`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.subtitle}`, .6, { opacity: 0 }, { opacity: 1, onComplete: () => setIsSubtitleVisible(true) }, '-=.5')

    articleTl
      .fromTo(`.${styles.beginning} .article`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })
  }, [])
  
  return (
    <section className={styles.beginning}>
      <SectionTitle text='BEGINNING' />
      <div className={styles.inner}>
        <BeginningTopogtaphy isSubtitleVisible={isSubtitleVisible} />
        <BeginningArticle />
      </div>
    </section>
  )
}

export default Beginning