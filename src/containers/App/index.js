// @flow

import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react'

import QrSessionContainer from '../QrSessionContainer'
import CanvasContainer from '../CanvasContainer'
import TopContainer from '../TopContainer'

class App extends React.Component<*> {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={TopContainer} />
          <Route exact path={'/qr'} component={QrSessionContainer} />
          <Route exact path={'/canvas'} component={CanvasContainer} />
        </div>
      </Router>
    )
  }
}

export default App
