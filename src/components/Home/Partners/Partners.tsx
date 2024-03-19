'use client'

import { FC, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import PartnersTopography from '@/components/Home/Partners/PartnersTopography'
import PartnersList from '@/components/Home/Partners/PartnersList'
import styles from '@/components/Home/Partners/Partners.module.scss'

const Partners: FC = () => {
  const [ isSuptitleVisible, setSuptitleVisible ] = useState<boolean>(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.partners} .section-title`,
        start: 'bottom bottom'
      }
    })

    const blockTopographyTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.topography}`,
        start: 'bottom bottom'
      }
    })

    const blockItemTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.list}`,
        start: 'center bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.partners} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.partners} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.partners} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.partners} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    blockTopographyTl
      .fromTo(`.${styles.title}`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.subtitle}`, .6, { opacity: 0 }, { opacity: 1, onComplete: () => setSuptitleVisible(true) }, '-=.3')
    
    blockItemTl.fromTo(`.${styles.item} img`, .7, { top: '130%' }, { top: '50%', stagger: .1 })
  }, [])
  
  return (
    <section className={styles.partners}>
      <SectionTitle text='OUR happy clients'/>
      <PartnersTopography isSuptitleVisible={isSuptitleVisible} />
      <PartnersList />
    </section>
  )
}

export default Partners