// @flow
import { combineReducers } from 'redux'
import Auth from './containers/Auth/reducer'
import System from './containers/System/reducer'

export default combineReducers({
  Auth,
  System,
})
