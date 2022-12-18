import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { Pokemon } from "@/core/entities/pokemon";
import { PokemonStore } from "@/store/pokemon/pokemonStore";

export const getAllPokemon = async (
  gateway: PokemonGateway,
  store: PokemonStore
): Promise<Pokemon[]> => {
  const pokemon: Pokemon[] = await gateway.getAllPokemon();
  store.setAllPokemon(pokemon);
  return Promise.resolve(pokemon);
};
