'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FooterHeader from '@/components/Footer/FooterHeader'
import FooterBtns from '@/components/Footer/FooterBtns'
import FooterContacts from '@/components/Footer/FooterContacts'
import FooterPartners from '@/components/Footer/FooterPartners'
import styles from '@/components/Footer/Footer.module.scss'

const Footer: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.footer} .section-title`,
        start: 'bottom bottom'
      }
    })

    const blockTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.footer} .block-title`,
        start: 'bottom bottom'
      }
    })

    const contactsTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.contacts}`,
        start: 'center bottom'
      }
    })

    const btnsTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.btns}`,
        start: 'center bottom'
      }
    })

    const partnersTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.partners}`,
        start: 'center bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.footer} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.footer} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.footer} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.footer} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    blockTitleTl.fromTo(`.${styles.footer} .block-title`, .7, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })

    contactsTl
      .fromTo(`.${styles.link}`, .7, { y: '105%' }, { y: 0, stagger: .1 })
      .fromTo(`.${styles.phone}`, .7, { x: '-105%' }, { x: 0, stagger: .15 }, '-=.5')
      .fromTo(`.${styles.email}`, .7, { x: '-105%' }, { x: 0 }, '-=.3')

    btnsTl.fromTo(`.${styles.btn} > *`, .7, { x: '-105%' }, { x: 0 })

    partnersTl.fromTo(`.${styles.partner}`, .7, { y: '105%' }, { y: 0 })
  }, [])
  
  return (
    <footer className={`${styles.footer} footer`}>
      <div className={styles.inner}>
        <FooterHeader />
        <FooterBtns />
        <div className={styles.info}>
          <FooterContacts />
          <FooterPartners />
        </div>
      </div>
    </footer>
  )
}

export default Footer