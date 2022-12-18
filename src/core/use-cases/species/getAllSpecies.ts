import { SpeciesGateway } from "@/core/gateways/speciesGateway";
import { SpeciesStore } from "@/store/species/speciesStore";

export const getAllSpecies = async (
  gateway: SpeciesGateway,
  store: SpeciesStore
) => {
  const species = await gateway.getAllSpecies();
  store.setAllSpecies(species);
  return Promise.resolve(species);
};
