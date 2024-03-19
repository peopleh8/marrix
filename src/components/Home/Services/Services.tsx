'use client'

import { FC, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import ServicesSlider from '@/components/Home/Services/ServicesSlider'
import styles from '@/components/Home/Services/Services.module.scss'

const Services: FC = () => {
  const services = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!services.current) {
      return
    }

    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })
    ScrollTrigger.defaults({ scroller: '.scrolling-inner' })

    const mm = gsap.matchMedia()
    const servHeight = services.current.offsetHeight
    
    mm.add('(min-width: 1025px)', () => {
      const secTitleTl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.services}`,
          start: `${servHeight + 1} ${servHeight}`,
        }
      })

      secTitleTl
        .fromTo(`.${styles.services} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 }, '+=1')
        .fromTo(`.${styles.services} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
        .fromTo(`.${styles.services} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
        .fromTo(`.${styles.services} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')
        .fromTo(`.${styles.slider} > *`, .6, { opacity: 0, y: '50px' }, { opacity: 1, y: 0, stagger: .1 }, '-=.8')
    })

    mm.add('(max-width: 1024px)', () => {
      const secTitleTl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.services} .section-title`,
          start: 'bottom bottom'
        }
      })

      const sliderTl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.services-slider',
          start: 'center bottom'
        }
      })

      const controlsTl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.controls}`,
          start: 'bottom bottom'
        }
      })

      secTitleTl
        .fromTo(`.${styles.services} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
        .fromTo(`.${styles.services} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
        .fromTo(`.${styles.services} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
        .fromTo(`.${styles.services} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

      sliderTl.fromTo('.services-slider', .6, { opacity: 0, y: '50px' }, { opacity: 1, y: 0 })

      controlsTl.fromTo(`.${styles.controls}`, .6, { opacity: 0, y: '50px' }, { opacity: 1, y: 0 })
    })
  }, [])
  
  return (
    <section 
      className={styles.services}
      ref={services}
    >
      <SectionTitle text='our Services' />
      <ServicesSlider />
    </section>
  )
}

export default Services