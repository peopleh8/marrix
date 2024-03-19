'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import ChooseList from '@/components/Home/Choose/ChooseList'
import styles from '@/components/Home/Choose/Choose.module.scss'

const Choose: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.choose} .section-title`,
        start: 'bottom bottom'
      }
    })

    const secItemTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.item}`,
        start: 'center bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.choose} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.choose} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.choose} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.choose} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    secItemTl.fromTo(`.${styles.item}`, .7, { opacity: 0, x: '-20%' }, { opacity: 1, x: 0, stagger: .1 })
  }, [])
  
  return (
    <section className={styles.choose}>
      <SectionTitle text='Why chooses us' isLight />
      <ChooseList />
    </section>
  )
}

export default Choose