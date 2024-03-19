'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import Devider from '@/components/Devider/Devider'
import PageTitle from '@/components/UI/PageTitle/PageTitle'
import PageDesc from '@/components/UI/PageDesc/PageDesc'
import IntroBenefits from '@/components/Intro/IntroBenefits'
import IntroSliderWrapper from '@/components/Intro/IntroSliderWrapper'
import { IntroProps } from '@/types/common.types'
import styles from '@/components/Intro/Intro.module.scss'
import classNames from 'classnames'

const Intro: FC<IntroProps> = ({ 
  title, 
  titleSvgFill, 
  titleSvgStroke,
  desc, 
  benefits, 
  slider,
  isFullpage = false,
  isMain = false
}) => {
  const fullpageClass = isFullpage && styles.fullpage
  const classes = classNames(styles.intro, 'intro', fullpageClass)
  
  useEffect(() => {
    if (isMain) {
      return
    }
    
    gsap.to('.intro .title-stroke', 4, { strokeDashoffset: 0, delay: 6.2, ease: 'Power2.easeInOut' })
    gsap.to('.intro .title-stroke', .6, { opacity: 0, delay: 9.4, ease: 'Power2.easeInOut' })
    gsap.to('.intro .title-fill', .6, { opacity: 1, delay: 9.4, ease: 'Power2.easeInOut' })

    gsap.fromTo('.intro .devider', .8, { opacity: 0 }, { opacity: 1, delay: 9.8, ease: 'Power2.easeInOut' })
    gsap.fromTo('.intro .page-desc', .8, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 9.8, ease: 'Power2.easeInOut' })
    gsap.to('.portfolio-slider .swiper-slide', 1, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', stagger: .2, delay: 9.8, ease: 'Power2.easeInOut' })
    gsap.to('.portfolio-slider .swiper-slide img', 1, { scale: 1, stagger: .2, delay: 9.9, ease: 'Power2.easeInOut' })
    gsap.fromTo('.portfolio-slider-controls', .5, { opacity: 0 }, { opacity: 1, delay: 10, ease: 'Power2.easeInOut' })
  }, [])
  
  return (
    <section className={classes}>
      <Devider />
      <PageTitle 
        text={title}
        titleSvgFill={titleSvgFill}
        titleSvgStroke={titleSvgStroke}
      />
      { slider && (
        <IntroSliderWrapper slider={slider} />
      ) }
      { benefits ? (
        desc 
          ? <IntroBenefits benefits={benefits} desc={desc} /> 
          : <IntroBenefits benefits={benefits} />
      ) : (
        desc && <PageDesc text={desc} />
      ) }
    </section>
  )
}

export default Intro