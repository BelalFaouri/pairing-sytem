const mongoose = require('mongoose')

let StudentSchema = new mongoose.Schema(
    {
        name: String,
        level: Number,
    }
)

module.exports = mongoose.model('Student', StudentSchema)
