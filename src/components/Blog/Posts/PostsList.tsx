import { FC } from 'react'
import PostsItem from '@/components/Blog/Posts/PostsItem'
import styles from '@/components/Blog/Posts/Posts.module.scss'

const PostsList: FC = () => {
  return (
    <div className={styles.list}>
      <PostsItem
        date='January 10, 2024'
        time='9'
        title='Time and Materials Contracts: The Definitive Guide'
      />
      <PostsItem
        date='January 10, 2024'
        time='9'
        title='Time and Materials Contracts: The Definitive Guide'
      />
      <PostsItem
        date='January 10, 2024'
        time='9'
        title='Time and Materials Contracts: The Definitive Guide'
      />
      <PostsItem
        date='December 23, 2023'
        time='9'
        title='Time and Materials Contracts: The Definitive Guide'
      />
    </div>
  )
}

export default PostsList