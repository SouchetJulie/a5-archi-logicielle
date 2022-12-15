import { InMemoryPokemonGateway } from "@/adapters/secondary/inMemoryPokemonGateway";
import { PokemonStore } from "@/store/pokemonStore";
import { setAllPokemon } from "@/core/use-cases/set-all-pokemon/setAllPokemon";

describe("Set all pokemon", function () {
  const gateway: InMemoryPokemonGateway = new InMemoryPokemonGateway();
  const store: PokemonStore = new PokemonStore();
  beforeEach(() => {
    gateway.reset();
    store.reset();
  });

  it("should set the pokemon in the store", async function () {
    // Setup
    await gateway.set([{ id: 1 }]);
    // Act
    await setAllPokemon(gateway, store);
    // Assert
    expect(store.pokemon).toEqual([{ id: 1 }]);
  });
});
