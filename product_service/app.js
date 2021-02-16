const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('Hello from product service')
})

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`)
})