import React, { FC } from 'react'
import IntroBenefitsItem from '@/components/Intro/IntroBenefitsItem'
import { IntroBenefitsProps } from '@/types/common.types'
import PageDesc from '@/components/UI/PageDesc/PageDesc'
import styles from '@/components/Intro/Intro.module.scss'

const IntroBenefits: FC<IntroBenefitsProps> = ({ benefits, desc }) => {
  return (
    <div className={styles.benefits}>
      { benefits.map((item, index) => (
        index === 1 ? (
          <React.Fragment key={item.id}>
            <IntroBenefitsItem 
              title={item.title} 
              desc={item.desc}
              key={item.id}
            />
            { desc && <PageDesc text={desc} /> }
          </React.Fragment>
        ) : (
          <IntroBenefitsItem 
            title={item.title} 
            desc={item.desc}
            key={item.id}
          />
        )
      )) }
    </div>
  )
}

export default IntroBenefits