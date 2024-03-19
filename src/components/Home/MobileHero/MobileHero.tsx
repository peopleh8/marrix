'use client'

import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import ActionBtn from '@/components/UI/ActionBtn/ActionBtn'
import { uniSans } from '@/fonts/fonts'
import { wrapLines } from '@/utils/wrapLines'
import Glitch from '@/components/Glitch/Glitch'
import { GlitchTheme } from '@/types/common.types'
import styles from '@/components/Home/MobileHero/MobileHero.module.scss'

const MobileHero: FC = () => {
  const [ isGlitched, setGlitched ] = useState<boolean>(false)
  
  useEffect(() => {
    gsap.fromTo(`.${styles.title} span:nth-child(1) span`, 1.1, { y: '105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.6 })
    gsap.fromTo(`.${styles.title} span:nth-child(2) span`, 1.1, { y: '105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.5 })
    gsap.fromTo(`.${styles.title} span:nth-child(3) span`, 1.1, { y: '105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.5 })
    gsap.fromTo(`.${styles.title} span:nth-child(4) span`, 1.1, { y: '-105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.7 })
    gsap.fromTo(`.${styles.title} span:nth-child(5) span`, 1.1, { y: '-105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.8, onComplete: () => setGlitched(true) })
    gsap.fromTo(`.${styles.title} + *`, .7, { opacity: 0, y: '20%' }, { opacity: 1, y: 0, delay: 6.9 })
    gsap.fromTo(`.${styles.link}`, .7, { opacity: 0, y: '20%' }, { opacity: 1, y: 0, ease: 'Power2.easeInOut', delay: 7 })
    gsap.fromTo(`.${styles.line}:nth-child(1)`, .7, { scaleX: 0 }, { scaleX: 1, ease: 'Power2.easeInOut', delay: 7.1 })
    gsap.fromTo(`.${styles.line}:nth-child(2)`, .7, { scaleY: 0 }, { scaleY: 1, ease: 'Power2.easeInOut', delay: 7.2 })
    gsap.fromTo(`.${styles.benefitsItem}`, .7, { opacity: 0 }, { opacity: 1, stagger: .1, delay: 7.6 })
  }, [])
  
  return (
    <section className={styles.hero}>
      <div className={styles.title}>
        <div 
          className={`${styles.titleText} ${uniSans.className}`}
          dangerouslySetInnerHTML={{ __html: wrapLines('Award-Winning\nDesign &\n Software\nDevelopment\nCompany') }}
        />
        <Glitch
          countItems={2}
          countRectangles={240}
          widthElement={60} 
          heightElement={15}
          theme={GlitchTheme.DARK}
          trigger={isGlitched}
          delay={300}
        />
      </div>
      <ActionBtn text='Get a free quote' />
      <Link className={styles.link} href='/portfolio'>Portfolio</Link>
      <div className={styles.benefits}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.benefitsItem}>
          <div className={styles.benefitsTitle}>10+</div>
          <p className={styles.benefitsDesc}>years of proven commercial experience</p>
        </div>
        <div className={styles.benefitsItem}>
          <div className={styles.benefitsTitle}>200+</div>
          <p className={styles.benefitsDesc}>projects outsourced and distributed</p>
        </div>
        <div className={styles.benefitsItem}>
          <div className={styles.benefitsTitle}>100+</div>
          <p className={styles.benefitsDesc}>satisfied clients</p>
        </div>
        <div className={styles.benefitsItem}>
          <div className={styles.benefitsTitle}>50+</div>
          <p className={styles.benefitsDesc}>full-time experts across the board</p>
        </div>
      </div>
    </section>
  )
}

export default MobileHero