import { configureStore, combineReducers } from '@reduxjs/toolkit'
import menuReducer from '@/store/reducers/menu.slice'
import callbackReducer from '@/store/reducers/callback.slice'
import invertReducer from '@/store/reducers/invert.slice'
import logoReducer from '@/store/reducers/logo.slice'
import labelsReducer from '@/store/reducers/labels.slice'

const rootReducer = combineReducers({
  menu: menuReducer,
  callback: callbackReducer,
  invert: invertReducer,
  logo: logoReducer,
  labels: labelsReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']