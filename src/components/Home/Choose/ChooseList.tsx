import { FC } from 'react'
import ChooseItem from '@/components/Home/Choose/ChooseItem'
import styles from '@/components/Home/Choose/Choose.module.scss'

const ChooseList: FC = () => {
  return (
    <div className={styles.list}>
      <ChooseItem 
        index={0} 
        title='Our pricing is fair and competitive' 
        desc="At the heart of our approach is our tight-knit, highly skilled team. We believe in working smart, not just hard, to minimize project hours. We get it – creating new digital wonders can be pricey. That's why we're here, not just as experts but as partners, ready to help you explore budget-friendly alternatives or find existing solutions that fit like a glove."
      />
      <ChooseItem 
        index={1} 
        title='A Symphony of Transparency and Partnership' 
        desc="Be updated and dive deep into the development process. Meet the specialists that work on your projects and track their progress, as well as, be confident in your project's future. Long lasting partnership is our core value. We are never a vendor, but a tech partner."
      />
      <ChooseItem 
        index={2} 
        title='Partnering for Success' 
        desc="We're not just about coding; we're your partners in making your business thrive. Let's talk, refine your ideas, and make everything just right. You do your thing, and we'll sprinkle some magic with our design and development skills. Cool? 😎"
      />
      <ChooseItem 
        index={3} 
        title='Reliable Warmth' 
        desc="Fueled by passion, we're dedicated to your success. Let us handle the intricacies of software development and design, so you can focus on your business and sales. Your journey is ours, and we deliver world-class quality with a personal touch."
      />
    </div>
  )
}

export default ChooseList