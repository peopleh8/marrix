import { FC } from 'react'
import { ActionBtnProps } from '@/types/common.types'
import { setOpen } from '@/store/reducers/callback.slice'
import styles from '@/components/UI/ActionBtn/ActionBtn.module.scss'
import { useTypedDispatch } from '@/hooks/use-typed-dispatch'

const ActionBtn: FC<ActionBtnProps> = ({ text }) => {
  const dispatch = useTypedDispatch()

  const openCallbackHandler = () => {
    dispatch(setOpen(true))
  }
  
  return (
    <div 
      className={styles.btn}
      onClick={openCallbackHandler}
    >
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