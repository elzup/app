// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import nipplejs from 'nipplejs'
import 'react-nipple/lib/styles.css'

import type { State as RootState } from '../../types'
import { readText, updateSendText } from './logic'
import ReactNipple from 'react-nipple'

// import * as selectors from './selectors'

export type QrPage = {
  sendText: string,
  receivedText: string,
}

type Props = {}

class NippleContainer extends React.Component<Props> {
  render() {
    const { props } = this

    return (
      <div>
        <div>
          nipple-react demo
          <ReactNipple
            // supports all nipplejs options
            // see https://github.com/yoannmoinet/nipplejs#options
            options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
            // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
            style={{
              outline: '1px dashed red',
              width: 150,
              height: 150,
              // if you pass position: 'relative', you don't need to import the stylesheet
            }}
            // all events supported by nipplejs are available as callbacks
            // see https://github.com/yoannmoinet/nipplejs#start
            onMove={(evt, data) => console.log(evt, data)}
          />
        </div>
      </div>
    )
  }
}

const ms = (state: RootState) => ({})

const conn = connect(
  ms,
  {
    onReadText: readText,
    onChangeSendText: updateSendText,
  },
)

export default conn(NippleContainer)
