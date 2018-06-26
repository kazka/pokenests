import React from 'react'
import Pokemon from './../components/Pokemon'

const Nest = ({ nest }) => {
  return (
    <div className="nest">
      <div className="nest-content">
        <div className="nest-location">
          {nest.location}, {nest.city}
        </div>
        <div className="nest-date">
          <strong>Added:</strong> {nest.date}
        </div>
        <div className="nest-pokemon">
          <Pokemon key={nest.pokemondata.id} pokemon={nest.pokemondata}/>
        </div>
      </div>
    </div>
  )
}

export default Nest