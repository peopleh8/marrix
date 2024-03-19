import { FC } from 'react'
import styles from '@/components/About/Team/Team.module.scss'
import { TeamItemProps } from '@/types/team.types'

const TeamItem: FC<TeamItemProps> = ({ title, desc }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemTitle} dangerouslySetInnerHTML={{ __html: title }}></div>
      <p className={styles.itemDesc}>{desc}</p>
    </div>
  )
}

export default TeamItem