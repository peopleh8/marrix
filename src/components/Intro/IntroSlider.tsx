'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, Mousewheel } from 'swiper/modules'
import styles from '@/components/Intro/Intro.module.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/mousewheel'
import '@/components/Intro/IntroSlider.scss'

const IntroSlider: FC<any> = ({ slider }) => {
  return (
    <div className={styles.slider}>
      <Swiper
        className='portfolio-slider'
        modules={[Navigation, FreeMode, Mousewheel]}
        freeMode={true}
        allowTouchMove={false}
        speed={900}
        navigation={{
          prevEl: `.${styles.sliderBtnPrev}`,
          nextEl: `.${styles.sliderBtnNext}`,
        }}
        mousewheel={{
          invert: false,
          sensitivity: 4,
        }}
        slidesPerView={'auto'}
        breakpoints={{
          1025: {
            allowTouchMove: false,
          },
          0: {
            allowTouchMove: true,
          }
        }}
      >
        { slider.map((item: any) => (
          <SwiperSlide 
            className={styles.sliderItem}
            key={item.id}
          >
            <Link 
              className={styles.sliderPhoto}
              href='/portfolio/qwe'
            >
              <Image 
                src={item.path}
                alt={item.title}
                loading='eager'
                width={930}
                height={420}
              />
            </Link>
          </SwiperSlide>
        )) }
      </Swiper>
    </div>
  )
}

export default IntroSlider