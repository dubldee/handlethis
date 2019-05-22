# handlethis
Express middleware for rapid prototyping

### How to install

Simply install the module via npm:

```
npm install handlethis --save
```

### Example Express app
```js
let express = require('express')
let { handle404 } = require('handlethis')
let { handleErrors } = require('handlethis')

let app = express()

// define all your routes
app.get('/', (req, res) => res.send('Hello world'))

// after everything
app.use(handle404())
app.use(handleErrors())

app.listen(3000, () => console.log('Express application listening on port 3000'))
```

### thats it!


