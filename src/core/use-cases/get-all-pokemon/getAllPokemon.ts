import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { Pokemon } from "@/core/entities/pokemon";

export const getAllPokemon = (
  pokemonGateway: PokemonGateway
): Promise<Pokemon[]> => pokemonGateway.getAllPokemon();
