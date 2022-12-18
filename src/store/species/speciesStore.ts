import { makeAutoObservable } from "mobx";
import { Species } from "@/core/entities/species";

export class SpeciesStore {
  get species(): Species[] {
    return this._species;
  }
  constructor() {
    makeAutoObservable(this);
  }

  private _species: Species[] = [];

  setAllSpecies(species: Species[]) {
    this._species = species;
  }

  reset() {
    this._species = [];
  }
}
