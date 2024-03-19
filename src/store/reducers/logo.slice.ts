import { createSlice } from '@reduxjs/toolkit'

const logoReducer = createSlice({
  name: 'logo',
  initialState: {
    isRolled: false,
  },
  reducers: {
    setRoll(state, action) {
      state.isRolled = action.payload
    },
  }
})

export default logoReducer.reducer
export const { setRoll } = logoReducer.actions