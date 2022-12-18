import { InMemorySpeciesGateway } from "@/adapters/secondary/species/inMemorySpeciesGateway";
import { getAllSpecies } from "@/core/use-cases/species/getAllSpecies";
import { SpeciesStore } from "@/store/species/speciesStore";
import { mockSpeciesList } from "@/mock/data";

describe("Get all species", () => {
  const gateway: InMemorySpeciesGateway = new InMemorySpeciesGateway();
  const store: SpeciesStore = new SpeciesStore();
  beforeEach(() => {
    gateway.reset();
    store.reset();
  });

  describe("when there are no species", () => {
    it("should return [] from the gateway", () => {
      const speciesFromGateway = getAllSpecies(gateway, store);
      expect(speciesFromGateway).resolves.toEqual([]);
    });
    it("should return [] from the store", async () => {
      await getAllSpecies(gateway, store);
      const speciesFromStore = store.species;
      expect(speciesFromStore).toEqual([]);
    });
  });

  describe("when there are species", function () {
    it("should return the same species from the gateway", async () => {
      await gateway.set(mockSpeciesList);
      const speciesFromGateway = getAllSpecies(gateway, store);
      expect(speciesFromGateway).resolves.toEqual(mockSpeciesList);
    });
    it("should return the same species from the store", async () => {
      await gateway.set(mockSpeciesList);
      await getAllSpecies(gateway, store);
      const speciesFromStore = store.species;
      expect(speciesFromStore).toEqual(mockSpeciesList);
    });
  });
});
