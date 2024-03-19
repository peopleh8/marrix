'use client'

import { FC, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import styles from '@/components/Home/Tech/Tech.module.scss'
import TechList from '@/components/Home/Tech/TechList'

const Tech: FC = () => {
  const [ isSuptitleVisible, setIsSuptitleVisible ] = useState<boolean>(false)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.tech} .section-title`,
        start: 'bottom bottom'
      }
    })

    const blockTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.quote}`,
        start: 'bottom bottom'
      }
    })

    const blockListTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.list}`,
        start: '+=30% bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.tech} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.tech} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.tech} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.tech} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    blockTitleTl
      .fromTo(`.${styles.quoteTitle}`, .6, { opacity: 0, y: '20%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.quoteSubtitle}`, .6, { opacity: 0 }, { opacity: 1, onComplete: () => setIsSuptitleVisible(true) }, '-=.3')

    blockListTl.fromTo(`.${styles.item}`, .6, { opacity: 0, y: '20%' }, { opacity: 1, y: 0, stagger: .1 })
  }, [])
  
  return (
    <section className={styles.tech}>
      <SectionTitle text='our technologies' />
      <TechList isSuptitleVisible={isSuptitleVisible} />
    </section>
  )
}

export default Tech