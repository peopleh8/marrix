import { createSlice } from '@reduxjs/toolkit'

const callbackReducer = createSlice({
  name: 'callback',
  initialState: {
    isOpen: false
  },
  reducers: {
    setOpen(state, action) {
      state.isOpen = action.payload
    },
  }
})

export default callbackReducer.reducer
export const { setOpen } = callbackReducer.actions