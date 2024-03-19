import { FC } from 'react'
import PartnersItem from '@/components/Home/Partners/PartnersItem'
import styles from '@/components/Home/Partners/Partners.module.scss'
import photo1 from '@/assets/images/partner-1.png'
import photo2 from '@/assets/images/partner-2.png'
import photo3 from '@/assets/images/partner-3.png'
import photo4 from '@/assets/images/partner-4.png'
import photo5 from '@/assets/images/partner-5.png'
import photo6 from '@/assets/images/partner-6.png'
import photo7 from '@/assets/images/partner-7.png'
import photo8 from '@/assets/images/partner-8.png'
import photo9 from '@/assets/images/partner-9.png'
import photo10 from '@/assets/images/partner-10.png'
import photo11 from '@/assets/images/partner-11.png'
import photo12 from '@/assets/images/partner-12.png'

const PartnersList: FC = () => {
  return (
    <div className={styles.list}>
      <PartnersItem path={photo1} title='Hindler' />
      <PartnersItem path={photo2} title='Outdoorsy' />
      <PartnersItem path={photo3} title='Circuit' />
      <PartnersItem path={photo4} title='Webaroo' />
      <PartnersItem path={photo5} title='Wiggle' />
      <PartnersItem path={photo6} title='Skiplagged' />
      <PartnersItem path={photo7} title='U' />
      <PartnersItem path={photo8} title='Icon' />
      <PartnersItem path={photo9} title='Kulan' />
      <PartnersItem path={photo10} title='You trand' />
      <PartnersItem path={photo11} title='Icon' />
      <PartnersItem path={photo12} title='Testerheld' />
    </div>
  )
}

export default PartnersList