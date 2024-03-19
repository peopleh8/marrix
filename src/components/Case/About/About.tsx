'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle'
import { BlockTitleSizes, BlockTitleTheme } from '@/types/common.types'
import Article from '@/components/UI/Article/Article'
import styles from '@/components/Case/About/About.module.scss'

const About: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const secTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.about} .section-title`,
        start: 'bottom bottom'
      }
    })

    const blockTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.about} .block-title`,
        start: 'bottom bottom'
      }
    })

    const articleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.about} .article`,
        start: '+=40% bottom'
      }
    })

    secTitleTl
      .fromTo(`.${styles.about} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 })
      .fromTo(`.${styles.about} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.about} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.about} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')

    blockTitleTl
      .fromTo(`.${styles.about} .block-title`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })

    articleTl
      .fromTo(`.${styles.about} .article`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })
  }, [])
  
  return (
    <section className={styles.about}>
      <SectionTitle text='about client' />
      <div className={styles.inner}>
        <BlockTitle 
          text="HINDERER & WOLFF'S 16TH-CENTURY WINES FROM THE REBUILT VINEYARDS OF ORSHVIRA"
          size={BlockTitleSizes.BIG}
          theme={BlockTitleTheme.DEFAULT}
        />
        <Article>
          <p>
            In the aftermath of the devastating events that befell Orshvira in the year 1375, the resilient inhabitants committed themselves to the formidable task of rebuilding. 
          </p>
          <p>
            Over time, they cultivated exceptional 16th-century wines that earned high esteem from the church. This precious savoir-faire has been passed down through generations, and the family vineyard of HINDERER & WOLFF, led by a brother, sister, and their spouses, continues these time-honored traditions while infusing a touch of modernity. 
          </p>
          <p>
            Their wines, sourced from an ecologically pure estate, are delicate, displaying astonishing taste complexity and exceptional longevity.
          </p>
        </Article>
      </div>
    </section>
  )
}

export default About