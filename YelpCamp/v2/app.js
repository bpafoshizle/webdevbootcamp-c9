var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//   name: "Devil's Den",
//   image: "https://farm6.staticflickr.com/5334/9925256586_c06d949b3e.jpg",
//   description: "Statan's playground! Beautiful scenery, hot fire, moderate torture!"
// }, function(err, campground){
//     if(err){
//         console.log('Campground not saved, something went wrong')
//     } else {
//         console.log('Saved campground');
//         console.log(campground);
//     }
// });

app.get('/', function(req, res){
    res.render("landing");
});

// INDEX
app.get('/campgrounds', function(req, res){
    // Get all campgrounds from the db
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else {
            res.render('index', {campgrounds: campgrounds})
        }
    });
});

// CREATE
app.post('/campgrounds', function(req, res){
   // get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
   // Create new campground and save to db
   Campground.create(newCampground, function(err, campground){
       if(err){
           console.log(err);
       } else {
           // redirect back to campgrounds page
           res.redirect('/campgrounds');
       }
   })
});

// NEW 
app.get('/campgrounds/new', function(req, res){
    res.render('new');
});

// SHOW - shows more info about one campground
app.get('/campgrounds/:id', function(req, res){
    // find the campground with provided id
    Campground.findById(req.params.id, function(err, campground) {
        if(err){
            console.log(err);
        } else {
            // render show template with that campground
            res.render("show", {campground: campground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("YelpCamp Server started...") 
});