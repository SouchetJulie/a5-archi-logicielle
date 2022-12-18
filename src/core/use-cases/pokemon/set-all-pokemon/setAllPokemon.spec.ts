import { InMemoryPokemonGateway } from "@/adapters/secondary/pokemon/inMemoryPokemonGateway";
import { PokemonStore } from "@/store/pokemon/pokemonStore";
import { setAllPokemon } from "@/core/use-cases/pokemon/set-all-pokemon/setAllPokemon";
import { mockPokemonList } from "@/mock/data";

describe("Set all pokemon", function () {
  const gateway: InMemoryPokemonGateway = new InMemoryPokemonGateway();
  const store: PokemonStore = new PokemonStore();
  beforeEach(() => {
    gateway.reset();
    store.reset();
  });

  it("should set the pokemon in the store", async function () {
    // Setup
    await gateway.set(mockPokemonList);
    // Act
    await setAllPokemon(gateway, store);
    // Assert
    expect(store.pokemon).toEqual(mockPokemonList);
  });
});
