const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({
      width: 1180,
      height: 625,
      deviceScaleFactor: 1,
    });
   await page.goto('https://www.planetromeo.com/', {waitUntil: 'networkidle2'})
    await page.screenshot({path: 'example2.png'});
  
    await browser.close();
  })();