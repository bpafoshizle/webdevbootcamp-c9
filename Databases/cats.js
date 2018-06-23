var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});


// The string argument is supposed to be the singular version of whatever you want your collection name to be
// This will cause a collection called Cats to be created in mongodb
var Cat = mongoose.model("Cat", catSchema);

// adding new cat to the db
// var george = new Cat({
//     name: "Wuss",
//     age: 7,
//     temperament: "Menacing"
// });
// george.save(function(err, cat){
//     if(err){
//         console.log("something went wrong")
//     } else {
//         console.log("We just saved a cat to the database");
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});


// retrieve all cats from the db and console.log each one
Cat.find({}, function(err, cats){
   if(err){
       console.log(`Error: ${err}`);
   } else {
       console.log("All the cats...")
       console.log(cats);
   }
});