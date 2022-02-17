import './App.css';
import pokemons from './data';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <Pokedex pokemons = {pokemons}/>
  );
}

export default App;
