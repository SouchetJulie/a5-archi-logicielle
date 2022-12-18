import { Pokemon } from "@/core/entities/pokemon";
import { Species } from "@/core/entities/species";

export const mockPokemonList: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    speciesId: 1,
  },
];

export const mockSpeciesList: Species[] = [
  {
    id: 1,
    name: "Bulbasaur",
    genderRatio: 0.5,
  },
];
