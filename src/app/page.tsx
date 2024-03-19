import { FC } from 'react'
import Hero from '@/components/Home/Hero/Hero'
import ScrollView from '@/components/ScrollView/ScrollView'
import Services from '@/components/Home/Services/Services'
import Tech from '@/components/Home/Tech/Tech'
import Choose from '@/components/Home/Choose/Choose'
import Partners from '@/components/Home/Partners/Partners'
import FixedControls from '@/components/FixedControls/FixedControls'
import MobileHero from '@/components/Home/MobileHero/MobileHero'

const Home: FC = () => {
  return (
    <div className='main-page'>
      <Hero />
      <ScrollView isMain>
        <FixedControls 
          disabledLoaderOverlay
          disabledLoaderLine
        >
          <MobileHero />
          <Services />
          <Tech />
          <Choose />
          <Partners />
        </FixedControls>
      </ScrollView>
    </div> 
  )
}

export default Home