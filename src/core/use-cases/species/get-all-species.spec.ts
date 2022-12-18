import { mockSpeciesList } from "@/mock/data";
import { InMemorySpeciesGateway } from "@/adapters/secondary/species/inMemorySpeciesGateway";
import { getAllSpecies } from "@/core/use-cases/species/get-all-species";

describe("Get all species", () => {
  it("should return [] if there are none", () => {
    const gateway = new InMemorySpeciesGateway();
    const species = getAllSpecies(gateway);
    expect(species).resolves.toEqual([]);
  });

  it("should return all species", () => {
    const gateway = new InMemorySpeciesGateway();
    gateway.set(mockSpeciesList);
    const species = getAllSpecies(gateway);
    expect(species).resolves.toEqual(mockSpeciesList);
  });
});
