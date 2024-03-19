'use client'

import { FC, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import { useTypedSelector } from '@/hooks/use-types-selector'
import Intro from '@/components/Intro/Intro'
import HeroScene from '@/components/Home/Hero/HeroScene'
import FixedControls from '@/components/FixedControls/FixedControls'
import Glitch from '@/components/Glitch/Glitch'
import { uniSans } from '@/fonts/fonts'
import { GlitchTheme } from '@/types/common.types'
import { isBrowser } from '@/utils/isBrowser'
import { delay } from '@/utils/delay'
import { wrapLines } from '@/utils/wrapLines'
import styles from '@/components/Home/Hero/Hero.module.scss'
import 'swiper/css'
import 'swiper/css/mousewheel'
import '@/components/Home/Hero/HeroSlider.scss'

const Hero: FC = () => {
  const { isOpen } = useTypedSelector(state => state.menu)
  const [ isLineMoved, setMoveLine ] = useState<boolean>(false)
  const [ isGlitched, setGlitched ] = useState<boolean>(false)
  const [ isEnd, setEnd ] = useState<boolean>(false)
  const slider = useRef<SwiperRef | null>(null)
  const isMovingBottom = useRef<boolean>(false)
  const isOnceScroll = useRef<boolean>(false)
  const isOnceAnimate = useRef<boolean>(false)

  const titleSvgFill = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 964 146" fill="none"><path d="M4.76837e-07 143V2.99999H32V143H4.76837e-07ZM140.055 79V2.99999H172.055V143H148.055L94.0547 67V143H62.0547V2.99999H86.0547L140.055 79ZM280.039 79V2.99999H312.039V143H288.039L234.039 67V143H202.039V2.99999H226.039L280.039 79ZM460.423 124.8C446.29 138.8 429.09 145.8 408.823 145.8C388.557 145.8 371.357 138.8 357.223 124.8C343.09 110.8 336.023 93.5333 336.023 73C336.023 52.4667 343.09 35.2 357.223 21.2C371.357 7.19999 388.557 0.199991 408.823 0.199991C429.09 0.199991 446.29 7.19999 460.423 21.2C474.557 35.2 481.623 52.4667 481.623 73C481.623 93.5333 474.557 110.8 460.423 124.8ZM368.023 73C368.023 85.2667 371.89 95.2667 379.623 103C387.357 110.733 397.09 114.6 408.823 114.6C420.423 114.6 430.09 110.733 437.823 103C445.69 95.1333 449.623 85.1333 449.623 73C449.623 60.8667 445.69 50.8667 437.823 43C430.09 35.2667 420.423 31.4 408.823 31.4C397.09 31.4 387.357 35.2667 379.623 43C371.89 50.7333 368.023 60.7333 368.023 73ZM573.986 143H533.186L487.586 2.99999H522.586L553.586 106L584.586 2.99999H619.586L573.986 143ZM753.609 143H718.609L711.609 121H659.609L652.609 143H617.609L665.209 2.99999H706.009L753.609 143ZM685.609 39.6L669.209 91H702.009L685.609 39.6ZM751.586 2.99999H855.586V33.8H819.586V143H787.586V33.8H751.586V2.99999ZM907.594 87.4V112.2H963.594V143H875.594V2.99999H962.594V33.8H907.594V57H957.594V87.4H907.594Z" fill="url(#paint0_linear_431_45340)"/><defs><linearGradient id="paint0_linear_431_45340" x1="941.158" y1="117.49" x2="88.625" y2="-376.459" gradientUnits="userSpaceOnUse"><stop offset="0.0364583" stop-color="#00E0FF"/><stop offset="1" stop-color="#0075FF"/></linearGradient></defs></svg>'
  const titleSvgStroke = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 964 146" fill="none"><path d="M4.76837e-07 143V2.99999H32V143H4.76837e-07ZM140.055 79V2.99999H172.055V143H148.055L94.0547 67V143H62.0547V2.99999H86.0547L140.055 79ZM280.039 79V2.99999H312.039V143H288.039L234.039 67V143H202.039V2.99999H226.039L280.039 79ZM460.423 124.8C446.29 138.8 429.09 145.8 408.823 145.8C388.557 145.8 371.357 138.8 357.223 124.8C343.09 110.8 336.023 93.5333 336.023 73C336.023 52.4667 343.09 35.2 357.223 21.2C371.357 7.19999 388.557 0.199991 408.823 0.199991C429.09 0.199991 446.29 7.19999 460.423 21.2C474.557 35.2 481.623 52.4667 481.623 73C481.623 93.5333 474.557 110.8 460.423 124.8ZM368.023 73C368.023 85.2667 371.89 95.2667 379.623 103C387.357 110.733 397.09 114.6 408.823 114.6C420.423 114.6 430.09 110.733 437.823 103C445.69 95.1333 449.623 85.1333 449.623 73C449.623 60.8667 445.69 50.8667 437.823 43C430.09 35.2667 420.423 31.4 408.823 31.4C397.09 31.4 387.357 35.2667 379.623 43C371.89 50.7333 368.023 60.7333 368.023 73ZM573.986 143H533.186L487.586 2.99999H522.586L553.586 106L584.586 2.99999H619.586L573.986 143ZM753.609 143H718.609L711.609 121H659.609L652.609 143H617.609L665.209 2.99999H706.009L753.609 143ZM685.609 39.6L669.209 91H702.009L685.609 39.6ZM751.586 2.99999H855.586V33.8H819.586V143H787.586V33.8H751.586V2.99999ZM907.594 87.4V112.2H963.594V143H875.594V2.99999H962.594V33.8H907.594V57H957.594V87.4H907.594Z"/><defs><linearGradient id="paint0_linear_431_45340" x1="941.158" y1="117.49" x2="88.625" y2="-376.459" gradientUnits="userSpaceOnUse"><stop offset="0.0364583" stop-color="#00E0FF"/><stop offset="1" stop-color="#0075FF"/></linearGradient></defs></svg>'
  
  const benefits = [
    {
      id: 1,
      title: '10',
      desc: 'years of proven commercial experience'
    },
    {
      id: 2,
      title: '200',
      desc: 'projects outsourced and distributed'
    },
    {
      id: 3,
      title: '100',
      desc: 'satisfied clients'
    },
    {
      id: 4,
      title: '50',
      desc: 'full-time experts across the board'
    },
  ]

  const nextSlideHandle = () => {
    if (!slider.current) {
      return
    }

    slider.current.swiper.slideNext()
  }

  const scrollToScrollingHandle = () => {
    if (!isBrowser()) {
      return
    }
    
    if (isMovingBottom.current) {
      return
    }
    
    const scroller = document.querySelector('.scrolling-inner') as HTMLDivElement

    gsap.to('#hero', 1.2, { y: '-100%', ease: 'Power2.easeInOut' })
    gsap.to('#scrolling', 1.2, { y: '-100%', ease: 'Power2.easeInOut' })

    if (!isOnceScroll.current) {
      scroller.scrollTop = 2

      gsap.fromTo('.main-scrolling .logo-link', { y: '-105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 1 })
      gsap.fromTo('.main-scrolling .burger-text', .6, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, ease: 'Power2.easeInOut', delay: 1 })
      gsap.fromTo('.main-scrolling .burger-icon', .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: 1.1 })
      gsap.fromTo('.main-scrolling .switcher-text', .7, { opacity: 0 }, { opacity: 1, stagger: .05, delay: 1.2 })
      gsap.fromTo('.main-scrolling .front-label', .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: 1 })
      gsap.fromTo('.main-scrolling .back-label', .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: 1 })
      gsap.fromTo('.main-scrolling .action', .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: 1 })

      isOnceScroll.current = true
    }

    isMovingBottom.current = true
    delay(1200)?.then(() => isMovingBottom.current = false)
  }

  useEffect(() => {
    if (!isBrowser()) {
      return
    }
    
    const wheelHandle = (e: any) => {
      if (isEnd && e.deltaY > 0 && !isOpen) {
        scrollToScrollingHandle()
      }
    }

    window.addEventListener('wheel', wheelHandle)
    window.addEventListener('touchstart', wheelHandle)

    return () => {
      window.removeEventListener('wheel', wheelHandle)
      window.removeEventListener('touchstart', wheelHandle)
    }
  }, [isEnd, isOpen])

  useEffect(() => {
    if (!slider.current) {
      return
    }

    slider.current.swiper.allowSlideNext = !isOpen
    slider.current.swiper.allowSlidePrev = !isOpen
  }, [isOpen])

  useEffect(() => {
    gsap.to(`.${styles.btn}`, .8, { bottom: '10%', delay: 6.8, onComplete: () => {
      setMoveLine(true)
    }})

    gsap.fromTo(`.${styles.titleText} span:nth-child(1) span`, 1.1, { y: '105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.6 })
    gsap.fromTo(`.${styles.titleText} span:nth-child(2) span`, 1.1, { y: '105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.5 })
    gsap.fromTo(`.${styles.titleText} span:nth-child(3) span`, 1.1, { y: '-105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.7 })
    gsap.fromTo(`.${styles.titleText} span:nth-child(4) span`, 1.1, { y: '-105%' }, { y: 0, ease: 'Power2.easeInOut', delay: 6.8, onComplete: () => setGlitched(true) })
  }, [])

  return (
    <div 
      id='hero'
      className={styles.hero}
    >
      <Swiper
        className='hero-slider'
        ref={slider}
        modules={[Mousewheel]}
        allowTouchMove={false}
        direction='vertical'
        speed={1100}
        mousewheel={true}
        onInit={() => {
          gsap.set('.intro .devider', { opacity: 0 })
          gsap.set('.intro .page-desc', { opacity: 0, y: 20 })
          gsap.set('.intro .intro-benefits-line', { y: '-100%' })
          gsap.set('.intro .intro-benefits-title', { y: '20%', opacity: 0 })
          gsap.set('.intro .intro-benefits-desc', { y: '20%', opacity: 0 })
          gsap.set(`.${styles.roll}`, { y: '20%', opacity: 0 })

          gsap.set('.hero-secondary .logo-link, .main-scrolling .logo-link', { y: '-105%', delay: 1 })
          gsap.set('.hero-secondary .burger-text, .main-scrolling .burger-text', { opacity: 0, y: '-100%' })
          gsap.set('.hero-secondary .burger-icon, .main-scrolling .burger-icon', { opacity: 0 })
          gsap.set('.hero-secondary .switcher-text, .main-scrolling .switcher-text', { opacity: 0 })
          gsap.set('.hero-secondary .front-label, .main-scrolling .front-label', { y: '100%', opacity: 0 })
          gsap.set('.hero-secondary .back-label, .main-scrolling .back-label', { y: '100%', opacity: 0 })
          gsap.set('.hero-secondary .action, .main-scrolling .action', { opacity: 0 })
        }}
        onSlidePrevTransitionStart={() => {
          if (!slider.current) {
            return
          }
          
          setEnd(false)
        }}
        onSlideNextTransitionEnd={() => {
          if (!slider.current) {
            return
          }

          setEnd(false)
          setEnd(true)

          if (isOnceAnimate.current) {
            return
          }

          gsap.fromTo('.hero-secondary .logo-link', { y: '-105%' }, { y: 0, ease: 'Power2.easeInOut' })
          gsap.fromTo('.hero-secondary .burger-text', .6, { opacity: 0, y: '-100%' }, { opacity: 1, y: 0, ease: 'Power2.easeInOut' })
          gsap.fromTo('.hero-secondary .burger-icon', .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut', delay: .1 })
          gsap.fromTo('.hero-secondary .switcher-text', .7, { opacity: 0 }, { opacity: 1, stagger: .05, delay: .2 })
          gsap.fromTo('.hero-secondary .front-label', .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05 })
          gsap.fromTo('.hero-secondary .back-label', .7, { y: '100%', opacity: 0 }, { y: 0, opacity: 1, stagger: .05 })
          gsap.fromTo('.hero-secondary .action', .6, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut' })

          gsap.to('.intro .title-stroke', 4, { strokeDashoffset: 0, ease: 'Power2.easeInOut' })
          gsap.to('.intro .title-stroke', .6, { opacity: 0, delay: 3.2, ease: 'Power2.easeInOut' })
          gsap.to('.intro .title-fill', .6, { opacity: 1, delay: 3.2, ease: 'Power2.easeInOut' })

          gsap.fromTo('.intro .devider', .8, { opacity: 0 }, { opacity: 1, delay: 3.6, ease: 'Power2.easeInOut' })
          gsap.fromTo('.intro .page-desc', .8, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 3.6, ease: 'Power2.easeInOut' })
          gsap.fromTo('.intro .intro-benefits-line', .7, { y: '-100%' }, { y: 0, delay: 3.8, ease: 'Power2.easeInOut' })
          gsap.fromTo('.intro .intro-benefits-title', .7, { opacity: 0, y: '20%' }, { opacity: 1, y: 0, delay: 3.9 })
          gsap.fromTo('.intro .intro-benefits-desc', .7, { opacity: 0, y: '20%' }, { opacity: 1, y: 0, delay: 4 })
          gsap.fromTo(`.${styles.roll}`, .6, { opacity: 0, y: '20%' }, { opacity: 1, y: 0, delay: 4.2 })

          isOnceAnimate.current = true
        }}
      >
        <SwiperSlide className='hero-primary'>
          <FixedControls 
            disabledFooter
            disabledLoaderOverlay
            disabledLoaderLine
            disabledCallback
          >
            <h1 className={`${styles.title} ${uniSans.className}`}>
              <div className={styles.titleText} dangerouslySetInnerHTML={{ __html: wrapLines('Award-Winning\nDesign & Software\nDevelopment\nCompany') }} />
              <Glitch
                countItems={3}
                countRectangles={240}
                widthElement={60} 
                heightElement={15}
                theme={GlitchTheme.DARK}
                trigger={isGlitched}
                delay={300}
              />
            </h1>
            <div 
              className={`${styles.btn} ${isLineMoved ? styles.moved : ''}`}
              onClick={nextSlideHandle}
            >
              <span className={styles.line} />
            </div>
            <HeroScene />
          </FixedControls>
        </SwiperSlide>
        <SwiperSlide className='hero-secondary'>
          <FixedControls 
            disabledFooter
            disabledLoaderOverlay
            disabledLoaderLine
            disabledCallback
          >
            <Intro
              title='Innovate'
              titleSvgFill={titleSvgFill}
              titleSvgStroke={titleSvgStroke}
              desc='Where Ideas Transform into Reality'
              benefits={benefits}
              isMain
            />
            <div 
              className={styles.roll}
              onClick={scrollToScrollingHandle}
            >
              <div className={styles.rollLabel}>
                <div className={`${styles.rollText} ${uniSans.className}`}>Skip</div>
              </div>
              <div className={styles.rollLabel}>
                <div className={`${styles.rollText} ${uniSans.className}`}>Skip</div>
              </div>
            </div>
          </FixedControls>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero