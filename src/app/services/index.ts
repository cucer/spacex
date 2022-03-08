import { apolloClient } from '../graphql'
import { GET_SPACEX_LAUNCHES } from './queries'
import { GetSpacexLaunches } from './__generated__/GetSpacexLaunches'

class spacexService {
  async getSpacexLaunches(
    limit: Number
  ): Promise<GetSpacexLaunches['launches']> {
    try {
      const response = await apolloClient.query({
        query: GET_SPACEX_LAUNCHES,
        variables: { limit },
      })

      if (!response || !response.data)
        throw new Error('Cannot get launches list!')

      console.log('launches:', response.data.launches)

      return response.data.launches
    } catch (error) {
      throw error
    }
  }
}

export default new spacexService()
