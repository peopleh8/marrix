import { FC } from 'react'
import styles from '@/components/Case/Project/Project.module.scss'
import Image from 'next/image'
import stack1 from '@/assets/images/stack-1.svg'
import stack2 from '@/assets/images/stack-2.svg'
import stack3 from '@/assets/images/stack-3.svg'
import stack4 from '@/assets/images/stack-4.svg'


const ProjectInfo: FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoItem}>
        <div className={styles.infoTitle}>Technologies</div>
        <div className={styles.infoInner}>
          <div className={styles.infoElem}>
            <div className={styles.infoIcon}>
              <Image 
                src={stack1}
                alt=''
                width={80}
                height={80}
              />
            </div>
            <div className={styles.infoName}>Javascript</div>
          </div>
          <div className={styles.infoElem}>
            <div className={styles.infoIcon}>
              <Image 
                src={stack2}
                alt=''
                width={80}
                height={80}
              />
            </div>
            <div className={styles.infoName}>Html</div>
          </div>
          <div className={styles.infoElem}>
            <div className={styles.infoIcon}>
              <Image 
                src={stack3}
                alt=''
                width={80}
                height={80}
              />
            </div>
            <div className={styles.infoName}>Css</div>
          </div>
          <div className={styles.infoElem}>
            <div className={styles.infoIcon}>
              <Image 
                src={stack4}
                alt=''
                width={80}
                height={80}
              />
            </div>
            <div className={styles.infoName}>Three.js</div>
          </div>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.infoTitle}>Tools</div>
        <div className={styles.infoInner}>
          <div className={styles.infoElem}>
            <div className={styles.infoIcon}>
              <Image 
                src={stack1}
                alt=''
                width={80}
                height={80}
              />
            </div>
            <div className={styles.infoName}>Javascript</div>
          </div>
          <div className={styles.infoElem}>
            <div className={styles.infoIcon}>
              <Image 
                src={stack2}
                alt=''
                width={80}
                height={80}
              />
            </div>
            <div className={styles.infoName}>Html</div>
          </div>
          <div className={styles.infoElem}>
            <div className={styles.infoIcon}>
              <Image 
                src={stack3}
                alt=''
                width={80}
                height={80}
              />
            </div>
            <div className={styles.infoName}>Css</div>
          </div>
          <div className={styles.infoElem}>
            <div className={styles.infoIcon}>
              <Image 
                src={stack4}
                alt=''
                width={80}
                height={80}
              />
            </div>
            <div className={styles.infoName}>Three.js</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo