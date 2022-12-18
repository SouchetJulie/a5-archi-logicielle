import { InMemoryPokemonGateway } from "@/adapters/secondary/pokemon/inMemoryPokemonGateway";
import { getAllPokemon } from "@/core/use-cases/pokemon/get-all-pokemon/getAllPokemon";
import { PokemonStore } from "@/store/pokemon/pokemonStore";
import { mockPokemonList } from "@/mock/data";

describe("Get all pokemon", () => {
  const gateway: InMemoryPokemonGateway = new InMemoryPokemonGateway();
  const store: PokemonStore = new PokemonStore();
  beforeEach(() => {
    gateway.reset();
    store.reset();
  });

  describe("when there are no pokemon", () => {
    it("should return [] from the gateway", () => {
      const pokemonFromGateway = getAllPokemon(gateway, store);
      expect(pokemonFromGateway).resolves.toEqual([]);
    });
    it("should return [] from the store", async () => {
      await getAllPokemon(gateway, store);
      const pokemonFromStore = store.pokemon;
      expect(pokemonFromStore).toEqual([]);
    });
  });

  describe("when there are pokemon", function () {
    it("should return the same pokemon from the gateway", async () => {
      await gateway.set(mockPokemonList);
      const pokemonFromGateway = getAllPokemon(gateway, store);
      expect(pokemonFromGateway).resolves.toEqual(mockPokemonList);
    });
    it("should return the same pokemon from the store", async () => {
      await gateway.set(mockPokemonList);
      await getAllPokemon(gateway, store);
      const pokemonFromStore = store.pokemon;
      expect(pokemonFromStore).toEqual(mockPokemonList);
    });
  });
});
