'use client'

import { FC, useRef } from 'react'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { EffectCards, Navigation, Pagination } from 'swiper/modules'
import ServicesItem from '@/components/Home/Services/ServicesItem'
import SevicesContols from '@/components/Home/Services/SevicesContols'
import styles from '@/components/Home/Services/Services.module.scss'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/components/Home/Services/ServicesSlider.scss'
import services1 from '@/assets/images/services-1.jpg'
import services2 from '@/assets/images/services-2.jpg'
import services3 from '@/assets/images/services-3.jpg'
import services4 from '@/assets/images/services-4.jpg'

const ServicesSlider: FC = () => {
  const slider = useRef<SwiperRef>(null)
  
  return (
    <div className={styles.slider}>
      <Swiper
        className='services-slider'
        ref={slider}
        modules={[EffectCards, Navigation, Pagination]}
        speed={900}
        allowTouchMove={false}
        initialSlide={1}
        effect='cards'
        spaceBetween={0}
        slidesPerView={1}
        cardsEffect={{
          rotate: false,
          perSlideOffset: 30,
          slideShadows: false
        }}
        navigation={{
          prevEl: `.${styles.btnPrev}`,
          nextEl: `.${styles.btnNext}`
        }}
        pagination={{
          clickable: true,
          el: `.${styles.pagination}`,
          bulletClass: styles.paginationItem,
          bulletActiveClass: styles.paginationActive,
          renderBullet: (index, className) => {
            return (`
              <div class="${className}"></div>
            `)
          }
        }}
        breakpoints={{
          1025: {
            allowTouchMove: false,
          },
          0: {
            allowTouchMove: true,
          }
        }}
      >
        <SwiperSlide>
          <ServicesItem
            title='Mobile-development'
            desc='We deploy leading tools to prototype and implement hybrid (iOS and Android) mobile applications bringing top-notch user experience through mobile technologies.'
            path={services1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesItem
            title='Game-development'
            desc='A compelling vision drives our commitment to the game industry. Our team, experienced in Unity and Unreal Engine, blends commercial success, technical expertise, and cutting-edge game engine technologies to deliver a uniquely efficient product, ensuring your business stands out in the competitive market.'
            path={services2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesItem
            title='UX/UI Design'
            desc='Our design team revolutionizes UX/Ul by integrating the most innovative approaches to HCI, utility, egronomics, system performance through discovering human factors of your target segment.'
            path={services3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ServicesItem
            title='Web-development'
            desc='Our team delivers full stack customer software development along with a wide range of comprehensive solutions to reimagine and upgrade your digital presence. We will implement a website tha will put you at a competitive advantage while diversifying your online presence in a way that most uniquely showcases your products and services.'
            path={services4}
          />
        </SwiperSlide>
      </Swiper>
      <SevicesContols />
    </div>
  )
}

export default ServicesSlider