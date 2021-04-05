import React,{useState} from 'react';
import reactDOM from 'react-dom';
import './styles/style.scss';
import {Card} from './components/Card';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [inputType, setInputType] = useState("name");
  const [searchInput, setSearchInput] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter pokemon name or ID");
  const [details, setDetails] = useState({});

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

  //get data from api
  const getData = async (url) => {
    if (searchInput == "") return;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }

  //get list of pokemons by ability
  const getPokemonList = async () => {
    try {
      let array= [];
      const pokemonArray = await getData(` http://pokeapi.co/api/v2/ability/${searchInput}`);
      if (!pokemonArray) return
      setDetails(pokemonArray);
      for (var pokemon of pokemonArray.pokemon) {
        let result = await getData(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon.name}`);
        array = [...array, result];
      }
      setPokemonData(array);
      setSearchInput("");
    } catch (e) {
      console.error(e);
    }
  };

  //get pokemon by name
  const getPokemon = async () => {
  //  if (searchInput == "") return
    try {
      const pokemon = await getData(`https://pokeapi.co/api/v2/pokemon/`);
        if (pokemon) {
          setPokemonData([pokemon]);
        } else {
          setPokemonData([]);
        }
        setSearchInput("");
        setDetails({});
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="pokedex-container">

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
      <div className="pokemons-list">
      {Object.keys(details).length > 0 &&
        <div className="ability-details-container">
          <div className="ability-details">
            <span>Ability name:</span>
            <span>{details.name}</span>
          </div>
          <div className="ability-details">
            <span>Ability effect:</span>
            <span>{details.effect_entries[1].effect}</span>
          </div>
          <div className="ability-details">
            <span>Ability summary:</span>
            <span>{details.flavor_text_entries[0].flavor_text}</span>
          </div>
        </div>
      }
      {pokemonData && pokemonData.map((pokemon, index) => (
        <Card
          key={index}
          pokeData={pokemon}
        />
      ))}
      </div>
    </div>

  )
}

reactDOM.render(<App />, document.getElementById('root'))
