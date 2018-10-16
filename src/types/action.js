// @flow
import type { Action as AuthAction } from '../containers/Auth/actionTypes'
import type { Action as SystemAction } from '../containers/System/actionTypes'

export type ReduxInitAction = {
  type: '@@INIT',
}

export type Action = ReduxInitAction | AuthAction | SystemAction
