import { FC } from 'react'
import { ActionBtnProps } from '@/types/common.types'
import styles from '@/components/UI/ActionBtn/ActionBtn.module.scss'

const ActionBtn: FC<ActionBtnProps> = ({ text }) => {
  return (
    <div className={styles.btn}>
      <span className={styles.text}>{text}</span>
      <span className={styles.topLeftLine} />
      <span className={styles.topRightLine} />
      <span className={styles.botLeftLine} />
      <span className={styles.botRightLine} />
      <span className={styles.leftSide} />
      <span className={styles.rightSide} />
      <span className={styles.topDot} />
      <span className={styles.botDot} />
    </div>
  )
}

export default ActionBtn