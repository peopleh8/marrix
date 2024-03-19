import { FC } from 'react'
import PostRelatedList from '@/components/Post/Intro/PostRelatedList'
import styles from '@/components/Post/Intro/Intro.module.scss'

const PostRelated: FC = () => {
  return (
    <div className={styles.related}>
      <div className={styles.relatedTitle}>Further Reading:</div>
      <PostRelatedList />
    </div>
  )
}

export default PostRelated