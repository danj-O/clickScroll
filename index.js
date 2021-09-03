const scrapeUtils = require('./scrapeUtils')
const serverUtils = require('./serverUtils')
require('dotenv').config();

serverUtils.getIP()
scrapeUtils.clickFarm(['https://www.amazon.com/gp/product/B07KB11SFG', 'https://www.amazon.com/dp/B0711WV63B'])
