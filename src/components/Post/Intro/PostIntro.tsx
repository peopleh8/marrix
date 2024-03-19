'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PostSidebar from '@/components/Post/Intro/PostSidebar'
import PostContent from '@/components/Post/Intro/PostContent'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import PostHeader from '@/components/Post/Intro/PostHeader'
import styles from '@/components/Post/Intro/Intro.module.scss'

const PostIntro: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })
    ScrollTrigger.defaults({ scroller: '.scrolling-inner' })
    
    const secTitleTl: GSAPTimeline = gsap.timeline()
    const secSidebarTl: GSAPTimeline = gsap.timeline()
    const secHeaderTl: GSAPTimeline = gsap.timeline()
    const secContentTl: GSAPTimeline = gsap.timeline()

    secTitleTl
      .fromTo(`.${styles.intro} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, delay: 6.5 })
      .fromTo(`.${styles.intro} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.intro} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.intro} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    secHeaderTl.fromTo(`.${styles.header}`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0, delay: 6.7 })

    secSidebarTl.fromTo(`.${styles.sidebarInner} > *`, .6, { opacity: 0 }, { opacity: 1, stagger: .1, delay: 6.9 })

    secContentTl.fromTo(`.${styles.intro} .article`, .6, { opacity: 0, y: '50px' }, { opacity: 1, y: 0, delay: 7.1 })
  }, [])
  
  return (
    <section className={styles.intro}>
      <SectionTitle text='Blog' />
      <PostHeader isMobile={true} />
      <div className={styles.inner}>
        <PostSidebar />
        <PostContent />
      </div>
    </section>
  )
}

export default PostIntro