import { createSlice } from '@reduxjs/toolkit'

const labelsReducer = createSlice({
  name: 'labels',
  initialState: {
    isRolled: false,
  },
  reducers: {
    setRoll(state, action) {
      state.isRolled = action.payload
    },
  }
})

export default labelsReducer.reducer
export const { setRoll } = labelsReducer.actions