const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
const a=1;
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})