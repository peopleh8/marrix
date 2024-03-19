import { FC } from 'react'
import PostRelatedItem from '@/components/Post/Intro/PostRelatedItem'
import styles from '@/components/Post/Intro/Intro.module.scss'
import related1 from '@/assets/images/related-1.jpg'
import related2 from '@/assets/images/related-2.jpg'
import related3 from '@/assets/images/related-3.jpg'

const PostRelatedList: FC = () => {
  return (
    <div className={styles.relatedList}>
      <PostRelatedItem
        path={related1}
        title='How to Create a Work Breakdown Structure in 6 Steps'
      />
      <PostRelatedItem
        path={related2}
        title='How to Estimate Project Cost in 8 Steps (Accurately)'
      />
      <PostRelatedItem
        path={related3}
        title='How to Estimate Project Cost in 8 Steps (Accurately)'
      />
    </div>
  )
}

export default PostRelatedList