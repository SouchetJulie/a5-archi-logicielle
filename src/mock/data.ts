import { Pokemon } from "@/core/entities/pokemon";
import { Species } from "@/core/entities/species";

export const mockPokemonList: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    speciesId: 1,
  },
  {
    id: 2,
    name: "Ivysaur",
    speciesId: 1,
  },
  {
    id: 3,
    name: "Pikachu",
    speciesId: 2,
  },
];

export const mockSpeciesList: Species[] = [
  {
    id: 1,
    name: "Bulbasaur",
    genderRatio: 12.5,
  },
  {
    id: 2,
    name: "Pikachu",
    genderRatio: 50,
  },
];
