// @flow
import type { State as Auth } from '../containers/Auth/reducer'
import type { State as QrSessionContainer } from '../containers/QrSessionContainer/reducer'
import type { State as ReceiptCanvas } from '../containers/ReceiptCanvas/reducer'
import type { State as System } from '../containers/System/reducer'
import type { State as UserById } from '../containers/UserById/reducer'

export type State = {
  Auth: Auth,
  QrSessionContainer: QrSessionContainer,
  ReceiptCanvas: ReceiptCanvas,
  System: System,
  UserById: UserById,
}
