let puppeteer = require('puppeteer')
let randomString = require('./randomString')

class EmailManager{
/** 
* @param {string} client the url of the mail provider
*/
constructor(client){
this.client = client
}
//returns the browser window with the mail opened
openMail(){
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(client, {waitUntil: 'networkidle2'});
        let fileName = randomString.generate(10)  + '.png'
        await page.screenshot({path:fileName})
        console.log(`file saved ${fileName}`)
        await browser.close();
      })();
}

}

module.exports = {
    EmailManager
}