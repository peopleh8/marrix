'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import ListItem from '@/components/Services/List/ListItem'
import styles from '@/components/Services/List/List.module.scss'
import servicesBg from '@/assets/images/services-bg.jpg'

const List: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.config({ nullTargetWarn: false })
    ScrollTrigger.defaults({ scroller: '.scrolling-inner' })

    const items: Element[] = gsap.utils.toArray(`.${styles.item}`)

    const listTopTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.list}`,
        start: '+=20% bottom',
      }
    })

    items.forEach((item) => {
      const itemTl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'center bottom',
        }
      })

      itemTl.fromTo(item, .5, { opacity: 0, y: 50 }, { opacity: 1, y: 0 })
    })

    listTopTl
      .fromTo(`.${styles.inner}`, .6, { boxShadow: 'none' }, { boxShadow: '0 0 50px 0 #000' })
  }, [])
  
  return (
    <section className={styles.list}>
      <Image 
        src={servicesBg}
        alt='Background'
        width={1920}
        height={1080}
      />
      <div className={styles.inner}>
        <ListItem
          title='Mobile development'
          desc='We deploy leading tools to prototype and implement hybrid (iOS and Android) mobile applications bringing top-notch user experience through mobile technologies.'
        />
        <ListItem
          title='Game development'
          desc='A compelling vision drives our commitment to the game industry. '
        />
        <ListItem
          title='Web-development'
          desc='Our team delivers full stack customer software development along with a wide range of comprehensive solutions to reimagine and upgrade your digital presence'
        />
        <ListItem
          title='UX/UI Design'
          desc='Our design team revolutionizes UX/Ul by integrating the most innovative approaches to HCI, utility, egronomics, system performance through discovering human factors of your target segment.'
        />
        <ListItem
          title='Сonsultation'
          desc='We work ahead of the curve by using advanced technologies. We create solutions your competitors just dream about.'
        />
        <ListItem
          title='Other'
          desc="If you don't know what you need yet, but are sure we can help you"
        />
      </div>
    </section>
  )
}

export default List