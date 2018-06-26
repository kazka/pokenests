import React from 'react'
import Nest from './components/Nest'
import pokemonService from './services/pokemons'
import nestService from './services/nests'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nests: [],
      allLoaded: false
    }
  }

  componentDidMount() {
    nestService.getAll()
      .then(nests => { this.attachPokemonData(nests) })
      .catch(err => { console.log(err) })
  }

  attachPokemonData = async (nests) => {
    for (const nest of nests) {
      nest['pokemondata'] = await this.getPokemon(nest.pokemon)
    }
    this.setState({ nests, allLoaded: true })
  }

  getPokemon = (name) => {
    return pokemonService.getByName(name)
      .then(pokemon => {
        console.log(pokemon)
        return pokemon
      })
      .catch(err => { console.error(err) })
  }

  render() {
    return (
      <div>
        <h3>Nests</h3>
        {this.state.allLoaded && this.state.nests.map(nest =>
          <Nest key={nest._id} nest={nest}/>
        )}
      </div>
    )
  }
}

export default App;