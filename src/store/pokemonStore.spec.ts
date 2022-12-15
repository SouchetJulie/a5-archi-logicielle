import { PokemonStore } from "./pokemonStore";

describe("Pokemon store", () => {
  const store: PokemonStore = new PokemonStore();
  beforeEach(() => {
    store.reset();
  });

  it("should return state", () => {
    expect(store.pokemon).toEqual([]);
  });
  it("should set pokemon", () => {
    store.setAllPokemon([{ id: 1 }]);
    expect(store.pokemon).toEqual([{ id: 1 }]);
  });
});
