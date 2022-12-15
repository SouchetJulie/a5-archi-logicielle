import { PokemonStore } from "@/store/pokemonStore";
import { ApiPokemonGateway } from "@/adapters/secondary/apiPokemonGateway";
import { setAllPokemon } from "@/core/use-cases/set-all-pokemon/setAllPokemon";

export const pokemonStore = new PokemonStore();

const gateway = new ApiPokemonGateway();
setAllPokemon(gateway, pokemonStore);
