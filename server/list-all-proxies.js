let mongodbClient = require('./utils/db').client;

let db = mongodbClient.db('gepime-bot');
let proxies = db.collection('proxies');

db.collection('proxies').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })