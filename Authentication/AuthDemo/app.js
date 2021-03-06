var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
    
mongoose.connect("mongodb://localhost/auth_demo_app");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    // Used to encode and decode session data
    secret: "Wendy is the best and cutest dog in the world",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Encode and Decode user session data
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==============
// ROUTES
// ==============

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res){
    res.render("secret");
});


// AUTH ROUTES

// Show signup form
app.get("/register", function(req, res) {
    res.render("register");
});

// Handle user signup
app.post("/register", function(req, res) {
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

// LOGIN ROUTES
// render login form
app.get("/login", function(req, res){
   res.render("login"); 
});

// login logic
// middleware will compare username and password from form body to hash in db
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res){
});

app.get("/logout", function(req, res){
    // Passport will destroy all user's data in session, no db txn
    // no longer keeping track of user's data in session from req to req
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started...");
});