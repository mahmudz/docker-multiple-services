const express = require('express')
const app = express()
const port = 3001
const request = require('request');

app.get('/', (req, res) => {
  request('http://product_service:3002', function (error, response, body) {
    console.log(body)
  });
  res.send('Hello from user service')
})

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`)
})