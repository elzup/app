// @flow
import { combineReducers } from 'redux'
import Auth from './containers/Auth/reducer'
import QrSessionContainer from './containers/QrSessionContainer/reducer'
import System from './containers/System/reducer'
import UserById from './containers/UserById/reducer'

export default combineReducers({
  Auth,
  QrSessionContainer,
  System,
  UserById,
})
