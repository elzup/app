// @flow
import { Grid, Paper } from '@material-ui/core'
import { connect } from 'react-redux'
import * as React from 'react'

import type { State as RootState } from '../../types'

// import * as selectors from './selectors'

type Props = {}

class UrlschemeContainer extends React.Component<Props> {
  render() {
    return (
      <Grid container justify={'center'}>
        <Grid item xs={12} sm={12} md={10}>
          <Paper>
            <ul>
              <li>
                <a href="app-Prefs:root=General&path=About">iOS config</a>
              </li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

const ms = (state: RootState) => ({})

const conn = connect(
  ms,
  {},
)

export default conn(UrlschemeContainer)
