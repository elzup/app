// @flow

import * as React from 'react'
import { Grid, Paper, TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import QrReader from 'react-qr-reader'
import QRCode from 'qrcode.react'

import { Helmet } from 'react-helmet'

import type { State as RootState } from '../../types'
import { readText, updateSendText } from './logic'

// import * as selectors from './selectors'

export type QrPage = {
  sendText: string,
  receivedText: string,
}

type Props = {
  sendText: string,
  receivedText: string,
  onReadText: typeof readText,
  onChangeSendText: typeof updateSendText,
}

const description = 'qr session spa'

class QrSessionContainer extends React.Component<Props> {
  render() {
    const { props } = this
    return (
      <Grid container justify={'center'}>
        <Grid item xs={12} sm={12} md={10}>
          <Helmet
            title={'Qr experiments'}
            meta={[
              { name: 'description', content: description },
              { property: 'og:title', content: 'Qr ex' },
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: 'https://app.elzup.org/#/qr' },
              {
                property: 'og:image',
                content: 'https://pbs.twimg.com/media/DlxVxu7UUAQjl_I.jpg',
              },
              { property: 'og:description', content: description },
              { name: 'twitter:card', content: 'summary' },
            ]}
          />
          <Paper>
            <Grid container justify={'center'}>
              <Grid item xs={12} sm={6}>
                <QrReader
                  delay={300}
                  onError={console.error}
                  onScan={props.onReadText}
                  style={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <p>received</p>
                <div>
                  <pre>
                    <code>{props.receivedText}</code>
                  </pre>
                </div>
              </Grid>
            </Grid>
            <Grid container justify={'center'}>
              <Grid item xs={12} sm={6}>
                <p>send</p>
                <TextField
                  id="standard-textarea"
                  multiline
                  margin="normal"
                  onChange={v => props.onChangeSendText(v.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <div>
                  <QRCode value={props.sendText} />
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

const ms = (state: RootState) => ({
  sendText: state.QrSessionContainer.sendText,
  receivedText: state.QrSessionContainer.receivedText,
})

const conn = connect(
  ms,
  {
    onReadText: readText,
    onChangeSendText: updateSendText,
  },
)

export default conn(QrSessionContainer)
