var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
       {name: 'Devils Den', image: 'https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104497f8c47fa7e5b1b9_340.jpg'},
       {name: 'Buffalo National River', image: 'https://farm4.staticflickr.com/3178/2954878643_5fdc9d35c7.jpg'},
       {name: 'Kualoa Ranch', image: 'https://pixabay.com/get/ea35b0062ff21c22d2524518b7444795ea76e5d004b014439df5c779a0eebd_340.jpg'},
       {name: 'Devils Den', image: 'https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104497f8c47fa7e5b1b9_340.jpg'},
       {name: 'Buffalo National River', image: 'https://farm4.staticflickr.com/3178/2954878643_5fdc9d35c7.jpg'},
       {name: 'Kualoa Ranch', image: 'https://pixabay.com/get/ea35b0062ff21c22d2524518b7444795ea76e5d004b014439df5c779a0eebd_340.jpg'},
       {name: 'Devils Den', image: 'https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104497f8c47fa7e5b1b9_340.jpg'},
       {name: 'Buffalo National River', image: 'https://farm4.staticflickr.com/3178/2954878643_5fdc9d35c7.jpg'},
       {name: 'Kualoa Ranch', image: 'https://pixabay.com/get/ea35b0062ff21c22d2524518b7444795ea76e5d004b014439df5c779a0eebd_340.jpg'}
    ] 

app.get('/', function(req, res){
    res.render("landing");
});

app.get('/campgrounds', function(req, res){
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res){
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   // redirect back to campgrounds page
   res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res){
    res.render('new');
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server started...") 
});