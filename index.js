const scrapeUtils = require('./scrapeUtils')
const serverUtils = require('./serverUtils')
require('dotenv').config();
var PORT = process.env.PORT || 3000;
var express = require('express');

//boilerplate
var app = express();
app.use(express.static(__dirname + '/'));
app.set('view engine','ejs');
app.use(express.urlencoded({
  extended: true
}));
app.listen(PORT, function(){
  console.log("Server is running on port 3000")
})

serverUtils.getIP()
scrapeUtils.clickFarm(['https://www.amazon.com/gp/product/B07KB11SFG', 'https://www.amazon.com/dp/B0711WV63B'])

