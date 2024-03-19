'use client'

import { FC } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share'
import styles from '@/components/Post/Intro/Intro.module.scss'
import ln from '@/assets/icons/ln.svg'
import mail from '@/assets/icons/mail.svg'
import tw from '@/assets/icons/tw.svg'
import fb from '@/assets/icons/fb.svg'

const PostShare: FC = () => {
  const pathname = usePathname()
  
  const fullUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}${pathname}` : `http://localhost:3000${pathname}`

  return (
    <div className={styles.share}>
      <div className={styles.shareTitle}>Share This:</div>
      <div className={styles.shareList}>
        <LinkedinShareButton url={fullUrl}>
          <Image
            src={ln}
            alt='Linkedin'
            width={45}
            height={45}
          />
        </LinkedinShareButton>
        <EmailShareButton url={fullUrl}>
          <Image
            src={mail}
            alt='Email'
            width={45}
            height={45}
          />
        </EmailShareButton>
        <TwitterShareButton url={fullUrl}>
          <Image
            src={tw}
            alt='Twitter'
            width={45}
            height={45}
          />
        </TwitterShareButton>
        <FacebookShareButton url={fullUrl}>
          <Image
            src={fb}
            alt='Facebook'
            width={45}
            height={45}
          />
        </FacebookShareButton>
      </div>
    </div>
  )
}

export default PostShare