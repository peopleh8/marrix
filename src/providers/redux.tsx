'use client'

import { FC } from 'react'
import { Provider } from 'react-redux'
import { setupStore } from '@/store'
import { ChildProps } from '@/types/common.types'

export const store = setupStore()

const ReduxProvider: FC<ChildProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
)

export default ReduxProvider