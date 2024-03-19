'use client'

import { FC, MouseEvent, useEffect } from 'react'
import gsap from 'gsap'
import SimpleBar from 'simplebar-react'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import styles from '@/components/Post/Intro/Intro.module.scss'
import 'simplebar-react/dist/simplebar.min.css'

const PostToc: FC = () => {
  const scrollToAnchorHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const target = e.target as HTMLAnchorElement
    const id = target.getAttribute('href')

    gsap.to('.scrolling-inner', {
      duration: 1,
      ease: 'Power2.easeInOut',
      scrollTo: { y: id || '', offsetY: 0 }
    })
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
  }, [])
  
  return (
    <div className={styles.toc}>
      <div className={styles.tocTitle}>In this Article:</div>
      <SimpleBar 
        className={styles.tocList}
        autoHide={false}
      >
        <div className={styles.tocItem}>
          <a
            className={styles.tocLink} 
            href="#title-1"
            onClick={scrollToAnchorHandler}
          >
            What is a project budget?
          </a>
        </div>
        <div className={styles.tocItem}>
          <a 
            className={styles.tocLink} 
            href="#title-2"
            onClick={scrollToAnchorHandler}
          >
            Techniques for estimating a project budget
          </a>
        </div>
        <div className={styles.tocItem}>
          <a 
            className={styles.tocLink} 
            href="#title-3"
            onClick={scrollToAnchorHandler}
          >
            Expert judgment
          </a>
        </div>
        <div className={styles.tocItem}>
          <a 
            className={styles.tocLink} 
            href="#title-4"
            onClick={scrollToAnchorHandler}
          >
            Analogous estimation
          </a>
        </div>
        <div className={styles.tocItem}>
          <a 
            className={styles.tocLink} 
            href="#title-5"
            onClick={scrollToAnchorHandler}
          >
            Spreadsheets
          </a>
        </div>
      </SimpleBar>
    </div>
  )
}

export default PostToc