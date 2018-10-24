const mongoose = require('mongoose')

let PairsTableSchema = new mongoose.Schema(
    {
        table:Array
    }
)

module.exports = mongoose.model('PairsTable', PairsTableSchema)
