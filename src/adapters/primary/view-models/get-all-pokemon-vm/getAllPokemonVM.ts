import { PokemonStore } from "@/store/pokemonStore";
import { Pokemon } from "@/core/entities/pokemon";

export interface PokemonVM {
  id: number;
  name: string;
}

export const getAllPokemonVM = (store: PokemonStore): PokemonVM[] => {
  const pokemons = store.pokemon;
  return pokemons.map(convertToPokemonVM);
};

export const convertToPokemonVM = (pokemon: Pokemon): PokemonVM => ({
  id: pokemon.id,
  name: pokemon.name,
});
