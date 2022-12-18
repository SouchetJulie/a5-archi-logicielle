import { SpeciesGateway } from "@/core/gateways/speciesGateway";

export const getAllSpecies = async (speciesGateway: SpeciesGateway) => {
  return speciesGateway.getAllSpecies();
};
