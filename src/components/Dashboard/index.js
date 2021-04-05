import React,{useState, useEffect} from 'react';

import PokemonList from '../PokemonList';

import {Container} from './styles';

const Dashboard = () => {


    return (
      <Container>
         <PokemonList />
      </Container>
    );
}
export default Dashboard;
