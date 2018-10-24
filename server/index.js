var express = require("express")
var bodyParser = require("body-parser")
var Router = require("./routes")
var app = express()
var mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/27017")



var db = mongoose.connection

db.on("error", function () {
    console.log("mongoose connection error")
})

db.once("open", function () {
    console.log("mongoose connected successfully")
})
app.use("/", Router)
app.use(express.static(__dirname + "/../react-client/dist"))
var port =  process.env.PORT || 3000
if (!module.parent) {
    app.listen(port, function () {
        console.log("listening on port"+port+"!")
    })
}

module.exports = app
