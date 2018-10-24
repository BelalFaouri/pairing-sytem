var PairsTable = require("./PairsTable.js")
var mongoose = require("mongoose")



exports.retrieveAll = function (req, res) {
    PairsTable.find({}, function (err, data) {
        if (err) {
	 return res.status(500).json(err.data)
        }
        if (data.length === 0) {
            return res.sendStatus(404)
        }
        res.json(data)
    })
}

exports.savePairs = function (req, res) {
  const {pairs} = req.body
  console.log(req.body);
    PairsTable.create({table:pairs}, function (err, table) {
        if (err) {
          console.log(err);
            res.status(500).send(err)
        } else {
            console.log("saved table")
            res.send(table)
        }
    })
}
