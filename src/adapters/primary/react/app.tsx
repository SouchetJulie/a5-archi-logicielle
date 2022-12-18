import { observer } from "mobx-react-lite";
import { pokemonStore, speciesStore } from "../dependencies";
import {
  getAllPokemonVM,
  PokemonVM,
} from "@/adapters/primary/view-models/get-all-pokemon-vm/getAllPokemonVM";

const App = observer(() => {
  const pokemons: PokemonVM[] = getAllPokemonVM(pokemonStore, speciesStore);

  return (
    <>
      <h1>Pokemon</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.name} ({pokemon.species.name})
          </li>
        ))}
      </ul>
    </>
  );
});

export default App;
