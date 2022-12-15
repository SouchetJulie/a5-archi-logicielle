import { observer } from "mobx-react-lite";
import { pokemonStore } from "../dependencies";
import {
  getAllPokemonVM,
  PokemonVM,
} from "@/adapters/primary/view-models/get-all-pokemon-vm/getAllPokemonVM";

const App = observer(() => {
  const pokemons: PokemonVM[] = getAllPokemonVM(pokemonStore);

  return (
    <>
      <h1>Pokemon</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
});

export default App;
