var express = require('express');
var request = require('request');

var app = express();
app.set("view engine", "ejs");

app.get('/', function(req, res) {
   res.render('search'); 
});

app.get('/results', function(req,res){
    var searchTerm = req.query.search;
    var url = `http://www.omdbapi.com/?apikey=thewdb&s=${searchTerm}`;
    request(url, function (error, response, body) {
        if(!error && response.statusCode == 200){
          var data = JSON.parse(body);
          res.render('results', {data: data});
        }
        else {
            
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Movie app has started...");
});