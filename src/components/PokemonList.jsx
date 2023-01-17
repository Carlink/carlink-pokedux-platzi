import PokemonCard from './PokemonCard';
import './PokemonList.css';

function PokemonList({ pokemons }) {
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} />;
      })}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
};

export default PokemonList;
