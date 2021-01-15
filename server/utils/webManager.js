let puppeteer = require('puppeteer');
let randomString = require('./randomString');
const config = require('./config');

class WebManager{

/** 
* @param {string} webPage web site
* @param {object} browser puppeter browser
*/
constructor(webPage, browser){
    
this.emailProvider = emailProvider;
this.browser = browser;
this.page;
}

/**
 * @param {object} browser the browser promise that is returned 
 * @param {string} emailProvider the http address of the email provider 
 */
static async openMailBrowser(emailProvider){
    const browser = await puppeteer.launch({headless: false});
    console.log(typeof browser)
    return new EmailManager(emailProvider, browser) // returns a promise
}

//returns the browser window with the mail opened
async openMail(address){

    let addr

    if(address){
        addr = address
    } 
    else {
        addr = this.emailProvider
    }

        // headless to false will launch Chromium browser
        this.page = await this.browser.newPage();
        await this.page.goto(addr, {waitUntil: 'networkidle2'});
        let fileName = randomString.generate(10)  + '.png';
        await this.page.screenshot({path: config.screnshotsDir + fileName});
        console.log(`file saved ${fileName}` + '.png'); // DELETE
        return this.page;
}

/**
 * @returns {object} obj
 * @returns {string} obj.emailId
 * @returns {int} obj.count
 */
 async credentials() {

    const emailId = await this.page.evaluate(() => {
        return document.querySelector('#inbox-id').innerHTML;
    });

    const inboxCount = await this.page.evaluate(() => {
        let emailsHTMLElements = document.querySelector('#email_list');
        let count = emailsHTMLElements.children.length;
        return count;
    });

    let obj = {emailId, inboxCount};

    return obj;
}

/**
 * terminate the browser
 * @returns true
 */
close(){
    
this.browser.close()
return true
}

/**
 * @returns {object} browser
 */
browser() {

    return this.browser;
}

}