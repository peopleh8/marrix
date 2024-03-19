import { FC } from 'react'
import PostToc from '@/components/Post/Intro/PostToc'
import PostShare from '@/components/Post/Intro/PostShare'
import styles from '@/components/Post/Intro/Intro.module.scss'

const PostSidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarInner}>
        <PostToc />
        <PostShare />
      </div>
    </div>
  )
}

export default PostSidebar