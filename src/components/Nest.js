import React from 'react'
import Pokemon from './../components/Pokemon'
import { Card } from "@blueprintjs/core";

const Nest = ({ nest }) => {
  return (
    <Card className="pt-elevation-2">
      <div className="nest">
        <div className="nest-content">
          <div className="nest-location">
            <strong>Location:</strong> {nest.location}, {nest.city}
          </div>
          <div className="nest-date">
            <strong>Added:</strong> {new Date(nest.date).toLocaleDateString()}
          </div>
          <div className="nest-pokemon">
            <Pokemon key={nest.pokemondata.id} pokemon={nest.pokemondata}/>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Nest