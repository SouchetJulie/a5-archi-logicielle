import { PokemonStore } from "@/store/pokemonStore";
import {
  convertToPokemonVM,
  getAllPokemonVM,
  PokemonVM,
} from "@/adapters/primary/view-models/get-all-pokemon-vm/getAllPokemonVM";
import { mockPokemonList } from "@/mock/data";

describe("Get all pokemon VM", () => {
  const store = new PokemonStore();
  beforeEach(() => {
    store.reset();
  });

  it("should return [] when there are no pokemon in store", () => {
    const pokemons: PokemonVM[] = getAllPokemonVM(store);
    expect(pokemons).toEqual([]);
  });

  it("should return all pokemon in store", () => {
    store.setAllPokemon(mockPokemonList);
    const pokemons: PokemonVM[] = getAllPokemonVM(store);
    expect(pokemons).toEqual(mockPokemonList.map(convertToPokemonVM));
  });
});
