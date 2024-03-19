'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import PostsList from '@/components/Blog/Posts/PostsList'
import styles from '@/components/Blog/Posts/Posts.module.scss'

const Posts: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })
    ScrollTrigger.defaults({ scroller: '.scrolling-inner' })

    const items: Element[] = gsap.utils.toArray(`.${styles.item}`)

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.posts} .section-title`,
        start: 'bottom bottom'
      }
    })

    const btnTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.btn}`,
        start: 'bottom bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.posts} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.posts} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.posts} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.posts} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')


    items.forEach((item) => {
      const tl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: '+=20% bottom'
        }
      })

      tl.fromTo(item, .6, { opacity: 0, y: '20%' }, { opacity: 1, y: 0 })
    })

    btnTl.fromTo(`.${styles.btn}`, .7, { opacity: 0, y: '20%' }, { opacity: 1, y: 0 })
  }, [])
  
  return (
    <section className={styles.posts}>
      <SectionTitle text='Latest posts' />
      <PostsList />
      <div className={styles.btn}>
        <span className={styles.btnText}>Load more</span>
        <span className={styles.btntArrow}>
          <span className={styles.arrowLine} />
          <span className={styles.arrowTriangle} />
        </span>
      </div>
    </section>
  )
}

export default Posts