require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.gupy.io/login/');

  const hrefs = await page.$$eval('a', as => as.map(a => a.href));

  console.log(hrefs)

  // - Acessa a página de login
  //await page.click('[2]');

  // Troque os valores de process.env.UNSPLASH_EMAIL e process.env.UNSPLASH_PASS pelo seu login e senha :)
  //await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL)
  //await page.type('#user_password', process.env.UNSPLASH_PASS)

  //await page.click('[type="submit"]')

  //await page.waitForNavigation();

  // ACESSAR essa pagina
  //await page.goto('https://unsplash.com/photos/LzWXPcJg7lk');

  // Like nessa coisa
  //await page.click('[title="Like photo"]')

  



  // await browser.close();
})();