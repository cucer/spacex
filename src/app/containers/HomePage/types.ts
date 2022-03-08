import { GetSpacexLaunches } from '../../services/__generated__/GetSpacexLaunches'

export interface IHomePageState {
  spacexLaunches: GetSpacexLaunches['launches']
}
