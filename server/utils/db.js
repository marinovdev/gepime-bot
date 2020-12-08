const config = require('./config')

var MongoClient = require('mongodb').MongoClient

const uri = `mongodb+srv://${config.mongodbUser}:${config.mongodbPass}@${config.mongodbHost}:${config.mongodbPort}/${config.mongodbDataBase}`
const client = MongoClient(uri);

 ( async function() {
    await client.connect();
})()

module.exports = {
    client
}