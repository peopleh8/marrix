'use client'

import { FC, useEffect, useState } from 'react'
import gsap from 'gsap'
import SectionTitle from '@/components/UI/SectionTitle/SectionTitle'
import { BlockTitleSizes, BlockTitleTheme, GlitchTheme } from '@/types/common.types'
import Glitch from '@/components/Glitch/Glitch'
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle'
import Article from '@/components/UI/Article/Article'
import { uniSans } from '@/fonts/fonts'
import styles from '@/components/Services/Desc/Desc.module.scss'

const Desc: FC = () => {
  const [ isSubtitleVisible, setIsSubtitleVisible ] = useState<boolean>(false)
  
  useEffect(() => {
    const descTl: GSAPTimeline = gsap.timeline()
    
    descTl
      .fromTo(`.${styles.desc} .section-title`, .7, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, delay: 6.5 })
      .fromTo(`.${styles.desc} .section-line`, .7, { scaleX: 0 }, { scaleX: 1 }, '-=.2')
      .fromTo(`.${styles.desc} .section-rectangle`, .7, { left: '15%', scale: 0 }, { left: '-7%', scale: 1 }, '-=.7')
      .fromTo(`.${styles.desc} .section-rectangle`, .4, { scale: 1 }, { scale: 0 }, '+=.3')
      .fromTo(`.${styles.desc} .block-title`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 }, '-=.9')
      .fromTo(`.${styles.desc} .article`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 }, '-=.8')
      .fromTo(`.${styles.subtitle}`, .6, { opacity: 0 }, { opacity: 1, onComplete: () => setIsSubtitleVisible(true) }, '-=.5')
  }, [])
  
  return (
    <section className={styles.desc}>
      <SectionTitle text='SERVICES AND PRICES' />
      <div className={styles.inner}>
        <div className={styles.topography}>
          <BlockTitle 
            text='WE ARE EVANGELISTS OF STRATEGIC WEB MARKETING'
            size={BlockTitleSizes.BIG}
            theme={BlockTitleTheme.DEFAULT}
          />
          <div className={`${styles.subtitle} ${uniSans.className}`}>
            pricing
            <Glitch
              countItems={3}
              countRectangles={240}
              widthElement={60} 
              heightElement={15}
              theme={GlitchTheme.LIGHT}
              trigger={isSubtitleVisible}
              delay={7.5}
            />
          </div>
        </div> 
        <Article>
          <p>
            Marrix Power is your dedicated partner in strategic web marketing. As fervent evangelists of the digital landscape, we specialize in crafting tailored solutions for businesses seeking a powerful online presence. Our team, a fusion of seasoned experts and creative minds, navigates the intricacies of SEO, engaging content creation, and social media prowess to drive meaningful results. 
          </p>
          <p>
            At Marrix Power, we are committed to being the catalyst that propels your business to new heights in the ever-evolving realm of digital marketing.
          </p>
        </Article>
      </div>
    </section>
  )
}

export default Desc