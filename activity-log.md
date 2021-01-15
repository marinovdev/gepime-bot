## CONTENT
#### 1. OVERVIEW
#### 2. CHANGES

----

## 1. OVERVIEW
### 1.1. Dependancies 
- Express
- Mongoose
- nodemon

---

## 2. CHANGES

#### all progress lost due to 'git reset --hard origin/master'
- never use <code>git reset</code> because all commits are lost that are not pushed on the local branch

#### starting clean project
- creating folders 'server' and 'client'
- the back-end is going to be based in the './server' folder

#### issues with git revert HEAD
- made the local repo to go back by one commit

- finding a way to revert back to "activity log starting clean project"

> git revert 27d883b9c1d10afbceada7e25beba570754b2420

>  git fetch origin

- reverting to a commit insted reverted to the preveous commit insights about git revert not resolved


#### successfull revert back to Revert "Revert  "activity log starting clean project""

- the revert was done using Git Desktop

#### server and client folders dont seem to appear on public repo
attempting to fix this :

- synchronising gepime-bot repo
no results: public repo doesnt have ./client and ./server

- listing all files under source control in the current repo
> git ls-tree -r master --name-only

result: 
```
README.md
activity-log.md
```

#### gitignore all node_modules/
pattern:
> node_modules/

to ignore all folders with this name in the main directory

#### setting up index.js as app entry point

#### studying design patterns to be used for the app
https://dzone.com/articles/design-patterns-in-expressjs

#### desiding where to store the modules of the API

- discovered the definition project architecture

- studying project architectures
https://softwareontheroad.com/ideal-nodejs-project-structure/

#### decission made to use MVC architecture
- alike pattern : https://github.com/marinovdev/JavaScript/blob/master/JS%20Core/JS%20Applications/13-exam-prep/web-app1/scripts/app.js

### starting mongo db server on port 3001
> "C:\Program Files\MongoDB\Server\4.2\bin\mongod.exe" --port 3001

### installing puppeter js
> npm i puppeteer

### waiting for page to load with setTimeout() caused error
```js
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  > setTimeout(( () => page.goto('https://planetromeo.com'))(), 5000)
    await page.screenshot({path: 'example.png'});
  
    await browser.close();
  })();
```

```
UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received Promise { <pending> }
    at setTimeout (timers.js:121:3)
    at C:\Users\vyful\Desktop\PROJECTS\gepime-bot\server\puppeter-scratchpad.js:6:4
```

SOLUTION: Don't use setTimeout() 
use waitUntil param
```js
await page.goto('https://www.planetromeo.com/', {waitUntil: 'networkidle2'})
```

### puppeter headdles mode
- headles mode set to false opens Chromium browser
- default if true
```
const browser = await puppeteer.launch({headless: false}) // opens Chromium
```

### create config.js for storing all the app global vars and settings

### install mongodb
> npm i mongodb

- Mongoose is for object relational mapping and we dont need it.

### db connection made in utils/db.js

### creating new collection procies in db gepime-bot

- during the creation of the collection stumbled accross 2 definitions that seem to me difficult to understand : 'Capped Colation', 'Use Custom Colation'

### problem while connecting to mongoDB

:x: MongoClient must be connected before calling MongoClient.prototype.db

db.js
```js
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
```

SOLUION: connection must run asynchronoysly with other app modules:
[Stackoverflow](https://stackoverflow.com/questions/24621940/how-to-properly-reuse-connection-to-mongodb-across-nodejs-application-and-module)

###
