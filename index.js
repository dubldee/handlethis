// Dubldee has your back
const fs = require('fs')
const path = require('path')

module.exports = {
  handle404: handle404,
  handleErrors: handleErrors
}

function handle404 () {
  return (req, res, next) => {
    let err = new Error('I couldn\'t find anything here.')
    err.status = 404
    next(err)
  }
}

function handleErrors () {
  return (err, req, res, next) => {
    let errorStatus = err.status || 500
    let errorMessage = err.message || 'Something went wrong here'
    let parsedHtml

    res.status(errorStatus)
    fs.readFile(path.join(__dirname, 'error.html'), 'utf8', (fileErr, html) => {
      parsedHtml = html.replace(/{status}/g, errorStatus)
      res.send(parsedHtml.replace(/{message}/g, errorMessage))
    })
  }
}
