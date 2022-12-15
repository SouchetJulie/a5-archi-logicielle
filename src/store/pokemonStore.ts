import { makeAutoObservable } from "mobx";
import { Pokemon } from "../core/entities/pokemon";

export class PokemonStore {
  constructor() {
    makeAutoObservable(this);
  }

  pokemon: Pokemon[] = [];

  addPokemon(pokemon: Pokemon) {
    this.pokemon.push(pokemon);
  }

  reset() {
    this.pokemon = [];
  }
}
