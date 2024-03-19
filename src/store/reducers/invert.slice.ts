import { createSlice } from '@reduxjs/toolkit'

const invertReducer = createSlice({
  name: 'invert',
  initialState: {
    isTopInverted: false,
    isBotInverted: false,
  },
  reducers: {
    setTopInvert(state, action) {
      state.isTopInverted = action.payload
    },
    setBotInvert(state, action) {
      state.isBotInverted = action.payload
    },
  }
})

export default invertReducer.reducer
export const { setTopInvert, setBotInvert } = invertReducer.actions