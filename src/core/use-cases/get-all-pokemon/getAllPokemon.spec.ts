import { InMemoryPokemonGateway } from "@/adapters/secondary/inMemoryPokemonGateway";
import { getAllPokemon } from "@/core/use-cases/get-all-pokemon/getAllPokemon";
import { PokemonStore } from "@/store/pokemonStore";

describe("Get all pokemon", function () {
  const pokemonGateway: InMemoryPokemonGateway = new InMemoryPokemonGateway();
  const pokemonStore: PokemonStore = new PokemonStore();
  beforeEach(() => {
    pokemonGateway.reset();
    pokemonStore.reset();
  });

  describe("when there are no pokemon", function () {
    it("should return [] from the gateway", function () {
      const pokemonFromGateway = getAllPokemon(pokemonGateway);
      expect(pokemonFromGateway).resolves.toEqual([]);
    });
    it("should return [] from the store", async function () {
      await getAllPokemon(pokemonGateway);
      const pokemonFromStore = pokemonStore.pokemon;
      expect(pokemonFromStore).toEqual([]);
    });
  });
});
