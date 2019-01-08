// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

import type { QrPage } from '.'

export type State = QrPage

export const initialState: State = {
  receivedText: '',
  sendText: '',
}

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.RECEIVE_QR_PAGE:
      return { ...state, ...action.qrPage }
    default:
      return state
  }
}
