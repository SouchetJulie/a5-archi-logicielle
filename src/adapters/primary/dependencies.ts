import { PokemonStore } from "@/store/pokemon/pokemonStore";
import { ApiPokemonGateway } from "@/adapters/secondary/pokemon/apiPokemonGateway";
import { setAllPokemon } from "@/core/use-cases/pokemon/set-all-pokemon/setAllPokemon";
import { setAllSpecies } from "@/core/use-cases/species/set-all-species/setAllSpecies";
import { SpeciesStore } from "@/store/species/speciesStore";
import { ApiSpeciesGateway } from "@/adapters/secondary/species/apiSpeciesGateway";

export const pokemonStore = new PokemonStore();
const pokemonGateway = new ApiPokemonGateway();
setAllPokemon(pokemonGateway, pokemonStore);

export const speciesStore = new SpeciesStore();
const speciesGateway = new ApiSpeciesGateway();
setAllSpecies(speciesGateway, speciesStore);
