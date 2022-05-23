import React, { useState } from 'react'
import './css/pokemon.css'

const Pokemon = ({ current }) => {

  const [typeColors, setTypeColors] = useState({
    normal: 'gray',
    fire: 'orange',
    water: 'blue',
    grass: 'green',
    electric: 'yellow',
    ice: 'lightblue',
    fighting: 'red',
    poison: 'purple',
    ground: 'beige',
    flying: 'violet',
    psychic: 'pink',
    bug: 'limegreen',
    rock: 'beige',
    ghost: 'purple',
    dark: 'darkgray',
    dragon: 'purple',
    steel: 'silver',
    fairy: 'pink'
  })

  const [statColors, setStatColors] = useState({
    hp: '#ff0000',
    hpOut: '#ff5959',
    attack: '#f08030',
    attackOut: '#f5ac78',
    defense: '#f8d030',
    defenseOut: '#fae078',
    "special-attack": '#6890f0',
    "special-attackOut": '#9db7f5',
    "special-defense": '#78c850',
    "special-defenseOut": '#a7db8d',
    speed: '#f85888',
    speedOut: '#fa92b2'
  })

  const colorCheck = (index) => {
    if (Object.keys(current.types).length > index) {
      return typeColors[current.types[index].type.name]
    } else {
      return null
    }
  }

  const [typeStyle, setTypeStyle] = useState({
    backgroundColor0: typeColors[current.types[0].type.name],
    backgroundColor1: colorCheck(1)
  })

  console.log(current)
  return (
    <div className="pokemon-info">
      <div className="header-info">
        <h2 className="name">{current.name}</h2>
        <div className="horizontal-line"></div>
        <div className="types">
          {
            current.types.map((currentType, index) => {
              return (
                <span className="type" style={{ backgroundColor: typeStyle[`backgroundColor${index}`] }}>
                  {currentType.type.name}
                </span>
              )
            })
          }
        </div>
      </div>
      <div className="stats-and-picture">
        <ul className="stats">
          {
            current.stats.map((stat, index) => {

              let percent = stat.base_stat / 255
              percent *= 100
              percent = String(percent) + '%'

              return (
                <li className="single-stat" key={index}>
                  <div className="stat-text">
                    <div className="stat-name">
                      {stat.stat.name}:
                    </div>
                    <div className="stat-value">
                      {stat.base_stat}
                    </div>
                  </div>
                  <div className="bar-outside" style={{ backgroundColor: statColors[`${stat.stat.name}Out`] }}>
                    <div className="bar-inside" style={{ width: percent, backgroundColor: statColors[stat.stat.name] }}></div>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className="pic-container">
          <img className="poke-pic" src={current.sprites.front_default} />
        </div>
      </div>
    </div>
  )
}

export default Pokemon