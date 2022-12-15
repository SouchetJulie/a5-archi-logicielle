import { PokemonGateway } from "@/core/gateways/pokemonGateway";
import { Pokemon } from "@/core/entities/pokemon";

export class ApiPokemonGateway implements PokemonGateway {
  getAllPokemon(): Promise<Pokemon[]> {
    return fetch("https://beta.pokeapi.co/graphql/v1beta", {
      method: "POST",
      body: JSON.stringify({
        query: `
          query {
            pokemon_v2_pokemon {
              id
            }
          }`,
      }),
    })
      .then((response) => response.json())
      .then((json) => json.data.pokemon_v2_pokemon.map(this.convertData));
  }

  private convertData(data: ApiPokemon): Pokemon {
    return {
      id: data.id,
    };
  }
}

interface ApiPokemon {
  id: number;
}
