const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 1337

app.use(express.static(path.join(__dirname, '../client/public/')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
