import { Species } from "../entities/species";

export interface SpeciesGateway {
  getAllSpecies(): Promise<Species[]>;
}
