import { observer } from "mobx-react-lite";
import { pokemonStore } from "../dependencies";
import { Pokemon } from "@/core/entities/pokemon";

const App = observer(() => {
  const pokemons: Pokemon[] = pokemonStore.pokemon;

  return (
    <>
      <h1>Pokemon</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.id}</li>
        ))}
      </ul>
    </>
  );
});

export default App;
