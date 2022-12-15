import { PokemonStore } from "./pokemonStore";

describe("Pokemon store", () => {
  const pokemonStore: PokemonStore = new PokemonStore();
  beforeEach(() => {
    pokemonStore.reset();
  });

  it("should return state", () => {
    expect(pokemonStore.pokemon).toEqual([]);
  });
  it("should add pokemon", () => {
    pokemonStore.addPokemon({ id: 1 });
    expect(pokemonStore.pokemon).toEqual([{ id: 1 }]);
  });
  it("should not erase other pokemons", () => {
    pokemonStore.addPokemon({ id: 1 });
    pokemonStore.addPokemon({ id: 2 });
    expect(pokemonStore.pokemon).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
