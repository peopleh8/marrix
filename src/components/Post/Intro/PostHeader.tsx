'use client'

import { FC } from 'react'
import Image from 'next/image'
import BlockTitle from '@/components/UI/BlockTitle/BlockTitle'
import { BlockTitleSizes, BlockTitleTheme } from '@/types/common.types'
import { PostHeaderProps } from '@/types/post.types'
import styles from '@/components/Post/Intro/Intro.module.scss'
import clock from '@/assets/icons/clock.svg'
import classNames from 'classnames'

const PostHeader: FC<PostHeaderProps> = ({ isMobile }) => {
  const mobileClass = isMobile ? styles.mobile : styles.desk
  const classes = classNames(styles.header, mobileClass)
  
  return (
    <div className={classes}>
      <BlockTitle 
        text='PROJECT BUDGET MANAGEMENT: STEPS, TIPS, BEST PRACTICES'
        size={BlockTitleSizes.BIG}
        theme={BlockTitleTheme.GRADIENT}
      />      
      <div className={styles.toolbar}>
        <div className={styles.time}>
          <span className={`${styles.timeIcon} icon`}>
            <Image 
              src={clock}
              alt='Clock'
              width={18}
              height={22}
            />
          </span>
          <span className={styles.timeText}>9 min read</span>
        </div>
        <div className={styles.date}>January 8, 2024</div>
      </div>
    </div>
  )
}

export default PostHeader