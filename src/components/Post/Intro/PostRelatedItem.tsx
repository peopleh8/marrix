
import { FC } from 'react'
import { RelatedItemProps } from '@/types/post.types'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/components/Post/Intro/Intro.module.scss'

const PostRelatedItem: FC<RelatedItemProps> = ({ path, title }) => {
  return (
    <Link 
      className={styles.relatedItem}
      href='#'
    >
      <span className={styles.relatedLine} />
      <span className={styles.relatedLine} />
      <span className={styles.relatedLine} />
      <span className={styles.relatedLine} />
      <span className={styles.relatedLine} />
      <div className={styles.relatedItemPreview}>
        <Image 
          src={path}
          alt={title}
          width={56}
          height={56}
        />
      </div>
      <div className={styles.relatedItemTitle}>{title}</div>
    </Link>
  )
}

export default PostRelatedItem