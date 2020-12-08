const config = require('config')

var MongoClient = require('mongodb').MongoClient

MongoClient.connect(`mongodb://${config.mongodbHost}:${config.mongodbPort}/${config.mongodbDataBase}`, function (err, db) {
  if (err) throw err

  db.collection('proxies').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})