// @flow
import type { CanvasObjects } from '.'

export const UPDATE_OBJECTS: 'ReceiptCanvas/UPDATE_OBJECTS' =
  'ReceiptCanvas/UPDATE_OBJECTS'

export const Actions = {
  UPDATE_OBJECTS,
}

export type UpdateObjects = {
  type: typeof UPDATE_OBJECTS,
  objects: CanvasObjects,
}

export type Action = UpdateObjects
