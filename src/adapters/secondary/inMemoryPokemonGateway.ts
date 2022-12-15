import { Pokemon } from "@/core/entities/pokemon";
import { PokemonGateway } from "@/core/gateways/pokemonGateway";

export class InMemoryPokemonGateway implements PokemonGateway {
  private pokemon: Pokemon[] = [];

  public async getAllPokemon(): Promise<Pokemon[]> {
    return this.pokemon;
  }

  public addPokemon(pokemon: Pokemon) {
    this.pokemon.push(pokemon);
  }

  public reset() {
    this.pokemon = [];
  }
}
