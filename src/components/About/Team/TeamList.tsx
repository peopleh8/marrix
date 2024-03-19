import { FC } from 'react'
import TeamItem from '@/components/About/Team/TeamItem'
import { TeamListProps } from '@/types/team.types'
import styles from '@/components/About/Team/Team.module.scss'

const TeamList: FC<TeamListProps> = ({ list }) => {
  return (
    <div className={styles.list}>
      { list.map(item => (
        <TeamItem 
          title={item.title}
          desc={item.desc}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default TeamList