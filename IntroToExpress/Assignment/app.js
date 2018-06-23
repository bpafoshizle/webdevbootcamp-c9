var express = require("express");
var app = express();

var animalSounds = {
    'pig': 'Oink',
    'cow': 'Moo', 
    'dog': 'Woof Woof!',
    'cat': 'Meow meow meow!',
    'fox': 'What the fox say?'
}

app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
   var animal = req.params.animal.toLowerCase();
   var sound = animalSounds[animal];
   res.send(`The ${animal} says '${sound}'`);
});

app.get('/repeat/:word/:times', function(req, res){
   var word = req.params.word;
   var times = parseInt(req.params.times);
   var str = "";
   for(var i =0; i < times; i++){
       str = str + word + " ";
   }
   res.send(str.trim());
});

app.get("*", function(req, res){
   res.send("Sorry, page not found...What are you doing with your life?"); 
}); 

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});