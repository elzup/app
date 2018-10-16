// @flow
import type { ThunkAction } from '../../types'
import * as actions from './actions'

export function readText(receivedText: string): ThunkAction {
  return async (dispatch, getState) => {
    const qr = getState().QrSessionContainer
    dispatch(actions.receiveQrPage({ ...qr, receivedText }))
  }
}

export function updateSendText(sendText: string): ThunkAction {
  return async (dispatch, getState) => {
    console.log(sendText)
    const qr = getState().QrSessionContainer
    dispatch(actions.receiveQrPage({ ...qr, sendText }))
  }
}
