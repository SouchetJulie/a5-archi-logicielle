import { observer } from "mobx-react-lite";
import { pokemonStore, speciesStore } from "../dependencies";
import {
  getAllPokemonVM,
  PokemonVM,
} from "@/adapters/primary/view-models/get-all-pokemon-vm/getAllPokemonVM";

import "./style.css";

const App = observer(() => {
  const pokemons: PokemonVM[] = getAllPokemonVM(pokemonStore, speciesStore);

  return (
    <>
      <h1>Pokemon</h1>
      <div className="container">
        {pokemons.map((pokemon) => (
          <div className="card" key={pokemon.id}>
            <span className="title">{pokemon.name}</span>
            {pokemon.name !== pokemon.species.name && (
              <span>({pokemon.species.name})</span>
            )}
            {pokemon.species.genderRatio !== null ? (
              <span className="progress container">
                ♀️
                <div
                  style={{ width: pokemon.species.genderRatio + "%" }}
                  className="female"
                ></div>
                <div
                  style={{ width: 100 - pokemon.species.genderRatio + "%" }}
                  className="male"
                ></div>
                ♂️
              </span>
            ) : (
              <span>Genderless</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
});

export default App;
