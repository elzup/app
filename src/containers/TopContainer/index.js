// @flow
import { connect } from 'react-redux'
import * as React from 'react'

import { Grid } from '@material-ui/core'
import type { State as RootState } from '../../types'

// import * as selectors from './selectors'

type Props = {
  roomIds: string[],
}

class TopContainer extends React.Component<Props> {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Grid container justify={'center'}>
          <Grid item xs={12} sm={10} />
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

export default conn(TopContainer)
