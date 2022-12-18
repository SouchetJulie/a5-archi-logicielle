import { PokemonStore } from "./pokemonStore";
import { mockPokemonList } from "@/mock/data";

describe("Pokemon store", () => {
  const store: PokemonStore = new PokemonStore();
  beforeEach(() => {
    store.reset();
  });

  it("should return state", () => {
    expect(store.pokemon).toEqual([]);
  });
  it("should set pokemon", () => {
    store.setAllPokemon(mockPokemonList);
    expect(store.pokemon).toEqual(mockPokemonList);
  });
});
