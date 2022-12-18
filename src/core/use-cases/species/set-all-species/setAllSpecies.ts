import { Species } from "@/core/entities/species";
import { SpeciesGateway } from "@/core/gateways/speciesGateway";
import { SpeciesStore } from "@/store/species/speciesStore";

export const setAllSpecies = async (
  gateway: SpeciesGateway,
  store: SpeciesStore
): Promise<Species[]> => {
  const species: Species[] = await gateway.getAllSpecies();
  store.setAllSpecies(species);
  return Promise.resolve(species);
};
