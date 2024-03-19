import { FC } from 'react'
import ScrollView from '@/components/ScrollView/ScrollView'
import FixedControls from '@/components/FixedControls/FixedControls'
import Intro from '@/components/Case/Intro/Intro'
import About from '@/components/Case/About/About'
import Photoes from '@/components/Case/Photoes/Photoes'
import Project from '@/components/Case/Project/Project'
import Achive from '@/components/Case/Achive/Achive'

const Case: FC = () => {
  return (
    <div className='inner-page'>
      <ScrollView>
        <FixedControls disabledLoaderLine>
          <Intro />
          <About />
          <Photoes />
          <Project />
          <Achive />
        </FixedControls>
      </ScrollView>
    </div>
  )
}

export default Case