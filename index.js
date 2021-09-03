const scrapeUtils = require('./scrapeUtils')
const serverUtils = require('./serverUtils')
require('dotenv').config();
var PORT = process.env.PORT || 3000;
var express = require('express');
const ejs = require('ejs');

//boilerplate
var app = express();
app.use(express.static(__dirname + '/'));
app.set('view engine','ejs');
app.use(express.urlencoded({
  extended: true
}));

app.get('/', function(req, res){
  return res.render('index.ejs')
})

app.post('/farm', (req,res) =>{
  const asins = req.body
  serverUtils.getIP()
  console.log(asins)
  // scrapeUtils.clickFarm(asins)
  // scrapeUtils.clickFarm(['https://www.amazon.com/gp/product/B07KB11SFG', 'https://www.amazon.com/dp/B0711WV63B'])
})

app.listen(PORT, function(){
  console.log(`Server is running on port ${PORT}`)
})


