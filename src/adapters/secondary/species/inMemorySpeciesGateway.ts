import { Species } from "@/core/entities/species";
import { SpeciesGateway } from "@/core/gateways/speciesGateway";

export class InMemorySpeciesGateway implements SpeciesGateway {
  private species: Species[] = [];

  public async getAllSpecies(): Promise<Species[]> {
    return this.species;
  }

  public async set(species: Species[]): Promise<Species[]> {
    this.species = species;
    return this.species;
  }

  public reset() {
    this.species = [];
  }
}
