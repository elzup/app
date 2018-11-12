// @flow

import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react'

import QrSessionContainer from '../QrSessionContainer'
import CanvasContainer from '../CanvasContainer'
import TopContainer from '../TopContainer'
import UrlschemeContainer from '../UrlschemeContainer'
import ReceiptCanvas from '../ReceiptCanvas'

class App extends React.Component<*> {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={'/'} component={TopContainer} />
          <Route exact path={'/qr'} component={QrSessionContainer} />
          <Route exact path={'/canvas'} component={CanvasContainer} />
          <Route exact path={'/urlscheme'} component={UrlschemeContainer} />
          <Route exact path={'/receipt'} component={ReceiptCanvas} />
        </div>
      </Router>
    )
  }
}

export default App
