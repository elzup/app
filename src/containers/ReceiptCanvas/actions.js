// @flow
import type { CanvasObjects } from '.'

import { UPDATE_OBJECTS } from './actionTypes'
import type { UpdateObjects } from './actionTypes'

export function updateObjects(objects: CanvasObjects): UpdateObjects {
  return {
    type: UPDATE_OBJECTS,
    objects,
  }
}
