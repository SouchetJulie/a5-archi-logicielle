import { InMemorySpeciesGateway } from "@/adapters/secondary/species/inMemorySpeciesGateway";
import { SpeciesStore } from "@/store/species/speciesStore";
import { setAllSpecies } from "@/core/use-cases/species/set-all-species/setAllSpecies";
import { mockSpeciesList } from "@/mock/data";

describe("Set all species", function () {
  const gateway: InMemorySpeciesGateway = new InMemorySpeciesGateway();
  const store: SpeciesStore = new SpeciesStore();
  beforeEach(() => {
    gateway.reset();
    store.reset();
  });

  it("should set the species in the store", async function () {
    // Setup
    await gateway.set(mockSpeciesList);
    // Act
    await setAllSpecies(gateway, store);
    // Assert
    expect(store.species).toEqual(mockSpeciesList);
  });
});
