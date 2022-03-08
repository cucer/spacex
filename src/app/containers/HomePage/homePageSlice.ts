import { createSlice } from '@reduxjs/toolkit'
import { IHomePageState } from './types'

const initialState: IHomePageState = {
  spacexLaunches: null,
}

const HomePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setSpacexLaunches(state, action) {
      state.spacexLaunches = action.payload
    },
  },
})

export const { setSpacexLaunches } = HomePageSlice.actions
export default HomePageSlice.reducer
