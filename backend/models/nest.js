const mongoose = require('mongoose')

const url = 'mongodb://pokenest_A:pokepass444@ds241530.mlab.com:41530/pokenests'

mongoose.connect(url)

const Nest = mongoose.model('Nest', {
  pokemon: String,
  location: String,
  city: String,
  date: Date
})


module.exports = Nest
