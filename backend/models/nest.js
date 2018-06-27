const url = require('./db')

const mongoose = require('mongoose')

mongoose.connect(url)

const Nest = mongoose.model('Nest', {
  pokemon: String,
  location: String,
  city: String,
  date: Date
})


module.exports = Nest
