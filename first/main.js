const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a = 1, b = 2;
    var c = a + b;
    var d = c + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})