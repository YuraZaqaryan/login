const { Schema, model, Types } = require('mongoose')
const schema = new Schema({
    login : {type : String, required : true},
    password : {type : String, required : true},
    text : {type : Types.ObjectId, ref : 'Text'}
})

module.exports = model('User', schema)