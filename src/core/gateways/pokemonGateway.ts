import { Pokemon } from "../entities/pokemon";

export interface PokemonGateway {
  getAllPokemon(): Promise<Pokemon[]>;
}
