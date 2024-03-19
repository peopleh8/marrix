import { FC } from 'react'
import styles from '@/components/Home/Tech/Tech.module.scss'
import TechItem from '@/components/Home/Tech/TechItem'
import TechQuote from '@/components/Home/Tech/TechQuote'
import { TechListProps } from '@/types/tech.types'
import tech1 from '@/assets/images/tech-1.svg'
import tech2 from '@/assets/images/tech-2.svg'
import tech3 from '@/assets/images/tech-3.svg'
import tech4 from '@/assets/images/tech-4.svg'
import tech5 from '@/assets/images/tech-5.svg'
import tech6 from '@/assets/images/tech-6.svg'
import tech7 from '@/assets/images/tech-7.svg'
import tech8 from '@/assets/images/tech-8.svg'
import tech9 from '@/assets/images/tech-9.svg'
import tech10 from '@/assets/images/tech-10.svg'
import tech11 from '@/assets/images/tech-11.svg'
import tech12 from '@/assets/images/tech-12.svg'
import tech13 from '@/assets/images/tech-13.svg'
import tech14 from '@/assets/images/tech-14.svg'
import tech15 from '@/assets/images/tech-15.svg'
import tech16 from '@/assets/images/tech-16.svg'
import tech17 from '@/assets/images/tech-17.svg'


const TechList: FC<TechListProps> = ({ isSuptitleVisible }) => {
  return (
    <div className={styles.list}>
      <TechQuote isSuptitleVisible={isSuptitleVisible} />
      <TechItem path={tech1} title='Html' />
      <TechItem path={tech2} title='Javascript' />
      <TechItem path={tech3} title='React' />
      <TechItem path={tech4} title='Redux' />
      <TechItem path={tech5} title='React Native' />
      <TechItem path={tech6} title='Swift' />
      <TechItem path={tech7} title='Java' />
      <TechItem path={tech8} title='Kotlin' />
      <TechItem path={tech9} title='Python' />
      <TechItem path={tech10} title='Node.js' />
      <TechItem path={tech11} title='PHP' />
      <TechItem path={tech12} title='Css' />
      <TechItem path={tech13} title='Golang' />
      <TechItem path={tech14} title='C#' />
      <TechItem path={tech15} title='Unity' />
      <TechItem path={tech16} title='Unreal Engine' />
      <TechItem path={tech17} title='laravel' />
    </div>
  )
}

export default TechList