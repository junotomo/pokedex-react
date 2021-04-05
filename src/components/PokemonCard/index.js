import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'
import {Sprite, Card} from './style';
import styled from 'styled-components';
//import spinner from '../layout/spinner.gif';
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const PokemonCard = ({url, name}) => {
    const [data, setData] = useState(
      {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
      }
    )

useEffect(()=>{
  const pokemonIndex = url.split('/')[url.split('/').length - 2];
  console.log(url, name);
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
  setData({...data, name: name, imageUrl: imageUrl, pokemonIndex: pokemonIndex});
},[])

    return (
      <div className="pokemon-card">
        <StyledLink to={`pokemon/${data.pokemonIndex}`}>
          <Card className="card">
            <h4 className="card-header">{data.pokemonIndex}</h4>

            <Sprite
              className="card-img"
              src={data.imageUrl}
              onLoad={() =>setData({ ...data, imageLoading: false })}
              onError={() => setData({...data, toManyRequests: true })}
              style={
                data.toManyRequests
                  ? { display: 'none' }
                  : data.imageLoading
                  ? null
                  : { display: 'block' }
              }
            />
            {data.toManyRequests ? (
              <h5 >
                <span>
                  To Many Requests
                </span>
              </h5>
            ) : null}
            <div className="card-body mx-auto">
              <h5 className="card-title">
                {data.name
                  .toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </h5>
            </div>
          </Card>
        </StyledLink>
      </div>
    );
}
export default PokemonCard;
