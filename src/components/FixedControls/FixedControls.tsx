'use client'

import { FC, useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header/Header'
import Action from '@/components/Action/Action'
import Labels from '@/components/Labels/Labels'
import Footer from '@/components/Footer/Footer'
import Menu from '@/components/Menu/Menu'
import Callback from '@/components/Callback/Callback'
import PageLoader from '@/components/PageLoader/PageLoader'
import PageLoaderOverlay from '@/components/PageLoader/PageLoaderOverlay'
import PageLoaderLine from '@/components/PageLoader/PageLoaderLine'
import { FixedControlsProps } from '@/types/common.types'
import { delay } from '@/utils/delay'

const FixedControls: FC<FixedControlsProps> = ({ 
  children, 
  disabledFooter, 
  disabledPortfolio,
  disabledLoaderOverlay,
  disabledLoaderLine,
  disabledCallback,
}) => {
  const pathname = usePathname()
  
  const [ isLoading, setIsLoading ] = useState<boolean>(true)

  useLayoutEffect(() => {
    const fakeAsyncOperation = async () => {
      setIsLoading(true)

      await delay(6000)

      setIsLoading(false)
    }

    fakeAsyncOperation()

    return () => {
      setIsLoading(true)
    }
  }, [pathname])

  useEffect(() => {
    gsap.to('#loader-overlay', 1, { y: '-100%', delay: 5.8, ease: 'Power2.easeInOut' })
    gsap.to('#loader-line', 1, { y: '-100%', opacity: 0, delay: 5.8, ease: 'Power2.easeInOut' })
  }, [])
  
  return (
    <>
      { isLoading && <PageLoader /> }
      { !disabledLoaderOverlay && <PageLoaderOverlay /> }
      { !disabledLoaderLine && <PageLoaderLine /> }
      <Header />
      <Action disabledPortfolio={disabledPortfolio} />
      <Labels />
      {children}
      { !disabledFooter && <Footer /> }
      <Menu />
      { !disabledCallback && <Callback /> }
    </>
  )
}

export default FixedControls