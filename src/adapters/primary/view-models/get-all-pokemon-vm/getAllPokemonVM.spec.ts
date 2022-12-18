import { PokemonStore } from "@/store/pokemon/pokemonStore";
import {
  getAllPokemonVM,
  PokemonVM,
} from "@/adapters/primary/view-models/get-all-pokemon-vm/getAllPokemonVM";
import { mockPokemonList, mockSpeciesList } from "@/mock/data";
import { SpeciesStore } from "@/store/species/speciesStore";

describe("Get all pokemon VM", () => {
  const pokemonStore = new PokemonStore();
  const speciesStore = new SpeciesStore();
  beforeEach(() => {
    pokemonStore.reset();
    speciesStore.reset();
  });

  it("should return [] when there are no pokemon in store", () => {
    const pokemons: PokemonVM[] = getAllPokemonVM(pokemonStore, speciesStore);
    expect(pokemons).toEqual([]);
  });

  it("should return all pokemon in store with the correct associated species", () => {
    pokemonStore.setAllPokemon(mockPokemonList);
    speciesStore.setAllSpecies(mockSpeciesList);
    const pokemons: PokemonVM[] = getAllPokemonVM(pokemonStore, speciesStore);
    expect(pokemons).toEqual([
      {
        id: 1,
        name: "Bulbasaur",
        species: {
          id: 1,
          name: "Bulbasaur",
          genderRatio: 12.5,
        },
      },
      {
        id: 2,
        name: "Ivysaur",
        species: {
          id: 1,
          name: "Bulbasaur",
          genderRatio: 12.5,
        },
      },
      {
        id: 3,
        name: "Pikachu",
        species: {
          id: 2,
          name: "Pikachu",
          genderRatio: 50,
        },
      },
    ]);
  });
});
