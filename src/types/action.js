// @flow
import type { Action as AuthAction } from '../containers/Auth/actionTypes'
import type { Action as QrSessionContainerAction } from '../containers/QrSessionContainer/actionTypes'
import type { Action as SystemAction } from '../containers/System/actionTypes'
import type { Action as UserByIdAction } from '../containers/UserById/actionTypes'

export type ReduxInitAction = {
  type: '@@INIT',
}

export type Action =
  | ReduxInitAction
  | AuthAction
  | QrSessionContainerAction
  | SystemAction
  | UserByIdAction
