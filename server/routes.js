var Router = require("express").Router()
var studentFunctions = require("../database-mongo/student.ctrl.js")
var pairsTableFunctions = require("../database-mongo/pairs-table.ctrl.js")
var bodyParser = require("body-parser")
var path = require("path")

Router.use(bodyParser.json())
Router.use(bodyParser.urlencoded({extended: true}))

// Home page route.
Router.route("/")
    .get(function (req, res) {

        res.sendFile(path.join(__dirname, "../react-client/dist/index.html"))
    })
    .post(function (req, res) {

    })

    Router.route("/add-student")
        .get(function (req, res) {

            res.sendFile(path.join(__dirname, "../react-client/dist/index.html"))
        })
        .post(function (req,res){
          console.log(req.body);
          studentFunctions.studentSave(req,res)
        })

        Router.route("/students")
            .get(function (req, res) {
              studentFunctions.retrieveAll(req,res)
            })

                    Router.route("/student/:id")
                        .get(function (req, res) {
                          studentFunctions.deleteOne(req,res)
                        })
            .delete(function (req,res){
              studentFunctions.deleteOne(req,res)
            })


            Router.route("/pairing")
                .get(function (req, res) {
                    res.sendFile(path.join(__dirname, "../react-client/dist/index.html"))
                })
                .post(function (req, res) {
                  pairsTableFunctions.savePairs(req,res)
                })
                Router.route("/pairs")
                    .post(function (req, res) {
                      studentFunctions.getPairs(req,res)

                    })
                    Router.route("/history")
                        .get(function (req, res) {
                            res.sendFile(path.join(__dirname, "../react-client/dist/index.html"))
                        })
                    Router.route("/history-tables")
                        .get(function (req, res) {
                          pairsTableFunctions.retrieveAll(req,res)

                        })
module.exports = Router
