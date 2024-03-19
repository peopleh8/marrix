import { FC } from 'react'
import styles from '@/components/About/Mission/Mission.module.scss'
import { MissionItemProps } from '@/types/mission.types'
import { uniSans } from '@/fonts/fonts'

const MissionItem: FC<MissionItemProps> = ({ title, desc }) => {
  return (
    <div className={styles.item}>
      <div className={`${styles.itemTitle} ${uniSans.className}`}>{title}</div>
      <p 
        className={styles.missionDesc}
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  )
}

export default MissionItem