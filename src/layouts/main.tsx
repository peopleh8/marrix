import { FC } from 'react'
import { ChildProps } from '@/types/common.types'

const MainLayout: FC<ChildProps> = ({ children }) => {
  return (
    <div className='wrapper'>
      <main className="main">
        {children}
      </main>
    </div>
  )
}

export default MainLayout