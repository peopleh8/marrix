import { FC } from 'react'
import ScrollView from '@/components/ScrollView/ScrollView'
import Desc from '@/components/Services/Desc/Desc'
import List from '@/components/Services/List/List'
import FixedControls from '@/components/FixedControls/FixedControls'

const Services: FC = () => {
  return (
    <div className='inner-page'>
      <ScrollView>
        <FixedControls disabledLoaderLine>
          <Desc />
          <List />
        </FixedControls>
      </ScrollView>
    </div>
  )
}

export default Services