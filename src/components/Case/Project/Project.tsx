'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import Article from '@/components/UI/Article/Article'
import ProjectInfo from '@/components/Case/Project/ProjectInfo'
import styles from '@/components/Case/Project/Project.module.scss'

const Project: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.project} .section-title`,
        start: 'bottom bottom'
      }
    })

    const articleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.project} .article`,
        start: '+=40% bottom'
      }
    })

    const techItemTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.infoTitle}`,
        start: 'bottom bottom'
      }
    })

    const techItemInnerTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.infoInner}`,
        start: 'center bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.project} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.project} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.project} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.project} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    articleTl.fromTo(`.${styles.project} .article`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })

    techItemTitleTl.fromTo(`.${styles.infoTitle}`, .8, { x: '-105%' }, { x: 0 })
    
    techItemInnerTl.fromTo(`.${styles.infoElem}`, .6, { y: '20%', opacity: 0 }, { y: 0, opacity: 1, stagger: .1 })
  }, [])
  
  return (
    <section className={styles.project}>
      <SectionTitle text='About project' />
      <div className={styles.inner}>
        <Article>
          <p>
            In our collaboration with Hinderer & Wolff, we embarked on the creation of an interactive online presence. We conceptualized a unique website distinguished by an exceptional design implemented through the innovative Free.js technology. This advanced framework not only ensures a visually striking and user-friendly interface but also facilitates a seamless and engaging online experience for visitors exploring the world of Hinderer & Wolff wines. 
          </p>
          <p>
            The integration of Free.js stands as a testament to our commitment to leveraging cutting-edge technologies, enhancing the overall aesthetic and functionality of the website. The result is a platform that beautifully encapsulates the essence of Hinderer & Wolff's legacy and their modern approach to winemaking.
          </p>
          <p>
            In the development process, we utilized Three.js technology, complemented by tools such as Figma, Adobe After Effects, Canva, and ClickUp.
          </p>
        </Article>
        <ProjectInfo />
      </div>
    </section>
  )
}

export default Project