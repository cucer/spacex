import React, { useEffect } from 'react'
import ReactGa from 'react-ga'
import { Dispatch } from 'redux'
import { useAppDispatch } from '../../hooks'
import { GetSpacexLaunches } from '../../services/__generated__/GetSpacexLaunches'
import { setSpacexLaunches } from './homePageSlice'
import spacexService from '../../services'
import { Launches } from './launches'

interface IHomePageProps {}

const actionDispatch = (dispatch: Dispatch) => ({
  setSpacexLaunches: (launch: GetSpacexLaunches['launches']) =>
    dispatch(setSpacexLaunches(launch)),
})

export function HomePage(props: IHomePageProps) {
  const { setSpacexLaunches } = actionDispatch(useAppDispatch())

  const fetchSpacexLaunches = async () => {
    const spacexLaunches = await spacexService
      .getSpacexLaunches(12)
      .catch((err) => {
        console.log('Error:', err)
      })

    if (spacexLaunches) setSpacexLaunches(spacexLaunches)
  }

  useEffect(() => {
    fetchSpacexLaunches()
  }, [])

  useEffect(() => {
    ReactGa.initialize('UA-62711254-5')
    ReactGa.pageview('/spacex')
  }, [])

  return (
    <div>
      <Launches />
    </div>
  )
}
