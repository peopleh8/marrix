'use client'

import { FC, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import IntroMock from '@/components/Case/Intro/IntroMock'
import Devider from '@/components/Devider/Devider'
import { uniSans } from '@/fonts/fonts'
import caseHero from '@/assets/images/case-hero.jpg'
import { wrapWord } from '@/utils/wrapWord'
import styles from '@/components/Case/Intro/Intro.module.scss'

const Intro: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })
    ScrollTrigger.defaults({ scroller: '.scrolling-inner' })
    
    gsap.fromTo(`.${styles.title} span`, .6, { y: '105%' }, { y: 0, stagger: .1, delay: 6.3 })
    gsap.fromTo(`.${styles.intro} .devider`, .8, { opacity: 0 }, { opacity: 1, delay: 6.6, ease: 'Power2.easeInOut' })
  }, [])
  
  return (
    <>
      <IntroMock />
      <section className={styles.intro}>
        <Image
          src={caseHero}
          alt=''
          width={1920}
          height={888}
        />
        <Devider />
        <h1 className={`${styles.title} ${uniSans.className}`} dangerouslySetInnerHTML={{ __html: wrapWord('Hinderer & wolff') }} />
      </section>
    </>
  )
}

export default Intro