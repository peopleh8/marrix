import { FC } from 'react'
import styles from '@/components/About/Mission/Mission.module.scss'
import MissionItem from './MissionItem'

const MissionList: FC = () => {
  return (
    <div className={styles.list}>
      <MissionItem
        title='01'
        desc='Facilitate the growth of new entrepreneurs and businesses with our equitable and transparent funding development programs.'
      />
      <MissionItem
        title='02'
        desc='Elevate the online landscape by advancing digital presence.'
      />
      <MissionItem
        title='03'
        desc='Strive for excellence to ensure high quality and impeccable performance.'
      />
      <MissionItem
        title='04'
        desc='Close the IT services gap with transformative communication tools.'
      />
    </div>
  )
}

export default MissionList