// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { getCanvasObjects } from './selectors'
import { updateObjects } from './actions'
import type { State as RootState } from '../../types'
// import * as selectors from './selectors'

export type CanvasObjects = Object[]

type Props = {
  objects: CanvasObjects,
  updateObjects: typeof updateObjects,
}

const C = (props: Props) => {
  return <div />
}

class ReceiptCanvas extends React.Component<Props> {
  render() {
    const { props } = this
    return C(props)
  }
}

const ms = (state: RootState) => ({
  objects: getCanvasObjects(state),
})

const conn = connect(
  ms,
  { updateObjects },
)

export default conn(ReceiptCanvas)
