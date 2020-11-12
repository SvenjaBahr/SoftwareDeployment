const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const appInsights = require('applicationinsights');
appInsights.setup('af82f722-51a6-4aff-a5c1-1dc8daa53fb4').start();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})