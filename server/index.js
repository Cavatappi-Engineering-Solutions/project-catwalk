const express = require('express')
const path = require('path')
const config = require('../config.js')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 1337

app.use(express.static(path.join(__dirname, '../client/public/')))

app.all('/api/*', (req, res) => {
  const url = req.url
  const method = req.method
  const body = req.body
  const reqConfig = {
    method,
    url: `https://app-hrsei-api.herokuapp.com${url}`,
    headers: { Authorization: config.API_KEY },
    body
  }
  axios(reqConfig)
    .then((results) => res.send(results.data))
    .catch((err) => {
      console.log('API forward failed: ', err.response.status)
      res.sendStatus(err.response.status)
    })
})

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
