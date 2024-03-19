import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/components/Blog/Posts/Posts.module.scss'
import { PostItemProps } from '@/types/post.types'
import { uniSans } from '@/fonts/fonts'
import clock from '@/assets/icons/clock.svg'
import postMock from '@/assets/images/post-mock.jpg'

const PostsItem: FC<PostItemProps> = ({ date, time, title }) => {
  return (
    <Link 
      className={styles.item}
      href='/blog/qwe'
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
        <div className={`${styles.itemTitle} ${uniSans.className}`}>{title}</div>
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