// @flow
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as React from 'react'
import { Grid, Paper } from '@material-ui/core'

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
          <Grid item xs={12} sm={10}>
            <Paper>
              <ul>
                <li>
                  <Link to={'/qr'}>Qr session</Link>
                </li>
                <li>
                  <Link to={'/canvas'}>Canvas</Link>
                </li>
                <li>
                  <Link to={'/urlscheme'}>Url scheme</Link>
                </li>
                <li>
                  <Link to={'/receipt'}>Receipt canvas maker</Link>
                </li>
              </ul>
            </Paper>
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

export default conn(TopContainer)
