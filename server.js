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
]
//setup array of objects for the waitlist.
var waitList = [
    {

    }
]

//basic route to send the index page.
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
