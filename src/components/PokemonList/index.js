import React,{useState, useEffect} from 'react';
import PokemonCard from '../PokemonCard';
import axios from 'axios';
import {Container} from './styles';

const PokemonList = () => {
  const [data, setData] = useState(
    {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pokemon: null
    }
  )
  const [inputType, setInputType] = useState("name");
  const [searchInput, setSearchInput] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter pokemon name or ID");

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputType === "name") return getPokemon();
    getPokemonList();
  };

  const handleSelect = (e) => {
    setInputType(e.target.value);
    const placeholderText = (e.target.value ==="name") ? "Enter pokemon name or ID" : "Enter ability number";
    setPlaceholder(placeholderText);
  }

  //get list of pokemons by ability
  const getPokemonList = async () => {
    try {
      let array= [];
      const pokemonArray = await axios.get(` http://pokeapi.co/api/v2/ability/${searchInput}`);
      if (!pokemonArray) return
      for (let pokemon of pokemonArray.data.pokemon) {
        array =[...array,pokemon.pokemon]
      }
      setData({ ...data, pokemon: array });
      setSearchInput("");
    } catch (e) {
      console.error(e);
    }
  };

  //get pokemon by name
  const getPokemon = async () => {
    try {
      const pokemon = await axios.get(data.url+searchInput)
      const pokemonURL = data.url+pokemon.data.id+'/'
      setData({ ...data, pokemon: [{name: pokemon.data.name, url: pokemonURL}] });
        setSearchInput("");
    } catch (e) {
      console.error(e);
    }
  };
  const getData = async () =>{
    const res = await axios.get(data.url);
    console.log(res);
    setData({ ...data, pokemon: res.data['results'] });
  }

  useEffect(() => {
    getData()
  },[])

  return (
      <Container>
      <form className="search-pokemon" onSubmit={handleSubmit}>
        <select className="select-type" onChange={handleSelect}>
          <option value="name">Name or ID</option>
          <option value="ability">Ability</option>
        </select>
        <input
          className="input-pokemon"
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder={placeholder}
        />
    </form>
    <div className="list-container">
    {data.pokemon &&data.pokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
    </div>

      </Container>
    );
}

export default PokemonList;
