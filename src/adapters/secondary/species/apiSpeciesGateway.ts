import { SpeciesGateway } from "@/core/gateways/speciesGateway";
import { Species } from "@/core/entities/species";

export class ApiSpeciesGateway implements SpeciesGateway {
  getAllSpecies(): Promise<Species[]> {
    return fetch("https://beta.pokeapi.co/graphql/v1beta", {
      method: "POST",
      body: JSON.stringify({
        query: `
          query {
            pokemon_v2_pokemonspecies {
              id
              gender_rate
              name
            }
          }`,
      }),
    })
      .then((response) => response.json())
      .then((json) =>
        json.data.pokemon_v2_pokemonspecies.map(this.convertToSpecies)
      );
  }

  private convertToSpecies(data: ApiSpecies): Species {
    return {
      id: data.id,
      name: data.name,
      genderRatio:
        data.gender_rate === -1 ? null : (data.gender_rate * 100) / 8,
    };
  }
}

interface ApiSpecies {
  id: number;
  name: string;
  /**
   * The proportion of female pokemon in this species, in eigths.
   * Equal -1 for genderless species
   */
  gender_rate: number;
}
