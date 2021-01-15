const express = require('express')
const EmailManagerClass = require('./utils/emailManager').EmailManager
let EmailManager;


(async () => {
  EmailManager = await EmailManagerClass.openMailBrowser('https://www.guerrillamail.com/')

  console.log(EmailManager)

  await EmailManager.openMail()

  let credentialsResult = await EmailManager.credentials();

  console.log(credentialsResult)
})()
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})