// Child process to fork
let express = require('express')
let app = express()
let handlethis = require('../index.js')

// Necessary routes/middleware
app.get('/', (req, res) => res.send('Hello World!'))

app.use(handlethis.handle404())
app.use(handlethis.handleErrors())

// Send a message after server is up
app.listen(3000, () => process.send('Express test server listening on port 3000'))

// Exit forked app cleanly
process.on('message', (msg) => {
  if (msg === 'stop') {
    process.exit(0)
  }
})
