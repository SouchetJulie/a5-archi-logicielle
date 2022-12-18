import { makeAutoObservable } from "mobx";
import { Pokemon } from "@/core/entities/pokemon";

export class PokemonStore {
  get pokemon(): Pokemon[] {
    return this._pokemon;
  }
  constructor() {
    makeAutoObservable(this);
  }

  private _pokemon: Pokemon[] = [];

  setAllPokemon(pokemon: Pokemon[]) {
    this._pokemon = pokemon;
  }

  reset() {
    this._pokemon = [];
  }
}
