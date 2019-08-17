//require packages
var express = require("express");
var path = require("path");
// setup express.
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup array of objects for the reservations.
var tables = [];

//setup array of objects for the waitlist.
var waitList = [];

//Starting route to send the index page.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Second route for reservation table page.
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

//Last route for reservation page.
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//route to display all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

//route to display all waitlisted tables.
app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
  });

  app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTables = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  
    console.log(newTables);
  
    tables.push(newTables);
  
    res.json(newTables);
  });
  app.post("/api/waitlist", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      var newWaitlist = req.body;
    
      console.log(newWaitlist);
    
      waitList.push(newWaitlist);
    
      res.json(newWaitlist);
    });
// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
