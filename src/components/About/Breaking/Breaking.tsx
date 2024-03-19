'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle'
import { BlockTitleSizes, BlockTitleTheme } from '@/types/common.types'
import BreakingList from '@/components/About/Breaking/BreakingList'
import styles from '@/components/About/Breaking/Breaking.module.scss'

const Breaking: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.breaking} .section-title`,
        start: 'bottom bottom'
      }
    })

    const blockTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.breaking} .block-title`,
        start: 'bottom bottom'
      }
    })

    const itemsTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.list}`,
        start: 'center bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.breaking} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.breaking} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.breaking} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.breaking} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    blockTitleTl
      .fromTo(`.${styles.breaking} .block-title`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })

    itemsTl
      .fromTo(`.${styles.item}`, .6, { opacity: 0, y: '20%' }, { opacity: 1, y: 0, stagger: .1 })
  }, [])
  
  return (
    <section className={styles.breaking}>
      <SectionTitle text='BREAKING POINT' />
      <div className={styles.inner}>
        <BlockTitle 
          text='FUTURE LOOKS BRIGHT!'
          size={BlockTitleSizes.BIG}
          theme={BlockTitleTheme.DEFAULT}
          centered
        />
        <BreakingList />
      </div>
    </section>
  )
}

export default Breaking