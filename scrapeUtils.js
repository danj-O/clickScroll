const puppeteer = require('puppeteer')

const clickFarm = async (data) => {
  const formattedUrlsArr = await formatData(data)
  console.log(formattedUrlsArr)
  let scrapedData = []
  await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080','--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'] })
  .then(async browser => {
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);


    for (i = 0; i < formattedUrlsArr.length; i++) { 
      const pageToClickScroll = await pageEvaluation(page, formattedUrlsArr[i])
      scrapedData.push({
        data: pageToClickScroll
      })
    }
  })
  return scrapedData
}

const pageEvaluation = async (page, url) => {
  await page.goto(url, {
    waitUntil: 'load',
    timeout: 0 // Remove the timeout
  });
  await page.waitForSelector('body');

  await page.evaluate(() => new Promise((resolve) => {
    var scrollTop = -1;
    const interval = setInterval(() => {
      window.scrollBy(0, 100);
      if(document.documentElement.scrollTop !== scrollTop) {
        scrollTop = document.documentElement.scrollTop;
        return;
      }
      clearInterval(interval);
      resolve();
    }, 100);
  }));

}






function formatData(dataArr){
  for (i = 0; i < dataArr.length; i++){
    // dataArr[i] = `https://amazon.com/dp/${dataArr[i]}`
  }
  return dataArr
}

module.exports = {
  clickFarm
}