import { createSlice } from '@reduxjs/toolkit'

const menuReducer = createSlice({
  name: 'menu',
  initialState: {
    isOpen: false
  },
  reducers: {
    setOpen(state, action) {
      state.isOpen = action.payload
    },
  }
})

export default menuReducer.reducer
export const { setOpen } = menuReducer.actions