'use client'

import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/components/Blog/Posts/Posts.module.scss'
import { PostItemProps } from '@/types/post.types'
import { uniSans } from '@/fonts/fonts'
import clock from '@/assets/icons/clock.svg'
import postMock from '@/assets/images/post-mock.jpg'
import { GlitchTheme } from '@/types/common.types'
import Glitch from '@/components/Glitch/Glitch'

const PostsItem: FC<PostItemProps> = ({ date, time, title }) => {
  const [ isGlitched, setGlitched ] = useState(false)

  const toggleGlitchHandler = () => {
    setGlitched(prev => !prev)
  }
  
  return (
    <Link 
      className={styles.item}
      href='/blog/qwe'
      onMouseEnter={toggleGlitchHandler}
      onMouseLeave={toggleGlitchHandler}
    >
      <div className={styles.itemPreview}>
        <Image 
          src={postMock}
          alt={title}
          width={626}
          height={484}
        />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.itemTitle}>
          <div className={`${styles.itemTitleText} ${uniSans.className}`}>{title}</div>
            { isGlitched && (
              <Glitch
                countItems={1}
                countRectangles={240}
                widthElement={60} 
                heightElement={15}
                theme={GlitchTheme.LIGHT}
                trigger={isGlitched}
                delay={0.5}
              />
            ) }
        </div>
        <div className={styles.itemDate}>{date}</div>
        <div className={styles.itemTime}>
          <div className={`${styles.itemTimeIcon} icon`}>
            <Image 
              src={clock}
              alt='Clock'
              width={18}
              height={22}
            />
          </div>
          <div className={styles.itemTimeText}>{`${time} min read`}</div>
        </div>
      </div>
    </Link>
  )
}

export default PostsItem