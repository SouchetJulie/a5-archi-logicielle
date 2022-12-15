import { Pokemon } from "@/core/entities/pokemon";
import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { PokemonStore } from "@/store/pokemonStore";

export const setAllPokemon = async (
  gateway: PokemonGateway,
  store: PokemonStore
): Promise<Pokemon[]> => {
  const pokemon: Pokemon[] = await gateway.getAllPokemon();
  store.setAllPokemon(pokemon);
  return Promise.resolve(pokemon);
};
