import { PokemonStore } from "@/store/pokemon/pokemonStore";
import { ApiPokemonGateway } from "@/adapters/secondary/pokemon/apiPokemonGateway";
import { setAllPokemon } from "@/core/use-cases/pokemon/set-all-pokemon/setAllPokemon";

export const pokemonStore = new PokemonStore();

const gateway = new ApiPokemonGateway();
setAllPokemon(gateway, pokemonStore);
