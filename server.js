//require packages
var express = require("express");
var path = require("path");
// setup express.
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup array of objects for the reservations.
var tables = [
    {
        customerName: "testname1",
        phoneNumber: "testphone1",
        customerEmail: "testemail1",
        customerID: "testid1"
    },
    {
        customerName: "testname2",
        phoneNumber: "testphone2",
        customerEmail: "testemail2",
        customerID: "testid2"
    }
];

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

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
