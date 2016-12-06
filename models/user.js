
const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

let userschema = new Schema({
  username: {type:String,required: true},
  password: {type: String, required: true}
})

userschema.methods.encrtptPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
}

userschema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userschema)

