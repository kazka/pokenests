const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const Nest = require('./models/nest')

app.use(bodyParser.json())
app.use(cors())


const formatNest = (nest) => {
  return {
    pokemon: nest.pokemon,
    location: nest.location,
    city: nest.city,
    date: nest.date,
    id: nest._id
  }
}


app.get('/ditto', (request, response) => {
  Nest
    .find({})
    .then(res => {
      const ditto = {
        name: 'ditto',
        color: {name: 'purple'},
        id: 1
      }
      response.json(ditto)
    })
})
app.get('/goldeen', (request, response) => {
  Nest
    .find({})
    .then(res => {
      const goldeen = {
        name: 'goldeen',
        color: {name: 'red'},
        id: 2
      }
      response.json(goldeen)
    })
})

app.get('/', (request, response) => {
  Nest
    .find({})
    .then(nests => {
      response.json(nests.map(formatNest))
    })
})

app.post('/', (request, response) => {
  const body = request.body

  console.log(body)

  if (body.pokemon === undefined) {
    return response.status(400).json({error: 'pokemon missing'})
  }

  const nest = new Nest({
    pokemon: body.pokemon,
    location: body.location,
    city: body.city,
    date: new Date()
  })

  nest
    .save()
    .then(savedNest => {
      response.json(formatNest(savedNest))
    })
})



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
