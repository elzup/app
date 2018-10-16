// @flow
import type { QrPage } from './index'

import { RECEIVE_QR_PAGE } from './actionTypes'
import type { ReceiveQrPage } from './actionTypes'

export function receiveQrPage(qrPage: QrPage): ReceiveQrPage {
  return {
    type: RECEIVE_QR_PAGE,
    qrPage,
  }
}
