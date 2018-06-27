import React from 'react'

const Pokemon = ({pokemon}) => (
  <div className="pokemon" style={{borderColor: pokemon.color.name}}>
    <p className="pokemon-name">{pokemon.name}</p>
    <p><strong>Generation:</strong> {pokemon.generation.name}</p>
    <p><strong>Habitat:</strong> {pokemon.habitat.name}</p>
    <p><strong>Shape:</strong> {pokemon.shape.name}</p>
  </div>
)

export default Pokemon