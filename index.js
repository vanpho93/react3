var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views','./views')
app.listen(3000);

app.get("/", function(req, res){
  res.render("trangchu");
});

app.get("/info", function(req, res){
  res.send('KhoaPham Training');
});

app.post("/abcd", parser, function(req, res){
  var ten = req.body.ten;
  var tuoi = req.body.tuoi;
  res.send(ten + ' ' + tuoi);
});
