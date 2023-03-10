import { PokemonStore } from "@/store/pokemon/pokemonStore";
import { Pokemon } from "@/core/entities/pokemon";
import { SpeciesStore } from "@/store/species/speciesStore";
import { Species } from "@/core/entities/species";

export interface PokemonVM {
  id: number;
  name: string;
  species: {
    id: number;
    name: string;
    genderRatio: number | null;
  };
}

export const getAllPokemonVM = (
  pokemonStore: PokemonStore,
  speciesStore: SpeciesStore
): PokemonVM[] => {
  const pokemonData: Pokemon[] = pokemonStore.pokemon;
  const pokemon: PokemonVM[] = pokemonData.map(convertToPokemonVM);

  const speciesData: Species[] = speciesStore.species;
  speciesData.forEach((species: Species) => {
    // Replace the placeholder species data with the actual species data
    pokemonData.forEach((currentPokemon: Pokemon, index: number) => {
      if (currentPokemon.speciesId === species.id) {
        pokemon[index].species = {
          id: species.id,
          // capitalize the first letter
          name: species.name.charAt(0).toUpperCase() + species.name.slice(1),
          genderRatio: species.genderRatio,
        };
      }
    });
  });

  return pokemon;
};

const convertToPokemonVM = (pokemon: Pokemon): PokemonVM => ({
  id: pokemon.id,
  // capitalize the first letter
  name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
  species: {
    id: -1,
    name: "__placeholder__",
    genderRatio: -1,
  },
});
