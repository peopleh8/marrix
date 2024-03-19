'use client'

import { FC, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle'
import { BlockTitleSizes, BlockTitleTheme } from '@/types/common.types'
import Article from '@/components/UI/Article/Article'
import TeamList from '@/components/About/Team/TeamList'
import TeamLines from '@/components/About/Team/TeamLines'
import { removeNonNumeric } from '@/utils/removeNonNumeric'
import styles from '@/components/About/Team/Team.module.scss'

const Team: FC = () => {
  const list = [
    {
      id: 1,
      title: '<span>1</span>',
      desc: 'Founder dedicated his life to be making impact through software solutions',
    },
    {
      id: 2,
      title: '<span>30</span>+',
      desc: 'FULL-TIME SPECIALISTS',
    },
    {
      id: 3,
      title: '<span>8</span>',
      desc: 'years of commercial experience',
    },
  ]
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const itemCounters: Element[] = gsap.utils.toArray(`.${styles.itemTitle} span`)

    const blockTitleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.team} .block-title`,
        start: 'bottom bottom'
      }
    })

    const articleTl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.team} .article`,
        start: '+=40% bottom'
      }
    })

    blockTitleTl
      .fromTo(`.${styles.team} .block-title`, .6, { opacity: 0, y: '-20%' }, { opacity: 1, y: 0 })

    itemCounters.forEach((counter, index) => {
      const parent = counter.parentElement?.parentElement as Element
      const desc = counter.parentElement?.nextElementSibling as Element
      
      const itemsTl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: 'center bottom'
        }
      })

      itemsTl
        .fromTo(counter, 2, 
        {
          textContent: 0,
        }, { 
          textContent: removeNonNumeric(list[index].title),
          snap: { textContent: 1 },
          stagger: 1,
        })
        .fromTo(desc, .6, { opacity: 0, y: '30%' }, { opacity: 1, y: 0 }, '-=1.5')
    })

    articleTl
      .fromTo(`.${styles.team} .article`, .6, { opacity: 0, y: '20%' }, { opacity: 1, y: 0 })
  }, [])
  
  return (
    <section className={styles.team}>
      <BlockTitle 
        text='Marrix power is people'
        size={BlockTitleSizes.BIG}
        theme={BlockTitleTheme.DEFAULT}
        centered
      />
      <div className={styles.inner}>
        <TeamList list={list} />
        <Article>
          <p style={{ textAlign: 'center' }}>Marrix Power embodies a team of specialists committed to delivering exceptional work that goes beyond mere monetary compensation—it's about doing what they excel at and love. Our passion for action is what propels us forward. We embrace an enduring faith in our team, recognizing that without it, none of our achievements would be possible. That's why we are steadfastly dedicated to the ongoing development of our team, fostering its continuous expansion in both breadth and depth.</p>
        </Article>
        <TeamLines />
      </div>
    </section>
  )
}

export default Team