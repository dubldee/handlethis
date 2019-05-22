/* eslint-env mocha */

const { fork } = require('child_process')
const assert = require('assert')
const path = require('path')
const request = require('supertest')

describe('handlethis tests', () => {
  it('should direct user to our parsed 404 error page', (done) => {
    const appDir = path.join(__dirname, '../')
    const testApp = fork(path.join(appDir, 'app.js'), { 'stdio': ['pipe', 'pipe', 'pipe', 'ipc'] })

    testApp.on('message', () => {
      request('http://localhost:3000')
        .get('/broken')
        .expect(404)
        .end((err, res) => {
          if (err) {
            assert.fail(err)
            testApp.send('stop')
          }
          assert.equal(res.text.includes('404'), true, 'Did not sent 404 error for broken link')
          testApp.send('stop')
        })
    })
    testApp.on('exit', () => {
      done()
    })
  })
})
