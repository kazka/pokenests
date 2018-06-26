import React from 'react'

const Pokemon = ({pokemon}) => (
  <div>
    <p className="pokemon-name" style={{color: pokemon.color.name}}>{pokemon.name}</p>
  </div>
)

export default Pokemon