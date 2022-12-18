import { SpeciesStore } from "./speciesStore";
import { mockSpeciesList } from "@/mock/data";

describe("Species store", () => {
  const store: SpeciesStore = new SpeciesStore();
  beforeEach(() => {
    store.reset();
  });

  it("should return state", () => {
    expect(store.species).toEqual([]);
  });
  it("should set species", () => {
    store.setAllSpecies(mockSpeciesList);
    expect(store.species).toEqual(mockSpeciesList);
  });
});
