// @flow
import type { QrPage } from './index'

export const RECEIVE_QR_PAGE: 'QrSessionContainer/RECEIVE_QR_PAGE' =
  'QrSessionContainer/RECEIVE_QR_PAGE'

export const Actions = {
  RECEIVE_QR_PAGE,
}

export type ReceiveQrPage = {
  type: typeof RECEIVE_QR_PAGE,
  qrPage: QrPage,
}

export type Action = ReceiveQrPage
