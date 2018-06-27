import React from 'react'
import Nest from './components/Nest'
import Loading from './components/Loading'
import Form from './components/Form'
import pokemonService from './services/pokemons'
import nestService from './services/nests'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nests: [],
      allLoaded: false,
      showForm: false
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

  handleToggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h3>Nests</h3>

          {this.state.showForm ? <Form /> : null }
          {!this.state.allLoaded ?
            <Loading /> :
            this.state.nests.map(nest =>
            <Nest key={nest._id} nest={nest} />
          ) }
        </div>

        <div className="add-new" onClick={this.handleToggleForm}>{this.state.showForm ? 'x' : '+'}</div>
      </div>
    )
  }
}

export default App;