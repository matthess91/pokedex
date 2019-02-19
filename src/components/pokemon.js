import React, { PureComponent } from 'react'

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props

    return (
      <div className="pokemon">
        <button
          type="button"
          className="pokemon__sprite"
          id={`${pokemon.name}_image`}
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`
          }}
        />
        <p className="pokemon__name" id={`${pokemon.name}_text`}>
          {pokemon.name}
        </p>
      </div>
    )
  }
}

export default Pokemon
