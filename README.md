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
let { handleRobots } = require('handlethis')
let { handle404 } = require('handlethis')
let { handleErrors } = require('handlethis')

let app = express()

// define all your routes
app.get('/', (req, res) => res.send('Hello world'))

app.get('/robots.txt', handleRobots) // Handles your robots.txt!

// after everything
app.use(handle404())    // Handles your 404 errors!
app.use(handleErrors()) // Handles every error and produces HTML!

app.listen(3000, () => console.log('Express application listening on port 3000'))
```

### thats it!


