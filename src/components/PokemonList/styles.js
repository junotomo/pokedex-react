import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 1em;
  margin: 1em;

  .search-pokemon {
    display: flex;
    justify-content: center;
  }

  .select-type{
    outline: none;
    border: none;
    border-right: 0px;
    border-radius: 15px 0px 0px 15px;
    padding: 1em;
    background-color: #ef5350;
    font-weight: bold;
  }

  .input-pokemon {
    background: white;
    outline: none;
    border: 1px solid #adadad;
    border-radius: 0 15px 15px 0;
    padding: 1em;
    width: 50%;
  }

  .list-container{
    display:flex;
    gap:1em;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
