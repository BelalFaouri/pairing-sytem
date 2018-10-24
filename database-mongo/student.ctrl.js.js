var Student = require("./Student.js")
var mongoose = require("mongoose")


exports.retrieveOne = function (req, res) {
    var username = req.session.user.username
    var id = req.session.user._id
    Student.findById({_id: id}, function (err, found) {
        console.log(found)
        if (err) {
	  return res.status(500).json(err.data)
        }
        if (!found) {
            return res.sendStatus(404)
        }
        res.send(found)
    })
}

exports.retrieveAll = function (req, res) {
    Student.find({}, function (err, data) {
        if (err) {
	 return res.status(500).json(err.data)
        }
        if (data.length === 0) {
            return res.sendStatus(404)
        }
        res.json(data)
    })
}

exports.getPairs = function (req, res) {
  var arr=req.body.students
  console.log(arr);

  var shuffleArray=function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
   }
   var shuffled=shuffleArray(arr)
   var pairs=shuffled.reduce(function(result, value, index, array) {
  if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
  return result;
}, []);
  console.log('pairs',pairs);
  res.send(pairs)
}



exports.studentSave = function (req, res) {
  console.log('in save func');
  const {name,level} = req.body
  console.log(req.body);
    Student.create({name:name, level:level}, function (err, student) {
        if (err) {
          console.log(err);
            res.status(500).send(err)
        } else {
            console.log("saved student")
            res.send(student)
        }
    })
}

exports.deleteOne = function (req, res) {
    console.log(req.params);
    const {id } = req.params
    Student.findOneAndRemove({_id: id}, function (err, deleted) {
        if (err) {
            console.log(err)
        }
        res.send(deleted)
    })
}

exports.updateOne = function (req, res) {
    console.log(req.body)
    var username = req.session.user.username
    var email = req.body.email
    var age = req.body.age
    var imgsrc = req.body.imgsrc

    var StudentObj = {
	    username: username,
	    email: email,
        age: age,
        imgsrc: imgsrc
    }

    Student.findOneAndUpdate({username: username}, StudentObj, function (err, data) {
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
  }
