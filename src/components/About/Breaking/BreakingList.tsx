import { FC } from 'react'
import BreakingItem from '@/components/About/Breaking/BreakingItem'
import styles from '@/components/About/Breaking/Breaking.module.scss'

const BreakingList: FC = () => {
  return (
    <div className={styles.list}>
      <BreakingItem 
        title='2014' 
        desc='The inception of the idea and the beginning of forming a team.'
      />
      <BreakingItem 
        title='2017' 
        desc="The initiation of our team's first major project."
      />
      <BreakingItem 
        title='2023' 
        desc='Evolving into the premier software development company, recognized for delivering million-dollar applications while maintaining an unparalleled balance between cost and quality.'
      />
    </div>
  )
}

export default BreakingList