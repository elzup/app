// @flow
import { connect } from 'react-redux'
import * as React from 'react'

import { Grid } from '@material-ui/core'
import type { State as RootState } from '../../types'

// import * as selectors from './selectors'

type Props = {
  roomIds: string[],
}

const S = Math.sin
const C = Math.cos
// const T = Math.tan

type State = {
  t: number,
}

class CanvasContainer extends React.Component<Props, State> {
  ctx: any
  state = { t: 0 }
  componentDidMount() {
    this.ctx = this.refs.canvas.getContext('2d')
  }

  render() {
    const { t } = this.state
    const x = this.ctx

    let i: number,
      a: number,
      n: number,
      j: number,
      z: number,
      A: number,
      f: Function
    function f2(t: number) {
      if (!t) {
        i = a = n = 0
        j = 1e3
        f = n => n && (f(n >> 1) - n) & 1
      }
      for (z = n < 4e4 ? 44 : 0; z--; )
        f(n++)
          ? x.fillRect(
              (i -= 0.88 * C((A = a * Math.PI))),
              (j += 0.88 * S(A)),
              2,
              2,
              (a += 1 / 3),
            )
          : a--
    }
    f2(t)
    return (
      <div>
        <Grid container justify={'center'}>
          <Grid item xs={12} sm={10}>
            <canvas ref={'canvas'} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const ms = (state: RootState) => ({})

const conn = connect(
  ms,
  {},
)

export default conn(CanvasContainer)
