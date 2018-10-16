// @flow

import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

type Props = {
  title: string,
}

const NavBar = (props: Props) => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar color="inherit">
        <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
)

export default NavBar
