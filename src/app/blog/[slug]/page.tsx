import { FC } from 'react'
import ScrollView from '@/components/ScrollView/ScrollView'
import FixedControls from '@/components/FixedControls/FixedControls'
import PostIntro from '@/components/Post/Intro/PostIntro'

const Post: FC = () => {
  return (
    <div className='inner-page'>
      <ScrollView>
        <FixedControls disabledLoaderLine>
          <PostIntro />
        </FixedControls>
      </ScrollView>
    </div>
  )
}

export default Post