import { makeAutoObservable } from "mobx";
import { Pokemon } from "@/core/entities/pokemon";

export class PokemonStore {
  constructor() {
    makeAutoObservable(this);
  }

  pokemon: Pokemon[] = [];

  setAllPokemon(pokemon: Pokemon[]) {
    this.pokemon = pokemon;
  }

  reset() {
    this.pokemon = [];
  }
}
