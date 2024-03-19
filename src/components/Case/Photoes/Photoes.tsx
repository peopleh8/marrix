'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import styles from '@/components/Case/Photoes/Photoes.module.scss'
import photo1 from '@/assets/images/case-photoes-1.png'
import photo2 from '@/assets/images/case-photoes-2.png'

const Photoes: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const photoesTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.photoes}`,
        start: 'center bottom'
      }
    })

    photoesTl.fromTo(`.${styles.photo}`, .7, { opacity: 0 }, { opacity: 1, stagger: .1 })
  }, [])
  
  return (
    <section className={styles.photoes}>
      <div className={styles.photo}>
        <Image 
          src={photo1}
          alt=''
          width={859}
          height={386}
        />
      </div>
      <div className={styles.photo}>
        <Image 
          src={photo2}
          alt=''
          width={859}
          height={386}
        />
      </div>
    </section>
  )
}

export default Photoes