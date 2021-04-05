import React,{useState} from 'react';
import './styles.scss';
export const Card = ({pokeData}) => {
  const {
    name,
    id,
    sprites,
    abilities,
    weight,
    height,
    types,
  } = pokeData

  const colours = {
  	normal: '#A8A77A',
  	fire: '#EE8130',
  	water: '#6390F0',
  	electric: '#F7D02C',
  	grass: '#7AC74C',
  	ice: '#96D9D6',
  	fighting: '#C22E28',
  	poison: '#A33EA1',
  	ground: '#E2BF65',
  	flying: '#A98FF3',
  	psychic: '#F95587',
  	bug: '#A6B91A',
  	rock: '#B6A136',
  	ghost: '#735797',
  	dragon: '#6F35FC',
  	dark: '#705746',
  	steel: '#B7B7CE',
  	fairy: '#D685AD',
  };

  return (
    <div className="card-container" >
      <img className="pokemon-sprite" src={sprites["front_default"]} />
      <div className="pokemon-ID">
        <span>#{id}</span>
        <span>{name}</span>
      </div>
      <div className="pokemon-traits">
        <div className="physical">
          <span className="title">weight:</span>
          <span>{weight}Kg</span>
          <span className="title">height:</span>
          <span>{height}m</span>
        </div>
        <div className="types">
          <span className="title">Types:</span>
          {types.map((type,index) => (
            <span className="type-block" style={{backgroundColor: colours[type.type.name]}}  key={index}>{type.type.name}</span>
          ))}
        </div>
      </div>
      <div className="pokemon-abilities">
        <span className="title">Abilities:</span>
        {abilities.map((ability,index) => (
          <span className="ability" key={index}>{ability.ability.name} </span>
        ))}
      </div>


    </div>
  )
}
