var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended: false});
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views','./views')
app.listen(3000);

var mang = ["KhoaPham", "Node", "React"];

app.get("/", function(req, res){
  res.render("trangchu");
});

app.get("/info", function(req, res){
  res.send(mang);
});

app.post("/add", parser, function(req, res){
  var noiDung = req.body.noiDung;
  mang.push(noiDung);
  res.send(mang);
});

app.post("/delete", parser, function(req, res){
  var id = req.body.id;
  mang.splice(id, 1);
  res.send(mang);
});

app.post("/abcd", parser, function(req, res){
  var ten = req.body.ten;
  var tuoi = req.body.tuoi;
  res.send(ten + ' ' + tuoi);
});
