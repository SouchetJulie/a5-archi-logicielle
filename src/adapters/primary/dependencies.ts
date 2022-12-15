import { PokemonStore } from "@/store/pokemonStore";

export const pokemonStore = new PokemonStore();

pokemonStore.setAllPokemon([{ id: 1 }, { id: 2 }]);
