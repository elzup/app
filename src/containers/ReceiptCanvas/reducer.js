// @flow
import type { Action } from '../../types'
import type { CanvasObjects } from '.'

import { Actions } from './actionTypes'

export type State = {
  objects: CanvasObjects,
}

export const initialState: State = { objects: [] }

export default function(state: State = initialState, action: Action): State {
  switch (action.type) {
    case Actions.UPDATE_OBJECTS:
      return { ...state, objects: action.objects }
    default:
      return state
  }
}
