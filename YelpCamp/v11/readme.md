# Refactor Mongoose Code
* Create a models directory
* Use modules.export
* Require everything correctly

#  Add Seeds file
* Add a seeds.js file
* Run the seeds file every time the server starts

# Make the comment model
* Make our errors go away
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

# Auth Pt. 1 - Add User Model
* Install all the packages needed for auth
* Define user model

# Auth Pt. 2 - Register 
* Configure Passport
* Add register routes
* Add register template

# Auth Pt. 3 - Login
* Add login routes
* Add login template

# Auth Pt. 4 - Logout/Navbar
* Add logout routes
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

# Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

# Refactor the routes
* Use Express router to reorganize all routes

# Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

# Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit page
* Add Update Route
* Fix $set problem

# Deleting Campgrounds
* Add Destroy Route
* Add Delete Button

# Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

# Editing Comments
* Add Edit Route for Comments
* Add Edit button
* Add Update Route

# Deleting Comments
* Add Destroy Route
* Add Delete button 

# Authorization Pt. 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit/delete buttons
* Refactor Middleware