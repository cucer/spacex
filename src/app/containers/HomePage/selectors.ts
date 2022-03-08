import { createSelector } from 'reselect'
import { IRootState } from '../../types'

const selectHomePage = (state: IRootState) => state.homePage

export const makeSelectSpacexLaunches = createSelector(
  selectHomePage,
  (homePage) => homePage.spacexLaunches
)
