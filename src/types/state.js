// @flow
import type { State as Auth } from '../containers/Auth/reducer'
import type { State as System } from '../containers/System/reducer'

export type State = {
  Auth: Auth,
  System: System,
}
