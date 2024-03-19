'use client'

import { FC, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import Article from '@/components/UI/Article/Article'
import styles from '@/components/Case/Achive/Achive.module.scss'
import achive1 from '@/assets/images/achive-1.png'

const Achive: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.achive} .section-title`,
        start: 'bottom bottom'
      }
    })

    const articleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.achive} .article`,
        start: '+=40% bottom'
      }
    })

    const dateTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.date}`,
        start: 'bottom bottom'
      }
    })

    const photoTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.photo}`,
        start: '+=40% bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.achive} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.achive} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.achive} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.achive} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    articleTl.fromTo(`.${styles.achive} .article`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })

    dateTl.fromTo(`.${styles.date}`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })

    photoTl.fromTo(`.${styles.photo}`, .6, { opacity: 0 }, { opacity: 1 })
  }, [])
  
  return (
    <section className={styles.achive}>
      <div className={styles.content}>
        <SectionTitle text='Unique Achievement' isLight />
        <div className={styles.inner}>
          <Article isLight>
            <p>
              In our collaboration with HINDERER & WOLFF, our focus extended beyond the traditional. Tasked with the unique challenge of seamlessly transitioning the brand's legacy to the mobile platform, we not only tailored our approach to meet specific needs but also delivered results beyond the ordinary.
            </p>
            <p>
              The primary goal was clear: create a mobile version of the HINDERER & WOLFF website that encapsulates the brand's rich heritage while ensuring an intuitive and engaging user experience on iOS devices.
            </p>
            <p>
              This distinctive achievement not only met but exceeded expectations, showcasing our commitment to pushing boundaries and providing users with a mobile journey that mirrors the excellence of HINDERER & WOLFF's online presence.
            </p>
          </Article>
          <div className={styles.date}>Year: 2022</div>
        </div>
      </div>
      <div className={styles.photo}>
        <Image 
          src={achive1}
          alt=''
          width={350}
          height={725}
        />
      </div>
    </section>
  )
}

export default Achive