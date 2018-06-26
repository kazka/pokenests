import React from 'react'
import Nest from './components/Nest'
import Pokemon from './components/Pokemon'
import pokemonService from './services/pokemons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nests: []
    }
  }

  componentDidMount() {
    this.getPokemonData('muk')
  }

  getPokemonData = (name) => {
    pokemonService.getByName(name).then(pokemon =>
      console.log(pokemon)
    )
  }

  render() {
    return (
      <div>
        <h4>Nests</h4>
      </div>
    )
  }
}

export default App;