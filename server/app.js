const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()


/** connect to MongoDB datastore */
mongoose.connect("mongodb://localhost/27017")
var db = mongoose.connection

db.on("error", function () {
    console.log("mongoose connection error")
})

db.once("open", function () {
    console.log("mongoose connected successfully")
})

let port = 5000 || process.env.PORT



app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
